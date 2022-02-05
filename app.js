const express = require('express');
const app = express();
app.listen(process.env.PORT || 3000, ()=> console.log("Servidor corriendo"));

const path = require('path');
const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, 'views', 'home.html')));

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});