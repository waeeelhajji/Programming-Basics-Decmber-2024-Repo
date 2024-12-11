// var a = 8
// var b = 8
// if (a>b){
//     console.log(a+" is bigger than "+b)
// } else{
//     if( a == b ){
//         console.log(a+" is equal to "+b)
//         a=a+1
//     }
//     else{
//         console.log(a+" is less than "+b)
//     }
    
// }
// console.log(a)

//FizzBuzz
//assume that i have a var num, if num is divisible by 3, I will console log Fizz, if it num is divisible by 5, I will console log Buzz
//if num is divisible by 15, I will console log imperatively "FizzBuzz"

var num=45;

//reminder
console.log(num%3)

if ((num%15) == 0){
    console.log("FizzBuzz")
}else{
    if(num%5==0){
        console.log("Buzz")
    }else{
        if(num%3==0){
            console.log("Fizz")
        }
    }
}


