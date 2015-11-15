golf = document.querySelectorAll('[src$=gif]');
for (hotel of golf) {
  hotel.style.display = 'none';
  india = hotel.nextSibling;
  india.style.display = 'block';
  india.src = hotel.src.replace('gif', 'mp4');
  india.removeAttribute('loop');
}
