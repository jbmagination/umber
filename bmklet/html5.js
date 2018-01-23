dc = document;
br = dc.createElement('div');
br.style.background = 'white';
dc.body.prepend(br);
dc.querySelectorAll(`[href*="1080p"],[href*="720p"],[href*="400p"],
[href*="mp4"]`).forEach(xr => {
  ya = dc.createElement('p');
  zu = dc.createElement('video');
  zu.controls = zu.style.width = '600px';
  ya.textContent = zu.src = xr.href;
  br.append(ya, zu);
});
