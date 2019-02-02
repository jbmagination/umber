'use strict';
var $ = ae => document.querySelector(ae);
var $$ = ae => document.querySelectorAll(ae);

/* we need to base this number on the watch page and not the result page for
accuracy. this will give us some false highs but that is better than false
lows. */
var thold = 6000000;

/* get publish date */
var dp = $('[itemprop=datePublished]');

if (dp)
{
   /* get views */
   var vw = $('[itemprop=interactionCount]').content;

   /* get years */
   var yr = (Date.now() - Date.parse(dp.content)) / Date.parse(1971);

   var xc = document.createElement('textarea');
   xc.cols = 50;
   xc.style.font = 'medium Consolas';
   xc.style.position = 'fixed';
   xc.style.right = 0;
   xc.style.top = '50px';
   xc.style.zIndex = 6;
   xc.textContent = [
      '<flow: ' + Math.floor(vw / yr).toLocaleString(),
      '<link: https://youtu.be/' + $('[itemprop=videoId]').content
   ].map(ae => '      ' + ae).join('\n');
   document.body.append(xc);
}
else
{
   $$('.yt-lockup-meta-info').forEach(ul => {
      if (!ul.children[1])
      {
         return;
      }

      /* 1 year ago, Streamed 1 year ago */
      var [t_n, t_w] = ul.children[0].textContent.split(' ').slice(-3);

      /* get views */
      var views = ul.children[1].textContent.split(' ')[0].replace(/,/g, '');

      switch (t_w) {
      case 'year':
      case 'years':
         var fw = views / t_n;
         break;
      case 'month':
      case 'months':
         var fw = views * 12 / t_n;
         break;
      case 'week':
      case 'weeks':
         var fw = views * 52 / t_n;
         break;
      case 'day':
      case 'days':
         var fw = views * 365.25 / t_n;
         break;
      case 'hour':
      case 'hours':
         var fw = views * 24 * 365.25 / t_n;
         break;
      case 'minute':
      case 'minutes':
         var fw = views * 60 * 24 * 365.25 / t_n;
      }

      ul.style.border = fw < thold ? 'thick solid green' : 'thick solid red';
   });
}