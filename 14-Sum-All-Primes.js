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

// Solution #2
function sumPrimes(num) {
  const primes = [];

  function isPrime(num) {
    for (let i = 2; i <= num; i++) {
      if (num % i === 0 && num !== i) {
        // If the number can be divided by the number i
        // and the number does not equal to the number i
        // then it's not a prime number 
        return false;
      }
    }
    return true;
  }

  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) primes.push(i);
  }

  return primes.reduce((sum, num) => (sum + num),0);
}

sumPrimes(10);
