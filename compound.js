const principal = 5000;
const rate = 0.05;
const time = 10;
const number = 12;
let amount, compoundInterest, period, base;

period = time * number;
amount = (principal * Math.pow(1 + rate / number, period)).toFixed(2);

//computing compound interest annually to two decimal place
compoundInterest = (amount - principal).toFixed(2);

console.log(`Compound Interest is ${compoundInterest},${amount}`);
