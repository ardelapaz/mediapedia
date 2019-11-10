var express = require('express');
var router = express.Router();
var axios = require('axios');
var credentials = require('../credentials.js');

router.post('/', function (req, res, next) {
  console.log(req.body);
  const query = req.body.searchForMe;
  axios.get(`https://api.themoviedb.org/3/search/tv?query=${query}&api_key=${credentials.apiKey}`)
    .then(response => {
      res.status(200).send(response.data);
    }).catch(err => {
      console.log(err);
    });
});

module.exports = router;
