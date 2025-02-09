/*function add(n1,n2){
    let res = n1+n2;
    return res;
}
const res = add(10,20);
console.log("Result:",res);*/


/*function login(user){
    if(user===undefined){
        console.log("Please provide user object");
        return 
}
return `${user} logged in successfully`;
}
console.log(login());*/



/*function calculate(...n){//this is called rest operator for implementing variable in array
    return n;
}
console.log(calculate(10,20,30,40,50));*/




  
const user = {
    username: "admin",
    price:100
}
function handleObject(anyobject){
    console.log(`Username: ${anyobject.username} & price: ${anyobject.price}`);
    
}
handleObject(user);



const myNewArray = [200,300,400,500];
function  returnSecondElement(arr){
    return arr[1];
}
console.log(returnSecondElement(myNewArray));
console.log(returnSecondElement([10,20,30,40,50]));
