/* Crear una función que reciba 3 argumentos numéricos ( a, b, c), la función se debe de llamar
max, la función debe de determinar cual es el mayor de los 3 y retornarlo… la función debe de
trabajar así:
let maxValue = max( 5, 2, 6);
console.log( maxValue ); // 6 */


function max(a: number, b: number, c: number): number {
    if (a > b) {
      if (a > c) {
        return a;
      } else {
        return c;
      }
    } else {
      if (b > c) {
        return b;
      } else {
        return c;
      }
    }
  }
  
  let maxValue = max(5, 2, 6);
  console.log('el numero de mayor valor en la funcion es: ',maxValue);
  

  // usando operador ternario:
/* 

  function max(a: number, b: number, c: number): number {
    return a > b ? (a > c ? a : c) : (b > c ? b : c);
  }
  
  let maxValue = max(5, 2, 6);
  console.log(maxValue);
  
   */