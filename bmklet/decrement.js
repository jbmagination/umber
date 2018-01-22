x = location.href.split(/(\d+)/);
y = x.length - 2;
z = x[y];
x[y]--;
if ((x[y] + '').length < z.length) {
  x[y] = z.match(/0+/) + x[y];
}
location.href = x.join('');
