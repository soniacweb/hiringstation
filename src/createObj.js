const HiringStation = require("./HiringStations");
const User = require("./User");
const Scooter = require('./Scooter');


// creates a new user, welcomes user registration, checks if user is over 18 before selecting scooter.

function bookingForm(firstName, lastName, age, location, ScooterModel, modelColour, modelYear) {
   const newUser = new User(firstName, lastName, age)
   if (newUser) {
   newUser.welcome()
   }
   newUser.age < 18 ? newUser.isOver18() : ''
   const yourStation = new HiringStation(location)
   const scooterSearch = new Scooter(ScooterModel, modelColour, modelYear)
   scooterSearch.manual = false;

   //if over 18, proceed to book and charge scooter
   if (newUser.age >= 18) {
   yourStation.inventory(ScooterModel)
   yourStation.selectFromInventory(ScooterModel)
   scooterSearch.manual === false ? scooterSearch.isElectric() : scooterSearch.isManual()
   scooterSearch.isCharged === false ? scooterSearch.charge() : scooterSearch.isSelectedModelCharged()

}
    
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
    return customers
}

console.log('customer database', customerDatabase())

