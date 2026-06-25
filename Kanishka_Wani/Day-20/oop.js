const user = {
    username : "kanishka",
    loginCount : 8,
    signedIN : true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        //console.log(`Username: ${this.username}`);
        console.log(this);
        
        
    }
}
// console.log(user.username);

// console.log(user.getUserDetails());

//console.log(this);

function User(username, loginCount, isLoggedIn){
    this.username =username;
    this.loginCount = loginCount;
    this.isLoggedIn =isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${`this.username`}`);
        
    }

    //return this
}

const userOne = new User("kanishka",12, true)// if we don't use nwe keyword then values of userTwo will override
const userTwo = new User("chaiaurcode", 11, false)
console.log(userOne);
console.log(userOne.constructor);

//console.log(userTwo);



