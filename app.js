console.log('Starting app');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

var filteredArray = _.uniq(['Meg', 'Meg', 1 , 2, 1, 2, 'Meg']);

console.log(filteredArray);

var res = notes.add(5,7);
console.log(res);
/*
var user = os.userInfo();

fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`, function (err){
    if (err) {
        console.log('Unable to write to file');
    }
});*/


