qs = [
  '[href*="1080p"]', '[href*="720p"]', '[href*="400p"]', '[href*="mp4"]',
  '[src*="mp4"]'
];
dv = document.createElement('div');
document.querySelectorAll(qs.join()).forEach(fe => {
  pm = document.createElement('p');
  vd = document.createElement('video');
  vd.controls = vd.style.width = '600px';
  pm.textContent = vd.src = fe.href || fe.src;
  dv.append(pm, vd);
});
document.body.prepend(dv);
