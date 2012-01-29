// userscripts.org/scripts/review/77688
var base = 'http://vimeo.com/moogaloop/';
var cid = document.getElementById('clip_id').value;
var x = new XMLHttpRequest;

// vimeo.com/moogaloop/load/clip:21840676
x.open('get', base + 'load/clip:' + cid, false);

x.send();
x = x.responseXML;
var rs = x.getElementsByTagName('request_signature')[0].textContent;
var rse = x.getElementsByTagName('request_signature_expires')[0].textContent;

// vimeo.com/moogaloop/play/clip:21840676/76c84c528d236eb7ecbaa7663f46eabb/1327860405
var url = base + 'play/clip:' + cid + '/' + rs + '/' + rse;

var toolbar = document.getElementById('toolbar');
toolbar.innerHTML =
'<a href=' + url + '>SD</a>' +
'<br>' +
'<a href=' + url + '?q=hd>HD</a>';