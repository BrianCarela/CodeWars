function iqTest(numbers){
  // this function is assuming you pass it a string of numbers, with spaces to separate them
  // and most of them are either even or odd, and only one of them is the opposite.
  // find the opposite *evenness*, and return the index+1 of that.

  let arr = numbers.split(" ");

  let odds = 0;
  let evens = 0;

  let evenIn;
  let oddIn;

  for(var i=0;i<arr.length;i++){

    if(arr[i]%2 == 0){
      evens++;
      evenIn = i+1;
    } else if(arr[i]%2 == 1){
      odds++;
      oddIn = i+1;
    }

  }

  if(evens == 1){
    return evenIn;
  } else if(odds == 1){
    return oddIn;
  }
