const principal = 50000;
const rate = 5;
const time = 3;
let amount, compoundInterest;

amount = principal * (1 + rate / 100) ** time;

//computing compound interest annually to two decimal place
compoundInterest = (amount - principal).toFixed(2);

console.log(`Compound Interest is ${compoundInterest}`);
