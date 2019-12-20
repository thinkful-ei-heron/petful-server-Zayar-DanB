const express = require('express');
const dogsRoute = express.Router()
const DogsService = require('../services/dogs-service')

dogsRoute
  .route('/')
  .get((req, res) => {
    DogsService.makeQue()
    const list = DogsService.getAllDogs()
    return res.send(list)
  })
  .post((req, res) => {
    const item = DogsService.deleteDog()
    return res.send(item)
  })



module.exports = dogsRoute;
