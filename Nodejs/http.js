const http = require('http');

const server = http.createServer((req, res)=>{
res.writeHead(200, {'Content-Type': 'text/html'});
res.write("<h1>Heading 1 from nodejs</h1>");
res.write("<h2>ok from nodejs</h2>");
res.write("<button>click me</button>");
res.end("ok bye for now");
});


server.listen(3030);
