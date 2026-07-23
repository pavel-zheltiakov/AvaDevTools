function copyInstall(btn) {
  const text = btn.parentElement.querySelector('span').textContent;
  navigator.clipboard.writeText(text).then(() => {
    const old = btn.textContent;
    btn.textContent = '✓';
    setTimeout(() => (btn.textContent = old), 1200);
  });
}
