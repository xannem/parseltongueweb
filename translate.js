function convert(str) {
var hash = new Object();
hash={ "colon":":",
"doubleequals":"== ",
"equals":" = ",
"enter":"\n",
"quote":"\"",
"openparenthesis":"(",
"closeparenthesis":") ",
"dot":".",
"comment":"#",
"lessthan":"<",
"greaterthan":">",
"equalto":"= ",
"underscore":"_",
"comma":", ",
"opencurly":"{",
"closecurly":"} ",
"delete":"del ",
"newline":"\n",
"plus":"+",
"minus":"-",
"dividedby":"/",
"times":"*",
"length":"len",
"variable":"var ",
"space":" ",
"tab":"    ",
"elseif":"elif ",
"opensquare":"[",
"closesquare":"] ",
"endif":"",
"endwhile":"",
"return":"return ",
"backslash":"\\",
"define":"def ",
"slash":"/",
"array":"array",
"semicolon":";",
"mod":"%",
"endfor":""
}

str = str.toLowerCase();
var ret = "";
var arr = str.split(" ");
var i;
var tabCount = 0;
var first = false;

for (i = 0; i < arr.length; i++) {
  // Inserts tabs
  if (tabCount > 0 && (i == 0 || first)) {
    ret += hash["tab"].repeat(tabCount);
  }

  var curr = arr[i]; // Current string

  // Checks for end of line
  if (("enter").valueOf() == curr.valueOf()) {
    first = true;
  } else {
    first = false;
  }

  // Increments or decrements tabs
  if (("colon").valueOf() == curr.valueOf()) {
    tabCount++;
  } else if (curr === "end") {
    tabCount--;
    i++;
    continue;
  }

  if (curr in hash) { // Checks one word
    ret += hash[curr];
  } else if (i + 1 < arr.length && (curr + arr[i + 1]) in hash) { // Checks two words
    ret += hash[curr + arr[i + 1]];
    i++;
  } else {
    ret += curr;

    // Adds space if not followed by quote or underscore
    if (i + 1 < arr.length && (arr[i + 1]).valueOf() !== ("quote").valueOf() && (arr[i + 1]).valueOf() !== ("underscore").valueOf() && (arr[i + 1]).valueOf() !== ("close").valueOf() && (arr[i + 1]).valueOf() !== ("comma").valueOf()) {
      ret += " ";
    }
  }
}
return ret; // Prints string
}

var str = "comment this is my code enter if x greater than equal to 5 colon enter print open parenthesis quote x is larger than 5 quote close parenthesis end if enter else if x double equals 8 colon enter print open parenthesis quote x is 8 quote close PARENTHESIS end if enter my underscore array equals array dot array open parenthesis quote i quote comma open square 1 comma 2 comma 3 close square close parenthesis enter for i in range open parenthesis 0 comma 3 close parenthesis colon enter print open parenthesis my underscore array open square i close square comma quote space quote close parenthesis enter for j in range open parenthesis 0 comma 3 close parenthesis colon enter my underscore array open square i close square plus plus enter my underscore array open square i close square mod equals 6 end for end for enter print open parenthesis quote backslash r quote close parenthesis";
var code = convert(str);
console.log(code);
