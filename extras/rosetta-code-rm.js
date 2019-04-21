'use strict';
var cb = (ae, df = document) => [...df.querySelectorAll(ae)];
var hk = [];
cb('[title*="/Omit"]').forEach(np => np.remove());

cb('[title^="Category:"]').forEach(np => {
   if (hk.includes(np.title)) {
      np.remove();
   }
   else {
      hk.push(np.title);
   }
});
