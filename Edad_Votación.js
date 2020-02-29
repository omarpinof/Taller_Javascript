//3) Escribir una función que reciba el nombre y la edad y retorne true si puede votar, en caso contrario false
// Solución usando Consola del Inspeccionador de Google Chrome

var nombre='';
var edad;

function potencial_elector(nombre,edad) {

if (edad>=18){
alert("Usted puede votar");
return(true)
}else{
alert("Usted NO puede votar");
return(false)
}
}
