x = location.href.split(':').pop();
y = isNaN(x) ? new Date / 1000 | 0 : x - 172800;
location.href = '//twitter.com/search?f=tweets&q=from:svnpenn since:' +
(y - 172800) + ' until:' + y;
