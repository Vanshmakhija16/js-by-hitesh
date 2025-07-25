// const score= 100
// console.log(score)
// const balance = new Number(100)
// console.log(balance)
// console.log(balance.toString().length)
// console.log(balance.toFixed(2))// Outputs: "100.00"


// const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(3));

// const num1 = 100000
// console.log(num1.toLocaleString('en-IN')); // Outputs: "100,000"


// ++++++++++++ Math Operations ++++++++++++


// console.log(Math);
// console.log(Math.PI);
// console.log(Math.abs(-4));
// console.log((Math).round(4.4));
// console.log((Math).round(4.5));
// console.log((Math).round(4.6));
// console.log((Math).round(4.49));
// console.log((Math).ceil(4.01));
// console.log((Math).floor(4.9));
// console.log((Math).pow(2, 8)); // 2^8 = 256
// console.log((Math).sqrt(16)); 

// console.log((Math.random().toPrecision(1)*10)); // Outputs a random number between 0 and 1
// console.log((Math.random()*10) + 1 ); //

const min =10
const max = 20;
const value = Math.random();
console.log((value) ,(max - min + 1 )); // Outputs a random number between 0 and 1
console.log(Math.floor(value * (max - min + 1 )) + min )