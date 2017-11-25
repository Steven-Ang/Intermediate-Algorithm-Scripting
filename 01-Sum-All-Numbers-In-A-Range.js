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

sumAll([1, 4]);
