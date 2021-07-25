const fs = require('fs');
const name = require('./utils.js');
const add = require('./utils.js');
fs.writeFileSync("notes.txt","This is written by node js program");
fs.appendFileSync("notes.txt","This is appended by the node js program");
console.log(name); 

