// singleton 
// Object.create
// object literals 

const mysym = Symbol("key1")

const Jsuser = {
    name : "Vansh",
    "full name" : "vanshmakhija",
    [mysym] : "key1", 
    age : 20,
    location : "Jaipur",
    email : "vansh@google.com",
    isLoggedIn : false,
    lastlogindays : ["Mon", "sat"]

}
//console.log(Jsuser.email); // dot method is not a good way

// console.log(Jsuser["age"])
// console.log(Jsuser["full name"])
// console.log(typeof(Jsuser[mysym]))

// Jsuser.email = "vanshchatgpt.com"
// Jsuser.age = 21
// Object.freeze(Jsuser)
// console.log(Jsuser.email);
// console.log(Jsuser.age); 
// Jsuser.email = "vansh.com"
// Jsuser.age = 22
// console.log("After freeze" , Jsuser.email);
// console.log(Jsuser); 


Jsuser.greeting = function(){
    console.log(`Hello! ${this.name} . Good Evening`); 
}
 console.log(Jsuser.greeting()); 
