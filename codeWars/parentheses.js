function validParentheses(parens){
    var n = 0;
    for (var i = 0; i < parens.length; i++) {
      if (parens[i] == '(') n++;
      if (parens[i] == ')') n--;
      if (n < 0) return false;
    }
    
    if (n === 0) {
    return true;
    }
    if (n > 0) {
        return false;
    }
  }
console.log(validParentheses("()()()(("))

