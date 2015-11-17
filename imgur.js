golf = document.querySelectorAll('video, img[src$="gif"]');
for (hotel of golf) {
  hotel.className = 'after';
  hotel.removeAttribute('loop');
  hotel.onclick = function() {
    if (this.src)
      this.src = this.src;
    else
      this.play();
  };
}
