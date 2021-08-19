let inputNumberStr = window.prompt("Enter a number: ", 0)
let inputNumber = Number(inputNumberStr)
console.log("inputNumber: ", inputNumber);


function tinh_tong(n)
{
    let tong = 0;
    let index = 0;
 
    while (index <= n)
    {
        
        if (index % 2 != 0){
            tong += index;
        }
 
        
        index++;
    }
    console.log("Tong: ", tong)
}
tinh_tong(inputNumber)