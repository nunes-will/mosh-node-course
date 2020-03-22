var url = 'http://mylogger.io/log';


// Displays the directory\filename and directory
// console.log(__filename);
// console.log(__dirname);

function log(message) {
    //Send an HTTP request
    console.log(message);
}

// Exportes the function log
module.exports.log = log;

// Exports the variable url
// module.exports.url = url;


// Prints info about what is going to be exported 
// console.log(module)