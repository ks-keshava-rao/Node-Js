const express = require('express');
const app = express();
const PORT = 8080;
app.get('/',(req,res)=>{
    res.end("<h1>Server running</h1>");
})
app.listen(PORT,()=>{
    console.log(`listening at http://localhost:${PORT}`);
    console.log("server is running succesfully");
});