addEventListener('timeupdate', wh => wh.target.loop = 0, 1);
xr = document.querySelectorAll('img, video');
for (ya of xr) {
  zu = ya.style;
  zu.boxSizing = 'border-box';
  if (ya.play) {
    ya.onmouseover = function () this.controls = 1;
    zu.setProperty('border', 'thick solid violet', 'important');
    if (location.host == 'streamable.com') {
      zu.position = 'relative';
      zu.zIndex = 1000;
      ya.onclick = function () {
        this.parentNode.replaceChild(this.cloneNode(1), this);
        this.src = '';
      };
    }
  }
  else {
    ya.onmouseover = function () this.src = this.src;
    zu.border = `thick solid ${ya.src.includes('.gif') ? 'green' : 'peru'}`;
  }
}
