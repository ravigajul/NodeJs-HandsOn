var request = require('request');
const jsonData = require('./Data/Data.json');
const chalk=require('chalk');
var env=require('./Data/env.js');
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
