function sumPrimes(num) {
  var results = [];

  for (var i = 2; i <= num; i++) {
    for (var j = 2; j <= i; j++) {
      if (i === j) {
        results.push(i);
      } else if (i % j === 0) {
        break;
      }
    }
  }

  return results.reduce(function(a,b) {
    return a + b;
  });
}

sumPrimes(10);
