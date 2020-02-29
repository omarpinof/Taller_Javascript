//2) Escribir una función que retorne el valor mayor entre 3 números
// Solución usando Consola del Inspeccionador de Google Chrome

var n1;
var n2;
var n3;

function N_Mayor(n1,n2,n3) {
if ((n1>n2) && (n1>n3) )
{
alert("El Número 1 es Mayor");
return(n1);
}else if ((n2>n1) && (n2>n3)) {
alert("El Número 2 es Mayor");
return(n2);
}else if ((n3>n1) && (n3>n2)) {
alert("El Número 3 es Mayor");
return(n3);
} else if ((n1=n2) || (n1=n3) || (n2=n3))
           alert("No hay ninguno Mayor");
}