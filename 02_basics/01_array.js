const myArr = [0,1,2,3,4]
const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]);
myArr.push(10)
myArr.pop()
myArr.unshift(10)
//myArr.shift()
console.log(myArr);
console.log(myArr.includes(9));


const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);
