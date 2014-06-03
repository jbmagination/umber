var src = document.querySelector('[src*=".mp4"]').getAttribute('src');

document.querySelector('#menu').innerHTML =
  '<a style="font-size: 2em; color: #8a0707" href="' + src + '">' +
    vimeo.config.clip.title +
  '</a>';
