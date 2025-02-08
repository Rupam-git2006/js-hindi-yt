const tinder = new Object()
tinder.name = "rupam";
tinder.age = 22;
//console.log(tinder);


const regularUser = {
    email:"some@com",
    fullname:{
        userfullname:{
            firstName:"rupam",
            lastName:"choudhary"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstName);



const obj1 = {1:"a",2:"b"};
const obj2 = {3:"a",4:"b"};
//const obj3 = Object.assign({},obj1,obj2);//all objects are assign in the empty object
const obj3 = {...obj1,...obj2};
console.log(obj3);




/*const users = [
    {
        name:"rupam",
        email:"rupam@com"
    },
    {
        name:"hitesh",
        email:"hitesh@com"
    }
]
users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("name"));*/




const course = {
    name:"javascript",
    price:"free",
    teacher:"hitesh",
}
//course.teacher
//console.log(course.teacher);
const {teacher:instractor} = course;
console.log(instractor);
