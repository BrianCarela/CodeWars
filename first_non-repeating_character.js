function firstNonRepeatingLetter(s) {


  for(var i = 0; i<s.length ; i++){

    let now = s[i];
    let count = 0;

    for(var j = 0; j<s.length ; j++){

      if(s[j] === s[j].toUpperCase()){
        if(s[j] === s[i].toUpperCase()){
          count++
        }
      } else if(s[j] === s[j].toLowerCase()){
        if(s[j] === s[i].toLowerCase()){
          count++
        }
      }

    }

    if(count == 1){
      return s[i];
    }

  }

  return '';

}
// this is incomplete, and doesn't account for uppercase vs lowercase
