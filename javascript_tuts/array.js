const myarray=[1,2,3,4,5]
console.log(myarray)

// console.log(myarray[2])

// // another way of defining array
// const newarray=new Array("bijaya","arjun","udaya","sunil")
// console.log(newarray)
// console.log(newarray[1])

// // array methods


// // insert element into array at last index
// newarray.push(5)
// console.log(newarray)

// // insert element in array at first index
// newarray.unshift(3)
// console.log(newarray)
// console.log(newarray[0])
 

// // delete element in array from last index
// newarray.pop()
// console.log(newarray)

// // delete element from array at firstindex
// newarray.shift()
// console.log(newarray)

// delete newarray[0]
// console.log(newarray)

// // slicing the given array in subarrays
// let anotherarray=newarray.slice(1,3)
// console.log(anotherarray)

// // checking the particular element is present in the array or not 
// console.log(newarray.includes('sunil'))

// let mynewarray=[1,4,6,8,3,5]
// console.log(mynewarray.concat(newarray))

// console.log(mynewarray.reverse())
// console.log(mynewarray.join(myarray))

// console.log(mynewarray.sort())

// let arr2=[1,2,3,[4,5,6],7,8,[4,5,9,[1,2,6,8]]]
// let arr1=arr2.flat()
// console.log(arr1)
// console.log(newarray.toString())

// // creating array
// console.log(Array.from('bijaya'))

// let score1=100
// let score2=200
// let score3=300
// let score4=400
// console.log(Array.of(score1,score2,score3,score4))

// // splice method in array
//  let delarray=newarray.splice(1,3)
//  console.log(newarray)
//  console.log(delarray)

//  mynewarray.splice(2,0,7,8)
//  console.log(mynewarray)
//  console.log(mynewarray.splice(3,1))
//  console.log(mynewarray)

 console.log(myarray.indexOf(5))
 let islargenumber=(num)=> num>3
 console.log(myarray.findIndex(islargenumber))

 let iseven= (num)=>num%2==0
 console.log(myarray.find(iseven))

 let arra1=[1,2,3,4,5,6]
 let arra2=[7,8,9,10,11]
//  concatinating two array using spread operaor
 let arra3=[...arra1,...arra2]
 console.log(arra3)
