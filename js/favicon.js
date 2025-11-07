// Ensure favicon links are present in document <head> regardless of how pages are loaded
(function () {
  function computeRootPrefix() {
    var p = (location.pathname || "/");
    var i = p.indexOf("/templates/");
    if (i >= 0) return p.slice(0, i + 1); // includes trailing slash
    // if served at repo root, prefer root-relative
    if (p.endsWith("/index.html") || p.endsWith("/")) return p.replace(/index\.html$/i, "");
    // fallback to current directory
    var base = p.substring(0, p.lastIndexOf("/") + 1);
    return base;
  }

  function addOrUpdate(rel, href, attrs) {
    var link = document.querySelector('head link[rel="' + rel + '"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = rel;
      document.head.appendChild(link);
    }
    link.href = href;
    if (attrs) Object.keys(attrs).forEach(function (k) { link.setAttribute(k, attrs[k]); });
  }

  function ensureFavicons() {
    var root = computeRootPrefix();
    var base = root + 'favicon/';
    try {
      addOrUpdate('icon', base + 'favicon.ico');
      addOrUpdate('icon', base + 'favicon-32x32.png', { type: 'image/png', sizes: '32x32' });
      addOrUpdate('icon', base + 'favicon-16x16.png', { type: 'image/png', sizes: '16x16' });
      addOrUpdate('apple-touch-icon', base + 'apple-touch-icon.png', { sizes: '180x180' });
      addOrUpdate('mask-icon', base + 'safari-pinned-tab.svg', { color: '#5bbad5' });
      var manifest = document.querySelector('head link[rel="manifest"]');
      if (!manifest) {
        manifest = document.createElement('link');
        manifest.rel = 'manifest';
        document.head.appendChild(manifest);
      }
      manifest.href = base + 'site.webmanifest';
      var metaTile = document.querySelector('head meta[name="msapplication-TileColor"]');
      if (!metaTile) { metaTile = document.createElement('meta'); metaTile.name = 'msapplication-TileColor'; document.head.appendChild(metaTile); }
      metaTile.setAttribute('content', '#da532c');
      var metaTheme = document.querySelector('head meta[name="theme-color"]');
      if (!metaTheme) { metaTheme = document.createElement('meta'); metaTheme.name = 'theme-color'; document.head.appendChild(metaTheme); }
      metaTheme.setAttribute('content', '#ffffff');
    } catch (e) { /* no-op */ }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ensureFavicons);
  } else {
    ensureFavicons();
  }
})();

