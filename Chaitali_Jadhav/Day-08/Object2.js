const tinderUser = new Object()  // Singleton Object

const tinderUser = {}          // non-Singleton Object

tinderUser.id = "123cj" 
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

console.log(tinderUser);  

const regularUser = {
    email : "sam@g.com",
    fullname : {
        userfullname :{
            fname : "Chaitali",
            lname : "Jadhav"
        }
       
    }
}

console.log(regularUser.fullname.userfullname.fname)  

const obj1 = {1 : "a" , 2 : "b"}
const obj2 = {3 : "a" , 4 : "b"}
const obj4 = {5 : "a" , 6 : "b"}

const obj3 = {obj1,obj2}
const obj3 = Object.assign(obj1 ,obj2) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
const obj3 = Object.assign({},obj1 ,obj2 , obj4) //{} is optional parameter , it gives assure result will combine
                       target//---source-----

const obj3 = {...obj1 , ...obj2 ,...obj4}
console.log(obj3)

const users = [
    {
        id : 1 ,
        email : "c@gmai.com"
    },
    {
        id : 2 ,
        email : "chaitali@gmai.com"
    },
    {   id : 3 ,
        email : "chaitu@gmai.com"
    },

]

console.log(users[2].email)
console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //checks 
console.log(tinderUser.valueOf());

const course = {
    coursename : "js in hindi",
    price :"999",
    courseInstructor : "hitesh"
}

// course.courseInstructor
// Accessing object property
// const {courseInstructor} = course
const {courseInstructor : Instructor} = course   //destructure 

console.log(Instructor);

// APIs
//JSON format

// {
//     "name" : "hitesh",
//     "coursename" : "js in hindi",
//     "price"  : "free"
// }

{
    {},
    {},
    {}
}

