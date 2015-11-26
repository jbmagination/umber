function qry(sr) {
  var qa = [];
  for (var prs of sr.split('&')) {
    var pra = prs.split('=');
    qa[pra[0]] = pra[1];
  }
  return qa;
}

function curl(url, xml) {
  var xhr = new XMLHttpRequest();
  /* cors-anywhere.herokuapp.com */
  xhr.open('get', 'https://allow-any-origin.appspot.com/' + url, false);
  if (xml) xhr.overrideMimeType('text/xml');
  xhr.send();
  return xml ? xhr.responseXML : xhr.responseText;
}

function sprintf(nw) {
  var i = 0;
  while (/%s/.test(nw))
    nw = nw.replace('%s', arguments[++i])
  return nw;
}

String.prototype.grep = function (rgx) {
  return this.match(rgx)[1];
}

function decrypt_sig(input) {
  var golf = curl('https:' + ytplayer.config.assets.js).grep(/{([^]+)}/);
  var hotel = golf.grep(/signature\W+(\w+)/);
  try {eval(golf + sprintf('juliet = %s("%s")',hotel,input))} catch(e) {};
  return juliet;
}

alpha =
  'https://www.youtube.com/get_video_info?&video_id=19GFDljxrY0&el=detailpage';
bravo = curl(alpha);
charlie = qry(bravo);
delta = unescape(charlie.dashmpd);

/* get encrypted sig */
foxtrot = RegExp('/s/([^/]+)');
november = delta.grep(foxtrot);

/* decrypt */
papa = decrypt_sig(november);
quebec = delta.replace(foxtrot, '/signature/' + papa);
romeo = curl(quebec, 1).querySelector('[id="141"] BaseURL').textContent;
