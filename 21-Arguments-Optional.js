function addTogether() {

  function checkIfNumber (num) {
    return Number.isInteger(num) ? num : undefined;
  }

  var a = checkIfNumber(arguments[0]);
  var b = checkIfNumber(arguments[1]);

  if (arguments.length > 1) {
  return checkIfNumber(a + b);
  } else if (a) {
    return function(newArg) {
      return addTogether(a, newArg);
    };
  }
}

addTogether(2,3);
