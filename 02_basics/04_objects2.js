const tinderUser = new Object()
// const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name ="vansh"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regularUser = {
    email : "some@.com",
    fullname : {
        uuserfullname : {
            firstname : "Vansh",
            lastname : "makhija",

        }
    }
}

// console.log(regularUser.fullname?.uuserfullname.firstname);
// console.log(regularUser.fullname.uuserfullname);
// console.log(regularUser.fullname);
// console.log(regularUser);




const obj1 = {1 : "a" , 2: "b"}
const obj2 = {3 : "c" , 4: "d"}
const obj4 = {5 : "c" , 6: "d"}

//const obj3 = {obj1 , obj2, obj4}
 const obj3 = Object.assign({} , obj1 , obj2 , obj4 )
//const obj3 = {...obj1,...obj2,...obj4} // spread operator
// console.log("obj3 ",obj3);


const users = [
    {
        id:1,
        email : "v@gooogle.com"
    },
    {
        id:1,
        email : "v@gooogle.com"
    },
    
    {
        id:1,
        email : "v@gooogle.com"
    },
    

]

// console.log(users[1].email);
// console.log(users[1].id);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename : "js in hindi",
    price : "999",
    Instructor : "vansh"

}

course.Instructor

const {Instructor : I} = course

console.log(I);
