function unique(src, dep, seen) {
  if (typeof seen === 'undefined')
    seen = [];
  switch (typeof src) {
  case 'undefined':
  case 'symbol':
  case 'function':
    return null;
  case 'boolean':
  case 'number':
  case 'string':
    return src;
  case 'object':
    if (src === null)
      return null;
    var partial = {};
    if (dep <= 0 || seen.indexOf(src) >= 0)
      return;
    seen.push(src);
    for (var k in src)
      if (Object.prototype.hasOwnProperty.call(src, k)) {
        var z = unique(src[k], dep - 1, seen);
        if (z !== undefined) {
          partial[k] = z;
        }
      }
    return partial;
  }
}
