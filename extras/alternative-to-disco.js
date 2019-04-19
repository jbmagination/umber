'use strict';
document.querySelectorAll('.custom-icon-discontinued').forEach(z => {
   while (!z.dataset.mainitemid) {
      z = z.parentNode;
   }
   z.style.display = 'none';
});
