function diffArray(arr1, arr2) {
  // Concat the two arrays and then filter the values later on
	const results = arr1.concat(arr2);
	return results.filter(val => {
    // If there are unique value in any of the arrays, return them
		if (arr1.indexOf(val) === -1 || arr2.indexOf(val) === -1) return val
	});
}

// Solution #2
function diffArray(arr1, arr2) {
  if (arr1.length === 0) return arr2
  else if (arr2.length === 0) return arr1;
  else if (arr1.length === 0 && arr2.length === 0) return [];

  const result = [];

  function compare(arr1, arr2, arrToPush) {
    arr1.forEach(item => {
      if (!arr2.includes(item)) {
        arrToPush.push(item);
      }
    });
  }

  compare(arr1, arr2, result);
  compare(arr2, arr1, result);

  return result;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
