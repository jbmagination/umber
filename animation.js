g = document.querySelectorAll('video[loop], img[src$=gif]');
for (h of g) {
  h.className = 'aftr';
  if (h.play) {
    h.loop = h.onclick = h.onmousemove = h.onmouseenter = h.onmouseleave = 0;
    h.onmouseover = function(){this.controls = 1};
  }
  else
    h.onclick = function(){this.src = this.src};
}
