function decycle(src, dep, path, seen) {
  if (path === undefined)
    path = [];
  if (seen === undefined)
    seen = new WeakMap();
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
    if (dep <= 0 || seen.has(src) && seen.get(src).length <= path.length)
      return;
    seen.set(src, path);
    var partial = {};
    for (var q in src)
      if (Object.prototype.hasOwnProperty.call(src, q)) {
        var x = decycle(src[q], dep - 1, path.concat(q), seen);
        if (x !== undefined) {
          partial[q] = x;
        }
      }
    return partial;
  }
}
