function firstNonRepeatingLetter(s) {
  if(s.length == 1){
    return s;
  } else if(s == ''){
    return '';
  }

  for(var i = 0; i<s.length ; i++){

    let now = s[i];
    let count = 0;

    for(var j = 0; j<s.length ; j++){
      if(s[j] == s[i]){
        count++
      }
    }

    if(count == 1){
      return s[i];
    }

  }

}
// this is incomplete, and doesn't account for uppercase vs lowercase
