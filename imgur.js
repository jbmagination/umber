function p(q) {
  return document.querySelector(q);
}
p('.right .panel').style.padding =
p('.left .panel').style.padding = '6px';
p('.left .panel').style.width = '670px';
p('#content').style.width = '1022px';
r = document.querySelectorAll('a[rel=image-list]');
for (s of r) {
  s.firstChild.style.width =
  s.firstChild.style.height =
  s.parentNode.style.width =
  s.parentNode.style.height = 'auto';
  s.firstChild.src = s.href + 'm.jpg';
}
