function addBinary(a,b) {
  // add 2 numbers, and return it in binary

  var sum = a + b;
  var binArr = [];

  while(sum >= 1){
    binArr.push(sum%2);
    sum = Math.floor(sum/2);
  }

  return binArr.reverse().join("");

}
