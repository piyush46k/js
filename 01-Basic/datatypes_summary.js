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

console.log(typeof id)
