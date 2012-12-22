// userscripts.org/scripts/review/112123
var player = document.getElementsByClassName("player")[0].getAttribute("id");
player = eval(player.replace("player_", "clip"));
var time = player.config.request.timestamp;
var sig = player.config.request.signature;
var clip_id = window.location.href.substring(17);

var url = "http://player.vimeo.com/play_redirect" +
  "?clip_id=" + clip_id +
  "&sig=" + sig +
  "&time=" + time;

var v = document.getElementById("menu");
v.style.fontSize = "4em";
v.style.lineHeight = "1em";

v.innerHTML =
  "<a href='" + url + "'>SD</a>, " +
  "<a href='" + url + "&quality=hd'>HD</a>";
