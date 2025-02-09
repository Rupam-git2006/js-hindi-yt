//Immediately Invoked Function Expression (IIFE)

//named IIFE
(function chai(){
    console.log(`DB CONNECTED`);
    
})();  // when two IIFE are used, they should be separated by semicolon

( (name) =>{
    console.log(`DB CONNECTED 2 ${name}`);
}) ('Chaitanya');