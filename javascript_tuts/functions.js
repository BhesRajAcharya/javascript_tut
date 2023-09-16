// function defination
// function parameter number1, number2
function addNumbers(number1,number2){
    // function body
    let result =number1+number2
    return result
    console.log('hello') //unreacheable code 
}
// function call
console.log(addNumbers())
console.log(addNumbers(4))
console.log(addNumbers(4,5)) //argument

// default parameter
function name(username='bijaya'){
    console.log(username)
}
name('ram')
function price(...rate){
    return rate
}
console.log(price(100,200,300,400))

function stock(var1,var2,...num){
    console.log(var1)
    console.log(var2)
    return num
  
}
console.log(stock(100,200,400,500,600,750))
// how to pass object in functions parameter
let user={
    username:'bijaya',
    password:'bij123'
}
function myaccount(anyobject){
    console.log(`the username is ${anyobject.username} and password is ${anyobject.password}`)
}
myaccount(user)
// passinmg array as an parameter
let arr=[100,300,400,500]
function returnsecondvalue(getarray){
    return getarray[1]
}
console.log(returnsecondvalue(arr))