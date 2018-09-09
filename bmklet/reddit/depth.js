/* cloneNode retains event for some reason */
'use strict';
document.querySelectorAll('.comments, .deepthread a').forEach(xr => {
   var zu = document.createElement('a');
   zu.style.border = 'thick solid green';
   zu.textContent = xr.textContent;
   zu.href = xr.href + '?depth=3';
   xr.replaceWith(zu);
});
