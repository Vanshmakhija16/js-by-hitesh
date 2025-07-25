// Primitive

// 7 types : String ,Number, Boolean ,null , undefined,symbol,BigInt

// JS is a dynamically typed language

const score = 100 
const score2 = 100.3

const isLoggedIn = true 
const temp = null
let userEmail ;

//Symbol
const id = Symbol('123')
const id2 = Symbol('123')
// console.log(id ==id2 )
// console.log(id2 )

const bigNumber = 2331416543131456351651332n 

// // Reference type (Non primitive)

// array , objects , functions

const heros = ["Shaktiman" , " baalveer" , "doga"] //array

//objects
let myobj = {
                name : "vansh",
                age : 20,
            }
// function 

const myfunc = function(){

    console.log("Hello! vansh");
    
}

console.log(typeof bigNumber);
console.log(typeof temp);
console.log(typeof id);

