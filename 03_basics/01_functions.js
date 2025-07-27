

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

//    console.log(login("vansh"));
//    console.log(login()); // undefined 
   

// when number of parameters is unknown we use rest operator (... is known as rest operstor )
// ... is also a spread operator notaion but spread and rest operator are not same 
// function calculateCartPrice( ...num1){
//     return num1
// }
// function calculateCartPrice(val1 , val2 , ...num1){
//     return num1
// }

// console.log(calculateCartPrice(200,400,600,800));


//how to pass object in a function

const user = {
    username : "vansh",
    price : 199
}

function handleObject(anyobject){
    return `Username is "${anyobject.username }" and price is: "${anyobject.price}"`
}

// console.log(handleObject(user));

console.log(handleObject(
        {
        username : "vansh",
        price : 199
    }
));


const myarr = [1,2,3,4]

function arrHandler(arr,index){
    console.log("You have provide arr:");
    
    for(let item of arr ) {
        console.log(item);
        
    }
    return ` Your element at index ${index}  in the array ${arr} is : ${arr[index]}`
}

console.log(arrHandler(myarr,2));
