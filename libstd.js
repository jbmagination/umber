function unique(src, seen) {
  if (typeof seen == 'undefined')
    seen = [];
  switch (typeof src) {
  case 'function':
    return 'function';
  case 'boolean':
  case 'number':
  case 'string':
    return src;
  case 'object':
    var partial = {};
    if (seen.indexOf(src) >= 0)
      return;
    seen.push(src);
    for (var k in src)
      if (Object.prototype.hasOwnProperty.call(src, k)) {
        var z = unique(src[k], seen);
        if (z !== undefined) {
          partial[k] = z;
        }
      }
    return partial;
  }
}
