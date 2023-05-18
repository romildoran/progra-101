//objetos literales

import { throws } from "assert";

let person = {
    name: 'Melissa',
    age: 30,
    isActive: true,
    hobbies: ['soccer','baseball'],

    toString(){
        let objectString = this.name + ' ' + this.age + ' ' + this.hobbies;
        console.log(objectString);
    }
}
// console.log(person.name.);
person.toString();