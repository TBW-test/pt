document.addEventListener('DOMContentLoaded', function () {
  var SECTION_OFFSET = 8;

  var nav = document.getElementById('subnav');
  var sentinel = document.getElementById('subnav-sentinel');
  var links = Array.from(document.querySelectorAll('[data-subnav-link]'));
  var sections = links.map(function (link) {
    return document.getElementById(link.getAttribute('href').slice(1));
  });

  function setActiveLink(activeLink) {
    links.forEach(function (link) {
      var isActive = link === activeLink;
      link.classList.toggle('border-link', isActive);
      link.classList.toggle('border-transparent', !isActive);
    });
  }

  // Scroll-spy: highlight whichever section's top has passed just below the nav.
  // The +2 buffer accounts for the same SECTION_OFFSET used when scrolling to a
  // section on click, so the clicked section is immediately detected as current.
  function updateActiveSection() {
    if (!nav) return;
    var refLine = nav.getBoundingClientRect().bottom + SECTION_OFFSET + 2;
    var currentIndex = 0;
    sections.forEach(function (section, i) {
      if (section && section.getBoundingClientRect().top <= refLine) {
        currentIndex = i;
      }
    });
    setActiveLink(links[currentIndex]);
  }

  // Add a shadow only while the sub-navigation is actually stuck to the top.
  var updateStuckShadow = function () {};
  if (nav && sentinel) {
    var stuckThreshold = sentinel.getBoundingClientRect().top + window.scrollY;
    updateStuckShadow = function () {
      nav.classList.toggle('shadow-hero', window.scrollY > stuckThreshold);
    };
  }

  var ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      updateStuckShadow();
      updateActiveSection();
      ticking = false;
    });
  });
  updateStuckShadow();
  updateActiveSection();

  links.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      var target = document.getElementById(link.getAttribute('href').slice(1));
      if (target && nav) {
        var offset = target.getBoundingClientRect().top + window.scrollY - nav.offsetHeight - SECTION_OFFSET;
        window.scrollTo({ top: offset, behavior: 'auto' });
      }

      updateStuckShadow();
      setActiveLink(link);
    });
  });
});
