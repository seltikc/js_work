const mixedArray = [3,13,74,14,66,15,22,4];

const isEven = function(namber) {
  return namber % 2 == 0;
}

const filter = function(arr, filterFn) {

  const filterS = [];

  arr.forEach(namber => {
    if (filterFn(namber)) {
      filterS.push(namber);
    }
  });

  return filterS;
}

console.log(filter(mixedArray, isEven));