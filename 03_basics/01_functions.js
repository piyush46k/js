

function sayMyName(){
    console.log("H")
    console.log("I")
    console.log("T")
    console.log("E")
}
// sayMyName()

function addTwoNumbers(number1,number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}
const result = addTwoNumbers(2,6)
// console.log(result)

function loginUserMessage(username = "sam"){
    // if(username === undefined){
    //     console.log("Please enter a username")
    //     return 
    // }
    if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Piyush"))

function calculateCarPrice(val1,val2,...num1){
    return num1
}

// console.log(calculateCarPrice(200,400,500,399))

const user = {
    username: "piyush",
    prices: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObject(user)
handleObject({
    username: "Sam",
    price: 399
})
const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))
