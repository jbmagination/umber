'use strict';
document.querySelectorAll('p, li').forEach(b => {
   let k = b.innerHTML;
   if (RegExp('^https?://').test(k))
   {
      let z = document.createElement('a');
      z.href = z.textContent = k;
      b.firstChild.replaceWith(z);
   }
});
