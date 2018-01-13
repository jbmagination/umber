/* FIXME use fetch or yt.player.Application.create */

function qysc(sctr) {
  return document.querySelector(sctr);
}
function ducr(euri) {
  return decodeURIComponent(euri).replace(/\+/g, ' ');
}
function curl(url) {
  var xhr = new XMLHttpRequest();
  xhr.open('get', url, false);
  xhr.send();
  return xhr.responseText;
}
function qysg(strg) {
  var qyay = [];
  for (var prsg of strg.split('&')) {
    var pray = prsg.split('=');
    qyay[pray[0]] = pray[1];
  }
  return qyay;
}
function tdur(s1) {
  var h1 = s1 / (60 * 60) | 0;
  s1 %= 60 * 60;
  var m1 = s1 / 60 | 0;
  s1 %= 60;
  var h2 = h1 ? h1 + ':' : '',
      m2 = h1 && m1 < 10 ? '0' + m1 : m1,
      s2 = s1 < 10 ? '0' + s1 : s1;
  return h2 + m2 + ':' + s2;
}

go = qysc('[itemprop="videoId"]').content;

ju = document.createElement('iframe');
ju.src = 'embed/' + go + '?autoplay=1';
ju.className = 'player-height player-width';
ju.setAttribute('allowFullScreen', '');
qysc('#player-api').append(ju);
qysc('#player-unavailable').style.display = 'none';
qysc('#player').className = 'content-alignment watch-small';

qysc('#watch7-sidebar-modules').innerHTML =
  '<ul id="watch-related" class="video-list"></ul>';
ki = curl('get_video_info?asv=3&eurl=http://.&video_id=' + go);
mi = qysg(ki);
wh = ducr(mi.rvs).split(',');

for (xr of wh) {
  zu = qysg(xr);
  if (zu.list) continue;
  qysc('ul#watch-related').innerHTML +=
  `<li class="video-list-item">
    <a href="watch?v=${zu.id}">
      <span class="yt-uix-simple-thumb-wrap yt-uix-simple-thumb-related">
        <img src="//i.ytimg.com/vi/${zu.id}/default.jpg">
        <span class="video-time">${tdur(zu.length_seconds)}</span>
      </span>
      <span class="title">${ducr(zu.title)}</span>
      <span class="stat">by ${ducr(zu.author)}</span>
    </a>
  </li>`;
}
