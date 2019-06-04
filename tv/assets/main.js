'use strict';

fetch('/umber/tv/assets/data.json').then(body => body.json()).then(chan => {
   chan.forEach(aa => {
      const e_a = document.createElement('a');
      const e_d = document.createElement('div');
      const e_fc = document.createElement('figcaption');
      const e_fu = document.createElement('figure');
      const e_i = document.createElement('img');
      const spar = new URLSearchParams;

      spar.set('c', aa[2]);
      // need final "/" to maintain HTTPS
      e_a.href = '/umber/watch/?' + spar;
      e_i.src = 'https://yt3.ggpht.com/' + aa[3];
      // needs to cover &#39;
      e_d.innerHTML = aa[1];
      e_fc.textContent = 'posted ' + new Date(aa[0] * 1000).toDateString();
      e_a.append(e_i, e_d);
      e_fu.append(e_a, e_fc);
      document.getElementById('figures').append(e_fu);
   });
});
