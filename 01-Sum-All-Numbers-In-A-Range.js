// Solution 1
function sumAll(arr) {
  var results = [];
  var max = Math.max(arr[0], arr[1]);
  var min = Math.min(arr[0], arr[1]);

  for (var i = min; i <= max; i++) {
    results.push(i);
  }

  return results.reduce(function(a, b) {
    return a + b;
  });
}

// Solution 2
function sumAll(arr) {
  // Sort the array by ASC order
	arr.sort((a, b) => a - b);
  let sum = 0;
  for (let i = arr[0]; i <= arr[1]; i++) {
		sum += i;
  }
	return sum;
}

sumAll([1, 4]);
