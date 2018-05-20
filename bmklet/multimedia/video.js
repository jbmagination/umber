rm = document.querySelectorAll('video');
qs = document.querySelectorAll(
  '[href*="1080p"],[href*="720p"],[href*="400p"],[href*="mp4"],[src*="mp4"]'
);
new Set([...qs].map(fe => fe.href || fe.src)).forEach(fe => {
  pm = document.createElement('p');
  vd = document.createElement('video');
  vd.controls = vd.style.width = '600px';
  pm.textContent = vd.src = fe;
  document.body.prepend(pm, vd);
});
rm.forEach(fe => fe.remove());
