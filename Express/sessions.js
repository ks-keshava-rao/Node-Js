import express from 'express'
import web from './routes/web.js'
const app = express();
const PORT = 8080;

//load routes 
app.get('/',web);
app.listen(PORT,()=>{
    console.log(`listening at http://localhost:${PORT}`);
    console.log("server is running succesfully");
});