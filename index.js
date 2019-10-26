let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let lampada = require('./lampadaController')
app.use(bodyParser.json());
app.get('/', (req,res)=>{
    res.send('faça um post com texto')
})

app.post('/', function (req, res) {
    lampada.enviamsg(req.body.text)
    console.log(req.body)
    res.send("ok")
});

app.listen(3006, function () {
  console.log('Example app listening on port 3000!');
});
