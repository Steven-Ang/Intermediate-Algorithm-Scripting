function convertHTML(str) {
  // &colon;&rpar;
  str = str.split("");
  for (var i = 0; i < str.length; i++) {
    switch(str[i]) {
      case "&":
        str[i] = "&amp;";
        break;
      case "<":
        str[i] ="&lt;";
        break;
      case ">":
        str[i] = "&gt;";
        break;
      case '"':
        str[i] = '&quot;';
        break;
      case "'":
        str[i]= "&apos;";
        break;
    }
  }
  return str.join("");
}

// Solution #2
function convertHTML(str) {
  const symbols = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;" 
  };
  const newStr = str.split('');
  for (let i = 0; i < str.length; i++) {
    let target = symbols[str[i]]
    if (target) newStr[i] = target;
  }
  return newStr.join('');
}

convertHTML('Stuff in "quotation marks"');
