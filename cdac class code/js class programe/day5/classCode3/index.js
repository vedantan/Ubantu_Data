let a = document.getElementById('in1')
let b = document.getElementById('in2')

let c = document.getElementById('btn2')

let fun = () => {
    if(a.value != ""){
        console.log("hi" , a.value)
    }else{
        b.value="*Name is Required"
        b.style.color="red"
        
    }
}

let fun2 = () => {
    window.location.reload()
}

