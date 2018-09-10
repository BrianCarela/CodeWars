function findEvenIndex(arr)
{
// Output:
// The lowest index N where the side to the left of N is equal to the side to the right of N.
// If you do not find an index that fits these rules, then you will return -1.


  for(var i=0;i<arr.length;i++){

    let leftSum = 0;
    let rightSum = 0;

    for(var l=0;l<i;l++){
      leftSum += arr[l];
    }

    for(var r=i+1;r<arr.length;r++){
      rightSum += arr[r];
    }

    if(leftSum == rightSum){
      return i;
    }

  }

  return -1;

}
