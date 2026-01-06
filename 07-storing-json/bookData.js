const fs = require('fs');

const book = {
	title: 'Eloquent JavaScript',
	author: 'Marijn Haverbeke',
	year: 2018,
	publisher: 'No Starch Press',
};

const raw = JSON.stringify(book);

fs.writeFileSync('book.json', raw);
