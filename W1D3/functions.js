var a=5
var c=0

function addCounter(){

    a=a+15
    console.log("I'm inside Counter Function")
    //console.log(a)
    c=a-7
    var d=a+c
    return d
}

addCounter()
addCounter()

console.log("a is eaqual to "+a)//5 
console.log("c is eaqual to "+c)//8 
console.log("addcounter is equal to "+addCounter())//23

//parameters
var firstName="Houda"
var lastName="Amira"
function sayHello(tomato,potato){
    console.log("hello "+tomato+" "+potato)
}

sayHello(firstName,lastName)

