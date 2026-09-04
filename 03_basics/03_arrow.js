const user = {
    username: "piyush",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website`)
        console.log(this)
    }

}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     let username = "piyush"
//     console.log(this.username)
// }
// chai()

// const chai = function(){
//     let username = "piyush"
//     console.log(this.username)
// }

// const chai = () => {
//     let username = "piyush"
//     console.log(this)
// }

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)
// const addTwo = (num1, num2) => ({username: "piyush"})

// console.log(addTwo(3,4))

const myArray = [2,5,0,4,6]
// myArray.forEach(function (){})
// myArray.forEach(() => {})
// myArray.forEach(() => ())

