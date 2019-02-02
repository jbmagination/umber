'use strict';
var $$ = ae => document.querySelectorAll(ae);

var dh = [
   '[href*="1080p"]',
   '[href*="400p"]',
   '[href*="720p"]',
   '[href*="mp4"]',
   '[src*="mp4"]'
];

/* inner quotes are required */
new Set([...$$(dh.join())].map(ae => ae.href || ae.src)).forEach(ae => {
   var fk = document.createElement('p');
   var np = document.createElement('video');
   np.controls = np.style.width = '600px';
   fk.textContent = np.src = ae;
   document.body.prepend(fk, np);
});

$$('video').forEach(ae => ae.remove());
