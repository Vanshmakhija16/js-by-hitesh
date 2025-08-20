const mynums = [1,2,3]

// const mytotal = mynums.reduce(function (acc, currentvalue) {
//     console.log(`acc ${acc} and current value is ${currentvalue}`);
    
//     return acc + currentvalue 

// }, 0 )
//  console.log(mytotal);
 

// const mytotal2 = mynums.reduce((acc , curr) => acc + curr, 0 )
//  console.log(mytotal2);
 


// const mytotal2 = mynums.reduce((acc , curr) =>{
//     console.log(`acc ${acc} and current value is ${curr}`);
//     return acc + curr}, 0 )
//  console.log(mytotal2);
 
const shoppingcart = [
    {
        item: 'Js course',
        price: 2999

    },
    {
        item: 'python course',
        price: 999

    },
    {
        item: 'mobile dev course',
        price: 5999

    },
    {
        item: 'data science course',
        price: 11999

    },
]

const totalprice = shoppingcart.reduce( (acc , item)=> acc + item.price , 0)
console.log(totalprice);
