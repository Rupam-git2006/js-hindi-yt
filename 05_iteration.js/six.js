const myNum = [1,2,3]
const myTotal = myNum.reduce(function(acc,currval){
    console.log(`acc : ${acc} currval : ${currval}`);
    return acc + currval;
},0); // comar por ja debo acc te tai hobe
console.log(myTotal);





const myBatch = [
    {
        itemName : " js course",
        price : 100
    },
    {
        itemName : " py course",
        price : 100
    },
    {
        itemName : " c course",
        price : 100
    }
]
const myTotal1 = myBatch.reduce((acc,currval) => acc+currval.price,0);
console.log(myTotal1);
