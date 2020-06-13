const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')

var app = express();

app.use(bodyParser.json());
app.use(router);

router.get('/', function(req,res){
     
    res.send('Hola desde Get')
});
router.post('/', function(req,res){
    res.send('Hola desde Post')
});
router.put('/', function(req,res){
    res.send('Hola desde Put')
});
router.get('/user', function(req,res){
    var name = req.body.name
    var lastname = req.body.lastname
    console.log(name);
    res.send('Hola desde get en user'+ name + lastname)
});
router.patch('/', function(req,res){
    res.send('Hola desde Patch')
});
router.delete('/', function(req,res){
    
    res.send('Hola desde Delete')
});

app.listen(3001);
console.log('Escuchando por: http://localhost:3001');