//Day 4, an actually interesting and fairly simple one. What is this? Am I actually having fun for once? Some extreme rare edge case will hit me, I can feel it.
console.log("Advent of Code 2023 - Day 4");

let total = 0;
let secondTotal = 0;

const fs = require('fs');
const input = fs.readFileSync('./input.txt', {encoding: 'utf-8'});
const scratchCards = input.split(/\r\n|(?<!\r)\n|\r/); //Not making that mistake again.

//Part 1
scratchCards.forEach((card) => {
        let sections = card.split(/[:|]/);
        sections.shift();

        let numbers = sections[0].match(/\d+/g);
        let winningNumbers = sections[1].match(/\d+/g);
        let count = 0;

        //Match the numbers on the card with the winning numbers and calculate the points. This was easy, too easy. I'm scared.
        for (let i = 0; i < numbers.length; i++) {
            if (winningNumbers.includes(numbers[i])) {
                if (count === 0) {
                    count++;
                } else {
                    count = 2 * count;
                }
            }
        }
        total += count;
    }
)


let cardDatabase = {};

//Part 2
scratchCards.forEach((card) => {
        let sections = card.split(/[:|]/);
        let cardNumber = sections[0].match(/\d+/g).map(parseInt)[0];
        sections.shift();
        let cards = 1;

        //Fairly much the same as part 1 but with a database to keep track of the cards that have been won and looping a card multiple times if it has been won.
        if (cardDatabase[cardNumber] !== undefined) {
            cards = cardDatabase[cardNumber];
        }
        for (let i = 0; i < cards; i++) {
            let numbers = sections[0].match(/\d+/g);
            let winningNumbers = sections[1].match(/\d+/g);
            let count = 0;
            let wonCards = [];

            for (let i = 0; i < numbers.length; i++) {
                if (winningNumbers.includes(numbers[i])) {
                    count++;
                }
            }
            if (count !== 0) {
                for (let i = cardNumber+1; i <= cardNumber + count; i++) {
                    wonCards.push(i);
                }
            }

            wonCards.forEach((card) => {
                if (card in cardDatabase) {
                    cardDatabase[card] = cardDatabase[card] + 1;
                } else {
                    cardDatabase[card] = 2;
                }
            })
            if (!(cardNumber in cardDatabase)) {
                cardDatabase[cardNumber] = 1;
            }
        }
    }
)

for (const [, value] of Object.entries(cardDatabase)) {
    secondTotal += value;
}

//After surprisingly little struggle, we have our solution. I'm not sure if I'm happy or scared. Tomorrow will probably be a nightmare.
console.log(total);
console.log(secondTotal);
