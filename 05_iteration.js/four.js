const coding = ["js", "c", "python", "java"];
// coding.forEach(function (element) {
//     console.log(element);
// });

// coding.forEach((element) => {
//     console.log(element);
// });

// function printElement(element) {
//     console.log(element);
// }
// coding.forEach(printElement);

// coding.forEach((element, index , arr) => {
//     console.log(element, index, arr);
// });
    


const myCoding = [
    {
        name: 'js',
        type: 'javascript'
    },
    {
        name: 'c',
        type: 'c'
    },
    {
        name: 'python',
        type: 'python'
    },
    {
        name: 'java',
        type: 'java'
    }
]
myCoding.forEach((element) => {
    console.log(element.name, element.type);
});