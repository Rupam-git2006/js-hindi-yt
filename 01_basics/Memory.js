//Stack (Primitive), Heap(Non-Primitive)

let ori = "Rupam"
let another = ori
another = "samanta"
console.log(ori);
console.log(another);


let userOne = {
    email : "user@google.com",
    upi: "user@upi"
}
let userTwo = userOne
userTwo.email = "user2@com"
console.log(userOne.email);
console.log(userTwo.email);
