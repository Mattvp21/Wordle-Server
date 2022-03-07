const PORT = 8000
const dotenv = require('dotenv').config()
const express = require("express")
const cors = require("cors")
const axios = require("axios").default;
const app = express()


app.use(cors())

app.get("/word", (req, res) => {

var options = {
    method: 'GET',
    url: 'https://random-words5.p.rapidapi.com/getMultipleRandom',
    params: {count: '5', wordLength: '5'},
    headers: {
      'x-rapidapi-host': 'random-words5.p.rapidapi.com',
      'x-rapidapi-key': 'd4a6c24a57msh59c8f9dfdd5b6c8p120605jsn334da800e204'
    }
  }

  axios.request(options).then((response) => {
      console.log(response.data)
     res.json(response.data[0])
  }).catch((error) => {
      console.error(error);
  });

})


app.get("/check", (req, res) => {
    const word = req.query.word
    const options = {
        method: 'GET',
        url: 'https://twinword-word-graph-dictionary.p.rapidapi.com/association/',
        params: {entry: word},
        headers: {
          'x-rapidapi-host': 'twinword-word-graph-dictionary.p.rapidapi.com',
          'x-rapidapi-key': 'd4a6c24a57msh59c8f9dfdd5b6c8p120605jsn334da800e204'
        }
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data);
          res.json(response.data.result_msg)
      }).catch(function (error) {
          console.error(error);
      });
  })



app.listen(PORT, () => {
    console.log('Server succesfully connected to port 8000')
})