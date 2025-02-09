//In JavaScript, scope is the current context of the code. Scopes can be global or local.var is globaly declared and can be accessed from anywhere in the program.let and const are block scoped and can only be accessed in the block they are declared.
/*let b = 10
const c = 20
if (true) {
  var a = 1;
  let b = 2;
  const c = 3;
 console.log("Inner Scope: ", a, b, c);
 
}
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3*/
  



/*function one(){
    const username = "John";
    function two(){
        const website = "www.google.com";
        console.log(username);
    }
    console.log(website);
    two()
}
one()*/






addone(5);
function addone(num){
    return num+1;
}
const addtwo = function(num){
    return num+2;
}
console.log(addtwo(5));