// Today you’re practicing what you’ve learnt so far in a new context.
// Create an object-oriented programme which models a scooter hire system. Your programme should include users, hiring stations and scooters 
//(which can be either electric or manual). Each user should have a name. Each hiring station should have a location. Each scooter should have a 
// model name. Hiring stations have an inventory of scooters. Users can hire scooters from a hiring station and return them later. 
// Users can only hire electric scooters if they are charged. When a user returns an electric scooter, its charge is always used up. 
// Charging takes 2 seconds so you’ll need to use the setTimeout function.
// All this functionality should have jest tests.
// Within this folder, your code should be organised into two folders called “src” (where your .js files will go) and “tests” (where your .test.js files will go). 
// This means your test files will no longer be in the same folder as your main code – how will this affect your require import statements?
// You’re free to extend the scooter system to make it as sophisticated as you like.
// Once you’re finished, push your code to a public github repository and send me the link. I’ll review it over the weekend and give you some feedback. You can also upload your airport code if you’d like me to review that. If anyone needs help with using git/github, let me know!


class User {
    static allUsers = []
    constructor(name, lastName, age) {
        if (typeof name !== 'string' || typeof name === undefined || name.length < 0) {
            throw new Error('User must have a name');
        }
        else {
            this.name = name;          
        }
        if (typeof lastName !== 'string' && lastName.length < 0) {
            throw new Error('User must have a last name');
        }  else {
            this.lastName = lastName;
        }
        if (!Number.isInteger(age)) {
            throw new Error('User must have numeric age input');
        }
        else {
            this.age = age
        }
        
        this.constructor.allUsers.push(this)
    }
    welcome() {
        if (typeof this.name === 'string' && this.name.length > 0) {
            console.log(`Hi ${this.name}, welcome!`)
        }
        else {
            throw new Error('User must have a name');
        }
    }

    isOver18() {
        if (!Number.isInteger(this.age)) {
            throw new Error('User must have numeric age input');
        }
        else {
            this.age > 18 ? console.log('You\'re over 18, so proceed to booking.') : console.log('You\'ll need parental consent, sorry.')
        }
    }
}


module.exports = User


