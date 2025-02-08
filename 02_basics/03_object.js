//singleton
//ovbject literals

const mySym = Symbol(key1);
const Jsuser ={
    name : "hitesh",
    "full name" : "hitesh choudhary",
    mySym : "myKey1",
    age : 22,
    courseCount : 5,
    isLoggedin : true
}
console.log(Jsuser.name);
console.log(Jsuser["name"]);
console.log(Jsuser["full name"]);
console.log(Jsuser.mySym);
