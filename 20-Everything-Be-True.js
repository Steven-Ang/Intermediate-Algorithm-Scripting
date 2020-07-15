function truthCheck(collection, pre) {
  // Is everyone being true?
  return collection.every(function(obj) {
    return obj[pre];
  });
}

// Solution #2
function truthCheck(collection, pre) {
  for (let obj of collection) {
    if (!obj[pre]) return false;
  }
  return true;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
