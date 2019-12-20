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
    const lastpet = list.last.value
    let pet = list.first
    while(pet !== lastpet){
      pet = list.dequeue()
      listArray.push(pet)
      list.enqueue(pet)
    }
    return listArray
  },
  deleteDog(){
    const item = list.dequeue()
    console.log(item)
    return item
  }
}

module.exports = DogsService
