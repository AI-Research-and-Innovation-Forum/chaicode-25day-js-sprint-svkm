/*
# Video 2: Class constructor and static in Javascript

## 1. Classes and Constructors (myClasses.js)
Demonstrates the ES6 Class syntax and its "Behind the Scenes" prototype-based equivalent.
*/

// --- ES6 Class Syntax ---
class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return `${this.password}abc`;
    }

    changeUsername() {
        return `${this.username.toUpperCase()}`;
    }
}

const chai = new User("chai", "chai@gmail.com", "123");
console.log(chai.encryptPassword());
console.log(chai.changeUsername());

/*
## Behind the scenes (Prototype based approach)
If the `class` syntax was not available, this is how it would work under the hood.
*/
function UserBTS(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

UserBTS.prototype.encryptPassword = function() {
    return `${this.password}abc`;
}
UserBTS.prototype.changeUsername = function() {
    return `${this.username.toUpperCase()}`;
}

const tea = new UserBTS("tea", "tea@gmail.com", "123");
console.log(tea.encryptPassword());
console.log(tea.changeUsername());


/*
## 2. Inheritance (inheritance.js)
Demonstrates subclassing using `extends` and using `super()` to refer to the base class's constructor.
*/

class BaseUser {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends BaseUser {
    constructor(username, email, password) {
        // `super` automatically takes `this` behind the scenes and calls the BaseUser constructor
        super(username); 
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const teacherObj = new Teacher("chai", "chai@teacher.com", "123");
teacherObj.addCourse();

const masalaChai = new BaseUser("masalaChai");
masalaChai.logMe();

console.log(teacherObj === masalaChai); // false
console.log(teacherObj instanceof Teacher); // true
console.log(teacherObj instanceof BaseUser); // true


/*
## 3. Static Properties and Methods (staticprop.js)
Demonstrates how the `static` keyword restricts access to methods/properties so instances (and child instances) cannot access them.
*/

class StaticUser {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }

    // Static restricts access. Instances of this class will NOT have access to createId()
    static createId() {
        return `123`;
    }
}

const hitesh = new StaticUser("hitesh");
// console.log(hitesh.createId()); // Error!

class StaticTeacher extends StaticUser {
    constructor(username, email) {
        super(username);
        this.email = email;
    }
}

const iphone = new StaticTeacher("iphone", "i@phone.com");
iphone.logMe();
// console.log(iphone.createId()); // Error! Child class instances also get restricted.


