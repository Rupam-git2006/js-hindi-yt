//for of loop   
/*const arr = [1,2,3,4]
for (const num of arr) {
    console.log(num);
}
const greeting = "Hello World";
for (const greet of greeting) {
    console.log(`Each char is ${greet}`);
}*/





//Maps
const map = new Map();
map.set('IN', 'India');
map.set('US', 'United States');
map.set('UK', 'United Kingdom');
map.set('AU', 'Australia');
map.set('NZ', 'New Zealand');
console.log(map);
for (const [key,value] of map) {
    console.log(`Key is ${key} and Value is ${value}`);
    
}