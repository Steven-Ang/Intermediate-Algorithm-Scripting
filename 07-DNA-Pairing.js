function pairElement(str) {
  return str.split("").map(val => {
    switch(val) {
      case "G":
        return ["G", "C"];
        break;
      case "C":
        return ["C", "G"];
        break;
      case "A":
        return ["A", "T"];
        break;
      case "T":
        return ["T", "A"];
        break;
    }
  });
}

pairElement("ATCGA")
