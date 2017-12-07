function sumFibs(num) {
  var seq = [1,1];

  while (seq[seq.length-2] + seq[seq.length-1] <= num) {
    seq.push(seq[seq.length-2] + seq[seq.length-1]);
  }

  return seq.filter(function(num) {
    return num % 2 !== 0;
  }).reduce(function(a, b) {
    return a + b;
  });
}

sumFibs(4);
