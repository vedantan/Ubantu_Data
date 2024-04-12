// let num = 5
// console.log(`number value is ${num} , type of num is ${typeof num}`)


////////////////////////////////////////////////////////////////////////////////////////////////////////////


// let name = "vedant"
// let lastname = "Nillawar"
// console.log(`first name is ${name}  last name is ${lastname}`)


////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function fun(){
//     console.log(`Inside fun`)
// }

// fun()


////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function fun(f1,f2){
//     console.log(`value of f1 is ${f1} ,value of f2 is ${f2}`)
// }

// fun(10,20)


////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const fun = () => {
//     console.log(`inside fun via arrow function`)
// }

// fun()


////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function fun1(fun){
//     console.log(`inside fun is ${fun} & type of fun is=>${typeof fun}`)
//     fun()
// }

// fun1(fun)


////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let arr =[10,2,3,4,5,7,8]

// for (let a in arr){
//     console.log(`index no is ${a} & value at index is: ${arr[a]}`)
// }

// for (const a1 of arr) {
//     console.log(`values of the arr is: ${a1} `)
//     console.log(a1)
// }



// arr.forEach(a2 => {
//     console.log(`values in arr multiplied by 2 are ${a2*a2}`)
// });



// arr.map((b)=>{
//  console.log(`${b*b}`)   
// })



// const b = arr.filter((d)=>{
//     return d%2==0
// })
// console.log(b)

// let arr =[10,2,3,4,5,7,8]

// arr.push(100)
// console.log(arr)

// arr.pop()
// console.log(arr)

// arr.splice(1,2,99)
// console.log(arr)

// arr.splice(1,1)
// console.log(arr)


// arr.splice(3,0,7)
// console.log(arr)

// const cars = [
//   { model: 'triber', company: 'renault', price: 10 },
//   { model: 'nano', company: 'tata', price: 2.5 },
//   { model: 'XUV700', company: 'mahindra', price: 20 },
//   { model: 'seltos', company: 'kia', price: 17 },
//   { model: 'X5', company: 'BMW', price: 45 },
// ]


// const aa = cars.filter((c1)=>{
//     return c1['price'] <= 20  
// })
// console.log(aa)


// const bb = cars.map((d1)=>{
//     return d1['company']
// })
// console.log(bb)



// const numbers = [1, 2, 3, 4, 55,5, 6, 7, 8, 9, 10]

// let aaa = numbers.filter((e)=>{
//     return e%2 != 0
// }).map((x)=>{
//     return x**3
// })

// console.log(aaa)


///////////////////////////////////////////////////////////////////////////////////////


const express = require('express')

const app = express();

app.get("/",(req,resp)=>{
    console.log("Here's get api")
    resp.send(`<h1>Here's Get Api</h1>`)

})

app.get("/about",(req,resp)=>{
    resp.send(`<h3>Hi ${req.body.name}</h3>`)
})


app.listen(5000)

