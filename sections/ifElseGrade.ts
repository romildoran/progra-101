/* 
Realizar un programa que muestre la notal 
del alumno como: AbortController, B, C, D, F
donde:

A >= 90
B >= 80
C >= 70
D >= 60
F>= 60 

*/


let grade:number = 95;
let gradeLtter:string;

if (grade >= 95){
    gradeLtter =' A+';
}else if (grade >= 90 && grade < 95){
    gradeLtter =' A';
}else if (grade >= 80 && grade < 90){
    gradeLtter =' B';
}else if (grade >= 70 && grade < 80){
    gradeLtter =' C';
}else if (grade >= 60 && grade < 60){
    gradeLtter =' D';
}else if (grade >= 50 && grade < 50){
    gradeLtter =' E';
}else{
    gradeLtter =' F';
}

console.log('La nota del alumno es ',gradeLtter);