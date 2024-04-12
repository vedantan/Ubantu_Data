let a = document.getElementById('in1')
let b = document.getElementById('i1')

let c = document.getElementById('in2')
let d = document.getElementById('i2')


///////////////////////////////////////////////////////////////
  // both fun will run simulatneously by taking parameters
///////////////////////////////////////////////////////////////

let fun1 = () => {
    IsEmpty(a,b,"*Name is Required")
    IsEmpty(c,d,"*Address is required")
}


let IsEmpty = (inpId , outId , errorMessage) => {
    if(inpId.value != ""){
        outId.value = ""
    }else{
        outId.value=errorMessage
    }
}





///////////////////////////////////////////////////////////////
                        // both fun will run simulatneously
///////////////////////////////////////////////////////////////


// let fun1 = () => {
//     IsNameEmpty()
//     IsAddressEmpty()
// }


// let IsNameEmpty = () => {
//     if(a.value != ""){
//         b.value=""
//     }else{
//         b.value="*Name is Required"
//     }
// }

// let IsAddressEmpty = () => {
//     if(c.value != ""){
//         d.value=""
//     }else{
//         d.value="*Address is Required"
//     }
// }









///////////////////////////////////////////////////////////////
                        // ONLY ONE VALUE WILL EFFECT
///////////////////////////////////////////////////////////////

// let fun1 = () => {
//     if(a.value != ""){
//         // b.value=a.value
//         b.value = ""
//         console.log("vjhkbj"+b.value)
//     }else if (a.value == ""){
//         b.value="*Name is Required"
//         console.log(b.value)
//     }else if(c.value != ""){
//         d.value = ""
//         console.log(d.value)
//     }else{
//         d.value="*Address is required"
//         console.log(d.value)
//     }
// }

// let fun2 = () => {
    
// }



let fun3 = () => {
    window.location.reload()
}