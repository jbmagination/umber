'use strict';
var cb = ae => [...document.querySelectorAll(ae)];

/* inner quotes are required */
var dh = [
   '[href*="1080p"]',
   '[href*="400p"]',
   '[href*="720p"]',
   '[href*="mp4"]',
   '[src*="mp4"]'
];

/* need variable so that we remove only old elements */
var fk = cb('video');

new Set(cb(dh.join()).map(ae => ae.href || ae.src)).forEach(ae => {
   var e_fu = document.createElement('figure');
   var e_v = document.createElement('video');
   var e_fc = document.createElement('figcaption');

   e_v.controls = e_v.style.width = '600px';
   e_v.src = e_fc.textContent = ae;
   e_fu.style.margin = '16px';

   e_fu.append(e_v, e_fc);
   document.body.prepend(e_fu);
});

fk.forEach(ae => ae.remove());
