let express = require('express');
let app = express();
let cors = require('cors');
let fetch = require('node-fetch');

app.use(cors());

app.get('/',  async function(req,res) {
    //console.log('Working!!!')
   let response = await fetch('https://api.github.com/user/repos', {
      method:'GET',
      headers: {
         'Authorization': 'Bearer ' + 'f77c007cbe70a0ddd35f9760b93aa3baba306671 ', 
         'Content-Type': 'application/json'
      }
   })
let data = await response.json();

   res.json(data) //res.json('Hello ' + resp['name']);
})

app.listen(3001);