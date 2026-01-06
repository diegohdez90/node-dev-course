const fs = require('fs');

const raw = fs.readFileSync('book.json', {
    encoding: 'utf-8',
});
const book = JSON.parse(raw);

console.log('Book Information:');
console.log(`Title: ${book.title}`);
console.log(`Author: ${book.author}`);
console.log(`Year: ${book.year}`);
console.log(`Publisher: ${book.publisher}`);
