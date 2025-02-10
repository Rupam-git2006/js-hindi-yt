const  myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNum = myNum.filter((num) => num % 2 === 0);
const newNum1 = myNum.filter((num) =>{
    return num >4      //In  this case {} scope open, we have to use return keyword
});
console.log(newNum);
console.log(newNum1);


//method 2
const myNum2 = []
myNum.forEach((num) => {
    if (num>4) {
        myNum2.push(num);
    }
});
console.log(myNum2);