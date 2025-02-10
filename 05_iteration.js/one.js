for (let index = 0; index <=10; index++) {
   console.log(`Outer loop value : ${index}`);
   for (let j = 0; j <=10; j++) {
    console.log(index + ' * ' + j + ' = ' + index*j);
    
 }
}



let myArray = ["flach", "curved", "bent"];
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}
let arr = 0
while (arr<myArray.length) {
    console.log(`VAlue is ${myArray[arr]}`);
    arr++;
}