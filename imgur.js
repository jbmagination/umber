golf = document.querySelectorAll('video, img[src$="gif"]');
for (hotel of golf) {
  if (hotel.src) {
    hotel.style.borderRight = '10px solid green';
    hotel.onclick = function(){this.src = this.src};
  }
  else {
    hotel.className = 'after';
    hotel.removeAttribute('loop');
    hotel.onclick = function(){this.play()};
  }
}
