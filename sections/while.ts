//un taque de gasolina tiene una capcidad de 50
//crea un clico while que haga un conteo regresivo

export let gasTank:number = 50;

while (gasTank >= 0){
    console.log('Gasolina restante', gasTank);

    gasTank--;
}

console.log('Ya no tienes gasolina');