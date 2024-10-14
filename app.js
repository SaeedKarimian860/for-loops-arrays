// Average

function avg(arr) {
    let total = 0;
    for (let num of arr) {
        total += num;
    }
    return total / arr.length;
}


// Get playing card
// ex:

function getCard() {
    const value = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        'J',
        'Q',
        'K',
        'A'
    ];
    const valIdx = Math.floor(Math.random() * values.length);
    const values = values[valIdx];
    const suits = ['Clubs', 'Spades', 'Hearts', 'Diamonds'];
    const suitIdx = Math.floor(Math.randome() * suits.length);
    const suit = suits[suitIdx];
    return {value: value, suit: suit};
}




const animals = ['snake', 'bear', 'sloth', 'flamingo', 'tiger'];
for (let i = 0; i < animals.length; i++) {
    console.log(i, animals[i]);
}


const sports = ['football', 'basketball', 'soccer', 'rugby', 'hockey', 'baseball'];
for (let i = 0; i < sports.length; i++) {
    console.log(i, sports[i]);
}


for (let i = 60; i >= 0; i -= 5) {
    console.log(i);
}

for (let i = 80; i >= 0; i--) {
    console.log(i);
}


let str = 'Howdy!';
for (let i = 0; i <= 2; i++) {
    console.log("Outer:", i);
    for (let j = 0; j < str.length; j++) {
        console.log('  inner:', str[j]);
    }
}