function pairElement(str) {
  var results = [];
  str.split("");

  for (var i = 0; i < str.length; i++) {
    switch(str[i]) {
      case "G":
        results.push(["G", "C"]);
        break;
      case "C":
        results.push(["C", "G"]);
        break;
      case "A":
        results.push(["A", "T"]);
        break;
      case "T":
        results.push(["T", "A"]);
        break;
    }
  }

  return results;
}

pairElement("GCG");
