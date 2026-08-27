// Singleton

// object literals
// Object.create()   // Singleton

const mySym = Symbol("key1")

const JsUser = {
    name: "Piyush",
    "full name": "Piyush Gupta",
    [mySym]: "My Key 1",
    age: 20,
    location: "Jaipur",
    email: "piyush@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}


// console.log(JsUser.email)
// console.log(JsUser['email'])
// console.log(JsUser["full name"])
// console.log(JsUser.mySym)
// console.log(typeof(JsUser.mySym))
// console.log(typeof(JsUser[mySym]))

JsUser.email = "piyush@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email= "piyush@microsoft.com"
// console.log(JsUser)


JsUser.greeting = function(){
    console.log("Hello Js User")
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`)
}


console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())



