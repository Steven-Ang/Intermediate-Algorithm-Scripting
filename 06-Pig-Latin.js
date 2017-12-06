function translatePigLatin(str) {
  var vowels = str.match(/[aeiou]/i);
  var firstPosition = str.indexOf(vowels);

  if (firstPosition > 0) {
    return str.slice(firstPosition) + str.slice(0, firstPosition) + "ay";
  }

  return str + "way";
}

translatePigLatin("california");
