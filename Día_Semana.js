//4) Escribir una función que determine si un día de la semana es laboral o no (L-V)
// Solución usando Consola del Inspeccionador de Google Chrome

var dia='';

alert("Escriba el día (Lunes=L, Martes=M, Miercoles=Mi, Jueves=J, Viernes=V, Sabado=S, Domingo=D)");

function que_dia(dia){
if ((dia=='L') || (dia=='M') || (dia=='Mi') || (dia=='J') || (dia=='V') ){
alert("Es un día Laboral");
    return(dia);

} else if ((dia=='S') || (dia=='D')){
alert("Es un día de Descanso");
    return(dia);

}
}