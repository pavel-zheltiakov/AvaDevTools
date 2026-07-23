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

// Release history, fetched live from the public repo — no site redeploy needed per release.
async function loadReleases(el, L) {
  try {
    const res = await fetch('https://api.github.com/repos/pavel-zheltiakov/AvaDevTools/releases');
    if (!res.ok) throw new Error(res.status);
    const releases = await res.json();
    if (!releases.length) {
      el.innerHTML = '<p style="color:var(--muted)">' + L.none + '</p>';
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
        ' · <a href="' + esc(r.html_url) + '">' + L.view + '</a></p></div>';
    }).join('');
  } catch (e) {
    el.innerHTML = '<p style="color:var(--muted)">' + L.fail +
      ' <a href="https://github.com/pavel-zheltiakov/AvaDevTools/releases">GitHub</a>.</p>';
  }
}
