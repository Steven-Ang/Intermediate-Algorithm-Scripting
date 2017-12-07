function smallestCommons(arr) {
  var range = [];
  var min = Math.min(arr[0], arr[1]);
  var max = Math.max(arr[0], arr[1]);

  for (var i = min; i <= max; i++) {
    range.push(i);
  }

  return range.reduce(function(a,b) {
    var k = a * b;

    while(b !== 0) {
      var z = a % b;
      a = b;
      b = z;
    }

    return k/a;
  });
}


smallestCommons([1,5]);
