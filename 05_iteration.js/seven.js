const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//const newNum = myNumber.map((num) => { return num * 2});
const newNum = myNumber
                    .map((num) => num * 10)
                    .map((num) => num + 5)
                    .filter((num) => num >= 50);
console.log(newNum);
                    