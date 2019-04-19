'use strict';
var cb = (ae, df = document) => [...df.querySelectorAll(ae)];
var x = [];
cb('[title*="/Omit"]').forEach(z => z.remove());

cb('[title^="Category:"]').forEach(z => {
   if (x.includes(z.title)) {
      z.remove();
   }
   else {
      x.push(z.title);
   }
});
