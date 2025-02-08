//singleton
//ovbject literals

const mySym = Symbol("key1");
const Jsuser ={
    name : "hitesh",
    "full name" : "hitesh choudhary",
    [mySym] : "mykey1",
    age : 22,
    email:"rhtirn@com",
    courseCount : 5,
    isLoggedin : true
}
console.log(Jsuser.name);
console.log(Jsuser["name"]);
console.log(Jsuser["full name"]);
console.log(Jsuser[mySym]);

Jsuser.email = "rupam@com";  //This is method of change objects
console.log(Jsuser.email);
Object.freeze(Jsuser);   //This is method of freeze objects
Jsuser.email = "rhtirn@Rupam.com"; 
console.log(Jsuser.email);


Jsuser.greeting = function(){
    console.log(`Hello ${this.name}`);
}
console.log(Jsuser.greeting());
