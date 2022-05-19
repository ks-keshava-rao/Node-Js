import * as fs from 'fs';
import * as http from 'http';
const server = http.createServer();
server.on("request",(req,res)=>{
    const rstream = fs.createReadStream("file.txt")
    rstream.pipe(res)
})
server.listen(8000, "127.0.0.1");