// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score =100
const scoreValue=100.4
const isLoggedIn =false
const outsideTemp =null
let userEmail;

const id = Symbol('123')

const anotherId =Symbol('123')

// console.log(id == anotherId)

// const bigNumber =345878729837466828934892983037879894n

// _-----------_---------_-----------_--------

// Reference (Non Primitive)

// Array, Objects, Functions

const heros=["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Piyush",
    age: 22
}
const myFunction = function(){
    console.log("Hello World")
}

// console.log(typeof id)



// ++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)
//
let myYoutubename = "piyushdotcom"
let anotherName = myYoutubename
anotherName = "chaiorcode"

// console.log(anotherName)
// console.log(myYoutubename)

let userOne ={
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo =userOne
userTwo.email= "piyush@google.com"

console.log(userOne.email)
console.log(userTwo.email)