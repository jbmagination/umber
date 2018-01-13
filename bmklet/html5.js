br = document.createElement('div');
br.style.background = 'white';
document.body.prepend(br);
pa = document.querySelectorAll('[href*="1080p"],[href*="720p"],[href*="mp4"]');
for (xr of pa) {
  ya = document.createElement('p');
  ya.innerHTML = xr.href;
  zu = document.createElement('video');
  zu.controls = 1;
  zu.src = xr.href;
  zu.style.width = '600px';
  br.append(ya, zu);
}
