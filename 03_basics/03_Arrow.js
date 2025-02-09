const user = {
    username: "rupam",
    price: 90,
    welcomeMsg: function() {
        console.log(`${this.username} ,wecome to website`);
    }
}
user.welcomeMsg();
console.log(this);



/*
function chai(){
    console.log(this);
    let user = "rupam"
   // console.log(this.user);  
}
chai();*/



// Arrow function
const chai = () => {
    let user = "rupam";
    console.log(this.user);
}
chai(); 




const add = (n1, n2) => (n1 + n2);    //when {} used then return keyword is required & when () is used then return keyword is not required
console.log(add(10, 20));
const obj = (n3,n4) => ({username: "rupam"})
console.log(obj(10,20));
