'use strict'

let num = 33721;
let tmp = num;
let result = 1;

while (tmp > 0){
    let lastNUmber = tmp % 10;
    result *= lastNUmber;
    tmp = Math.trunc(tmp / 10);
}
console.log(result);

result *= result;
result *= result;

let tmpString = "";
while (result > 0){
    let lastNUmber = result % 10;
    tmpString += lastNUmber;
    result = Math.trunc(result / 10);
}
console.log(tmpString[tmpString.length - 1] + tmpString[tmpString.length - 2]);
