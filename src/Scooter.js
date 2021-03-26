// const HiringStations = require("./HiringStations");

// (electric or manual)

class Scooter {
    constructor(modelName, color, year) {
        // super(location)
        this.modelName = modelName;
        this.color = color;
        this.year = year;
        this.manual = true;
        this.isCharged = false;
    }
    isElectric() {
        this.manual = false;
        if (this.manual === false) {
        console.log(`You have selected an electric ${this.color} ${this.modelName}`)
        } else console.log(`You have selected a manual ${this.color} ${this.modelName}`)
    }
    isManual() {
        this.manual = true;
        if (this.manual === true) {
        console.log(`You have selected a manual ${this.color} ${this.modelName}`)
    } else {
        console.log(`You have selected an electric ${this.color} ${this.modelName}`)
    }
  } 
  charge() {
    setTimeout(function(){
        this.isCharged = true;
        // console.log(this.isCharged)
        console.log(`${this.modelName} charged!`); 
   }.bind(this), 2000); //wait 2 seconds
}
}


// const Scooter1 = new Scooter('Ford', 'red', 2012);
// Scooter1.charge()
// console.log('After charging', Scooter1)

// const Scooter2 = new Scooter('Ford', 'yellow', 2012);

// Scooter1.isManual();
// Scooter2.isElectric();
// Scooter2.Charge()



module.exports = Scooter