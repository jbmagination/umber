addEventListener('timeupdate', function(p) p.target.loop = 0, 1);
q = document.querySelectorAll('video[loop], img[src$=gif]');
for (r of q) {
  r.className = 'aftr';
  if (r.play) {
    r.onmouseover = function() this.controls = 1;
    r.onclick = function() {
      this.parentNode.replaceChild(this.cloneNode(1), this);
      this.src = '';
    };
  }
  else
    r.onclick = function() this.src = this.src;
}
