document.addEventListener('DOMContentLoaded', function () {
  var svg = document.getElementById('pe-svg');
  var areaPath = document.getElementById('pe-area');
  var linePath = document.getElementById('pe-line');
  var yLabels = document.getElementById('pe-y-labels');
  var overlay = document.getElementById('pe-overlay');
  var dot = document.getElementById('pe-dot');
  var tooltip = document.getElementById('pe-tooltip');
  var container = document.getElementById('pe-container');
  if (!svg || !container) return;

  var DAYS = 90;
  var MIN = 97;
  var MAX = 113;

  function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }

  var prices = [];
  for (var i = 0; i < DAYS; i++) {
    var wave = Math.sin(i / 9) * 2.5;
    var dip = i > 50 && i < 72 ? -11 * Math.sin(((i - 50) / 22) * Math.PI) : 0;
    prices.push(clamp(Math.round((109 + wave + dip) * 10) / 10, MIN, MAX));
  }

  var W = 300, H = 145;
  function toX(i) { return (i / (DAYS - 1)) * W; }
  function toY(v) { return H - ((v - MIN) / (MAX - MIN)) * H; }
  function formatEuro(v) { return v.toFixed(2).replace('.', ','); }

  var linePoints = prices.map(function (v, i) { return toX(i) + ',' + toY(v); });
  linePath.setAttribute('d', 'M' + linePoints.join(' L'));
  areaPath.setAttribute('d', 'M' + linePoints.join(' L') + ' L' + W + ',' + H + ' L0,' + H + ' Z');

  var LABEL_COUNT = 8;
  var labelsHtml = '';
  for (var l = 0; l <= LABEL_COUNT; l++) {
    var value = MAX - (l / LABEL_COUNT) * (MAX - MIN);
    var top = (l / LABEL_COUNT) * 100;
    labelsHtml += '<div class="absolute right-0 -translate-y-1/2 whitespace-nowrap" style="top:' + top + '%">' + Math.round(value) + ' €</div>';
  }
  yLabels.innerHTML = labelsHtml;

  function nearestIndex(clientX) {
    var rect = container.getBoundingClientRect();
    var ratio = (clientX - rect.left) / rect.width;
    return clamp(Math.round(ratio * (DAYS - 1)), 0, DAYS - 1);
  }

  function showAt(idx) {
    var x = toX(idx), y = toY(prices[idx]);
    dot.setAttribute('cx', x);
    dot.setAttribute('cy', y);
    dot.style.display = '';
    tooltip.style.display = '';
    tooltip.style.left = (x / W * 100) + '%';
    tooltip.style.top = (y / H * 100) + '%';
    tooltip.textContent = formatEuro(prices[idx]) + ' €';
  }

  function hide() {
    dot.style.display = 'none';
    tooltip.style.display = 'none';
  }

  overlay.addEventListener('mousemove', function (e) { showAt(nearestIndex(e.clientX)); });
  overlay.addEventListener('mouseleave', hide);
  overlay.addEventListener('touchstart', function (e) { showAt(nearestIndex(e.touches[0].clientX)); }, { passive: true });
  overlay.addEventListener('touchmove', function (e) { showAt(nearestIndex(e.touches[0].clientX)); }, { passive: true });
  overlay.addEventListener('touchend', hide);
});
