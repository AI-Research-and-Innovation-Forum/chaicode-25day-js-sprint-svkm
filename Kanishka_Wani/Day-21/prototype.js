//let myName = "kanishka   "
//let mychannel = "chai   "

//console.log(myName.truelength);

let myHeros =["thor", "spiderman"]

let heroPower={
    thor : "hammer",
    spiderman : "sling",


    getSpiderPower: function () {
        console.log(`Spider power is ${this.spiderman}`);
        
    }
}

Object.prototype.kanishka = function () {
    console.log(`kanishka is present in all objects`);
    
}

Array.prototype.heykanishka =  function() {
    console.log(`Kanishka says hello`);
    
}

//heroPower.kanishka()
myHeros.kanishka()
myHeros.heykanishka()
//heroPower.heykanishka()


// inheritance

const User = {
    name: "chai",
    email : "chai@gmail.com"
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport= {
    makeAssignment :"JS Assignment",
    fullTime : true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode   "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
}

anotherUsername.trueLength()

"kanishka".trueLength()
"iceTea".trueLength()
