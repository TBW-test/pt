document.addEventListener('DOMContentLoaded', function () {
  var DOT_ACTIVE = 'w-2 h-2 rounded-full bg-ink';
  var DOT_DEFAULT = 'w-2 h-2 rounded-full bg-[rgba(16,42,67,0.2)]';
  var THUMB_ACTIVE = 'shrink-0 w-16 h-16 rounded-md border-2 border-ink overflow-hidden';
  var THUMB_DEFAULT = 'shrink-0 w-16 h-16 rounded-md border-2 border-stroke overflow-hidden';
  var DRAG_THRESHOLD = 5;

  function initCarousel(track, slideSelector, onIndexChange) {
    if (!track) return null;
    var slides = Array.from(track.querySelectorAll(slideSelector));
    if (!slides.length) return null;

    function currentIndex() {
      return Math.round(track.scrollLeft / track.clientWidth);
    }

    function notify() {
      if (onIndexChange) onIndexChange(currentIndex());
    }

    function goTo(index) {
      track.scrollLeft = index * track.clientWidth;
      notify();
    }

    track.addEventListener('scroll', function () {
      window.requestAnimationFrame(notify);
    });

    // Mouse drag-to-scroll (touch already scrolls natively via CSS overflow/snap)
    var isDown = false, startX = 0, startScroll = 0, dragged = false;
    track.addEventListener('mousedown', function (e) {
      isDown = true;
      dragged = false;
      startX = e.pageX;
      startScroll = track.scrollLeft;
    });
    window.addEventListener('mousemove', function (e) {
      if (!isDown) return;
      var delta = e.pageX - startX;
      if (Math.abs(delta) > DRAG_THRESHOLD) dragged = true;
      track.scrollLeft = startScroll - delta;
    });
    window.addEventListener('mouseup', function () {
      if (!isDown) return;
      isDown = false;
      if (dragged) goTo(currentIndex());
    });
    track.addEventListener('click', function (e) {
      if (dragged) {
        e.preventDefault();
        e.stopPropagation();
        dragged = false;
      }
    }, true);

    return { goTo: goTo, currentIndex: currentIndex, slideCount: slides.length };
  }

  function buildDots(container, count, onSelect) {
    if (!container) return null;
    container.innerHTML = '';
    var dots = [];
    for (var i = 0; i < count; i++) {
      (function (i) {
        var dot = document.createElement('button');
        dot.type = 'button';
        dot.setAttribute('aria-label', 'Bild ' + (i + 1));
        dot.className = i === 0 ? DOT_ACTIVE : DOT_DEFAULT;
        dot.addEventListener('click', function () { onSelect(i); });
        container.appendChild(dot);
        dots.push(dot);
      })(i);
    }
    return function setActive(index) {
      dots.forEach(function (dot, i) { dot.className = i === index ? DOT_ACTIVE : DOT_DEFAULT; });
    };
  }

  function buildThumbs(container, imageSrcs, onSelect) {
    if (!container) return null;
    container.innerHTML = '';
    var thumbs = [];
    imageSrcs.forEach(function (src, i) {
      var thumb = document.createElement('button');
      thumb.type = 'button';
      thumb.setAttribute('aria-label', 'Bild ' + (i + 1));
      thumb.className = i === 0 ? THUMB_ACTIVE : THUMB_DEFAULT;
      thumb.innerHTML = '<img src="' + src + '" alt="" class="w-full h-full object-cover pointer-events-none">';
      thumb.addEventListener('click', function () { onSelect(i); });
      container.appendChild(thumb);
      thumbs.push(thumb);
    });
    return function setActive(index) {
      thumbs.forEach(function (thumb, i) { thumb.className = i === index ? THUMB_ACTIVE : THUMB_DEFAULT; });
    };
  }

  var mainTrack = document.getElementById('gallery-track');
  var overlay = document.getElementById('gallery-overlay');
  var overlayTrack = document.getElementById('gallery-overlay-track');

  var mainDotsContainer = document.querySelector('#ueberblick [data-gallery-dots]');
  var setMainDotActive = null;
  var main = initCarousel(mainTrack, '[data-gallery-slide]', function (index) {
    if (setMainDotActive) setMainDotActive(index);
  });
  if (main && mainDotsContainer) {
    setMainDotActive = buildDots(mainDotsContainer, main.slideCount, function (i) { main.goTo(i); });
  }

  var overlayThumbsContainer = document.getElementById('gallery-overlay-thumbs');
  var setOverlayThumbActive = null;
  var overlayCarousel = initCarousel(overlayTrack, '[data-overlay-slide]', function (index) {
    if (setOverlayThumbActive) setOverlayThumbActive(index);
  });
  if (overlayCarousel && overlayThumbsContainer) {
    var overlayImageSrcs = Array.from(overlayTrack.querySelectorAll('[data-overlay-slide] img')).map(function (img) { return img.src; });
    setOverlayThumbActive = buildThumbs(overlayThumbsContainer, overlayImageSrcs, function (i) { overlayCarousel.goTo(i); });
  }

  function openOverlay() {
    if (!overlay) return;
    var index = main ? main.currentIndex() : 0;
    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    if (overlayCarousel) overlayCarousel.goTo(index);
  }

  function closeOverlay() {
    if (!overlay) return;
    var index = overlayCarousel ? overlayCarousel.currentIndex() : 0;
    overlay.classList.add('hidden');
    document.body.style.overflow = '';
    if (main) main.goTo(index);
  }

  document.querySelectorAll('[data-gallery-open]').forEach(function (el) {
    el.addEventListener('click', openOverlay);
  });

  var overlayClose = document.getElementById('gallery-overlay-close');
  if (overlayClose) overlayClose.addEventListener('click', closeOverlay);

  if (overlay) {
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeOverlay();
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay && !overlay.classList.contains('hidden')) closeOverlay();
  });

  function scrollToAngebote() {
    var target = document.getElementById('angebote');
    if (target) target.scrollIntoView({ behavior: 'auto' });
  }

  ['cta-alle-angebote', 'gallery-overlay-cta'].forEach(function (id) {
    var btn = document.getElementById(id);
    if (btn) btn.addEventListener('click', scrollToAngebote);
  });

  var datenblattBtn = document.getElementById('cta-datenblatt');
  if (datenblattBtn) {
    datenblattBtn.addEventListener('click', function () {
      var target = document.getElementById('datenblatt');
      if (target) target.scrollIntoView({ behavior: 'auto' });
    });
  }
});
