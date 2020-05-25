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
         'Authorization': 'Bearer ' + 'e83e4801f94765ee1a4262df233abf08f17397fd',
         'Content-Type': 'application/json'

      }
   })
let data = await response.json();
//console.log(data[0].name)
let respData = data.filter(repo =>  repo.name)
console.log(respData)
   res.json(data[0].name) //res.json('Hello ' + resp['name']);
})

app.listen(3001);