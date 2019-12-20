const {catsList} = require('../helpers/store')
const CatsService = {
  getAllCats() {
    return catsList
  }
}

module.exports = CatsService
