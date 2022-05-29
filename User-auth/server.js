const express = require('express');
const session = require('express-session')
const Port = process.env.PORT || '3000';
const app = express();
const TWO_HOURS = 1000 * 60 * 60 * 2;
const users = [
    {id : 1,name : "keshav",password : "secret1"},
    {id : 2,name : "ramesh",password : "secret2"},
]
app.use(session({
    name: "Auth session",
    secret: "DRSMOM",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: TWO_HOURS,
        sameSite: true,
        secure: false
    }
}));

app.get('/', (req, res) => {
    const userId = 0;
    console.log(userId);
    console.log(req.session);
        res.send(`<h1>Welcome!</h1>
        ${ userId ?
        `<a href = "/home">home</a>
        <form action="/logout" method = 'post'>
            <button>logout</button>
        </form>`
        :
        `<a href='/login'>Login</a>
        <a href='/register'>register</a>`
        }
        `)
    res.end();
})
app.get('/home', (req, res) => {

})
app.get('/login', (req, res) => {
 res.send(`<h1>Login</h1>
 <form method = "post"  action="/login">
     <input type="email" name="email" placeholder="enter email" required/>
     <input type="password" name="password" placeholder="enter password" required/>
     <input type="submit"/>
 </form>
 <a href='/register'>Register</a>
 `)
 res.end()
})
app.get('/register', (req, res) => {
    res.send(`<h1>Register</h1>
    <form method = "post"  action="/register">
    <input type="text" name="name" placeholder="enter name" required/>
        <input type="email" name="email" placeholder="enter email" required/>
        <input type="password" name="password" placeholder="enter password" required/>
        <input type="submit"/>
    </form>
    <a href='/login'>login</a>
    `)
    res.end()
})
app.post('/login', (req, res) => {
    
})
app.post('/register', (req, res) => {

})
app.post('/logout', (req, res) => {

})
app.listen(Port, () => {
    console.log(`listening at : http://localhost:${Port}`);
});