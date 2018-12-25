'use strict';
var qs = sc => document.querySelector(sc);
/* get publish date */
var dp = qs('[itemprop=datePublished]');
if (dp)
{
   /* get views */
   var vw = qs('[itemprop=interactionCount]').content;
   /* get years */
   var yr = (Date.now() - Date.parse(dp.content)) / Date.parse(1971);
   /* format */
   var nf = nm => (~~nm).toLocaleString();
   /* prepend */
   if (!qs('textarea'))
   {
      var tx = document.createElement('textarea');
      tx.cols = 50;
      tx.style.font = '2ex Consolas';
      tx.textContent = '      $URL: http://youtu.be/' +
         qs('[itemprop=videoId]').content + '\n      $VPY: ' + nf(vw / yr);
      qs('#watch7-sidebar').prepend(tx);
   }
}
else
{
   document.querySelectorAll('.yt-lockup-meta-info').forEach(ul => {
      if (!ul.children[1])
      {
         return;
      }
      var t_n, t_w, ratio, views;
      /* 1 year ago, Streamed 1 year ago */
      [t_n, t_w] = ul.children[0].textContent.split(' ').slice(-3);
      /* get views */
      views = ul.children[1].textContent.split(' ')[0].replace(/,/g, '');
      /* get ratio */
      switch (t_w)
      {
      case 'year':
      case 'years':
         ratio = views / t_n;
         break;
      case 'month':
      case 'months':
         ratio = views * 12 / t_n;
         break;
      case 'week':
      case 'weeks':
         ratio = views * 52 / t_n;
         break;
      case 'day':
      case 'days':
         ratio = views * 365.25 / t_n;
         break;
      case 'hour':
      case 'hours':
         ratio = views * 24 * 365.25 / t_n;
         break;
      case 'minute':
      case 'minutes':
         ratio = views * 60 * 24 * 365.25 / t_n;
         break;
      default:
         ratio = 'bad';
      }
      if (ratio == 'bad')
      {
         ul.style.border = 'thick solid yellow';
      }
      /* we need to base this number on the watch page and not the result page
      for accuracy. this will give us some false reds but that is better than
      false greens. */
      else if (ratio < 6000000)
      {
         ul.style.border = 'thick solid green';
      }
      else
      {
         ul.style.border = 'thick solid red';
      }
   });
}
