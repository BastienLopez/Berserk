// Shared image modal handler
(function () {
  function ensureGlobalModal() {
    if (document.getElementById('global-image-modal')) return;
    var wrap = document.createElement('div');
    wrap.innerHTML = (
      '<div class="modal fade" id="global-image-modal" tabindex="-1" role="dialog" aria-labelledby="global-image-modal" aria-hidden="true">' +
        '<div class="modal-dialog" role="document">' +
          '<div class="modal-content">' +
            '<div class="modal-header">' +
              '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
                '<span aria-hidden="true">&times;</span>' +
              '</button>' +
            '</div>' +
            '<div class="modal-body" style="text-align:center">' +
              '<img id="global-image-modal-img" src="" alt="" class="modal-image img-fluid" />' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>'
    );
    document.body.appendChild(wrap.firstElementChild);
  }

  function shouldMakeZoomable(img) {
    if (!img) return false;
    // opt-out attribute
    if (img.hasAttribute('data-nozoom')) return false;
    // ignore UI assets (nav/logo/map tiles/etc.)
    if (img.closest('nav, header, .navbar, .leaflet-container, #map, .leaflet-pane')) return false;
    return true;
  }

  function retarget() {
    // Make any content images clickable, even if they don't have data-toggle initially
    var scope = document.querySelector('main') || document.body;
    var imgs = scope ? scope.querySelectorAll('img') : document.querySelectorAll('img');
    imgs.forEach(function (img) {
      if (!shouldMakeZoomable(img)) return;
      img.setAttribute('data-toggle', 'modal');
      img.setAttribute('data-target', '#global-image-modal');
      img.classList.add('js-global-modal');
      // visual affordance
      img.style.cursor = img.style.cursor || 'zoom-in';
    });
  }

  function onClick(e) {
    var t = e.target;
    if (t && t.matches && t.matches('img.js-global-modal')) {
      var full = t.getAttribute('data-full') || t.getAttribute('data-fullsrc') || t.getAttribute('data-src') || t.src;
      var alt = t.getAttribute('alt') || '';
      var modalImg = document.getElementById('global-image-modal-img');
      if (modalImg) {
        modalImg.src = full;
        modalImg.alt = alt;
      }
      if (window.jQuery && jQuery.fn && jQuery.fn.modal) {
        jQuery('#global-image-modal').modal('show');
        e.preventDefault();
        e.stopPropagation();
      }
    }
  }

  function init() {
    ensureGlobalModal();
    retarget();
    document.addEventListener('click', onClick, true);
    try {
      new MutationObserver(retarget).observe(document.body, { childList: true, subtree: true });
    } catch (_) {}
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
