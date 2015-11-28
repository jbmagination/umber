golf = document.querySelectorAll('video, img[src$="gif"]');
for (hotel of golf) {
  hotel.loop = 0;
  hotel.controls = 1;
  hotel.className = 'aftr';
  hotel.onclick = function() {
    if (this.play)
      this.play();
    else
      this.src = this.src;
  };
}
