// for (let i = 0 ; i<10 ; i++){
//     if(i == 5)  console.log(i ," is under if");
//     else    console.log(i);
    
// }

// for (let i = 1 ; i<4 ; i++){
//     console.log(`outer loop value : ${i}`);
    
//     for (let j = 1 ; j<=10; j++){
//      //   console.log(`Inner loop value ${j} and inner loop ${i}`);
//       console.log(`${i} * ${j} = ${ i * j }`);
        
// }
// }
let count = 0;
 for (let j = 1 ; j<=10; j++){
    
   // console.log(`${j} * ${count} = ${ j *count}`);
    count++;
 }

 // break and continue

//  for(let i=1 ; i <= 20 ; i++ ){
//     if(i ==5){ 
//         console.log("Detected " , i);
//         break;
//     }

//     console.log(i);
    
//  }

 for(let i=1 ; i <= 20 ; i++ ){
    if(i ==5){ 
        console.log("Detected " , i);
        continue;
    }

    console.log(i);
    
 }