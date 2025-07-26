const marvel_heros = ["thor", "Ironman" , "spiderman"]
const dc_heros  = ["superman" , "flash" , "batman"]

// marvel_heros.push(dc_heros)

// const allheros = marvel_heros.concat(dc_heros) //concat method returns a new arrray

// console.log(marvel_heros);

// console.log(allheros);

// const all_new_heros = [...marvel_heros , ...dc_heros] // spread method , ex=> Kaatch niche gira 

// console.log(all_new_heros);

 const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5],8,9]]
 const real_another_array = another_array.flat(3)
 console.log(real_another_array);

 console.log((Array.from(real_another_array))); //from used to convert into arr
 console.log((Object.values({name : "vansh" , age : 5}))); // Interesting case
//  console.log((Object.keys({name : "vansh" , age : 5}))); // Interesting case
//  console.log((Object.entries({name : "vansh" , age : 5}))); // Interesting case


// let  score = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score,score2,score3));

let fruits = ["apple", "banana", "mango"];

console.log(fruits.join(", ")); 


 console.log((Array.from(fruits))); //from used to convert into arr