//Day 6, actually understanding the problem was significantly more difficult than actual solving it
console.log('Advent of Code 2023 - Day 6');

let total = 1;
let secondTotal = 0;

const fs = require('fs');
const text = fs.readFileSync("./input.txt", "utf-8");
const lines = text.split(/\r\n|(?<!\r)\n|\r/);

const time = lines[0].match(/\d+/g).map(Number);
const distance = lines[1].match(/\d+/g).map(Number);
let finalTime = '';
let finalDistance = '';
let winTimes = {};

//Part 1, go through all the possible times and check if they win. Also process the final time and distance for the second part.
time.forEach((time, index) => {
    finalTime += time;
    finalDistance += distance[index];
    for (let i = 1; i < time; i++) {
        if ((i * (time - i)) > distance[index]) {
            if (winTimes[index] === undefined) {
                winTimes[index] = 1;
            }
            else {
                winTimes[index]++;
            }
        }
    }
});

//Part 2, same as part 1 but with the final time and distance.
for (let i = 1; i < finalTime; i++) {
    if ((i * (finalTime - i)) > finalDistance) {
        secondTotal++;
    }
}

//Multiply all the win times together to get the final solution for part 1.
Object.entries(winTimes).forEach(([, value]) => {
    total *= value;
});

//And we have our solution.
console.log(`First solution: ${total}`);
console.log(`Second solution: ${secondTotal}`);