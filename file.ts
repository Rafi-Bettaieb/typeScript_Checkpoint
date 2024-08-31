//Define an interface named Vehicle with the following properties
interface Vehicle {
    make: string;
    model: string;
    year: number;
    start(): void;
}
//Implement a class named Car that implements the Vehicle interface. The Car class should have:
class Car implements Vehicle {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    start(): void {
        console.log("Car engine started");
    }
}
//Create an instance of the Car class and initialize it with some values for make, model, and year.
var newCar  = new Car("Tesla", "Model S", 2022);
//Call the start method on the instance of the Car class to verify that it logs the appropriate message to the console
newCar.start();

//using this commande to compile : tsc --outDir js file.ts
//using this commande to run : node js/file.js