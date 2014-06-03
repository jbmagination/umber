var src = document.querySelector('[src*=".mp4"]').getAttribute('src');

with (document.querySelector('#menu')) {
  style.fontSize = '4em';
  style.lineHeight = '1em';
  innerHTML = '<a href="' + src + '">Download</a>';
}
