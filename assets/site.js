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

  if (page === 'home') { buildTour(R); buildFeatures(R); }
  if (page === 'docs') buildDocs(R);
  if (page === 'releases') {
    const el = document.getElementById('rel');
    if (el) { el.innerHTML = '<p style="color:var(--muted)">' + esc(R.rel.loading) + '</p>'; loadReleases(el, R.rel); }
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
      return '<div class="card" style="margin-bottom:14px">' +
        '<h3 style="margin-top:0">' + esc(r.name || r.tag_name) +
        ' <span style="color:var(--muted);font-weight:400;font-size:12px">· ' + date + '</span></h3>' +
        (r.body ? '<p style="white-space:pre-wrap">' + esc(r.body) + '</p>' : '') +
        '<p style="margin-top:8px"><code>dotnet add package AvaDevTools --version ' + esc(version) + '</code>' +
        ' · <a href="' + esc(r.html_url) + '">' + esc(L.view) + '</a></p></div>';
    }).join('');
  } catch (e) {
    el.innerHTML = '<p style="color:var(--muted)">' + esc(L.fail) +
      ' <a href="https://github.com/pavel-zheltiakov/AvaDevTools/releases">GitHub</a>.</p>';
  }
}
