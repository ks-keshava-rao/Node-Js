import express from 'express'
import router  from './routes/web.js'
import session from 'express-session'
const app = express();

const Port = process.env.PORT || '3000';

//Session
app.use(session({
    name : "first session",
    secret : 'secretkey',
    resave : false,
    saveUninitialized : true,
    cookie:{maxAge:200000}
}))
//load routes 
app.use('/',router);
app.listen(Port,()=>{
    console.log(`listening at http://localhost:${Port}`);
    console.log("server is running succesfully");
});
//default expriry age