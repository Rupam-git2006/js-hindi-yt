let myDate= new Date()
console.log(typeof myDate);

console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toTimeString());
console.log(myDate.toUTCString());

let newDate = new Date()
console.log(newDate.getMonth()+1);


let myCreat = new Date(2025,0,23)
console.log(myCreat.toDateString());
let myCreat2 = new Date(2024,1,23,5,2)
console.log(myCreat2.toLocaleString());
let myCreat3 = new Date("01-14-2024")
console.log(myCreat3.toLocaleString());


let myTime = Date.now()
console.log(myTime);
console.log(myCreat3.getTime());
console.log(Math.floor(Date.now()/1000));
