const name ="piyush"
const repoCount =50

// console.log(name + repoCount + " Value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName= new String(`piyush-gpt-com`)

// console.log(gameName[0])
// console.log(gameName.__proto__)


// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('y'))


const newString=gameName.substring(0,4)
// console.log(newString)

const anotherString = gameName.slice(-8,4)
// console.log(anotherString)
// console.log(gameName)



const newStringOne = "   piyush   "
// console.log(newStringOne)
// console.log(newStringOne.trim())

const url = "https://piyush.com/piyush%20gpt"
// url.replace('%20','-')
console.log(url.replace('%20','-'))

console.log(url.includes("piyushh"))

console.log(gameName.split('-'))

console.log(gameName.blink())

