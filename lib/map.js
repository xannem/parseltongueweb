const convert = (str) => {
  var hash = new Object();
  hash = {
    "colon": ":",
    "doubleequals": "== ",
    "equals": " = ",
    "enter": "\n",
    "quote": "\"",
    "openparenthesis": "(",
    "openparentheses": "(",
    "closeparenthesis": ") ",
    "closedparentheses": ") ",
    "closedparenthesis": ") ",
    "closeparentheses": ") ",
    "dot": ".",
    "comment": "#",
    "lessthan": "<",
    "greaterthan": ">",
    "equalto": "= ",
    "underscore": "_",
    "comma": ", ",
    "opencurly": "{",
    "closecurly": "} ",
    "delete": "del ",
    "newline": "\n",
    "plus": "+",
    "minus": "-",
    "dividedby": "/",
    "times": "*",
    "length": "len",
    "variable": "var ",
    "space": " ",
    "tab": "    ",
    "elseif": "elif ",
    "opensquare": "[",
    "closesquare": "] ",
    "endif": "",
    "endwhile": "",
    "return": "return ",
    "backslash": "\\",
    "define": "def ",
    "slash": "/",
    "array": "array",
    "semicolon": ";",
    "mod": "%",
    "one": "1",
    "too": "2",
    "two": "2",
    "three": "3",
    "four": "4",
    "five": "5",
    "six": "6",
    "seven": "7",
    "eight": "8",
    "nine": "9",
    "zero": "0",
    "endfor": ""
  }

  str = str.toLowerCase();
  var ret = "";

  var punctuationless = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  var newStr = punctuationless.replace(/\s{2,}/g, " ");

  var arr = newStr.split(" ");
  var i;
  var tabCount = 0;
  var first = false;

  for (i = 0; i < arr.length; i++) {
    var curr = arr[i]; // Current string

    if (curr.includes("stop")) {
      ret += "\n";
      break;
    }
    // Inserts tabs
    if (tabCount > 0 && (i == 0 || first)) {
      ret += hash["tab"].repeat(tabCount);
    }
    // Checks for end of line
    if (("enter").valueOf() == curr.valueOf()) {
      first = true;
    } else {
      first = false;
    }
    // Increments or decrements tabs
    if (("colon").valueOf() == curr.valueOf()) {
      tabCount++;
    } else if (("end").valueOf() == curr.valueOf()) {
      tabCount--;
      i++;
      continue;
    }
    if (curr in hash) { // Checks one word
      ret += hash[curr];
      continue;
    }
    if (i + 1 < arr.length) { // Checks two words
      var nextStr = arr[i + 1];
      if ((curr + nextStr) in hash) {
        ret += hash[curr + nextStr];
        i++;
        continue;
      }
    }
    ret += curr;
    // Adds space if not followed by quote or underscore
    if (i + 1 < arr.length) {
      var nextStr = arr[i + 1];
      if (nextStr.valueOf() !== ("quote").valueOf() &&
        nextStr.valueOf() !== ("underscore").valueOf() &&
        nextStr.valueOf() !== ("close").valueOf() &&
        nextStr.valueOf() !== ("closed").valueOf() &&
        nextStr.valueOf() !== ("comma").valueOf()) {
        ret += " ";
      }
    }
  }
  return ret; // Prints string
}

var str = "one closed parentheses.";
var code = convert(str);
console.log(code);

module.exports = {
  convert
};
