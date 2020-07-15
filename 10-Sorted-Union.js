function uniteUnique(arr) {
  var args = arguments[0];
  for (var i = 0; i < arguments.length; i++) {
    for (var j = 0; j < arguments[i].length; j++) {
      if (args.indexOf(arguments[i][j]) === -1) {
        args.push(arguments[i][j]);
      }
    }
  }
  return args;
}

// Solution #2
function uniteUnique(arr) {
  const args = [...arguments]
  const result = [];
  args.forEach((item => (result.push(...item))));
  return [...new Set(result)];
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
