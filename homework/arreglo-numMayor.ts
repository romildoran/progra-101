/* Dado el siguiente arreglo:
let numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5 ];
Utilizando un ciclo FOR, barra todo el arreglo y determine ¿Cuál es el número mayor? */

let numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5 ];
let numMayor = -9999999;

for (let i=0; i < numbers.length -1; i++){
    if (numbers[i] >= numMayor){
        numMayor = numbers[i];
    }
}

console.log('dado el arrego: numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5 ];');
console.log('El numero mayor del arreglo es: ',numMayor);