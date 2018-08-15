'use strict';
document.querySelectorAll('.link.thing').forEach(wh => {
  var
  xr = wh.querySelector('a.title'),
  /* cloneNode retains event for some reason */
  zu = document.createElement('a');
  zu.style.border = 'thick solid green';
  zu.className = 'title';
  zu.textContent = xr.textContent;
  zu.href = wh.dataset.url;
  xr.replaceWith(zu);
});
