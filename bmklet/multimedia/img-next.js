q = location.href.split(/(\d+)/);
x = q.length - 2;
z = q[x];
q[x]++;
if ((q[x] + '').length < z.length)
{
   q[x] = z.match(/0+/) + q[x];
}
location.href = q.join('');
