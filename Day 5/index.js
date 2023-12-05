//Day 5, took too long to even understand what they wanted
//I couldn't complete the second part yet, I'll try again later
console.log('Advent of Code 2023 - Day 5');

const fs = require('fs');
const text = fs.readFileSync('./input.txt', 'utf-8');
let input = text.split(/\r\n|(?<!\r)\n|\r/);

let seeds = input.shift().split(':')[1].match(/\d+/g);


//Extract the maps per section
let section = 0;
let maps = {};
for (let i = 0; i < input.length; i++) {
    if (input[i] === '') {
        continue;
    }
    if (!(/\d/.test(input[i]))) {
        section++;
        maps[section] = [];
        continue;
    }
    let nums = input[i].match(/\d+/g).map(Number);

    maps[section].push(nums);
}

//Calculate the value of the seed (way more efficient than actually calculating each value and then comparing)
function calculateValue(seed, map) {
    let newSeed;
    for (let i = 0; i < map.length; i++) {
        let [sourceStart, seedStart, length] = map[i];
        if (seed >= seedStart && seed <= seedStart + length) {
            newSeed = (seed - seedStart) + sourceStart;
        }
    }
    return newSeed !== undefined ? newSeed : seed;
}

//Run the seeds through the maps
seeds = seeds.map(seed => {
    Object.values(maps).forEach(map => {
        seed = calculateValue(seed, map);
    });
    return seed;
});

//We have the first solution
console.log(`First solution: ${Math.min.apply(Math, seeds)}`);