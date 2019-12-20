const express = require('express');
const catsRoute = express.Router()
const CatsService = require('../services/cats-service')

catsRoute
  .route('/')
  .get((req, res) => {
    const list = CatsService.getAllCats()
    res.send(list)
  })



module.exports = catsRoute;
