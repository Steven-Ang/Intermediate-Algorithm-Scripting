function convertToRoman(num) {
  var romanNum = {
    "M": 1000,
    "CM": 900,
    "D": 500,
    "CD": 400,
    "C": 100,
    "XC": 90,
    "L": 50,
    "XL": 40,
    "X": 10,
    "IX": 9,
    "V": 5,
    "IV": 4,
    "I": 1
  };

  var results = "";

  for (var key in romanNum) {
    while (num >= romanNum[key]) {
      results += key;
      num -= romanNum[key];
    }
  }

  return results;
}

convertToRoman(36);
