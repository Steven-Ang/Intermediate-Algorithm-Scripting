function myReplace(str, before, after) {
  // If the first character is uppercase, then the replacement should be uppercase as well
  if (before.charAt(0) === before.charAt(0).toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  // Return the string
  return str.replace(before, after);
}

// Solution #2
function myReplace(str, before, after) {
  let newStr = str.split(' ');
  let target = newStr.indexOf(before);
  newStr[target] = (before[0].toUpperCase() === before[0]) ? after[0].toUpperCase() + after.substr(1) : after;
  return newStr.join(' ');
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
