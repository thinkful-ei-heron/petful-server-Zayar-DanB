const express = require('express');
const dogsRoute = express.Router()
const DogsService = require('../services/dogs-service')

dogsRoute
  .route('/')
  .get((req, res) => {
    DogsService.makeQue()
    const list = DogsService.getAllDogs()
    console.log(list)
    return res.send(list)
  })
  .post((req, res) => {
    DogsService.deleteDog()
    return res.send(200)
  })



module.exports = dogsRoute;
