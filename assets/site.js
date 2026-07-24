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
  document.title = page === 'docs' ? R.docs.title : page === 'releases' ? R.rel.title : R.title;
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

  if (page === 'home') { buildTour(R); try { buildStory(R); } catch (e) {} buildFeatures(R); }
  if (page === 'docs') buildDocs(R);
  if (page === 'releases') {
    const el = document.getElementById('rel');
    if (el) { el.innerHTML = '<p style="color:var(--muted)">' + esc(R.rel.loading) + '</p>'; loadReleases(el, Object.assign({ docsLabel: R.nav.docs }, R.rel)); }
  }
}

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
// screenshots crossfade in sync, vertical timeline fills. Falls back to the
// classic stacked tour on narrow screens / reduced motion.
function buildStory(R) {
  const track = document.getElementById('story-track');
  if (!track) return;
  window.__storyR = R;
  const tour = document.getElementById('tour');
  const wide = window.matchMedia('(min-width: 960px)').matches
            && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!wide) {
    track.innerHTML = '';
    track.style.height = '';
    if (tour) tour.style.display = '';
    return;
  }
  if (tour) tour.style.display = 'none';
  const steps = R.tour;
  track.style.height = (steps.length * 85 + 15) + 'vh';
  track.innerHTML =
    '<div class="story-sticky"><div class="story-bar"><span id="story-fill"></span></div><div class="story-grid">' +
    '<div class="story-text">' + steps.map((b, i) =>
      '<div class="story-step" data-i="' + i + '"><h3>' + esc(b.t) + '</h3><p>' + esc(b.lead) + '</p><ul>' +
      b.pts.map(p => '<li>' + esc(p) + '</li>').join('') + '</ul></div>').join('') + '</div>' +
    '<div class="story-shot">' + steps.map((b, i) =>
      '<img data-i="' + i + '" src="assets/img/' + b.img + '" alt="' + esc(b.t) + '" loading="lazy">').join('') + '</div>' +
    '</div></div>';
  const stepEls = [].slice.call(track.querySelectorAll('.story-step'));
  const imgEls = [].slice.call(track.querySelectorAll('.story-shot img'));
  const fill = document.getElementById('story-fill');
  function onScroll() {
    const r = track.getBoundingClientRect();
    const total = track.offsetHeight - window.innerHeight;
    if (total <= 0) return;
    const p = Math.min(1, Math.max(0, -r.top / total));
    const idx = Math.min(steps.length - 1, Math.floor(p * steps.length));
    stepEls.forEach(el => el.classList.toggle('on', +el.dataset.i === idx));
    imgEls.forEach(el => el.classList.toggle('on', +el.dataset.i === idx));
    if (fill) fill.style.height = (p * 100) + '%';
  }
  if (window.__storyScroll) window.removeEventListener('scroll', window.__storyScroll);
  window.__storyScroll = onScroll;
  window.addEventListener('scroll', onScroll, { passive: true });
  if (!window.__storyResize) {
    window.__storyResize = true;
    let tmr;
    window.addEventListener('resize', () => {
      clearTimeout(tmr);
      tmr = setTimeout(() => window.__storyR && buildStory(window.__storyR), 150);
    });
  }
  onScroll();
}

function buildFeatures(R) {
  const host = document.getElementById('features-grid');
  if (!host) return;
  host.innerHTML = R.feat.cards.map(c =>
    '<div class="card"><div class="ico">' + c.i + '</div><h3>' + esc(c.t) + '</h3><p>' + esc(c.d) + '</p></div>').join('');
}

function buildDocs(R) {
  const toc = document.getElementById('docs-toc');
  const body = document.getElementById('docs-body');
  if (!toc || !body) return;
  toc.innerHTML = R.docs.sections.map(s => '<a href="#' + s.id + '">' + esc(s.t) + '</a>').join('');
  body.innerHTML = R.docs.sections.map(s => '<h2 id="' + s.id + '">' + esc(s.t) + '</h2>' + s.html).join('');
}

document.addEventListener('DOMContentLoaded', () => {
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
  try {
    const res = await fetch('https://api.github.com/repos/pavel-zheltiakov/AvaDevTools/releases');
    if (!res.ok) throw new Error(res.status);
    const releases = await res.json();
    if (!releases.length) {
      el.innerHTML = '<p style="color:var(--muted)">' + esc(L.none) + '</p>';
      return;
    }
    el.innerHTML = releases.map(r => {
      const version = (r.tag_name || '').replace(/^v/, '');
      const date = r.published_at ? new Date(r.published_at).toLocaleDateString(L.locale) : '';
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
  } catch (e) {
    el.innerHTML = '<p style="color:var(--muted)">' + esc(L.fail) +
      ' <a href="https://github.com/pavel-zheltiakov/AvaDevTools/releases">GitHub</a>.</p>';
  }
}
