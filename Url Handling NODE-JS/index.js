const http = require("http");
const fs = require('fs');
const url = require("url");
const myServer= http.createServer((req , res) =>{
    const log = `${Date.now()}: ${req.url} new req received\n`;

    const myUrl = url.parse(req.url , true);
    console.log (myUrl);

    fs.appendFile("log.txt",log ,(err, data) => {
        switch(myUrl.pathname){
            case '/':res.end("HOMEPAGE");
            break;
            case'/about': res.end("i am asim ali");
            break;
            default:
                res.end("404 Not Found");
        }
    res.end("hello from server again");
    });

});
myServer.listen(8000,() => console.log("server started!"));


