console.log('Starting app');

const fs = require('fs');
const os = require('os');

var user = os.userInfo();

// DeprecationWarning: Calling an asynchronous function without callback is deprecated.
// fs.appendFile('greetings.txt', 'Hello world!');

// option 1
fs.appendFile('greetings.txt', 'Hello ' + user.username + '!', function (err){
    if (err) {
        console.log('Unable to write to file');
    }
});

// option 2
// fs.appendFileSync('greetings.txt', 'Hello World!');