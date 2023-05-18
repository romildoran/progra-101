/* Crear una función que reciba un arreglo como argumento, la función debe de retornar un
nuevo arreglo pero filtrando todos los nombres que empiezan con una determinada letra.
Ejemplo:
let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];
let herosWithLetterS = heroesThatStartsWith( heroes, 'S' );
console.log( herosWithLetterS ); // She Hulk, Spiderman
Tip: Para determinar si un string empieza con una letra
let hero = ‘Spiderman';
hero.startsWith(’S’); // true
Si se tiene un arreglo vació, por ejemplo:
let newHeroes = [];
Se puede insertar en el arreglo así:
newHeroes.push('Hulk'); */

function heroesThatStartsWith(names: string[], letter: string): string[] {
    
    letter = letter.toUpperCase();
    let filteredNames: string[] = [];
    
    for (let i = 0; i < names.length; i++) {
      if (names[i].startsWith(letter)) {
        filteredNames.push(names[i]);
      }
    }
    return filteredNames;
  }
  
  let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];
  let herosWithLetterS = heroesThatStartsWith(heroes, 'S');
  console.log(herosWithLetterS);

  //Alternativa usando bucle for...of y el método startsWith():
/* 
  for (let name of namelist){
    if ( name.startsWith(letter)){
        newNameList.push(name);
    }
  } 
*/

  // usando metodo .map()

/* 
  function heroesThatStartsWith(names: string[], letter: string): string[] {
    return names.map(name => name.startsWith(letter) ? name : "").filter(name => name !== "");
  }
  
  let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];
  let herosWithLetterS = heroesThatStartsWithMap(heroes, 'S');
  console.log(herosWithLetterS);
*/

// usando metodo .filter()

/* 
function heroesThatStartsWith(names: string[], letter: string): string[] {
    return names.filter(name => name.startsWith(letter));
  }
  
  let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];
  let herosWithLetterS = heroesThatStartsWithFilter(heroes, 'S');
  console.log(herosWithLetterS); // She Hulk, Spiderman
*/
