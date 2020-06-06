const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

var app = express();
app.use(router)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:}))

router.users('/', function(req,res){
    res.send('Hola desde Users')
});
router.get('/', function(req,res){
    res.send('Hola desde Get')
});
router.put('/', function(req,res){
    res.send('Hola desde Put')
});
router.delete('/', function(req,res){
    res.send('Hola desde Delete')
});
router.patch('/', function(req,res){
    res.send('Hola desde Patch')
});

app.listen(3001);
console.log('Èstoy escuchando por: http://localhost:3001');