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
  var h1 = Math.floor(s1/(60 * 60));
  s1 %= 60 * 60;
  var m1 = Math.floor(s1/60);
  s1 %= 60;
  var h2 = h1 ? h1+':' : '',
      m2 = h1 && m1<10 ? '0'+m1 : m1,
      s2 = s1<10 ? '0'+s1 : s1;
  return h2 + m2 + ':' + s2;
}

alf = qysc('[itemprop="videoId"]').content;

bra = document.createElement('iframe');
bra.src = 'embed/' + alf + '?autoplay=1';
bra.className = 'player-height player-width';
qysc('#player-api').appendChild(bra);
qysc('#player-unavailable').style.display = 'none';
qysc('#player').className = 'content-alignment watch-small';

qysc('#watch7-sidebar-modules').innerHTML =
  '<ul id="watch-related" class="video-list"></ul>';
cha = curl('get_video_info?asv=3&eurl=http://.&video_id=' + alf);
del = qysg(cha);
ech = ducr(del.rvs).split(',');

for (fox of ech) {
  gol = qysg(fox);
  if (gol.list) continue;
  qysc('ul#watch-related').innerHTML +=
  '<li class="video-list-item">' +
    '<a href="watch?v=' + gol.id + '">' +
      '<span class="yt-uix-simple-thumb-wrap yt-uix-simple-thumb-related">' +
        '<img src="//i.ytimg.com/vi/' + gol.id + '/default.jpg">' +
        '<span class="video-time">' + tdur(gol.length_seconds) + '</span>' +
      '</span>' +
      '<span class="title">' + ducr(gol.title) + '</span>' +
      '<span class="stat">by ' + ducr(gol.author) + '</span>' +
    '</a>' +
  '</li>';
}
