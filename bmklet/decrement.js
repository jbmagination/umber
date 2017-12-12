mi = location.href.split(/(\d+)/);
no = mi.length - 2;
os = mi[no];
mi[no]--;
if ((mi[no] + '').length < os.length) {
  mi[no] = os.match(/0+/) + mi[no];
}
location.href = mi.join('');
