// const name = "vansh"
// const repocount = 50

// console.log(name + " " + repocount);

// console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

// const gamename = new String('vansh')

// // console.log(gamename[0]);
// // console.log(gamename.__proto__);
// // console.log(gamename.length);
// // console.log(gamename.toUpperCase());
// // console.log(gamename.toLocaleUpperCase());
// // console.log(gamename.charAt(4));
// // console.log(gamename.indexOf('v'));
// // console.log();
// const newString = gamename.substring(0, 3);
// // console.log(newString);
// const anotherString = gamename.slice(-2);
// console.log(anotherString);
//  console.log(gamename.split('n'));


// const newString1 = "  vansh   ";
// console.log(newString1);

// console.log(newString1.trim()); // removes whitespace from both ends

// const url = "https://www.van%20sh.com";
// url.replace("%20",'-')
// console.log(url.replace("%20",'-'));
// console.log(url.includes("vans")); // checks if the string contains "van"

// let name1 = "vansh-makhija-16";

// console.log(name1.split("-")); // splits the string into an array at each hyphen

let str = "JavaScript";
let part2 = str.slice(-10);   
// console.log(part2); // Outputs: "t"
console.log(str.split("").reverse().join('')); // Outputs: "tpircSavaJ" (Note: reverse() is not a built-in method for strings, this will throw an error)