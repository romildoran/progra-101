export let limite = 100;

for (let iterador = 0; iterador <= limite; iterador++ ){
    console.log('Iterador vale: ',iterador)
    if (iterador === 5){
        continue;
    }
    console.log('Iterador vale: ',iterador);
    if (iterador === 5){
        break;
    }
}
console.log('Fin del programa');