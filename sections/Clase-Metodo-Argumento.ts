class Car {
    public readonly brand: string;
    public doors: number;
    public fuelTank: number;
    public isRunning: boolean;
    public type: string;

    private readonly createAt: number;

    constructor( brand:string, type:string){
        this.brand = 'No brand';
        this.doors = 0;
        this.fuelTank = 0;
        this.isRunning = false;
        this.type = 'No type';

        this.createAt = 123456789;
    }

    public turnOn() {
        if ( this.isRunning){
            console.log('El carro ya estaba encendido pero se averío');
            return;
        }

        if ( this.fuelTank <= 0){
            console.log('El carro no tiene gasolina');
            return;
        }

        this.isRunning = true;
        console.log('El carro está encendido');
        
    }

    public fillTank (gas = 100){
        if (gas <= 0){
            console.log('El tanque de gas está vacio');
            return;
        }

        let newFuelTank = this.fuelTank + gas;
        if (newFuelTank >= 100){
            this.fuelTank = 100;
        }else {
            this.fuelTank = newFuelTank;
        }
    }
    
}

let myMazda = new Car('Mazda', 'Sedan');

myMazda.fillTank(50);

console.log(myMazda);

myMazda.turnOn();

console.log(myMazda);