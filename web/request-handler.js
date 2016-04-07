var path = require('path');
var archive = require('../helpers/archive-helpers');
var helpers = require('./http-helpers.js');
var fs = require('fs');
// require more modules/folders here!


exports.handleRequest = function (req, res) {

  console.log("Serving request type " + req.method + " for url " + req.url);
  var statusCode;


  if (req.method === 'GET' && req.url === '/') {
   fs.readFile(__dirname + '/public/index.html', function (err, data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200);
    res.end(data);
   })

  } else {
    fs.readdir(__dirname + '/archives/sites', function (err, path) {
      console.log('this error is here:', err);
      console.log('path:', path);

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
