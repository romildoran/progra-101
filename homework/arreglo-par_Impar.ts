/* Dado el siguiente arreglo:
let numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5 ];
Haga una impresión en consola así:
1 es un número impar
2 es un número par
3 es un número impar
…
6 es un número par

Debe de utilizar un ciclo FOR para generar dicha impresión.
Tip: usar el operador % para obtener el resultado, ejemplo:
2%2; // 0
3%2; // 1
4%2; // 0
5%2; // 1 */

let numeros = [1, 6, 8, 4, 2, 7, 10, 3, 5 ];

for (let i=0; i < numeros.length -1; i++){
    let numerx = numeros[i];
    if (numerx % 2 === 0){
        console.log('el numero',numerx,' del arreglo es par');
    }else{
        console.log('el numero',numerx,' del arreglo es impar');
    }
}


