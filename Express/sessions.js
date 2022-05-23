import express from 'express'
import router  from './routes/web.js'
const app = express();

const Port = process.env.PORT || '3000';

//load routes 
app.use('/',router);
app.listen(Port,()=>{
    console.log(`listening at http://localhost:${Port}`);
    console.log("server is running succesfully");
});