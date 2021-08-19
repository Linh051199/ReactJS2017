let inputNumberStr = window.prompt("Enter a number: ", 0)
let inputNumber = Number(inputNumberStr)
console.log("inputNumber: ", inputNumber);

let check = 1;
function kiemTra(n) {
    while (n /= 10) {

        if ((n % 10) % 2 == 0) {
            check = 0;
            break;
        }

    }
}
kiemTra(inputNumber)
if (check == 1) {
    console.log("Yes!")
}
else {
    console.log("No!")
}

