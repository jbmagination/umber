'use strict';
document.querySelectorAll('p, li').forEach(xr => {
   if (RegExp('^https?://').test(xr.innerHTML))
   {
      let zu = document.createElement('a');
      zu.href = zu.textContent = xr.textContent;
      xr.firstChild.replaceWith(zu);
   }
});
