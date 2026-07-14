document.addEventListener('DOMContentLoaded', function () {
  var DOT_ACTIVE = 'w-2 h-2 rounded-full bg-ink';
  var DOT_DEFAULT = 'w-2 h-2 rounded-full bg-[rgba(16,42,67,0.2)]';
  var DRAG_THRESHOLD = 5;

  function initCardCarousel(root) {
    var track = root.querySelector('[data-carousel-track]');
    var dotsContainer = root.querySelector('[data-carousel-dots]');
    var nextBtn = root.querySelector('[data-carousel-next]');
    if (!track) return;

    var cards = Array.from(track.children);
    if (!cards.length) return;

    function cardStep() {
      var rect = cards[0].getBoundingClientRect();
      var gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      return rect.width + gap;
    }

    function currentIndex() {
      return Math.round(track.scrollLeft / cardStep());
    }

    function updateDots() {
      if (!dotsContainer) return;
      var index = currentIndex();
      Array.from(dotsContainer.children).forEach(function (dot, i) {
        dot.className = i === index ? DOT_ACTIVE : DOT_DEFAULT;
      });
    }

    function updateNextBtn() {
      if (!nextBtn) return;
      var atEnd = track.scrollLeft >= track.scrollWidth - track.clientWidth - 2;
      nextBtn.classList.toggle('opacity-0', atEnd);
      nextBtn.classList.toggle('pointer-events-none', atEnd);
    }

    function goTo(index) {
      var clamped = Math.max(0, Math.min(index, cards.length - 1));
      track.scrollLeft = clamped * cardStep();
      updateDots();
      updateNextBtn();
    }

    if (dotsContainer) {
      dotsContainer.innerHTML = '';
      cards.forEach(function (_, i) {
        var dot = document.createElement('button');
        dot.type = 'button';
        dot.setAttribute('aria-label', 'Karte ' + (i + 1));
        dot.className = i === 0 ? DOT_ACTIVE : DOT_DEFAULT;
        dot.addEventListener('click', function () { goTo(i); });
        dotsContainer.appendChild(dot);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function () { goTo(currentIndex() + 1); });
    }

    track.addEventListener('scroll', function () {
      window.requestAnimationFrame(function () { updateDots(); updateNextBtn(); });
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

    updateDots();
    updateNextBtn();
  }

  document.querySelectorAll('[data-carousel]').forEach(initCardCarousel);
});
