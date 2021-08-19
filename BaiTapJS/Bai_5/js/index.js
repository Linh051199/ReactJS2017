let inputNumberStr = window.prompt("Enter a number: ", 0)
let inputNumber = Number(inputNumberStr)
console.log("inputNumber: ", inputNumber);



if (inputNumber < 2) {
    console.log("Dont have prime")
}
else {
    console.log("Prime: ")
    for (let num = 1; num <= inputNumber; ++num) {
        let count=0;
        for(let i=2; i <= Math.sqrt(num); i++){
            if(num % i ==0){
                count++;
            }
        }
        if(count==0 && num>1){
            console.log(num)
        }
    }
}

