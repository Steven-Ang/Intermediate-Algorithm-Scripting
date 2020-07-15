function sumFibs(num) {
  const seq = [1,1];
  // seq[seq.length - 1] === Current Value
  // seq[seq.length - 2] === Previous Value
  while (seq[seq.length - 2] + seq[seq.length - 1] <= num) {
    let fibNum = seq[seq.length - 2] + seq[seq.length - 1]
    console.log(num, fibNum);
    seq.push(fibNum);
  }

  return seq.filter((num) => (num % 2 !== 0)).reduce((sum, num) => (sum + num));
}

sumFibs(4);
