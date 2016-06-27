'use strict';

// routes/posts.js  -  post router

const express = require('express');
let router = express.Router();

let Item = require('../models/item');

router.get('/', (req, res) => {
  Item.getAll()
    .then(items => {
      res.send(items);
    })
    .catch(err => {
      console.log("error in posts: ", err)
      res.status(400).send(err);
    });
});

router.post('/', (req, res) => {
  Item.create(req.body)
    .then(item => {
      res.send(item);
    })
    .catch(err => {
      console.log("error in posts: ", err)
      res.status(400).send(err);
    });
});

router.delete('/:id', (req, res)=>{
  Item.delete(req.params.id, function(err){
    res.send();
  });
});

module.exports = router;