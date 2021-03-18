['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});

//[undefined, 'bear']
//Since the length of the first element in the calling array is not > 3,
//the callback function implicitly returns undefined, and that's what's
//being added as the first element of the returned array.
//'bear'.length is greater than 3, so 'bear' is returned on the 2nd iteration.