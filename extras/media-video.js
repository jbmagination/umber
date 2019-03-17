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
   var np = document.createElement('p');
   var oq = document.createElement('video');
   oq.controls = oq.style.width = '600px';
   np.textContent = oq.src = ae;
   document.body.prepend(np, oq);
});

fk.forEach(ae => ae.remove());
