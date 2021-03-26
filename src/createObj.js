const HiringStation = require("./HiringStations");
const User = require("./User");
const Scooter = require('./Scooter');



// const Sonia = new User('Sonia', 'C')
// const LondonStation = new HiringStation('London')
// const Scooter1 = new Scooter('Honda', 'red', 2012);
// Scooter1.isManual();
// LondonStation.inventory(Scooter1.modelName)
// const Scooter2 = new Scooter('Ford', 'yellow', 2012);

// const newHS = new HiringStation('Slough')
// console.log('newhs', newHS)

function bookingForm(firstName, lastName, age, location, ScooterModel, modelColour, modelYear) {
   const newUser = new User(firstName, lastName, age)
   const yourStation = new HiringStation(location)
   console.log(            'YOUR STATION', yourStation)
   const scooterSearch = new Scooter(ScooterModel, modelColour, modelYear)
   const updateIventory = yourStation.inventory(ScooterModel)
   const searchAvailability = yourStation.selectFromInventory(ScooterModel) 
//  console.log({ newUser, yourStation, scooterSearch, updateIventory, searchAvailability })
 return { newUser, yourStation, scooterSearch, updateIventory, searchAvailability }
}

const customer1 = bookingForm('Sonia', 'Choudhury', 32, 'Milton Keynes', 'TVS Jupiter', 'Orange', 2020)
const customer2 = bookingForm('Shuili', 'Khatun', 40, 'London', 'Honda Dio', 'Pink', 2010)
const customer3 = bookingForm('Aeden', 'Lee', 10, 'South London', 'Suzuki Access', 'Pink', 2010)

// console.log('All Users: ', User.allUsers)


let customers = []
const customerDatabase = () => {
    customers.push(User.allUsers)
    // console.log(customers)
    return customers
}

console.log('customer database', customerDatabase())

