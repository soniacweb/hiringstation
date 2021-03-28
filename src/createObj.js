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

// creates a new user, welcomes user registration, checks if user is over 18 before selecting scooter.

function bookingForm(firstName, lastName, age, location, ScooterModel, modelColour, modelYear) {
   const newUser = new User(firstName, lastName, age)
   if (newUser) {
   newUser.welcome()
   }
   const yourStation = new HiringStation(location)
   const scooterSearch = new Scooter(ScooterModel, modelColour, modelYear)
   if (newUser.age >= 18) {
   yourStation.inventory(ScooterModel)
   yourStation.selectFromInventory(ScooterModel)
   // while (scooterSearch.manual === false) {
   //    scooterSearch.isElectric()
   // }
//    yourStation.isSelectedModelCharged(ScooterModel)
   scooterSearch.isElectric()
   // while (scooterSearch.isCharged === false) {
   // scooterSearch.charge()
   // scooterSearch.isSelectedModelCharged()
   // }
   } else if (newUser.age < 18) {
    newUser.isOver18()
   }
    
//    yourStation.inventory()
//    yourStation.selectFromInventory()
//    yourStation.isSelectedModelCharged()


//  console.log({ newUser, yourStation, scooterSearch, updateIventory, searchAvailability })
 return { newUser, yourStation, scooterSearch }
}

 bookingForm('Sonia', 'Choudhury', 32, 'Milton Keynes', 'TVS Jupiter', 'Orange', 2020)
 bookingForm('Shuili', 'Khatun', 40, 'London', 'Honda Dio', 'Pink', 2010)
 bookingForm('Aeden', 'Lee', 10, 'South London', 'Suzuki Access', 'Black', 2017)
 bookingForm('Elliot', 'King', 43, 'West London', 'Ford', 'White', 2019)

 // stores all customers after registration 

let customers = []
const customerDatabase = () => {
    customers.push(User.allUsers)
    // console.log(customers)
    return customers
}

console.log('customer database', customerDatabase())

