let express = require('express');
let app = express();
let cors = require('cors');

app.use(cors());

app.get('/', function(req,res) {
    //console.log('Working!!!')
    res.json('Hello World Working!!!!');
})

app.listen(3001);