const express = require('express');
const apiRoute = express.Router();
const dogsRoute = require('./dogs-route')
const catsRoute = require('./cats-route')

apiRoute.use('/dogs', dogsRoute)
apiRoute.use('/cats', catsRoute)

module.exports = apiRoute;
