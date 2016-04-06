var path = require('path');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!

var headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  "Content-Type": "application/JSON"
};

exports.handleRequest = function (req, res) {

  console.log("Serving request type " + request.method + " for url " + request.url);
  var statusCode;

  if (request.method === 'GET') {
    statusCode = 200;
    response.writeHead(statusCode, headers);
    console.log('the request-handler page is also working');

    response.end(nothing);
    // response.end(archive.paths.list);

  };
};
