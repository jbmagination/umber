'use strict';
let urlp = new URLSearchParams(location.search);
let plyr = document.getElementById('player');
plyr.autoplay = 1;

async function main()
{
   let trks = await (await fetch('/mauve/assets/data.json')).json();
   let vdeo = trks.find(_1 => _1[0] == urlp.get('v'));
   let py = vdeo[2].split(',');
   plyr.src = 'https://v.redd.it/' + py[1] + '/audio';
   plyr.poster = 'https://i.redd.it/' + py[2] + '.jpg';
   document.getElementById('header').textContent = vdeo[3];
   document.title = vdeo[3] + ' | Mauve';
}

main();
