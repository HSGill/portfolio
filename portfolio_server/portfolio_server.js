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
         'Authorization': 'Bearer ' + 'ab732bd33b14a66290252d01e91d8170647e2344',
         'Content-Type': 'application/json'

      }
   })
let data = await response.json();

   res.json(data) //res.json('Hello ' + resp['name']);
})

app.listen(3001);