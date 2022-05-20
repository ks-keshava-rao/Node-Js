// developers to build web applications and API without any effort.
// web application development fast and easy. Easy to configure and customize. Allows you 
// to define routes of your application based on HTTP methods and URLs. Includes various
// middleware modules which you can use to perform additional tasks on request and response.
import express from 'express'
import * as path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = 8080;
app.get('/',(req,res)=>{
    res.send('Hello');
})
app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
});
app.listen(port,()=>{
    console.log(`listening at http://localhost:${port}`);
});
