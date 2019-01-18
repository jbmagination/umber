rm = document.querySelectorAll('video');
new Set([...document.querySelectorAll([
   '[href*="1080p"]',
   '[href*="400p"]',
   '[href*="720p"]',
   '[href*="mp4"]',
   '[src*="mp4"]'
].join())].map(fe => fe.href || fe.src)).forEach(fe => {
   pm = document.createElement('p');
   vd = document.createElement('video');
   vd.controls = vd.style.width = '600px';
   pm.textContent = vd.src = fe;
   document.body.prepend(pm, vd);
});
rm.forEach(fe => fe.remove());
