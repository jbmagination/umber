ju = document.createElement('div');
ju.style.background = 'white';
document.body.insertBefore(ju, document.body.firstChild);
/* (.) means we have to use quotes */
ki = document.querySelectorAll('[href*=".mp4"]');
for (li of ki) {
  mi = document.createElement('p');
  mi.innerHTML = li.href.replace(/.*\/|\?.*/g, '');
  ju.appendChild(mi);
  no = document.createElement('video');
  no.controls = 1;
  no.src = li.href;
  no.style.width = '600px';
  ju.appendChild(no);
}
