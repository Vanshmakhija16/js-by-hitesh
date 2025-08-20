//Array specific loops:

// for of
//array of objects [{},{},{}]

// const arr = [1,2,3,4,5];

// for (const num of arr){
//     // console.log(num);
    
// }

// const name = "Vansh Makhija"

// for (const char of name ){
//     console.log(char);
    
// }

// Maps

const map = new Map()
map.set('In' , 'INDIA')
map.set('USA' , 'UNITED STATES OF AMERICA')
map.set('Fr' , 'FRANCE')

// console.log(map);

// for(const [key , value] of map){
//     console.log(key , ":-" , value);
    
// }
const myobj = {
    'Game1' : 'NFS',
    'Game2' : 'Spiderman'
}

// for(const [key, value] of myobj){
//     console.log(key , ":-" , value);
    
// }

const myobject ={
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    py : 'python'

}

for (const key in myobject){
    // console.log(key ,  myobject[key]);
    
}

const programming = ['java','python','cpp','js']

for(const key in programming){
    console.log(programming[key ]);
    
}