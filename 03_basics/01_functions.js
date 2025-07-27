

function saymyname(){
    console.log("V");
    console.log("A");
    console.log("N");
    console.log("S");
    console.log("H");
}
// sayname // reference
// console.log(saymyname) 
// saymyname()

// function add2num(num1, num2){
//     console.log(    num1 + num2 );
//     }

function add2num(num1, num2){
   return   num1 + num2 ;
    }

    // console.log(add2num("v",4));
    
   const result = add2num(2,4)
//    console.log(result);
//    function login(username){
//     if (username){
//     return `${username} just logged in`
//     }
//     return `"Please enter username`
//    }
   function login(username = "sam"){  // default value
    if (username){
    return `${username} just logged in`
    }
    return `"Please enter username`
   }

   console.log(login("vansh"));
   console.log(login()); // undefined 
   