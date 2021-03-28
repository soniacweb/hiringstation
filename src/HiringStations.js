const Scooter = require("./Scooter");

// inventoryList.push(this)

class HiringStation {
    constructor(location) {
        if (location === 'string' || location.length > 0) {
            this.location = location;
        } else {
           throw new Error('Specify a location preference for hiring station') 
        }
        
        this.inventoryList = [];
        
    } 
    inventory(modelName) {
        if (typeof modelName === 'string' && modelName.length > 0) {
        this.inventoryList.push(modelName)
        console.log('inventory list available', this.inventoryList)
        } else {
            throw new Error('Inventory list not available');
        }
    }
    selectFromInventory(model) {
        if (typeof model === 'string' && model.length > 0) {
        // console.log('inside select from inventory', this.inventoryList)
        const searchResults = this.inventoryList.includes(model)
        // console.log(searchResults)
        console.log(searchResults ? `${model} is available, we need to check if it's charged for you.` : `Sorry, ${model} is not available.`)
        } else {
            throw new Error('Select from inventory');
        }
    }
}

// const stevenageStation = new HiringStation('Stevenage')
// console.log(stevenageStation)
// stevenageStation.inventory('Ford')
// console.log(stevenageStation.inventory())
// stevenageStation.selectFromInventory('Honda')
// stevenageStation.isSelectedModelCharged('Honda')


// stevenageStation.inventory('TVS Jupiter')
// stevenageStation.selectFromInventory('TVS Jupiter')

module.exports = HiringStation