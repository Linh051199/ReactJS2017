let inputNumberStr = window.prompt("Enter a number: ", 0)
let inputNumber = Number(inputNumberStr)
console.log("inputNumber: ", inputNumber);


if(inputNumber <2){
    console.log(inputNumber, "Is not Prime")
}
else if(inputNumber==2){
    console.log(inputNumber, "Is Prime")
}
else{
    let check=false;
    for(let i=2; i<= Math.sqrt(inputNumber); i++){
        if(inputNumber %i ==0){
            console.log("tempNumber: ", i)
            check= true
            break;
        }
    }
    if(check){
        console.log(inputNumber, "Is not Prime")
    }
    else{
        console.log(inputNumber, "Is Prime")
    }
}