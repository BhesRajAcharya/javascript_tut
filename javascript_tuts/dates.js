let mydate=new Date()
console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toLocaleDateString())
console.log(mydate.toLocaleString())

// self created date
let mynewdate=new Date(2023,1,3)
console.log(mynewdate.toDateString())

let date=new Date("2000-10-07")
console.log(date.toDateString())
console.log(date.getTime())
console.log(Math.floor(Date.now()/1000))


// console.log(newdate.getDate())
// console.log(newdate.getDay())
// console.log(newdate.getMonth())
// console.log(newdate.getFullYear())
// console.log(newdate.getTime())
console.log(new Date().getDay())
