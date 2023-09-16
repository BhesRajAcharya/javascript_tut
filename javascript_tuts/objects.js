// // way of creating object 
// let mysymbol=Symbol('id')
// let person={
//     name:"bijaya",
//     [mysymbol]:21,
//     age:22,
//     address:'sunwal',
//     phone:'9804567823'
// }
// console.log(person.name)
// console.log(person['name'])
// console.log(person['age'])
// console.log(person['address'])
// console.log(person[mysymbol])
// console.log(typeof mysymbol)

// // updating the objects key value
// person.salary=20000
// console.log(person)

// // how to lock the objects so that we cannot update the data
// // Object.freeze(person)
// person.name="bhes raj"
// console.log(person)
// person.about='hero'
// console.log(person)
// person.position=function(){
//     console.log("person is a manager");
// }
// console.log(person.position)
// console.log(person)
// console.log(person.position())

// nested objects

let employee={
    email:'bijaya12@gmail.com',
    fullname:{
           firstname:'raju',
           lastname:'karki'
    },
    faculty:{
        facultyname:'IOST',
        department:{
            dname:'CSIT',
            duration:'4years'
        }
    }
}
console.log(employee)
console.log(employee.faculty.department.dname)

// combining objects
obj1={1:'a',2:'b'}
obj2={3:'c',4:'d'}
obj3={obj1,obj2}
console.log(obj3)
obj4=Object.assign({},obj1,obj2)
console.log(obj4)
obj5={...obj1,...obj2}
console.log(obj5)

// array of objects
let obj=[
    {
        name:'bijaya',
        age:22,
        address:'sunwal'
    },
    {
        name:'udaya',
        age:23,
        address:'butwal'
    },
    {
        name:'saroj',
        address:'butwal'
    },
    {
        name:'arjun',
        address:'burwal'
    }
]
console.log(obj[1])
console.log(obj[1].name)
console.log(Object.keys(employee))
console.log(Object.values(employee))
console.log(Object.entries(employee))
console.log(employee.hasOwnProperty('email'))

// object de-structuring
const course={
    cname:'csit',
    cduration:4,
    cprice:600000
}
const {cname: coursename}=course
console.log(coursename)
const{cname: csname}=course
console.log(csname)