function pigIt(str){
//   Move the first letter of each word to the end of it,
//   then add "ay" to the end of the word.
//   Leave punctuation marks untouched.

  var arr = str.split(" ");

  for(var i = 0; i<arr.length; i++){
    // console.log(arr[i].search(/([.!?])/));

    let firstChar = arr[i].split("").shift();
    let noPunct = arr[i].slice(1).replace(/([.!?])/,"");
    let punctInd = arr[i].search(/([.!?])/);

    if(0 == punctInd){
      // nothing happens, leave punctuation alone
    } else if(punctInd >=0){
      arr[i] = noPunct + firstChar + "ay" + arr[i][punctInd];
    } else{
      arr[i] = noPunct + firstChar + "ay";
    }

  }

  return arr.join(" ");
}
