// ways of creating number types in javascript
const num=123

const numb=new Number(125)
console.log(num)
console.log(numb)


const score=84.456
console.log(score.toFixed(1))
console.log(score.toExponential(2))
console.log(score.toPrecision(1))
console.log(score.toString())

let marks=123
console.log(marks.toFixed(2))

let mark=123.4567
console.log(mark.toPrecision(5))

// return coma seperated numbers in US format like 100,000,000
let hundreds=100000000
console.log(hundreds.toLocaleString())