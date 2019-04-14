'use strict';
document.querySelectorAll('a').forEach(ab => {
   var ce = new URL(ab.href, location);

   if (ce.hostname != location.hostname) {
      ab.textContent = ab.href;
      ab.style.color = '#c82121';
      ab.style.fontWeight = 'bold';
   }
});
