//streams are objects that reads data from a source or write data to a destination in continous fashion
//types of stream 
// readable , writable , Duplex , transform 
//each type of stream is an eventemiter instance and throws several events at different instance of times
//commonly used events
//data - event fired when there is data availible to read 
//end - '' '' no more data to read 
//error - '' '' any error recieving or writing data
//finish - '' '' data has been flushed to underlying system
//Time efficiency , memory efficiency
/*-------------------------------------------------------------------------------------*/
import * as fs from 'fs';
import * as http from 'http';
//non streaming way
/*
const server = http.createServer();
server.on('request',(req,res)=>{
    fs.readFile('file.txt',(err,data)=>{
        if(err){
            return console.error(err);
        }
        res.end(data.toString());
    })
})
server.listen(8000,"127.0.0.1")
*/
//streaming way
/* steps 
1.reading from a stream 
2.Create a readable stream
3.handle stream events --> data end error */
/*-------------------------------------------------------------------------------------*/
const server = http.createServer()
server.on("request", (req, res) => {
    const rstream = fs.createReadStream("file.txt");
    rstream.on("data", (chunkdata) => {
        res.write(chunkdata);
    });
    rstream.on("end", () => {
        res.end();
    });
});
server.listen(8000, "127.0.0.1");