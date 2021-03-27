let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

arr.map(subarr => {
  return subarr.slice().sort((a, b) => {
    if (typeof subarr[0] === "number") return b - a;
    if (a < b) return 1;
    else if (a > b) return -1;
    return 0;
  });
});