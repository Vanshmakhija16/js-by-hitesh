// Immediately invoked Function expressions (IIFE)

// function chai(){
//     console.log(`DB CONNECTED`);
    
// }

// chai()

// const db = ()=>(console.log("DB CONNECTED"));
// //console.log(db());
// db()


// const db2 = ()=>{
//     return "DB CONNECTION SUCCESS"
// }
// console.log(db2());


(function chai(name){
    // named iife
    console.log(`"connected" ${name}`);
    
})("makhija"); // iife - to prevent pollution created by global scope 

(()=>{
    console.log("connected");
    
})();


( (name)=>(
    console.log(`"connected" ${name}`)  
    )
)("vansh");


// 3 types of funcction

//Type 1 named function

function chai(){
    console.log("h");
     
}
chai()

//Type 2 arrow function with return

const func= () => {
    return  2
}
console.log(func());

// type 3 arrow function without return

const func2= ()=>(console.log("hello"))

func2()
 //()()         // how to define iife 
