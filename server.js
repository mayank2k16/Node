var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type':'text/plain'});
    var readstream = fs.createReadStream(__dirname + '/readme.txt','utf-8');
    readstream.pipe(res);
});

server.listen(3000);
console.log('listening');