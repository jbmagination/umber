'use strict';
const gei = dd => document.getElementById(dd);
const path = 'https://github.com/cup/umber/releases/download';

fetch('/umber/radio/assets/data.json').then(ee => ee.json()).then(ee => {
   const vpar = new URLSearchParams(location.search).get('v');
   const vdeo = ee.find(trck => trck[0] == vpar);
   const dstr = new Date(vdeo[0] * 1000).toDateString();

   gei('listen').src = path + '/' + vdeo[2].slice(2) + '/' + vdeo[0];
   gei('listen').poster = path + '/' + vdeo[2].slice(2) + '/image.jpg';
   gei('artist').textContent = vdeo[3];
   gei('date').textContent = 'released ' + vdeo[1] + ' - posted ' + dstr;
   document.title = vdeo[3] + ' - Umber Listen';
});
