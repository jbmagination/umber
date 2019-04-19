'use strict';

function dura(s1) {
   let h1 = s1 / (60 * 60) | 0;
   s1 %= 60 * 60;
   let m1 = s1 / 60 | 0;
   s1 %= 60;
   let h2 = h1 ? h1 + ':' : '';
   let m2 = h1 && m1 < 10 ? '0' + m1 : m1;
   let s2 = s1 < 10 ? '0' + s1 : s1;
   return h2 + m2 + ':' + s2;
}

function qo(z) {
   return document.querySelector(z);
}

async function main() {
   let vdeo = qo('[itemprop="videoId"]').content;
   let ifrm = document.createElement('iframe');
   ifrm.src = 'embed/' + vdeo + '?autoplay=1';
   ifrm.className = 'player-height player-width';
   ifrm.setAttribute('allowFullScreen', '');
   qo('#player-api').append(ifrm);
   qo('#player-unavailable').style.display = 'none';
   qo('#player').className = 'content-alignment watch-small';
   qo('#watch7-sidebar-modules').innerHTML =
      '<ul id="watch-related" class="video-list"></ul>';
   let afet = await fetch('get_video_info?asv=3&eurl=https://.&video_id=' + vdeo);
   let url1 = new URLSearchParams(await afet.text());
   url1.get('rvs').split(',').forEach(z => {
      let url2 = new URLSearchParams(z);
      if (url2.get('list')) {
         return;
      }
      qo('ul#watch-related').innerHTML +=
      `<li class="video-list-item">
         <a href="watch?v=${url2.get('id')}">
            <span class="yt-uix-simple-thumb-wrap yt-uix-simple-thumb-related">
               <img src="//i.ytimg.com/vi/${url2.get('id')}/sd1.jpg">
               <span class="video-time">${dura(url2.get('length_seconds'))}</span>
            </span>
            <span class="title">${url2.get('title')}</span>
            <span class="stat">by ${url2.get('author')}</span>
         </a>
      </li>`;
   });
}

main();
