document.addEventListener('DOMContentLoaded', function () {
  var trigger = document.getElementById('rating-info-trigger');
  var tooltip = document.getElementById('rating-info-tooltip');
  var close = document.getElementById('rating-info-tooltip-close');
  var arrow = document.getElementById('rating-info-tooltip-arrow');
  if (!trigger || !tooltip || !close || !arrow) return;

  function positionTooltip() {
    var triggerRect = trigger.getBoundingClientRect();
    var spaceBelow = window.innerHeight - triggerRect.bottom;
    var spaceAbove = triggerRect.top;
    var showAbove = spaceBelow < tooltip.offsetHeight + 16 && spaceAbove > spaceBelow;

    tooltip.classList.toggle('top-full', !showAbove);
    tooltip.classList.toggle('mt-2', !showAbove);
    tooltip.classList.toggle('bottom-full', showAbove);
    tooltip.classList.toggle('mb-2', showAbove);

    arrow.classList.toggle('-top-[5px]', !showAbove);
    arrow.classList.toggle('border-l', !showAbove);
    arrow.classList.toggle('border-t', !showAbove);
    arrow.classList.toggle('-bottom-[5px]', showAbove);
    arrow.classList.toggle('border-r', showAbove);
    arrow.classList.toggle('border-b', showAbove);
  }

  trigger.addEventListener('click', function (e) {
    e.stopPropagation();
    if (tooltip.classList.contains('hidden')) {
      tooltip.classList.remove('hidden');
      positionTooltip();
    } else {
      tooltip.classList.add('hidden');
    }
  });

  close.addEventListener('click', function (e) {
    e.stopPropagation();
    tooltip.classList.add('hidden');
  });

  document.addEventListener('click', function () {
    tooltip.classList.add('hidden');
  });

  tooltip.addEventListener('click', function (e) {
    e.stopPropagation();
  });
});
