j = document.querySelectorAll('.comment .entry');
for (k of j)
  if (k.textContent.length < 300)
    k.style.opacity = .3;
