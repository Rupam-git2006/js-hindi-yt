/*function add(n1,n2){
    let res = n1+n2;
    return res;
}
const res = add(10,20);
console.log("Result:",res);*/


function login(user){
    if(user===undefined){
        console.log("Please provide user object");
        return 
}
return `${user} logged in successfully`;
}
console.log(login());
