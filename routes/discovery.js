var express = require('express');
var router = express.Router();
var axios = require('axios');
var credentials = require('../credentials.js');


router.get('/', function (req, res, next) {
  axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${credentials.apiKey}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false`)
    .then(response => {
      res.status(200).send(response.data);
    }).catch(err => {
      console.log(err);
    });
});

module.exports = router;
