function diffArray(arr1, arr2) {
  // Concat the two arrays and then filter the values later on
	const results = arr1.concat(arr2);
	return results.filter(val => {
    // If there are unique value in any of the arrays, return them
		if (arr1.indexOf(val) === -1 || arr2.indexOf(val) === -1) return val
	});
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
