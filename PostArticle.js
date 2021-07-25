var request = require('request');
var env=require('./Data/env.js');
const strToken=require('./GetToken');
var options = {
  'method': 'POST',
  'url': env.baseurl+'/api/articles',
  'headers': {
    'Content-Type': 'application/json',
    'Authorization': 'Token '+ strToken
  },
  body: JSON.stringify({
    "article": {
      "tagList": [],
      "title": "test",
      "description": "test",
      "body": "test"
    }
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
