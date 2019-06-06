'use strict';
{
   const qsa = bb => [...document.querySelectorAll(bb)];

   /* inner quotes are required */
   const cc = [
      '[href*="1080p"]',
      '[href*="400p"]',
      '[href*="720p"]',
      '[href*="mp4"]',
      '[src*="mp4"]'
   ];

   /* need variable so that we remove only old elements */
   const dd = qsa('video');

   new Set(qsa(cc.join()).map(bb => bb.href || bb.src)).forEach(bb => {
      const e_fu = document.createElement('figure');
      const e_v = document.createElement('video');
      const e_fc = document.createElement('figcaption');
      e_v.controls = e_v.style.width = '600px';
      e_v.src = e_fc.textContent = bb;
      e_fu.style.margin = '16px';
      e_fu.append(e_v, e_fc);
      document.body.prepend(e_fu);
   });

   dd.forEach(bb => bb.remove());
}
