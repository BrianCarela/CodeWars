function dirReduc(arr){

//   let newArr = [];

//   for(var i=0; i<arr.length; i++){
//     switch (arr[i]){
//       case "NORTH":
//         if(arr[i+1] != "SOUTH"){
//           newArr.push(arr[i]);
//         } else if(arr[i+1] == "SOUTH"){
//           i++;
//         }
//         break;
//       case "SOUTH":
//         if(arr[i+1] != "NORTH"){
//           newArr.push(arr[i]);
//         } else if(arr[i+1] == "NORTH"){
//           i++;
//         }
//         break;
//       case "EAST":
//         if(arr[i+1] != "WEST"){
//           newArr.push(arr[i]);
//         } else if(arr[i+1] == "WEST"){
//           i++;
//         }
//         break;
//       case "WEST":
//         if(arr[i+1] != "EAST"){
//           newArr.push(arr[i]);
//         } else if(arr[i+1] == "EAST"){
//           i++;
//         }
//         break;
//     }
//   }

//   if(newArr == dirReduc(newArr) ){
//     return newArr;
//   } else{
//     return dirReduc(newArr);
//   }

// my solution janky af. lemme try someone else's
var i = 0;
  while(i < arr.length) {
    if((arr[i] === "NORTH" && arr[i+1] === "SOUTH") ||
    (arr[i] === "SOUTH" && arr[i+1] === "NORTH") ||
    (arr[i] === "EAST" && arr[i+1] === "WEST") ||
    (arr[i] === "WEST" && arr[i+1] === "EAST")) {
        arr.splice(i, 2);
//         so this is sick because it checks if ANY case is true first.
//         If it is, nullify both directions, which shifts the array forward again
//         and then you go back to the beginning of the array and try again with the next 2 directions
        i--;
    }
    else {
//       if none of the cases are true, only move back through the array by 1 direction, keeping a direction behind it
        i++;
    }
  }
  return arr;


}
