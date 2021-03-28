// const HiringStations = require("./HiringStations");

// (electric or manual)

class Scooter {
    constructor(modelName, color, year) {
        // super(location)
        if (modelName !== undefined && modelName.length > 0) {
            this.modelName = modelName;
        } else {
            throw new Error('Scooter must have a model name') 
            }
        if (color !== undefined && color.length > 0) {
            this.color = color;
        } else {
            throw new Error('Scooter model must have a color') 

        }
        if (year === undefined || !Number.isInteger(year)) {
            throw new Error('Must specify year') 
        } else {
        this.year = year;
        }
        
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
        if (this.manual === true) {
        console.log(`You have selected a manual ${this.color} ${this.modelName}`)
    } else {
        console.log(`You have selected an electric ${this.color} ${this.modelName}`)
    }
  } 
  charge() {
      console.log('Please wait while your scooter charges for 2 seconds.')
    setTimeout(function(){
        this.isCharged = true;
        // console.log(this.isCharged)
        console.log(`${this.modelName} charged!`); 
        this.isSelectedModelCharged()
   }.bind(this), 2000); //wait 2 seconds
}
isSelectedModelCharged() {
    console.log(this.isCharged ? `${this.modelName} booking confirmed.`: `Please select another model`)
 }
}

console.log(Scooter.isSelectedModelCharged)

// const Scooter1 = new Scooter('Ford', 'red', 2012);
// Scooter1.charge()
// console.log('After charging', Scooter1)

// const Scooter2 = new Scooter('Ford', 'yellow', 2012);

// Scooter1.isManual();
// Scooter2.isElectric();
// Scooter2.Charge()



module.exports = Scooter