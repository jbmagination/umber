br = document.createElement('div');
br.style.background = 'white';
document.body.prepend(br);
document.querySelectorAll('[href*="1080p"],[href*="720p"],[href*="mp4"]')
.forEach(xr => {
  ya = document.createElement('p');
  zu = document.createElement('video');
  zu.controls = zu.style.width = '600px';
  ya.textContent = zu.src = xr.href;
  br.append(ya, zu);
});
