var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });

  fs.appendFile('demofile1.html', 'Hello text is added', (err)=>{
    if(err) throw err
    console.log("file saved")
  })
}).listen(8080);