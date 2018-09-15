'use strict';
document.querySelectorAll('.link.thing').forEach(wh => {
   /* cloneNode retains event for some reason */
   var xr = wh.querySelector('a.title'), zu = document.createElement('a');
   zu.style.border = 'thick solid green';
   zu.className = 'title';
   zu.textContent = xr.textContent;
   zu.href = wh.dataset.url;
   xr.replaceWith(zu);
});
