// execute safer and cleaner JavaScript code
'use strict';
function showName(name) {
    console.log('\n' + "-".repeat(72));
    console.log(name);
    console.log("-".repeat(72));
}
function showTitle(title) {
    console.log('\n' + "-".repeat(72));
    console.log(title);
    console.log("-".repeat(72));
}
showName("fred");
showTitle("topic : Arrays");

const emptyArray = [];
const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

console.log("emptyArray : ", emptyArray);
console.log("daysOfTheWeek : ", daysOfTheWeek);
console.log('firstday :', daysOfTheWeek[0]);
console.log('lastday :', daysOfTheWeek[daysOfTheWeek.length - 1]);

const sevenEmptySlot = new Array(7);
const subjects = new Array('dsa', 'python', 'java', 'c++', 'javascript');

console.log("sevenEmptySlot : ", sevenEmptySlot);
console.log("subjects : ", subjects);

for(let index = 0; index <daysOfTheWeek.length; index++) {
    console.log(`days ${index} : ${daysOfTheWeek[index]}`);
}

const fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;

for (let i = 2; i < 11; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
console.log("fibonacci : ", fibonacci.slice(1));

const numberAdd = [1, 2, 3, 4, 5];
numberAdd[5] = 6;
numberAdd.push(7,8,9);
numberAdd.unshift(-2, -1, 0);
console.log("numberAdd : ", numberAdd);

const numberRemove =[1,2,3,4,5];

numberRemove.shift();
console.log("numberRemove : ", numberRemove);
numberRemove.pop();
console.log("numberRemove : ", numberRemove);

const splicePrac = [1,2,3,4,5];

splicePrac.splice(1,3);
console.log("splicePrac : ", splicePrac);
splicePrac.splice(1,0,2,3,4,6,7,8);
console.log("splicePrac : ", splicePrac);
splicePrac.splice(1,3,20,30,40);
console.log("splicePrac : ", splicePrac);


const averageTemp = [
    [10,20,30,40,50,60,70],
    [72, 75, 79, 79, 81, 81, 76]
];
function matrixAverage(matrix) {
    for(let row = 0; row < matrix.length; row++) {
        for(let col = 0; col < matrix[row].length; col++) {
            console.log(`matrix[${row}][${col}] : ${matrix[row][col]}`);
        }
    }
}
matrixAverage(averageTemp);

const matrix3x3x3 = [];

for (let row = 0; row < 3; row++) {
    matrix3x3x3[row] = [];
    for (let col = 0; col < 3; col++) {
        matrix3x3x3[row][col] = [];
        for (let depth = 0; depth < 3; depth++) {
            matrix3x3x3[row][col][depth] = row + col + depth;
        }
    }
}

console.log("matrix3x3x3 : ", matrix3x3x3[1][2][0]);
console.log("matrix3x3x3 : ", matrix3x3x3);


const neg =[-1,-2,-3];
const pos =[1,2,3];
const combined = pos.concat(neg);
console.log("combined : ", combined);

const number1to15 = [];
for (let i = 1; i <= 15; i++) {
    number1to15[i - 1] = i;
}
// console.log("number1to15 : ", number1to15);

const isEven = number => number % 2 === 0;

console.log("isEven : ", number1to15.every(isEven));
console.log("isEven : ", number1to15.some(isEven));

number1to15.forEach(number => {
    console.log(`number : ${number} ${isEven(number) ? 'even' : 'odd'}`);
});

const evenTests = number1to15.map(isEven);
const oddNumbers = number1to15.filter(number => !isEven(number));
const totalNum = number1to15.reduce((total,number) => {
    return total + number;
})

console.log("evenTests : ", evenTests);
console.log("oddNumbers : ", oddNumbers);
console.log("totalValues : ", totalNum);

// array iterators

for(const [index, value] of subjects.entries()){
    console.log(`subjects[${index}] : ${value}`);
}

for(const index of subjects.keys()){
    console.log(`keys : `, index);
}

for(const value of subjects.values()){
    console.log(`value : `, value);
}

const subjectIterator = subjects[Symbol.iterator]();
console.log(subjectIterator.next());
console.log(subjectIterator.next());
console.log(subjectIterator.next());

// create fill copy

const subjectcopy = Array.from(subjects)
console.log(subjectcopy);
const fullOfOne = Array(7).fill(1);
console.log(fullOfOne);
const gawaArray = Array(1,2,3,4,5,6)
console.log(gawaArray);

const numbers = [8,34,1,9,5,23];
numbers.sort();
console.log(numbers);
const acsNumbers = [8,34,1,9,5,23];
acsNumbers.sort((a,b) => a-b);
console.log(acsNumbers);
const deCnumbers = [8,34,1,9,5,23];
deCnumbers.sort((a,b) => b-a);
console.log(deCnumbers);

const friend = [
    {name : "fred", age : 18},
    {name : "russ" , age : 19},
    {name : "jared", age : 17}
]
friend.sort((friendA,friendB) => friendB.age - friendA.age);
console.log(friend);
