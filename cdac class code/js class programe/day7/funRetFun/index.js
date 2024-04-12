function getsome(){
    
    function sayHi() {
        console.log("Hii")
    }
    
    return sayHi;
}


let a = getsome();
a();

