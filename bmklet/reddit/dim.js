q = document.querySelectorAll('.comment .entry');
for (z of q) {
  if (z.textContent.length < 300) {
    z.style.opacity = .3;
  }
}
