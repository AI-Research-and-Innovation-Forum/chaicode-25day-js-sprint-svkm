// Object creation using the contructor : (Singleton)
const object_by_contructor = new Object();
console.log(object_by_contructor);

// Object creation using the Literals : (Non-Singleton)
const object_by_literals = {};
console.log(object_by_literals);

// keys can only be string or symbols
// value can be another object as well


const obj1  = {
    obj2 : {
        obj3 :"Nested one!"
    }
}

console.log(obj1.obj2.obj3);

// Merging & Combining the objects :

const o1 = {1 : "a", 2 : "b"};
const o2 = {3 : "a", 4 : "b"};
const o3 = {5 : "a", 6 : "b"};

// Incorrect way :(Nesting only)
const obj4 = {o1,o2,o3}
console.log(obj4)


// const merged_obj = Object.assign(o1,o2,o3); // Here no o1 will have the merged array as well
// console.log(merged_obj)
// console.log(o1)

// Using Assign function :

const new_merged_obj = Object.assign({},o1,o2,o3); // Here no o1 will have the merged array as well
console.log(new_merged_obj)

// Using spread operator :

const merge  = {...o1,...o2,...o3};
console.log(merge)

// Array of objects :

const arr = [{id : 1, email : "xyz.com"},{id : 2, email : "zyx.com"}];
console.log(arr);

console.log(arr[1].email);


// Utility Mehtods :

console.log(Object.keys(merge));
console.log(Object.values(merge));
console.log(Object.entries(merge));

console.log(arr[0].hasOwnProperty('mail'));
console.log(arr[0].hasOwnProperty('email'));
