x = location.href.split('?').shift();
location = x + '?after=t3_' + x.split('/').pop();
location.reload();
