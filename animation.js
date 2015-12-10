addEventListener('timeupdate', function(p) p.target.loop = 0, true);
q = document.querySelectorAll('video[loop], img[src$=gif]');
for (r of q) {
  r.className = 'aftr';
  if (r.play) {
    s = r.cloneNode(1);
    s.onmouseover = function() this.controls = 1;
    r.parentNode.replaceChild(s, r);
  }
  else
    r.onclick = function() this.src = this.src;
}
