const hero = [" spi","tree", "golem"]
const dc = ["thor","spider","flash"]
const all = hero.concat(dc)
console.log(all);



const another = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another = another.flat(Infinity)
console.log(real_another);

console.log(Array.isArray("rupam"));
console.log(Array.from("rupam"));


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));
