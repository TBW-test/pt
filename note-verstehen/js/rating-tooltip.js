document.addEventListener('DOMContentLoaded', function () {
  var trigger = document.getElementById('rating-info-trigger');
  var tooltip = document.getElementById('rating-info-tooltip');
  var close = document.getElementById('rating-info-tooltip-close');
  if (!trigger || !tooltip || !close) return;

  trigger.addEventListener('click', function (e) {
    e.stopPropagation();
    tooltip.classList.toggle('hidden');
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
