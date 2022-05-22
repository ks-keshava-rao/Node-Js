// createserver method has request and response parameters 
// the request object can be used to get information about the current HTTP request 
// eg. url, header, request , and datas
// response object can be used to send the request to the current http request 
// The callback function we pass is the one that's going
// to be executed upon every request that comes in.
// Whenever a new request is received, the request 
// event is called, providing two objects: a 
// request (an http.IncomingMessage object) and a 
//response (an http.ServerResponse object).
import * as http from 'http';
const servers = http.createServer((req, res) => {
    // res.end('<h1>Hello response ended</h1>')
    if(req.url=="/"){
        res.end("<h1>Hello this is the main page</h1>");
    }
    else if(req.url == "/about"){
        res.end("<h1>hello this about us page</h1>")
    }
    else if(req.url == "/contact"){
        res.end("<h1>hello this contact page</h1>")
    }
    else{
        res.writeHead(404,{"Content-type" : "text/html"});
        res.end("<h1> Page Not found</h1>")
    }
})
servers.listen(3000, "127.0.0.1", () => {
    console.log("server is running")
})