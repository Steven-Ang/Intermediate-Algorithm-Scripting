function fearNotLetter(str) {
  var alpha = "abcdefghijklmnopqrstuvwxyz";

  if (alpha.includes(str)) {
    return undefined;
  } else {
    for (var i = 0; i < alpha.length; i++) {
      if (alpha.charCodeAt(i) !== str.charCodeAt(i)) {
        return String.fromCharCode(alpha.charCodeAt(i));
      }
    }
  }
}

// Solution #2
let alpha = 'abcdefghijklmnopqrstuvwxyz';
  if (str === alpha) return undefined;
  else {
    alpha = alpha.split('');
    let start = alpha.indexOf(str[0])
    let i = 0;
    while (i < str.length) {
      let target = alpha.indexOf(str[i]);
      if (start !== target) {
        return alpha[start];
      }
      start++;
      i++;
    }
  }

fearNotLetter("abce");
