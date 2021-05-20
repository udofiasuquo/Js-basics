// console.log("he, world");

// function add(num1, num2){
//     return num1 * num2;
// }

// console.log(add(10, 5));

const naira = 410.83;

function currencyConvert(dollar){
    return dollar * naira;
}

console.log(`One dollar is equivalent of N${currencyConvert(1)}.`);