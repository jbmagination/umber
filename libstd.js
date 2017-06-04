function recurse(obc, arr) {
  if (typeof arr == 'undefined')
    arr = [obc];
  for (ya in obc)
    if (obc.hasOwnProperty(ya)) {
      arr.push(obc[ya]);
      if (typeof obc[ya] == 'object') {
        recurse(obc[ya], arr);
      }
    }
  return arr;
}

function strings(arr) {
  return arr.filter(x => typeof x == 'string');
}
