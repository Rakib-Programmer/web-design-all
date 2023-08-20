class Parson{
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroParson = new Parson('hero', 'balam', 20000);
console.log(heroParson)

const firandParson = new Parson ('Hero', 'Kamal', 25000);
console.log(firandParson);