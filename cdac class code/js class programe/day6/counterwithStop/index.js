let a = document.getElementById('h3')
let counter =0;

let queue = undefined


function f2(){
    window.clearInterval(queue)
}

let start = () => {
    setInterval(() => {
        counter = counter+1
    a.innerText = counter
    }, 1000);
}
