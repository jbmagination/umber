addEventListener('timeupdate', function(wh) wh.target.loop = 0, 1);
xr = document.querySelectorAll('img, video');
for (ya of xr) {
  zu = ya.style;
  zu.boxSizing = 'border-box';
  if (ya.play) {
    zu.border = 'thick solid violet';
    zu.position = 'relative';
    zu.zIndex = 10;
    if (ya.duration) zu.display = 'block';
    ya.onmouseover = function() this.controls = 1;
    ya.onclick = function() {
      this.parentNode.replaceChild(this.cloneNode(1), this);
      this.src = '';
    };
  }
  else {
    zu.border = 'thick solid green';
    ya.onclick = function() this.src = this.src;
  }
}
