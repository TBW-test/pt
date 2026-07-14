document.addEventListener('DOMContentLoaded', function () {
  var body = document.getElementById('datasheet-body');
  var fade = document.getElementById('datasheet-fade');
  var btn = document.getElementById('datasheet-btn');
  if (!body || !fade || !btn) return;

  var isOpen = false;

  btn.addEventListener('click', function () {
    isOpen = !isOpen;
    if (isOpen) {
      body.style.maxHeight = body.scrollHeight + 'px';
      fade.style.display = 'none';
      btn.textContent = 'Weniger anzeigen';
    } else {
      body.style.maxHeight = '250px';
      fade.style.display = '';
      btn.textContent = 'Mehr anzeigen';
    }
  });
});
