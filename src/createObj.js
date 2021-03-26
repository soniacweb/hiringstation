const HiringStation = require("./HiringStations");
const User = require("./User");
const Scooter = require('./Scooter');



// const Sonia = new User('Sonia', 'C')
// const LondonStation = new HiringStation('London')
// const Scooter1 = new Scooter('Honda', 'red', 2012);
// Scooter1.isManual();
// LondonStation.inventory(Scooter1.modelName)
// const Scooter2 = new Scooter('Ford', 'yellow', 2012);


function bookingForm(firstName, lastName, location, ScooterModel, modelColour, modelYear) {
   const newUser = new User(firstName, lastName)
   const yourStation = new HiringStation(location)
   const scooterSearch = new Scooter(ScooterModel, modelColour, modelYear)
   const updateIventory = yourStation.inventory(ScooterModel)
   const searchAvailability = yourStation.selectFromInventory(ScooterModel) 
//  console.log({ newUser, yourStation, scooterSearch, searchAvailability })
 return { newUser, yourStation, scooterSearch, updateIventory, searchAvailability }
}

const customer1 = bookingForm('Sonia', 'Choudhury', 'Milton Keynes', 'TVS Jupiter', 'Orange', 2020)
const customer2 = bookingForm('Shuili', 'Khatun', 'London', 'Honda Dio', 'Pink', 2010)
const customer3 = bookingForm('Aeden', 'Lee', 'South London', 'Suzuki Access', 'Pink', 2010)


let customers = []
const customerDatabase = () => {
    customers.push(customer1, customer2, customer3)
    console.log(customers)
    return customers
}

console.log('customer database', customerDatabase())

