let mydate = new Date();
// console.log(mydate.toString()); // Outputs the current date and time in a human-readable format
// console.log(mydate.toDateString());
// console.log(mydate.toTimeString()); // Outputs the time portion of the date
//console.log(mydate.toISOString()); // Outputs the date in ISO format
// console.log(mydate.getFullYear()); // Outputs the current year
//  console.log(mydate.getMonth() + 1); // Months are zero-indexed, so we add 1
// console.log(mydate.getDate()); // Outputs the day of the month
// console.log(mydate.toLocaleString());
console.log(mydate.getDay()); // Outputs the day of the week (0-6, where 0 is Sunday)

// let mycreatedDate = new Date(2005 ,2 ,24);
// let mycreatedDate = new Date(2005 ,2 ,24,5,3);
let mycreatedDate = new Date("03-24-2023");


console.log(mycreatedDate.toString()); // Outputs the date in a human-readable format


let mytimestamp = Date.now()

// console.log(mytimestamp);
// console.log(mycreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getDay());

console.log(newDate.toLocaleString('default' , {
    weekday : "long"
}));

console.log(`${newDate.getTimezoneOffset()}`);


