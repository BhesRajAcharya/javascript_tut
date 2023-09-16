function one(){
    let username='bijaya'
    function two(){
        let user='arjun'
        console.log(username)
    }
//    console.log(user) //user is not define at this scope
   two()

}
one()

// if block or local scope
if(true){
    let username='udaya'
    if(username=='udaya'){
        let logedin=true
    }
    // console.log(logedin)  //we cannot access logedin at this scope
}
// console.log(username)  //we cannot access username at this scope

console.log(add(5,4)) //we can call this function before intialization 
function  add(num1,num2){
    return num1+num2
}

console.log(adds(4,5)) //we cannot call this function varaible before intialization
let adds=function(num1,num2){
    return num1+num2
}
