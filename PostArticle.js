var request = require('request');
var env=require('./Data/env.js');
// const strToken=require('./GetToken');
var options = {
  'method': 'POST',
  'url': env.baseurl+'/api/articles',
  'headers': {
    'Content-Type': 'application/json',
    'Authorization': 'Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTYzOTAzLCJ1c2VybmFtZSI6InJhdmlnYWp1bCIsImV4cCI6MTYzMjQxMzc5NH0.yYw742XEZqEm-SJ9tf5-tj7i3NvzKp6LX8kGvEMu8Ug'
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
  console.log("PostARticle Body is " +response.body);
});
