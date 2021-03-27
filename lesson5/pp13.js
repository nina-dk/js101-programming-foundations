let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

function addOdds(arr) {
  return arr.reduce((sum, num) => {
    return (num % 2 === 1 ? sum + num : sum);
  }, 0);
}

arr.sort((a, b) => addOdds(a) - addOdds(b));
console.log(arr);

//[ [ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ] ]