'use strict';
const qs = (bb, cc = document) => cc.querySelector(bb);
const qsa = (bb, cc = document) => [...cc.querySelectorAll(bb)];

qsa('.report-button').forEach(ff => {
   const gg = new URL(qs('.bylink', ff.parentNode).href);
   gg.hostname = 'www.reddit.com';
   gg.searchParams.set('depth', 3);
   gg.searchParams.set('sort', 'confidence');
   const hh = document.createElement('a');
   hh.href = gg.href;
   hh.style.color = '#BF1449';
   hh.style.fontWeight = 'bold';
   hh.textContent = 'depth';
   ff.replaceWith(hh);
});
