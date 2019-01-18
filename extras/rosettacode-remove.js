'use strict';
var x = [];
document.querySelectorAll('[title^="Category:"]').forEach(z => {
   if (x.includes(z.title))
   {
      z.remove();
   }
   else
   {
      x.push(z.title);
   }
});
