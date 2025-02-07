const name = "Rupam"
const repo = 50
console.log(name + repo);   //old method
console.log(`Hello my name is ${name} and my repo count is ${repo}`);


const gameName = new String('rupam')
console.log(gameName[0]);
console.log((gameName.__proto__));
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newStr = gameName.substring(0,4)
console.log(newStr);

const another = gameName.slice(-8,4)
console.log(another);
const newstring = "       hitesh       "
console.log(newstring);
console.log(newstring.trim());


const url = "https://rupam.com/rupam%20samanta"
console.log(url.replace('%20','-'));
