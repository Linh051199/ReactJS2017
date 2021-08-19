let inputNumberStr = window.prompt("Enter a number: ", 0)
let inputNumber = Number(inputNumberStr)
console.log("inputNumber: ", inputNumber);
console.log("Các số chẵn trong khoang tu 1 den ", inputNumber, " :")
for(let i=1; i<= inputNumber; i++){
    if(i %2== 0){
        console.log( i)
    }
}


