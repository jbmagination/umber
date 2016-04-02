function alfa(bravo) {
  console.log(bravo.responseText);
}
function curl(url, delta) {
  var xhr = new XMLHttpRequest();
  xhr.open('get', url);
  xhr.onload = function() delta(this);
  xhr.send();
}
echo = 'https://raw.githubusercontent.com/svnpenn/bm/gh-pages/readme.md';
curl(echo, alfa);
console.log('foxtrot');
