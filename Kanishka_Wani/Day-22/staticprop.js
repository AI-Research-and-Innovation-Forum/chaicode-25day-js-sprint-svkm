class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
        
    }

    static createId(){
        return `123`
    }
}

const kanishka = new User("kanishka")

//console.log(kanishka.createId());

class Teacher extends User{
    constructor(username, email){
       super(username)
       this.email = email
    }
}

const iphone = new Teacher("iphone", "iphone.com")
//console.log(iphone.createId());
