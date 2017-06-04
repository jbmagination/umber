function gsub(obc, src) {
  return keys(obc).reduce(
    (acc, cva) => acc.replace(new RegExp(cva, 'g'), obc[cva]), src
  );
}

function recurse(obc, arr, seen) {
  if (typeof arr == 'undefined')
    arr = [obc];
  if (typeof seen == 'undefined')
    seen = [];
  if (seen.indexOf(obc) >= 0)
    return;
  seen.push(obc);
  for (ya in obc)
    if (obc.hasOwnProperty(ya)) {
      arr.push(obc[ya]);
      if (typeof obc[ya] == 'object') {
        recurse(obc[ya], arr, seen);
      }
    }
  return arr;
}

function strings(arr) {
  return arr.filter(x => typeof x == 'string');
}
