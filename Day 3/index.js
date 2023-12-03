console.log('Advent of Code 2023 - Day 3');
console.log('!!Does not work for the full input, only the example!!'); //Edge cases

let total = 0;

const fs = require('fs');
const text = fs.readFileSync("./input.txt", "utf-8");
const textByLine = text.split("\n");

textByLine.map((line, lineIndex) => {
    let number = '';
    let startIndex = 0;

    for (let i = 0; i <= line.length; i++) {
        if (/\d/.test(line[i])) {
            if (number === '') {
                startIndex = i;
            }
            number += line[i];
        } else {
            if (number !== '') {
                let valid = false;

                for (let j = lineIndex - 1; j <= lineIndex + 1; j++) {
                    if (textByLine[j] !== undefined) {
                        for (let k = startIndex - 1; k <= startIndex + number.length; k++) {
                            if (textByLine[j][k] !== undefined) {
                                if (/[^0-9.]/.test(textByLine[j][k])) {
                                    valid = true;
                                }
                            }
                        }
                    }
                }

                if (valid) {
                    total += parseInt(number);
                }
            }
            number = '';
        }
    }
});

console.log(total);