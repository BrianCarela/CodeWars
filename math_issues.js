Math.round = function(number) {
  // Turn the number into a string to drop the decimal
  n = number.toString().split('.');
  if (n.length > 1){
    // if greater than .5, add 1. Otherwise it's just gonna drop the decimal and stay
    if (parseInt(n[1].substring(0,1)) >= 5){
      return parseInt(n[0]) + 1;
    }
  }
  return parseInt(n);
};

Math.ceil = function(number) {
  // Turn the number into a string to drop the decimal
  n = number.toString().split('.');
  // add 1 to the number if it has anything past the decimal that isn't just 0's
  return n.length > 1 ? parseInt(n[0]) + 1 : parseInt(n);
};

Math.floor = function(number) {
  // Turn the number into a string to drop the decimal. That's it lol
  n = number.toString().split('.');
  return parseInt(n[0]);
};
