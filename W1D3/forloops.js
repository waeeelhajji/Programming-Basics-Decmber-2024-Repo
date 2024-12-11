// //loops

// for (var i=1;i<=10;i++){
//     // console.log(i)
// }
// //Console log all the numbers from 50 to 1 beginning by 50

// for(var i=50;i>=1;i--){
//     // console.log(i)
// }
// for(var num=5;num>=1;num=num-1){
//    // i=i+10
//    if ((num%15) == 0){
//     console.log("FizzBuzz")
// }else{
//     if(num%5==0){
//         console.log("Buzz")
//     }else{
//         if(num%3==0){
//             console.log("Fizz")
//         }
//     }
// }
// }
//nested loops
for(var i=0;i<3;i++){
    for(var j=0;j<2;j++){
      //  console.log("I'm in loop two")
    }
   // console.log("I'm in loop 1")
}

//loops with arrays
var myArray=["Apple","Banana","Watermelon","Dragon Fruit","Strawberry"]
console.log(myArray.length-1)
//console.log(myArray[myArray.length-1])
//I want to console log all the elements in myArray

for(var i=0;i<myArray.length;i++){
    console.log(myArray[i])
    
}
for(var i=myArray.length-1;i>=0;i--){
    console.log(myArray[i])
    
}

