var path = require('path');
var archive = require('../helpers/archive-helpers');
var helpers = require('./http-helpers.js');
var fs = require('fs');
// require more modules/folders here!


exports.handleRequest = function (req, res) {

  console.log("Serving request type " + req.method + " for url " + req.url);
  var statusCode;

  if (req.method === 'GET') {
   fs.readFile(__dirname + '/public/index.html', function (err, data) {
    console.log('dirname:', __dirname + '/public/index.html');
    console.log('err:', err);
    console.log('data:', data);
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200);
    res.end(data);
   })

  };

};
