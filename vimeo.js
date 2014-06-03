var src = document.querySelector('[src*=".mp4"]').getAttribute('src');
var title = vimeo.config.clip.title;

var html = [
  '<p>Click to copy the filename, then right click to download</p>',
  '<a',
  'style="font-size: 2em; color: #8a0707;"',
  'href="' + src + '"',
  'onclick="prompt(&quot;&quot;,&quot;' + title + '&quot;);return false"',
  '>Link</a>'
];

document.querySelector('#menu').innerHTML = html.join(' ');
