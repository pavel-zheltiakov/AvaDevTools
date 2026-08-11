// --- shared helpers ---------------------------------------------------------
function copyInstall(btn) {
  const text = btn.parentElement.querySelector('span').textContent;
  navigator.clipboard.writeText(text).then(() => {
    const old = btn.textContent;
    btn.textContent = '✓';
    setTimeout(() => (btn.textContent = old), 1200);
  });
}

function esc(s) {
  return (s || '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}

// --- i18n engine -------------------------------------------------------------
// One HTML per page; all strings come from assets/i18n.js (window.I18N).
// Language: ?lang= param > localStorage > browser language. Switching is instant.
const LANGS = ['en', 'uk', 'zh'];

function detectLang() {
  const fromQuery = new URLSearchParams(location.search).get('lang');
  if (LANGS.includes(fromQuery)) return fromQuery;
  const stored = localStorage.getItem('lang');
  if (LANGS.includes(stored)) return stored;
  const nav = (navigator.language || 'en').toLowerCase();
  return nav.startsWith('uk') ? 'uk' : nav.startsWith('zh') ? 'zh' : 'en';
}

function getPath(obj, path) {
  return path.split('.').reduce((o, k) => (o == null ? o : o[k]), obj);
}

function setLang(lang) {
  localStorage.setItem('lang', lang);
  applyLang(lang);
}

function applyLang(lang) {
  const R = window.I18N[lang] || window.I18N.en;
  document.documentElement.lang = lang;

  const page = document.body.dataset.page || 'home';
  document.title = page === 'docs' ? R.docs.title
    : page === 'releases' ? R.rel.title : R.title;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute('content', R.descr);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = getPath(R, el.dataset.i18n);
    if (typeof v === 'string') el.textContent = v;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const v = getPath(R, el.dataset.i18nHtml);
    if (typeof v === 'string') el.innerHTML = v;
  });
  document.querySelectorAll('[data-setlang]').forEach(a =>
    a.classList.toggle('on', a.dataset.setlang === lang));
  const lb = document.querySelector('.langs-btn');
  if (lb) lb.textContent = ({ en: 'EN', uk: 'УК', zh: '中文' })[lang] || lang.toUpperCase();

  if (page === 'home') { try { buildHomeStories(R); } catch (e) {} buildTour(R); buildFeatures(R); }
  if (page === 'docs') buildDocs(R);
  if (page === 'releases') {
    const el = document.getElementById('rel');
    if (el) { el.innerHTML = '<p style="color:var(--muted)">' + esc(R.rel.loading) + '</p>'; loadReleases(el, Object.assign({ docsLabel: R.nav.docs }, R.rel)); }
  }
}

// The stacked tour covers the tabs that have no story of their own —
// stories carry the features that do.
function buildTour(R) {
  const host = document.getElementById('tour-blocks');
  if (!host) return;
  host.innerHTML = R.tour.map((b, i) =>
    '<div class="tour-block' + (i % 2 ? ' rev' : '') + (i === 0 ? ' first' : '') + '">' +
    '<div class="shot"><img src="assets/img/' + b.img + '" alt="' + esc(b.t) + '" loading="lazy"></div>' +
    '<div><h3>' + esc(b.t) + '</h3><p>' + esc(b.lead) + '</p><ul>' +
    b.pts.map(p => '<li>' + esc(p) + '</li>').join('') + '</ul></div></div>').join('');
}

