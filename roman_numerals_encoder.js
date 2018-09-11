function solution(number){
  // convert the number to a roman numeral
  var romArr = [];
  while(number>0){

    if(number >= 1000){
      romArr.push('M')
      number = number-1000;
    } else if(number >= 900){
      romArr.push('CM')
      number = number-900;
    } else if(number >= 500){
      romArr.push('D');
      number = number-500;
    } else if(number >= 400){
      romArr.push('CD')
      number = number-400;
    } else if(number >= 100){
      romArr.push('C')
      number = number-100;
    } else if(number >= 90){
      romArr.push('XC')
      number = number-90;
    } else if(number >= 50){
      romArr.push('L')
      number = number-50;
    } else if(number >= 40){
      romArr.push('XL')
      number = number-40;
    } else if(number >= 10){
      romArr.push('X')
      number = number-10;
    } else if(number >= 9){
      romArr.push('IX')
      number = number-9;
    } else if(number >= 5){
      romArr.push('V')
      number = number-5;
    } else if(number >= 4){
      romArr.push('IV')
      number = number-4;
    } else if(number >= 1){
      romArr.push('I')
      number = number-1;
    }

  }

  return romArr.join("");

}
