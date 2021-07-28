var fs = require('fs')
const path = require('path');
//var data = fs.readFileSync('./notes.txt','utf-8');
//console.log(data);

let folderfiles = fs.readdirSync('./Data/')
console.log(folderfiles)
let jsonfilePaths = folderfiles
    .filter(file=> file.endsWith('.json'))
    .map(file=> path.resolve(__dirname+"/Data",file))
console.log(jsonfilePaths[0])
 var jsondata = fs.readFileSync(jsonfilePaths[0],'utf-8');

//this is a string
console.log(jsondata);

//parsing string to JSON object
var jsonObject =JSON.parse(jsondata);
console.log(jsonObject.user.email);