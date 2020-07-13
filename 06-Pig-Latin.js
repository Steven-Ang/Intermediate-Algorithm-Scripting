function translatePigLatin(str) {
  var vowels = str.match(/[aeiou]/i);
  var firstPosition = str.indexOf(vowels);

  if (firstPosition > 0) {
    return str.slice(firstPosition) + str.slice(0, firstPosition) + "ay";
  }

  return str + "way";
}

// Solution #2
function translatePigLatin(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let result = '';
  // If the first character is a vowel
  // Add 'way' to the end and return it
  if (vowels.includes(str[0].toLowerCase())) {
    result = str + 'way';
    return result;
  }
  for (let i = 0; i < str.length; i++) {
    // If one of the character is a vowel
    // Move the characters before it to the end and add 'ay' to the end then return
    if (vowels.includes(str[i].toLowerCase())) {
      const sliced = str.substr(0, i);
      const restOfStr = str.substr(i);
      result = restOfStr + sliced + 'ay';
      return result
    }
  }
  // The string doesn't contain any vowel
  // Add 'ay" to the end and return
  return str + 'ay';
}

translatePigLatin("california");
