// var obj = {
//     name: 'Disco'
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "Disco", "age": 30}';
// var personObj = JSON.parse(personString);
// console.log(typeof personObj);
// console.log(personObj);

const fs = require('fs');

var originalNote = {
    title: 'Some Title',
    body: 'Some Body'
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);
