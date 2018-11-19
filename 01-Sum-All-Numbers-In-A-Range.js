// Solution 1
// Future me: You complicated it.
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
  let total = 0;
  arr.sort((a,b) => a - b);
  for (let i = arr[0]; i <= arr[1]; i++) {
    total += i;
  }
  return total;
}

sumAll([1, 4]);
