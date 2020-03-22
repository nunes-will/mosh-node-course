const logger = require('./logger');


// Prints info about the package recently added
//console.log(logger)

// Using the function from another package
// logger.log('Will')



// Piece of code to show the total and free memory from the os 
const os = require('os');

// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// console.log('Total Memory: ' + totalMemory);
// console.log('Free memory: ' + freeMemory);

// Reads the content of the directory syncronously
const fs = require('fs');
const files = fs.readdirSync('./');
console.log(files);

// Reads the content of the directory asyncronously
fs.readdir('./', function(err, files) {
    if (err) console.log('Error', err);
    else console.log('Result: ', files);
});
