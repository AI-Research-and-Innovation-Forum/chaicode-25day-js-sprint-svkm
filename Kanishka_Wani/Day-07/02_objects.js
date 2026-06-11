//singleton
//object.create

const tinderUser = new Object() //singleton object

const tinderUSer1 = {}// literal

tinderUSer1.id="123abc"
tinderUSer1.name ="sammy"
tinderUSer1.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email :"some@gmail.com",
    fullName:{
        userFullName:{
            firstName: "kanishka",
            lastName: "wani"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);


const obj1 ={1: "a", 2: "b"}
const obj2 ={3: "c", 4: "d"}
const obj4 ={5: "c", 6: "d"}

// const obj3 = {obj1 ,obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id:1,
        email:" k@gmail.com"
    },
        {
        id:2,
        email:" kd@gmail.com"
    },
        {
        id:3,
        email:" kdw@gmail.com"
    },
]

users[1].email
console.log(tinderUSer1);

console.log(Object.keys(tinderUSer1));//important

console.log(Object.values(tinderUSer1));

console.log(Object.entries(tinderUSer1));

console.log(tinderUSer1.hasOwnProperty('isLogged'));


const course = {
    coursename: "javascript series",price: "999",
    courseInstructor: "hitesh"
}

//course.courseInstructor

const {courseInstructor: instructor} =course

console.log(instructor);

//api's json format 

// {
//     "coursename": "javascript series","price": "999",
//     "courseInstructor": "hitesh"
// }

[
    {},
    {},
    {}
]
