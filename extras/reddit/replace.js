'use strict';
document.querySelectorAll('.link.thing').forEach(ab => {
   /* cloneNode retains event for some reason */
   let cf = ab.querySelector('a.title');
   let dh = document.createElement('a');
   dh.style.border = 'thick solid green';
   dh.className = 'title';
   dh.textContent = cf.textContent;
   dh.href = ab.dataset.url;
   cf.replaceWith(dh);
});
