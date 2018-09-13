function deleteNth(arr,n){
  var newArr = [];

  for(var i = 0; i<arr.length; i++){
    let count = 0;

    for (var j = 0; j<newArr.length; j++){
      if(arr[i] == newArr[j]){
        count++;
      }
    }

    if(count < n){
      newArr.push(arr[i]);
    }
  }
}
