const {dogsList} = require('../helpers/store')
const DogsService = {
  getAllDogs() {
    return dogsList
  },
  deleteDog(){

  }
}

module.exports = DogsService
