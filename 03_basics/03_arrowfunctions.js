const user = {
    username : "VANSH",
    price : 999,
    welcome : function(){
        console.log(`${this.username}, Welcome to website`);
        console.log(this);
        
    }
} 

// user.welcome()
//  user.username = "sam"
//  user.welcome()

// console.log(this);
// function chai(){
//         username = "vansh"
//         console.log(this.username);
    
// }
// console.log(chai());

//  const chai = function(){
//        username = "vansh"
//        console.log(this);
//        console.log(this.username);
    
//  }

//arrow function

// const chai2 = ()=>{
//     username = "vansh"
//     console.log(this);
    
//     console.log(this.username);
    
// }
// chai()


//  const addTwo = (num1,num2)=>{
//     return num1 +num2
// }

 //const addTwo = (num1,num2)=>  num1 +num2 // Implicit return
 //const addTwo = (num1,num2)=>  ( num1 +num2 )
//  const addTwo = (num1,num2)=>  (console.log((num1 +num2 )));
  const addTwo = (num1,num2)=>  ({
    username : "vansh"
  });
  


console.log(addTwo(4,3));

const name = ()=>{return }
const name3 = ()=>(1+2) // to not use return keyword
 const name2= ()=>({}) //to pass objects 