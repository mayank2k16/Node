var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
     if(req.url === '/home' || req.url === '/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
     }else if(req.url === '/contact-us'){
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
     }else if(req.url === '/api'){
        res.writeHead(200,{'Content-Type':'application/JSON'});
        var obj = [{
          name : 'Mayank',
          age : 22,
          address : 'Bangalore'
        },{
          name : 'Killua',
          age : 22,
          address : 'Bangalore'
        },{
          name : 'pandey',
          age : 22,
          address : 'Bangalore'
        }];
        res.end(JSON.stringify(obj));
     }else{
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(res);
     }
});
server.listen(3000);