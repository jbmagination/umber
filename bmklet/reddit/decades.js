alert(
  [...new Set(
    [...document.querySelectorAll('.linkflairlabel')]
    .map(z => z.textContent.substr(0, 3))
  )].sort().reverse()
);
