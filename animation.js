addEventListener('timeupdate', function(x) x.target.loop = 0, true)
y = document.querySelectorAll('video[loop], img[src$=gif]');
for (z of y) {
  z.className = 'aftr';
  if (z.play) {
    z.onclick = z.onmousemove = z.onmouseenter = z.onmouseleave = 0;
    z.onmouseover = function() this.controls = 1;
  }
  else
    z.onclick = function() this.src = this.src;
}
