golf = document.querySelectorAll('video[loop], img[src$=gif]');
for (hotel of golf) {
  hotel.className = 'aftr';
  if (hotel.play) {
    hotel.loop =
    hotel.onclick =
    hotel.onmousemove =
    hotel.onmouseenter =
    hotel.onmouseleave = 0;
    hotel.onmouseover = function(){this.controls = 1};
  }
  else
    hotel.onclick = function(){this.src = this.src};
}
