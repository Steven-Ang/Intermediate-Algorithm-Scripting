function myReplace(str, before, after) {
  // If the first character is uppercase, then the replacement should be uppercase as well
  if (before.charAt(0) === before.charAt(0).toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  // Return the string
  return str.replace(before, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
