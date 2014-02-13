function st(w, x) {
  return w.innerHTML.localeCompare(x.innerHTML);
}

op = [
  new Date().toLocaleTimeString()
];

nd = document.querySelectorAll('.video-time');
na = Array.prototype.slice.call(nd, 0);
na.sort(st);

for (em of na) {
  op.push(em.innerHTML);
}

dw = document.querySelector('#times');
if (!dw) {
  dw = document.createElement('div');
  dw.id = 'times';
  dw.style.position = 'fixed';
  dw.style.right = 0;
  dw.style.top = '4em';
  document.body.appendChild(dw);
}

dw.innerHTML = op.join('<br>');
