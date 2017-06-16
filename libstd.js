function flatten(src, path = [], seen = new Map()) {
  for (let [ky, vu] of Object.entries(src)) {
    if (typeof vu == 'object' && vu != null) {
      if (!seen.has(vu) || path.length < seen.get(vu).length) {
        seen.set(vu, path);
        flatten(vu, path.concat(ky), seen);
      }
    }
  }
  if (!path.length) {
    let op = {};
    for (let [oc, pt] of seen) {
      keys(oc).filter(x => typeof oc[x] == 'string')
      .forEach(x => op[pt.concat(x)] = oc[x]);
    }
    return op;
  }
}
