const {dogsList} = require('../helpers/store')
const Queue = require('../helpers/queue')

const DogsService = {
  makeQue(){
    list = new Queue()
    dogsList.forEach(x => list.enqueue(x))
  },
  getAllDogs() {
    const listArray = [];
    if(list.first === null) {
      return []
    }
    console.log('here')
    const lastpet = list.last.value
    let pet = list.first
    console.log('here')
    while(pet !== lastpet){
    console.log(lastpet, pet)
      pet = list.dequeue()
      listArray.push(pet)
      list.enqueue(pet)
    }
    return listArray
  },
  deleteDog(){
    list.dequeue()
  }
}

module.exports = DogsService
