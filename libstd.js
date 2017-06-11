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
    var part = {};
    for (var [ky, vu] of Object.entries(src)) {
      part[ky] = decycle(vu, dep - 1, path.concat(ky), seen);
    }
    return part;
  }
}
