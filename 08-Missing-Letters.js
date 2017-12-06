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

fearNotLetter("abce");
