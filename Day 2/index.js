//Second day, 23 days left, not feeling too optimistic
console.log('Advent of Code 2023 - Day 2');

const fs = require('fs');

const threshold = { 'red': 12, 'blue': 14, 'green': 13 };
let total = 0, secondTotal = 0;

const data = fs.readFileSync('input.txt', 'utf8').split('\n');

//If you held a gun to my head and told me to explain this, I'd pull out a second gun and shoot myself before you can. 6 AM is peak coding time.
data.forEach((line, index) => {
    const matches = Array.from(line.matchAll(/(\d+) (red|blue|green)/g), m => [parseInt(m[1]), m[2]]);
    const values = { 'red': 0, 'blue': 0, 'green': 0 };
    let exceedThreshold = false;

    matches.forEach(([num, color]) => {
        values[color] = Math.max(values[color], num);
        if (num > threshold[color]) exceedThreshold = true;
    });

    if (!exceedThreshold) total += index + 1;
    secondTotal += values['red'] * values['green'] * values['blue'];
});

//After the magic forEach, we have our solutions
console.log(`First solution: ${total}`);
console.log(`Second solution: ${secondTotal}`);