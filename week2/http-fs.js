const http = require("http");
const fs = require("fs");

const port = process.env.PORT || 4000;


const server = http.createServer((req, res)=>{
    const data = fs.readFileSync("./rename/index.html", "utf-8");
    res.writeHead(200, {'content-type':'text/html'});
    res.write(data)
    res.end()
});

server.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
});
 