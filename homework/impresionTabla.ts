//Realice un algoritmo, que permita la impresión en consola de una tabla:

for (let i = 1; i <= 5; i++){
    let line = ' ';
    for (let j = 1; j<= 5; j++){
        line += ' ' + (j*i);
    }
    console.log(line);
}