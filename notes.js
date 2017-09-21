console.log('Starting notes.js');

module.exports.addNote = function () {
    console.log('addNote');
    return 'New note';
}

module.exports.add = function (a, b) {
    var sum = a + b;
    return sum;
}