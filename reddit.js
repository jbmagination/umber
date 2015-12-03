golf = document.querySelectorAll('.comment .entry');
for (hotel of golf) {
  if (hotel.textContent.length < 300)
    hotel.style.opacity = .3;
}
