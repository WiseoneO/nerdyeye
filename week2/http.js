const http = require("http");


const port = process.env.PORT || 4000;


const server = http.createServer((req, res)=>{
    if (req.url === "/"){
        res.end(`Homepage`);
    }else if(req.url === "/node"){
        res.end(`This is a node page`)
    }else if(req.url === "/style"){
        res.end(`this is a style sheet page`)
    }else{
        res.end(`Page not found `)
    }
});

server.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
});
