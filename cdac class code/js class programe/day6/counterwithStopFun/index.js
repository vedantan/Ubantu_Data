let a = document.getElementById('h3')
let counter =300;

let queueArr = new Array()



function f2(){
    let x = queueArr.pop()
    if(x != undefined){
        window.clearInterval(x)
    }else{
        console.log("no more no in queues")
    }
    
}

let start = () => {
    let z = setInterval(() => {
        counter = counter-1
    a.innerText = counter
    }, 1000);

    queueArr.push(z)
}


function re() {
    window.location.reload()
}
