// const fs = require('fs');
import * as fs from 'fs';
// fs.writeFileSync("read.txt","This is just a file for sample")
// fs.writeFileSync("read.txt","This is just a file for sample reading and writing");
// fs.appendFile("read.txt","next line",(err)=>{
//     if(err){
//         throw err;
//     }
//     console.log("succesfully appended")
// })
const buf = fs.readFileSync("read.txt")//returns buffer data which is an binary data used for accesing file over nerwork as packets

console.log(buf.toString());

fs.rename("read.txt","readwrite.txt",(err)=>{
    console.error(err)
})