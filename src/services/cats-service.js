const {catsList} = require('../helpers/store')
const Queue = require('../helpers/queue')
const CatsService = {
  makeQue(){
    list = new Queue()
    catsList.forEach(x => list.enqueue(x))
  },
  getAllCats() {
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
  deleteCat(){
    const item = list.dequeue()
    console.log(item)
    return item
  }
}

module.exports = CatsService
