//Find

let movies = [
    "The Fantastic Mr. Fox",
    "Mr. and Mrs. Smith",
    "Mrs. Doubtfire",
    "Mr. Deeds"
]

const movie = movies.find (movie => {
    return movie.includes ('Mrs');
})


//This could be written as one line
const movie2 = movies.find (m => (
    m.indexOf ('Mrs') === 0
)) 


//Filter
// const nums = [34, 35, 67, 54, 109, 102, 32, 9];

// const odds = nums.filter (n => n % 2 === 1);
// const evens = nums.filter (n => n % 2 === 0);

// const bigNums = nums.filter (n => n > 50);



//Every & Some

//every
const words = ['dog', 'dig', 'log', 'bag', 'wag'];

const all3Lets = words.every(word => word.length === 3)

const allEndInG = words.every(word => {
    const last = word.length - 1;
    return word[last] === 'g'
})

//some
const someStartWithD = words.some (word => word[0] === 'd');
const allStartWithD = words.every (word => word[0] === 'd');



//Sort
const prices = [400.50, 3000, 99.99, 35.99, 12.00, 9500];

const badSort = prices.slice().sort();

const ascSort = prices.slice().sort ((a, b) => a - b);
const descSort = prices.slice().sort ((a, b) => b - a);



//Reduce
const nums = [3, 4, 5, 6, 7];
const product = nums.reduce ((total, currentVal) => {
    return total * currentVal;
})

const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64];

// const maxGrades = grades.reduce((max, currVal) => {
//     if (currVal > max) return currVal;
//     return max;
// });

const maxGrades = grades.reduce((max, currVal) => {
    return Math.max (max, currVal)
});
const minGrades = grades.reduce((min, currVal) => {
    return Math.min (min, currVal)
});


//Initial Value
[10, 20, 30, 40, 50].reduce ((sum, currVal) => {
    return sum + currVal;
}, 1000);


//Tallying
const votes = ['y', 'y', 'n', 'y', 'n', 'y', 'n', 'y', 'n', 'n', 'n', 'y', 'y'];

// const results = votes.reduce((tally, val) => {
//     if (tally [val]) { 
//         tally[val]++
//     } else {
//         tally[val] = 1;
//     }
//     return tally
// }, {})

const results = votes.reduce((tally, val) => {
    tally[val] = (tally[val] || 0) + 1;
    return tally
}, {})

