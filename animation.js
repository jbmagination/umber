golf = document.querySelectorAll('video, img[src$=gif]');
for (hotel of golf) {
  hotel.className = 'aftr';
  if (hotel.play) {
    hotel.loop = 0;
    hotel.onmouseover = function(){this.controls = 1};
  }
  else
    hotel.onclick = function(){this.src = this.src};
}
