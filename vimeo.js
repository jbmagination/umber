var src = document.querySelector('[src*=".mp4"]').getAttribute('src');

var k = document.querySelector("#menu");
k.style.fontSize = "4em";
k.style.lineHeight = "1em";

k.innerHTML = '<a href="' + src + '">Download</a>';