// JetBrains-style scrollytelling: sticky panel, text fades per scroll step,
// screenshots crossfade in sync, a vertical timeline fills. Any number of
// tracks per page; narrow screens / reduced motion get a flat stacked list
// instead (the home page hides its track and lets the tour cover the content).
function storyWide() {
  return window.matchMedia('(min-width: 960px)').matches
      && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function initStoryEngine(rebuild) {
  window.__storyTracks = [];
  window.__storyRebuild = rebuild;
  if (window.__storyBound) return;
  window.__storyBound = true;
  window.addEventListener('scroll', updateStoryTracks, { passive: true });
  let tmr;
  window.addEventListener('resize', () => {
    clearTimeout(tmr);
    tmr = setTimeout(() => window.__storyRebuild && window.__storyRebuild(), 150);
  });
}

// A step's visual: its screenshot, or — for the opening step of a release
// story (b.news) — a card listing what that release added, or — for a step
// about something headless (b.code) — the session transcript itself, which is
// all there is to see when the caller is an agent rather than a person.
function storyVisual(b, i) {
  const di = i >= 0 ? ' data-i="' + i + '"' : '';
  if (b.news) return '<div class="story-news"' + di + '>' +
    (b.newsTitle ? '<div class="story-news-h">' + esc(b.newsTitle) + '</div>' : '') +
    b.news.map(p => '<div class="story-new"><span>+</span><p><b>' + esc(p.k) + '</b> ' + esc(p.d) + '</p></div>').join('') +
    '</div>';
  if (b.code) return '<pre class="story-code"' + di + '>' + b.code.map(line =>
    '<div' + (line.slice(0, 2) === '$ ' ? ' class="cmd"' : '') + '>' + (esc(line) || '&nbsp;') + '</div>').join('') +
    '</pre>';
  return '<img' + di + ' src="assets/img/' + b.img + '" alt="' + esc(b.t) + '" loading="lazy">';
}

// Optional `head`/`foot` HTML (the What's-New caption and its doc links) is
// pinned inside the sticky panel, so both ride with the slides instead of
// scrolling away.
function renderStoryTrack(track, steps, flat, head, foot) {
  if (flat) {
    track.classList.add('flat');
    track.style.height = '';
    track.innerHTML = (head || '') + steps.map(b =>
      '<div class="story-flat-step">' + storyVisual(b, -1) +
      (b.t ? '<h3>' + esc(b.t) + '</h3>' : '') + '<p>' + esc(b.d || b.lead) + '</p>' +
      (b.d2 ? '<p>' + esc(b.d2) + '</p>' : '') + '</div>').join('') + (foot || '');
    return;
  }
  track.classList.remove('flat');
  track.style.height = (steps.length * 85 + 15) + 'vh';
  track.innerHTML =
    '<div class="story-sticky' + (head ? ' with-head' : '') + '">' + (head || '') +
    '<div class="story-bar"><span class="story-fill"></span></div><div class="story-grid">' +
    '<div class="story-text">' + steps.map((b, i) =>
      '<div class="story-step" data-i="' + i + '">' + (b.t ? '<h3>' + esc(b.t) + '</h3>' : '') +
      '<p>' + esc(b.d || b.lead) + '</p>' +
      (b.d2 ? '<p>' + esc(b.d2) + '</p>' : '') +
      (b.pts ? '<ul>' + b.pts.map(p => '<li>' + esc(p) + '</li>').join('') + '</ul>' : '') + '</div>').join('') + '</div>' +
    '<div class="story-shot">' + steps.map((b, i) => storyVisual(b, i)).join('') + '</div>' +
    '</div>' + (foot || '') + '</div>';
  window.__storyTracks.push({
    track: track, steps: steps,
    stepEls: [].slice.call(track.querySelectorAll('.story-step')),
    imgEls: [].slice.call(track.querySelectorAll('.story-shot > [data-i]')),
    fill: track.querySelector('.story-fill'),
  });
}

function updateStoryTracks() {
  (window.__storyTracks || []).forEach(t => {
    const r = t.track.getBoundingClientRect();
    const total = t.track.offsetHeight - window.innerHeight;
    if (total <= 0) return;
    const p = Math.min(1, Math.max(0, -r.top / total));
    const idx = Math.min(t.steps.length - 1, Math.floor(p * t.steps.length));
    t.stepEls.forEach(el => el.classList.toggle('on', +el.dataset.i === idx));
    t.imgEls.forEach(el => el.classList.toggle('on', +el.dataset.i === idx));
    if (t.fill) t.fill.style.height = (p * 100) + '%';
  });
}

// Home page: the What's-New story (stories.wn) plays inside the release
// section; every other story becomes a chapter under #stories. Narrow
// screens / reduced motion get the flat stacked variant of each track.
function buildHomeStories(R) {
  const wnTrack = document.getElementById('wn-story');
  const host = document.getElementById('stories-body');
  if (!R.stories || (!wnTrack && !host)) return;
  window.__storyR = R;
  initStoryEngine(() => buildHomeStories(window.__storyR));
  const wide = storyWide();
  if (wnTrack) {
    const wn = R.stories.list.filter(s => s.key === R.stories.wn)[0];
    const head = '<div class="story-track-head"><div class="wrap">' +
      '<h2 class="sec">' + esc(R.wn.h) + '</h2>' +
      '</div></div>';
    const foot = '<div class="story-track-foot"><div class="wrap">' +
      '<a href="docs.html#mcp">' + esc(R.wn.docs) + '</a> &nbsp;·&nbsp; ' +
      '<a href="releases.html">' + esc(R.wn.notes) + '</a></div></div>';
    if (wn) renderStoryTrack(wnTrack, wn.steps, !wide, head, foot);
  }
  if (host) {
    const rest = R.stories.list.filter(s => s.key !== R.stories.wn);
    // A release story opens with its own title card carrying the same heading — printed
    // twice, a screen apart, it reads as a bug. The chapter keeps the heading (and gains
    // the release it belongs to, which was nowhere on the page); the card drops it.
    const chapters = rest.map(s => {
      const opener = s.steps[0] || {};
      const version = (opener.newsTitle || '').match(/\d+(?:\.\d+)+/);
      const steps = opener.t === s.h
        ? [Object.assign({}, opener, { t: '' })].concat(s.steps.slice(1))
        : s.steps;
      return { story: s, steps: steps, version: version ? version[0] : '' };
    });
    host.innerHTML = chapters.map((c, i) =>
      '<section class="story-chapter"><div class="wrap"><h2 class="sec">' + esc(c.story.h) +
      (c.version ? '<span class="story-ver">' + esc(c.version) + '</span>' : '') + '</h2>' +
      '<p class="sub">' + esc(c.story.sub) + '</p></div>' +
      '<div class="story-track" data-story="' + i + '"></div></section>').join('');
    [].slice.call(host.querySelectorAll('.story-track')).forEach((tr, i) =>
      renderStoryTrack(tr, chapters[i].steps, !wide));
  }
  updateStoryTracks();
}

function buildFeatures(R) {
  const host = document.getElementById('features-grid');
  if (!host) return;
  host.innerHTML = R.feat.cards.map(c =>
    '<div class="card"><div class="ico">' + c.i + '</div><h3>' + esc(c.t) + '</h3><p>' + esc(c.d) + '</p></div>').join('');
}

// Docs: grouped left-sidebar navigation. Sections are the items; their <h3>
// headings become subtopics with language-stable ids (<section>-s<N> by
// position, so anchors survive a language switch). A scroll-spy highlights
// and expands the section being read.
function buildDocs(R) {
  const nav = document.getElementById('docs-nav');
  const body = document.getElementById('docs-body');
  if (!nav || !body) return;

  const subs = {};
  body.innerHTML = R.docs.sections.map(s => {
    let n = 0;
    subs[s.id] = [];
    const html = s.html.replace(/<h3>(.*?)<\/h3>/g, (m, t) => {
      n++;
      const sid = s.id + '-s' + n;
      subs[s.id].push({ id: sid, t: t.replace(/<[^>]+>/g, '') });
      return '<h3 id="' + sid + '">' + t + '</h3>';
    });
    return '<h2 id="' + s.id + '">' + esc(s.t) + '</h2>' + html;
  }).join('');

  const byId = {};
  R.docs.sections.forEach(s => { byId[s.id] = s; });
  const tw = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4l4 4-4 4"/></svg>';
  nav.innerHTML = R.docs.groups.map(g =>
    '<div class="dn-group"><div class="dn-cap">' + esc(g.t) + tw + '</div>' +
    g.ids.map(id => {
      const s = byId[id];
      if (!s) return '';
      const kids = subs[id] || [];
      return '<div class="dn-item" data-sec="' + id + '">' +
        '<a class="dn-link" href="#' + id + '">' + esc(s.t) + '</a>' +
        (kids.length ? '<button class="dn-tw" type="button" aria-label="' + esc(s.t) + '">' + tw + '</button>' +
          '<div class="dn-subs">' + kids.map(k => '<a href="#' + k.id + '">' + esc(k.t) + '</a>').join('') + '</div>' : '') +
        '</div>';
    }).join('') + '</div>').join('');

  nav.querySelectorAll('.dn-cap').forEach(cap =>
    cap.addEventListener('click', () => cap.parentElement.classList.toggle('closed')));
  nav.querySelectorAll('.dn-tw').forEach(btn =>
    btn.addEventListener('click', () => btn.parentElement.classList.toggle('open')));

  const side = document.querySelector('.docs-side');
  const tgl = document.getElementById('docs-nav-toggle');
  if (tgl && !tgl.__wired) {
    tgl.__wired = true;
    tgl.addEventListener('click', () => side.classList.toggle('open'));
  }
  nav.addEventListener('click', e => { if (e.target.closest('a')) side.classList.remove('open'); });

  const headings = [].slice.call(body.querySelectorAll('h2[id],h3[id]'));
  function spy() {
    let cur = headings[0];
    for (const h of headings) {
      if (h.getBoundingClientRect().top <= 90) cur = h; else break;
    }
    if (!cur) return;
    const subId = cur.tagName === 'H3' ? cur.id : null;
    const secId = subId ? subId.replace(/-s\d+$/, '') : cur.id;
    nav.querySelectorAll('.dn-item').forEach(it => {
      const on = it.dataset.sec === secId;
      it.classList.toggle('on', on);
      if (on) {
        it.classList.add('open');
        it.parentElement.classList.remove('closed');
      }
    });
    nav.querySelectorAll('.dn-subs a').forEach(a =>
      a.classList.toggle('on', !!subId && a.getAttribute('href') === '#' + subId));
  }
  if (window.__docsSpy) window.removeEventListener('scroll', window.__docsSpy);
  window.__docsSpy = spy;
  window.addEventListener('scroll', spy, { passive: true });
  spy();
}

// Feedback button + popup, injected into the shared header on every page.
function buildFeedback() {
  const links = document.querySelector('.nav .tools');
  if (!links || links.querySelector('.fb')) return;
  const gh = '<svg viewBox="0 0 24 24"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7 0-.7 0-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.1 0 4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3"/></svg>';
  const tg = '<svg viewBox="0 0 24 24"><path d="M21.9 4.6c.3-1.2-.9-2.2-2-1.7L2.7 9.7c-1.2.5-1.1 2.2.1 2.6l4.4 1.4 1.7 5.5c.3 1 1.6 1.3 2.3.5l2.4-2.5 4.5 3.3c.9.6 2.1.2 2.4-.9l3.4-14.9zM8.2 12.9l9.4-5.8c.4-.2.7.3.4.6l-7.7 7.2c-.3.3-.5.6-.5 1l-.3 2.3c0 .3-.5.4-.6.1l-1.1-3.7c-.2-.6.1-1.3.4-1.7z"/></svg>';
  const fb = document.createElement('span');
  fb.className = 'fb';
  fb.innerHTML =
    '<button class="fb-btn" type="button" aria-haspopup="true" aria-expanded="false" data-i18n="nav.feedback">Feedback</button>' +
    '<div class="fb-pop" hidden>' +
    '<a href="https://github.com/pavel-zheltiakov/AvaDevTools/issues">' + gh +
    '<span><b>GitHub Issues</b><small data-i18n="fb.issues"></small></span></a>' +
    '<a href="https://t.me/avadevtools">' + tg +
    '<span><b>Telegram</b><small data-i18n="fb.tg"></small></span></a></div>';
  links.insertBefore(fb, links.querySelector('.langs'));
  const btn = fb.querySelector('.fb-btn');
  const pop = fb.querySelector('.fb-pop');
  const close = () => { pop.hidden = true; btn.setAttribute('aria-expanded', 'false'); };
  btn.addEventListener('click', e => {
    e.stopPropagation();
    pop.hidden = !pop.hidden;
    btn.setAttribute('aria-expanded', String(!pop.hidden));
  });
  document.addEventListener('click', e => { if (!fb.contains(e.target)) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}

// Language dropdown: the button shows only the current language; the popup
// lists all of them, so the switcher scales past three languages.
function buildLangs() {
  const box = document.querySelector('.langs');
  const btn = box && box.querySelector('.langs-btn');
  const pop = box && box.querySelector('.langs-pop');
  if (!btn || !pop) return;
  const close = () => { pop.hidden = true; btn.setAttribute('aria-expanded', 'false'); };
  btn.addEventListener('click', e => {
    e.stopPropagation();
    pop.hidden = !pop.hidden;
    btn.setAttribute('aria-expanded', String(!pop.hidden));
  });
  pop.addEventListener('click', close);
  document.addEventListener('click', e => { if (!box.contains(e.target)) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}

document.addEventListener('DOMContentLoaded', () => {
  buildFeedback();
  buildLangs();
  document.querySelectorAll('[data-setlang]').forEach(a =>
    a.addEventListener('click', e => { e.preventDefault(); setLang(a.dataset.setlang); }));
  applyLang(detectLang());
});

// --- release history (fed live from the public repo's GitHub API) -------------
var GH_ICON = '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style="vertical-align:-2px;margin-right:5px"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7 0-.7 0-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.1 0 4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3"/></svg>';

function md(src) {
  let h = esc(src);
  h = h.replace(/^### (.*)$/gm, '<h4>$1</h4>')
       .replace(/^## (.*)$/gm, '<h3 class="relh">$1</h3>')
       .replace(/^# (.*)$/gm, '<h3 class="relh">$1</h3>')
       .replace(/^\s*---+\s*$/gm, '<hr>')
       .replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>')
       .replace(/`([^`]+)`/g, '<code>$1</code>')
       .replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1">$1</a>');
  h = h.replace(/(^|\n)((?:[ \t]*- .*(?:\n|$))+)/g, (m, pre, block) => {
    let out = '<ul>', depth = 0;
    block.replace(/\s+$/, '').split('\n').forEach(line => {
      const sub = /^\s+-/.test(line);
      const txt = line.replace(/^\s*- /, '');
      if (sub && depth === 0) { out += '<ul>'; depth = 1; }
      if (!sub && depth === 1) { out += '</ul>'; depth = 0; }
      out += '<li>' + txt + '</li>';
    });
    if (depth === 1) out += '</ul>';
    return pre + out + '</ul>';
  });
  return h.split(/\n{2,}/).map(p => /^<(h\d|ul|hr)/.test(p.trim()) ? p : '<p>' + p.replace(/\n/g, '<br>') + '</p>').join('');
}

async function loadReleases(el, L) {
  let fetched = [], fetchOk = false;
  try {
    const res = await fetch('https://api.github.com/repos/pavel-zheltiakov/AvaDevTools/releases');
    if (res.ok) { fetched = await res.json(); fetchOk = true; }
  } catch (e) {}
  if (!Array.isArray(fetched)) fetched = [];
  // A release prepared but not yet tagged is listed locally; GitHub's entry
  // replaces it once the tag is pushed.
  const local = (window.LOCAL_RELEASES || []).filter(l => !fetched.some(r => r.tag_name === l.tag_name));
  const releases = local.concat(fetched);
  const failNote = '<p style="color:var(--muted)">' + esc(L.fail) +
    ' <a href="https://github.com/pavel-zheltiakov/AvaDevTools/releases">GitHub</a>.</p>';
  if (!releases.length) {
    el.innerHTML = fetchOk ? '<p style="color:var(--muted)">' + esc(L.none) + '</p>' : failNote;
    return;
  }
  // A failed fetch with a local entry still needs the notice — otherwise the page
  // silently presents the pending release as the only release ever.
  el.innerHTML = (fetchOk ? '' : failNote) + releases.map(r => {
    const version = (r.tag_name || '').replace(/^v/, '');
    // Release dates are date-only stamps at UTC midnight — format them in UTC or
    // every timezone west of UTC shows the previous day.
    const date = r.published_at ? new Date(r.published_at).toLocaleDateString(L.locale, { timeZone: 'UTC' }) : '';
    const body = (r.body || '')
      .replace(/^---+\s*$/gm, '')
      .replace(/^Install:.*$/gm, '')
      .replace(/^Docs:.*$/gm, '')
      .replace(/^NuGet:.*$/gm, '')
      .replace(/\n{3,}/g, '\n\n')
      .trim();
    return '<div class="card" style="margin-bottom:14px">' +
      '<h3 style="margin-top:0">' + esc(r.name || r.tag_name) +
      ' <span style="color:var(--muted);font-weight:400;font-size:12px">· ' + date + '</span></h3>' +
      (body ? '<div class="relbody">' + md(body) + '</div>' : '') +
      '<div class="install rel-install"><span>dotnet add package AvaDevTools --version ' + esc(version) + '</span>' +
      '<button onclick="copyInstall(this)">copy</button></div>' +
      '<p class="rel-links"><a href="docs.html">' + esc(L.docsLabel || 'Documentation') + '</a> · ' +
      '<a href="' + esc(r.html_url) + '">' + GH_ICON + 'GitHub</a></p></div>';
  }).join('');
}
