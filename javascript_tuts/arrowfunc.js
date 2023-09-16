let user={
    username:'bijaya',
    password:'bi1234',
    userlogged:function(){
        console.log(`${this.username},welcome to the website`)
    }
}
user.userlogged()
user.username='shyam'
user.userlogged()


// arrow function
let arrows=()=>{
    let username='ram'
    console.log(this.username)
}
arrows()
function sum(n1,n2){
    return n1+n2
}
console.log(sum(5,5))

// using arrow function
let sums=(n1,n2)=>n1+n2
console.log(sums(4,6))
let sub=(n1,n2)=>(n1-n2)
console.log(sub(6,2))
let obj=()=>{name:'bijay'} //we cannot return object without parenthesis
console.log(obj())