'use strict';
document.querySelectorAll('.link').forEach(b => {
  var
  g = b.querySelector('a.title'),
  /* cloneNode retains event for some reason */
  z = document.createElement('a');
  z.style.border = 'thick solid green';
  z.className = 'title';
  z.textContent = g.textContent;
  z.href = b.dataset.url;
  g.replaceWith(z);
});
