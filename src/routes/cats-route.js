const express = require('express');
const catsRoute = express.Router()
const CatsService = require('../services/cats-service')

catsRoute
  .route('/')
  .get((req, res) => {
    CatsService.makeQue()
    const list = CatsService.getAllCats()
    return res.send(list)
  })
  .post((req, res) => {
    const item = CatsService.deleteCat()
    return res.send(item)
  })



module.exports = catsRoute;
