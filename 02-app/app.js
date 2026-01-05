const fs = require('fs')

// fs.writeFileSync('notes.txt', 'Hello World!');
fs.appendFileSync('notes.txt', ' Welcome to Node.js. This is a message to be appended')
