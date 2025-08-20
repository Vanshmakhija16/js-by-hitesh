const coding = ['java','cpp']


// coding.forEach( (item)=>{
//     console.log(item);
    
// } )
// coding.forEach( function (item){
//     console.log(item);
    
// } )

// function printme(item){
//     console.log(item);
// }


// coding.forEach( ( item, index , arr) =>{
//     console.log(item,index,arr);
    
// })

const mycoding = [
    {
        langname : "Js",
        file : "one.JS",

    },
    {
        langname : "Java",
        file : "one.java",

    },
    {
        langname : "cpp",
        file : ".one.cpp",

    }
]

mycoding.forEach( (item)=> {
    // console.log(item);
    // console.log(item.langname);
    // console.log(item.file);
    // console.log(Object.keys(item));
    // console.log(Object.values(item));
   // console.log(Object.entries(item));
    
    
} )
// when you want to acess keys use for in 
// when you want to acess elements directly use for of 

// objects - for in  key value paors return key
// array, strings ,map => for of return element

// const values = coding.forEach((item)=>{   // never return a value 
//     console.log(item);
//     return item; // undefined 
    
// })
// console.log(values);


const mynums = [1,2,3,4,5,6,7,8,9,10]

// // console.log(mynums.filter( (num)=> num > 4 ));
// console.log(mynums.filter((num)=> {
//     return  num > 4
// }));
// console.log(mynums);

const newnums = [];

// mynums.forEach( (num)=> {

//     if(num >4 ){
//         newnums.push(num)
//     }
// })

// console.log("newnnum : " , newnums);

  