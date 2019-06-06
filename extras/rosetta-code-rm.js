'use strict';
const qsa = bb => [...document.querySelectorAll(bb)];
const cc = [];

qsa('[title*="/Omit"]').forEach(bb => bb.remove());

qsa('[title^="Category:"]').forEach(bb => {
   if (cc.includes(bb.title)) {
      bb.remove();
   }
   else {
      cc.push(bb.title);
   }
});
