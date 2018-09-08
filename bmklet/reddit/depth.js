/* cloneNode retains event for some reason */
'use strict';
document.querySelectorAll('.comments').forEach(xr => {
   var zu = document.createElement('a');
   zu.style.border = 'thick solid green';
   zu.textContent = xr.textContent;
   zu.href = xr.href + '?depth=2';
   xr.replaceWith(zu);
});
