function diffArray(arr1, arr2) {
  var results = arr1.concat(arr2);

  return results.filter(function(val) {
    if (arr1.indexOf(val) === -1 || arr2.indexOf(val) === -1) {
      return val;
    }
  });
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
