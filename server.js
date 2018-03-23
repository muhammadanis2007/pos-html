var http = require('http');
var fs = require('fs');
var url = require('url');
var rootFolder = '/',
defaultFileName = '/index.html';
var index = fs.readFileSync('index.html');
http.createServer(function (req, res) {
    console.dir(req.url);


    var fileName = url.parse(req.url).pathname;
        // If no file name in Url, use default file name
        fileName = (fileName == "/") ? defaultFileName : rootFolder + fileName;
console.log("server start");
        fs.readFile(__dirname + decodeURIComponent(fileName), 'binary',function(err, content){
                if (content != null && content != '' ){
                    res.writeHead(200,{'Content-Length':content.length});
                    res.write(content);
                }
                res.end();
            });

  /*  res.writeHead(200, {'Content-Type': 'text/html'});

    res.end(index);*/
}).listen(3001);
