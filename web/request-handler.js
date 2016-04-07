var path = require('path');
var archive = require('../helpers/archive-helpers');
var helpers = require('./http-helpers.js');
var fs = require('fs');
// require more modules/folders here!


exports.handleRequest = function (req, res) {

  // console.log("Serving request type " + req.method + " for url " + req.url);
  // var statusCode;

  if (req.method === 'GET' && req.url !== '/') {
    var archiveFolder = path.join(__dirname, '../archives');
    var url = req.url.replace(/^\//, "");
    fs.readdir(archiveFolder + '/sites', function (err, data) {
      for (var i = 0; i < data.length; i++) {
        if (data[i] === url) {
          console.log('match found:', url, data[i]);
          res.writeHead(200);
          res.end(url);
        } else if (data.indexOf(url) === -1){
          res.writeHead(404);
          res.end(JSON.stringify(err));
        }
      }
    })


  } else if (req.method === 'GET' && req.url === '/') {
    console.log('first test only in here');
    fs.readFile(__dirname + '/public/index.html', function (err, data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200);
    res.end(data);
   })
  }



  // if (req.method === 'GET' && req.url === '/') {
  //  fs.readFile(__dirname + '/public/index.html', function (err, data) {
  //   if (err) {
  //     res.writeHead(404);
  //     res.end(JSON.stringify(err));
  //     return;
  //   }
  //   res.writeHead(200);
  //   res.end(data);
  //  })


  // } else if (req.method === 'GET' && req.url !== '/') {
  //   //get access to archives folder (outside of web folder)
  //   var archiveFolder = path.join(__dirname, '../archives')
  //   console.log('req.url:', req.url);

  //   fs.readdir(archiveFolder + '/sites', function (err, data) {
  //     // console.log('this error is here:', err);
  //     // console.log('data', data);
  //     // console.log('final dirname', archiveFolder + '/sites')

  //   if (err) {
  //     res.writeHead(404);
  //     res.end(JSON.stringify(err));
  //     return;
  //   }
  //   res.writeHead(200);
  //   var url = req.url.replace(/^\//, "");
  //   console.log('new url:', url);
  //   for (var i = 0; i < data.length; i++) {
  //     console.log(data[i])
  //     if (data[i] === url) {
  //       console.log('match found!', data[i]);
  //       res.end(data[i]);
  //     }
  //   }
  //  })


  // } else if (req.method === 'POST') {

  //   console.log("Serving request type " + req.method + " for url " + req.url);
  //   console.log('POST has been called!');
  //   res.writeHead(404);
  //   res.end();
  // };

};
