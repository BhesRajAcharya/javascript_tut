// ways of defining String variable
let gameName='chess'
let anotherName=new String('basket-ball')
console.log(gameName.toUpperCase())
console.log(gameName.length)
// create the substring from the given string
console.log(gameName.slice(0,4))
let gname=gameName.slice(1,5)
console.log(gname)
// create array by splitting the string in given condition
console.log(anotherName.split("-"))
console.log(gameName.charAt(3))
console.log(anotherName.indexOf('s'))
let lname='  acharya  '
console.log(lname)
// delete the all white spaces form string value
console.log(lname.trim())
let firstname='bijaya'
let lastname='acharya'
let name=firstname.concat(lastname)
console.log(name)
let stuname='bijaya-acharya'
console.log(stuname.replace('a','b'))
console.log(stuname.includes('bij'))