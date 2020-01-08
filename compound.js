const principal = 5000;
const rate = 0.04;
const time = 6;
const number = 4;
let amount, compoundInterest, period, base;
base = period = time * number;
amount = (principal * Math.pow(1 + rate / number, period)).toFixed(2);

//computing compound interest annually to two decimal place
compoundInterest = amount - principal;

console.log(`Compound Interest is ${compoundInterest},${amount}`);
