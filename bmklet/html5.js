br = document.createElement('div');
br.style.background = 'white';
document.body.prepend(br);
document.querySelectorAll('[href*="1080p"],[href*="720p"],[href*="mp4"]')
.forEach(xr => {
  ya = document.createElement('p');
  ya.textContent = xr.href;
  zu = document.createElement('video');
  zu.controls = 1;
  zu.src = xr.href;
  zu.style.width = '600px';
  br.append(ya, zu);
});
