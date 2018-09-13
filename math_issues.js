Math.round = function(number) {
  n = number.toString().split('.');
  if (n.length > 1){
    if (parseInt(n[1].substring(0,1)) >= 5){
      return parseInt(n[0]) + 1;
    }
  }
  return parseInt(n);
};

Math.ceil = function(number) {
  n = number.toString().split('.');
  return n.length > 1 ? parseInt(n[0]) + 1 : parseInt(n);
};

Math.floor = function(number) {
  n = number.toString().split('.');
  return parseInt(n[0]);
};