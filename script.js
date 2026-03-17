(function () {
  const canonical = document.querySelector('link[rel="canonical"]');
  const ogUrl = document.querySelector('meta[property="og:url"]');
  const cleanUrl = window.location.origin + window.location.pathname;

  if (canonical && canonical.getAttribute('href') === '__AUTO_CANONICAL__') {
    canonical.setAttribute('href', cleanUrl);
  }

  if (ogUrl && ogUrl.getAttribute('content') === '__AUTO_CANONICAL__') {
    ogUrl.setAttribute('content', cleanUrl);
  }

  document.querySelectorAll('.pulse-faq-item').forEach((item) => {
    const button = item.querySelector('button');
    const sign = item.querySelector('b');

    if (!button) return;

    button.addEventListener('click', function () {
      const isOpen = item.getAttribute('data-open') === 'true';

      document.querySelectorAll('.pulse-faq-item').forEach((entry) => {
        entry.setAttribute('data-open', 'false');
        const marker = entry.querySelector('b');
        const btn = entry.querySelector('button');
        if (marker) marker.textContent = '+';
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.setAttribute('data-open', 'true');
        if (sign) sign.textContent = '−';
        if (button) button.setAttribute('aria-expanded', 'true');
      }
    });
  });
})();
