//First day, not much to say
console.log('Advent of Code 2023 - Day 1');

const fs = require('fs');

//This is, without a doubt, a way do to this, the route to which was the cause of many pulled hairs (I'll go bald by the end of this). WHY CAN'T THE ELVES AT LEAST ENSURE THAT THE NUMBERS DON'T CONVERGE INTO EACH OTHER?!
const numbers ={
    'zero': 'zero0zero',
    'one': 'one1one',
    'two': 'two2two',
    'three': 'three3three',
    'four': 'four4four',
    'five': 'five5five',
    'six': 'six6six',
    'seven': 'seven7seven',
    'eight': 'eight8eight',
    'nine': 'nine9nine',
}
let total = 0, secondTotal = 0;

const data = fs.readFileSync('input.txt', 'utf8').split('\n');

//Convert written numbers to digits (necessary for part 2)
let lines = [];
data.forEach(line => {
    Object.entries(numbers).forEach(([key, value]) => {
        line = line.replaceAll(key, value);
    });
    lines.push(line);
})

//Part 1

let partOneNumbers = [];
data.forEach(line => {
    let firstNumber
    let lastNumber
    let first = true;
    line.match(/\d/g).forEach(num => {
        if (first) {
            firstNumber = num;
            lastNumber = num; //If I am to trust the provided examples (what if the elves are trying to trick me?), if there is only one number, it is both the first and last.
            first = false;
        } else {
            lastNumber = num;
        }
    })
    partOneNumbers.push(firstNumber + lastNumber);
})

partOneNumbers.forEach(number => {
    total += parseInt(number);
});

//Part 2

let partTwoNumbers = [];

lines.forEach(line => {
    let firstNumber
    let lastNumber
    let first = true;
    line.match(/\d/g).forEach(num => {
        if (first) {
            firstNumber = num;
            lastNumber = num; //I still don't trust the elves, but this is correct. They'll trick us later, I'm sure.
            first = false;
        } else {
            lastNumber = num;
        }
    })
    partTwoNumbers.push(firstNumber + lastNumber);
});

partTwoNumbers.forEach(number => {
    secondTotal += parseInt(number);
});

//Now we have our solution for both cases
console.log(`Part 1: ${total}`);
console.log(`Part 2: ${secondTotal}`);