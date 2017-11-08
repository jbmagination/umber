alert(
  [...new Set(
    [...document.querySelectorAll('.linkflairlabel')]
    .map(z => z.innerText.substr(0, 3))
  )].sort().reverse()
);
