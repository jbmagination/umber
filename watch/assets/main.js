'use strict';
let urlp = new URLSearchParams(location.search);
let plyr = document.getElementById('player');
plyr.autoplay = 1;
plyr.src = 'https://v.redd.it/' + urlp.get('s') + '/audio';
plyr.poster = 'https://i.redd.it/' + urlp.get('p') + '.jpg';
