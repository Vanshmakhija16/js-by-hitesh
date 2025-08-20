// const promise1 = new Promise((resolve,reject)=>{
//      // Do an async task 
//      //DB calls , crypto , network
//      console.log("wait for 5 second");
     
//      setTimeout(()=>{
//         console.log('Async task is complete');
//         resolve()
//      },5000)

// })

// promise1.then(()=>{
//     console.log("Promise consumed");
    
// })

// new Promise(function (resolve , reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Async 2 resolve");
    
// })

// const promise3 = new Promise(function(resolve , reject ){
//     setTimeout(function(){
//         resolve({username  : "Chai" , email : "chai@exapmle.com"})
//     },1000)
// })

// promise3.then(function(user){
//     console.log(user);
    
// })

const promise4 = new Promise (function (resolve ,reject ){
    setTimeout(function(){
        let error  = true
        if(!error){
            reject("Error something went wrong")
        }
        else{
            resolve({username : "vansh" , password : "123"})
        }
    },1000)
})

// const usernamee  = promise4.then((user)=>{
//     console.log(user);
//     return user.username
    
// }).then((username)=>{
//     console.log(username);
    

// }).catch((error)=>{
//     console.log(error);
    
// })


// promise4
// .then((user)=>{
//     console.log(user);
//     return user.username
    
// })
// .then((username)=>{
//     console.log(username);
    

// })
// .catch((error)=>{
//     console.log(error);
    
// })
// .finally(()=>{
//     console.log("The promise is either resolved or rejected");
    
// })
// console.log(usernamee);

const promise5 = new Promise((resolve,reject)=>{
      setTimeout(function(){
        let error  = false
        if(error){
            reject("Error:JS went wrong")
        }
        else{
            resolve({username : "makhija" , password : "123"})
        }
    },1000)
})

async function consumepromise5 (){
 try{
     const response =   await promise5
     console.log(response);
 }
 catch(e){
    console.log(e);
    
 }
  
}

consumepromise5()