let a = document.getElementById('in1')
let b = document.getElementById('i1')


let c = document.getElementById('in2')
let d = document.getElementById('i2')

let res = document.getElementById('r1')


let fun1 = () => {
    // for x
    // isNumber()

    var isXNumber = false;
    var isYNumber = false;


    let q = isEmpty(a,b,"*No is required")
    if (q == false) {
        isXNumber = isNumber(a, b, "X should be number");
    }

    // for y
    // isNumber()
    let w = isEmpty(c,d,"*No is required")
    if (w == false) {
        isYNumber = isNumber(c, d, "y should be number");
    }
    // isNumber(c,d,"enter a valid no")

    if(isXNumber == true && isYNumber==true){
        let sum = parseInt(a.value)+parseInt(b.value);
        res.innerText=sum
    }else{
        res.innerText=""
    }
}   

let isNumber = (inId , outId , errormessage) => {
    
    // var isXValueText = isNaN(refToControl.value);
    let isnum = false;
    let c = isNaN(inId.value);
    if(c == true){
        outId.innerText=errormessage
        isnum=false
    }else{
        outId.innerText=""
        isnum=true
    }

    return isnum

}

let isEmpty = (inId , outId ,errormessage) => {

    var isBoxEmpty = true;
    if(inId.value != ""){
        outId.innerText = ""
        isBoxEmpty = false
    }else {
        outId.innerText = errormessage
        isBoxEmpty = true

    }

    return isBoxEmpty
}

// let add = (a,b) => {
//     let sum = parseInt(a.value)+parseInt(b.value);
//     // if(sum == isNaN){
//     //     res.innerText = ""
//     // }
//     res.innerText=sum
// }





