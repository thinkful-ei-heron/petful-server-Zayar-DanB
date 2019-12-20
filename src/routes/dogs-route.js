const express = require('express');
const dogsRoute = express.Router()
const DogsService = require('../services/dogs-service')

dogsRoute
  .route('/')
  .get((req, res) => {
    const list = DogsService.getAllDogs()
    console.log(list)
    return res.status(200).send(list)
  })
dogsRoute
  .route('/:id')
  .delete((req, res) => {
    const id = req.parms.id
  })



module.exports = dogsRoute;
