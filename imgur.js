golf = document.querySelectorAll('img[src*=gif], video[style*=width]');
for (hotel of golf) {
  india = document.createElement('button');
  india.innerHTML = 'Replay';
  india.onclick = function()  {
    juliet = this.previousSibling;
    if (juliet.src)
      juliet.src = juliet.src;
    else
      juliet.play();
  }
  hotel.parentNode.insertBefore(india, hotel.nextSibling);
  hotel.style.border = 0;
  hotel.removeAttribute('loop');
}
