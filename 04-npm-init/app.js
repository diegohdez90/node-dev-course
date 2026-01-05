const validator = require('validator');

// Example usage of validator
const email = validator.isEmail('johndoe@mail.com');
console.log(`Is valid email: ${email}`);

const url = validator.isURL('https://www.example.com');
console.log(`Is valid URL: ${url}`);
