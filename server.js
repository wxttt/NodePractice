var http = require('http');
var url = require('url');

function start(route, handle){
  function onRequest(request, response){
    //var postData = "";
    var pathname = url.parse(request.url).pathname;

    if(pathname.indexOf('favicon.ico') == -1){
      console.log('Request for' + pathname + 'receive');
      route(handle, pathname, response, request);
      /*
      request.setEncoding("utf8");

      request.addListener("data", function(postDataChunk){
        postData += postDataChunk;
        console.log("Received POST data chunk'"+ postDataChunk + "'.");
      });

      request.addListener("end", function(){
        route(handle, pathname, response, postData);
      });*/


    }else{
      return;
    }
  }
  
  http.createServer(onRequest).listen(8000);
  console.log("Server ha started.");
}

exports.start = start;
