function whatIsInAName(collection, source) {

  var keys = Object.keys(source);

  return collection.filter(function(val) {
    for (var key of keys) {
      if (!val.hasOwnProperty(key) || val[key] !== source[key]) {
        return false;
      }
    }
    return true;
  });
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
