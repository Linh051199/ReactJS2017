let inputNumberStr = window.prompt("Enter a number: ", 0)
let inputNumber = Number(inputNumberStr)
console.log("inputNumber: ", inputNumber);


let count=0;
for (let i=1; i<= inputNumber; i++){
    count += i;
}
console.log("Tong cac so tu 1 den " ,inputNumber,": ",count)