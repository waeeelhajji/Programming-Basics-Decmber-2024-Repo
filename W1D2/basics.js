//Primitive datatypes

//string
var firstName="Hello My Name is samar"
var lastName="Baghdadi"
var sexe="Female"
//Number
var age=42
//Boolean
var isMarried=true
//Undefined
var numberChildren;

//Null
var myStatus=null;

// console.log(isMarried)
// console.log(age)
// console.log(numberChildren)
// console.log(myStatus)

var a=2
var b=5
var c=a+b
// console.log(c)
//Order of operations:
//left to right
//1- Paranthesis
//2- Power
//3- Multiplication and Division
//4- Addition and substraction
var d = c * b + (a + a) * b - 10 + 8 / 2 + 4**2 //47
// console.log(d)

//Arrays
var Samar=["Samar","Baghdadi",42,true]
console.log(Samar.length);
console.log(Samar[1]);
console.log(Samar[4]);
Samar.push("Female");
console.log(Samar);
console.log(Samar.length)
Samar.push(d);
console.log(Samar);
Samar.pop()
console.log("Console log after eliminating d variable is equal to: "+Samar);
console.log(Samar.length)
console.log(Samar[Samar.length-1])



