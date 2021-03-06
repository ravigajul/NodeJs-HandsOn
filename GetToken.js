var request = require('request');
const jsonData= require('./Data/Data.json')
// var glob = require('glob'); 
// glob('./Data/*.json', function (err, files) { 
//     if (err) { 
//         console.log(err); 
//     } else { 
//         // a list of paths to json files in the current working directory
//         console.log(files); 
//     }
 
// });
// const fl=glob.glob("./Data/*.json")
// console.log(fl)
// const jsonData = require(fl);
const chalk=require('chalk');
var env=require('./Data/env.js');
const requireAll = require('require-all');
const baseurl=env.baseurl;
var strToken=null;
var options = {
  'method': 'POST',
  'url': baseurl+'/api/users/login',
  'headers': {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(jsonData)
};
request(options, (error, response)=> {
  if (error) throw new Error(error);
  console.log(response.body);
  var obj=response.body
  const resp=JSON.parse(obj);
  console.log(chalk.blue("The token retrieved is ")+chalk.green(resp.user.token));
  strToken=resp.user.token
  //return strToken;
  
});

module.exports=strToken;
