const Scooter = require("./Scooter");

// inventoryList.push(this)

class HiringStation {
    constructor(location) {
        this.location = location;
        this.inventoryList = [];
        
    } 
    inventory(modelName) {
        this.inventoryList.push(Scooter.modelName)
        console.log('inventory list available', this.inventoryList)
    }
    selectFromInventory(model) {
        // console.log('inside select from inventory', this.inventoryList)
        const searchResults = this.inventoryList.includes(model)
        console.log(searchResults)
        console.log(searchResults ? `${model} is available, we need to check if it's charged for you.` : `Sorry, ${model} is not available.`)
    }
   isSelectedModelCharged(model) {
      console.log(Scooter.isCharged ? `Book £{model}`: `Please select another model`)
   }
}

// const stevenageStation = new HiringStation('Stevenage')
// console.log(stevenageStation)
// stevenageStation.inventory('Honda')
// console.log(stevenageStation)
// stevenageStation.selectFromInventory('Honda')
// stevenageStation.isSelectedModelCharged('Honda')


// stevenageStation.inventory('TVS Jupiter')
// stevenageStation.selectFromInventory('TVS Jupiter')

module.exports = HiringStation