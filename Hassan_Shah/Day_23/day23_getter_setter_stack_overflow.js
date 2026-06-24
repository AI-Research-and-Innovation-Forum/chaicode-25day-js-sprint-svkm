// Declaring a basic class with a constructor
class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    // Getter for email to format the output
    get email() {
        return this._email.toUpperCase(); 
    }

    // Setter for email using a new property '_email' to avoid max call stack size exceeded error
    set email(value) {
        this._email = value;
    }

    // Getter for password to intercept and customize access
    get password() {
        return this._password.toUpperCase();
    }

    // Setter for password using '_password' to prevent a race condition with the constructor
    set password(value) {
        this._password = value; 
    }
}

// Creating an instance of the User class
const hitesh = new User("hitesh@ai.com", "123");
console.log(hitesh.password); // Returns "123" capitalized if letters are present


// Old syntax using Function and Object.defineProperty
function UserOld(email, password) {
    this._email = email;
    this._password = password;

    // Defining getters and setters on the object context
    Object.defineProperty(this, 'email', {
        get: function() {
            return this._email.toUpperCase();
        },
        set: function(value) {
            this._email = value;
        }
    });

    Object.defineProperty(this, 'password', {
        get: function() {
            return this._password.toUpperCase();
        },
        set: function(value) {
            this._password = value;
        }
    });
}

// Using the older syntax implementation
const chai = new UserOld("chai@chai.com", "chai");
console.log(chai.email);


// Object-based getter and setter syntax
const UserObj = {
    _email: 'h@hc.com',
    _password: 'abc',

    // Getter mapping
    get email() {
        return this._email.toUpperCase();
    },

    // Setter mapping
    set email(value) {
        this._email = value;
    }
}

// Creating an object via factory method referencing UserObj
const tea = Object.create(UserObj);
console.log(tea.email);
