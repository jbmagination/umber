'use strict';
function qs(sct)
{
   return document.querySelector(sct);
}
function dr(s1)
{
   var h1 = s1 / (60 * 60) | 0;
   s1 %= 60 * 60;
   var m1 = s1 / 60 | 0;
   s1 %= 60;
   var h2 = h1 ? h1 + ':' : '';
   var m2 = h1 && m1 < 10 ? '0' + m1 : m1;
   var s2 = s1 < 10 ? '0' + s1 : s1;
   return h2 + m2 + ':' + s2;
}
async function main()
{
   var vd = qs('[itemprop="videoId"]').content;
   var fm = document.createElement('iframe');
   fm.src = 'embed/' + vd + '?autoplay=1';
   fm.className = 'player-height player-width';
   fm.setAttribute('allowFullScreen', '');
   qs('#player-api').append(fm);
   qs('#player-unavailable').style.display = 'none';
   qs('#player').className = 'content-alignment watch-small';
   qs('#watch7-sidebar-modules').innerHTML =
      '<ul id="watch-related" class="video-list"></ul>';
   var ft = await fetch('get_video_info?asv=3&eurl=http://.&video_id=' + vd);
   var vn = new URLSearchParams(await ft.text());
   vn.get('rvs').split(',').forEach(xr => {
      var qa = new URLSearchParams(xr);
      if (qa.get('list'))
      {
         return;
      }
      qs('ul#watch-related').innerHTML +=
      `<li class="video-list-item">
         <a href="watch?v=${qa.get('id')}">
            <span class="yt-uix-simple-thumb-wrap yt-uix-simple-thumb-related">
               <img src="//i.ytimg.com/vi/${qa.get('id')}/default.jpg">
               <span class="video-time">${dr(qa.get('length_seconds'))}</span>
            </span>
            <span class="title">${qa.get('title')}</span>
            <span class="stat">by ${qa.get('author')}</span>
         </a>
      </li>`;
   });
}
main();
