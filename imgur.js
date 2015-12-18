function vi(wh) {
  return document.querySelector(wh);
}
vi('.right .panel').style.padding =
vi('.left .panel').style.padding = '6px';
vi('.left .panel').style.width = '670px';
vi('#content').style.width = '1022px';
xr = document.querySelectorAll('a[rel=image-list]');
for (ya of xr) {
  ya.firstChild.style.width =
  ya.firstChild.style.height =
  ya.parentNode.style.width =
  ya.parentNode.style.height = 'auto';
  ya.firstChild.src = ya.href + 'm.jpg';
}
