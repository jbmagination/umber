golf = document.createElement('div');
golf.style.background = 'white';
document.body.insertBefore(golf, document.body.firstChild);
hotel = document.querySelectorAll('[href*=".mp4"]');
for (india of hotel) {
  juliet = document.createElement('p');
  juliet.innerHTML = india.href.replace(/.*\/|\?.*/g, '');
  golf.appendChild(juliet);
  kilo = document.createElement('video');
  kilo.controls = true;
  kilo.src = india.href;
  kilo.style.width = '600px';
  golf.appendChild(kilo);
}
