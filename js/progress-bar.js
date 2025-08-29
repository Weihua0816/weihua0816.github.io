;(function () {
  function update() {
    const doc = document.documentElement;
    const body = document.body;
    const scrollTop = doc.scrollTop || body.scrollTop || 0;
    const scrollHeight = doc.scrollHeight || body.scrollHeight || 0;
    const clientHeight = doc.clientHeight || window.innerHeight || 0;
    const denom = Math.max(1, scrollHeight - clientHeight);
    const pct = Math.min(100, Math.max(0, (scrollTop / denom) * 100));
    const el = document.getElementById('progress-bar');
    if (el) el.style.width = pct + '%';
  }

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  document.addEventListener('DOMContentLoaded', update);
})();
