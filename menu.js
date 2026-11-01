(function () {
  var btn = document.getElementById('menuBtn');
  var menu = document.getElementById('navMenu');
  if (!btn || !menu) return;
  function close() {
    menu.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  }
  btn.addEventListener('click', function () {
    var open = !menu.classList.contains('open');
    menu.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', String(open));
  });
  menu.addEventListener('click', function (e) {
    if (e.target.closest('a') || e.target.closest('#setBtn')) close();
  });
  document.addEventListener('click', function (e) {
    if (menu.classList.contains('open') && !menu.contains(e.target) && !btn.contains(e.target)) close();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu.classList.contains('open')) {
      close();
      btn.focus();
    }
  });
  window.addEventListener('resize', function () {
    if (innerWidth > 700) close();
  });
})();
