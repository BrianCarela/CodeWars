function pigIt(str){
//   Move the first letter of each word to the end of it,
//   then add "ay" to the end of the word.
//   Leave punctuation marks untouched.

  var arr = str.split(" ");

  for(var i = 0; i<arr.length; i++){
    arr[i] = arr[i].slice(1) + arr[i].split("").shift() + "ay";
  }

  return arr.join(" ");
}
