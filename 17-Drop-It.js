function dropElements(arr, func) {
  // Drop them elements.
  while(!func(arr[0])) { arr.shift(); }
  return arr;
}

// Solution #2
function dropElements(arr, func) {
  const result = [];
  let ignoreFlag = false;

  for (let i = 0; i < arr.length; i++) {
    let ele = arr[i];
    if (func(ele)) {
      result.push(ele);
      ignoreFlag = true
    } else if (ignoreFlag) {
      result.push(ele);
    }
  }

  return result;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
