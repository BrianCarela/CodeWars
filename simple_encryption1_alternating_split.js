
// Recursively, this works out. Codewars does not accept recursive solutions though
// function encrypt(text, n) {

//   n--;
//   var enArr1 = "";
//   var enArr2 = "";

//   for(var i=0; i<text.length; i++){
//     if(i%2 == 0){
//       enArr2 += text[i];
//     } else if(i%2 == 1){
//       enArr1 += text[i];
//     }
//   }

//    var encryptedString = enArr1 + enArr2;

//   if(n == 0){
//     return enArr1 + enArr2;
//   } else{
//     return encrypt(encryptedString, n);
//   }


// }

function encrypt(text, n) {

// safeguard in case this function is uesd incorrectly
  if (!text || n <= 0 || text.length <= 0) {
    return text;
  }
  // This safeguard I found online.

  var encryptedString = "";

  function actualEncrypt(theText){
    var enArr1 = "";
    var enArr2 = "";

    for(var i=0; i<text.length; i++){
      if(i%2 == 0){
        enArr2 += theText[i];
      } else if(i%2 == 1){
        enArr1 += theText[i];
      }
    }
    encryptedString = enArr1 + enArr2;
  }

  if(n==1){
    actualEncrypt(text);
    return encryptedString;
  } else if(n>1){

    actualEncrypt(text);


    for(var bigN = n-1; bigN>0; bigN--){
      actualEncrypt(encryptedString);
    }

    return encryptedString;
  }


}

// the following function is the undo version of above

function decrypt(encryptedText, n) {
  if (!encryptedText || n <= 0 || encryptedText.length <= 0) {
        return encryptedText;
    }

    const helper = function(str) {
        let odds = str.slice(0,(str.length/2));
        let evens = str.slice((str.length/2));
        let output = "";

        for (let i = 0; i < str.length; i++) {
            if (i % 2) {
                output += odds[0];
                odds = odds.slice(1);
            } else {
                output += evens[0];
                evens = evens.slice(1);
            }
        }

        return output;
    };

    for (let i = 0; i < n; i++) {
        encryptedText = helper(encryptedText);
    }

    return encryptedText;
}
