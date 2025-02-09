const userEmail = []
if (userEmail) {
    console.log("User email is present");
}else{
    console.log("User email is not present");
}

/*
falsey values in JavaScript: false, 0, "", null, undefined, NaN,-0, BigInt(0n)
truthy values in JavaScript: true, 1, "string", [], {}, BigInt(1n),"0",'false'
Falsy values in a string always truthy because it is a non-empty string.
*/


const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}



//Nullish coalescing operator (??) : It is used to check the null or undefined values. If the value is null or undefined then it will return the right-hand side value. 