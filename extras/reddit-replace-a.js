'use strict';
document.querySelectorAll('.link.thing').forEach(ab => {
   /* cloneNode retains event for some reason */
   const cf = ab.querySelector('a.title');
   const dh = document.createElement('a');
   dh.style.border = 'thick solid green';
   dh.className = 'title';
   dh.textContent = cf.textContent;
   dh.href = ab.dataset.url;
   cf.replaceWith(dh);
});
