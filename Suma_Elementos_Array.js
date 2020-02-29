//6) Escribir una función que reciba un arreglo de números y retorne la suma de todos ellos
// Solución usando Consola del Inspeccionador de Google Chrome

// var fruta = []; así se crea un Array en Javascript


function suma_array(array) {
    
var array=[5 , 4 , 3 , 2 , 1];
var suma=0;

for (var i=1; i < array.length ; i++) {
suma += array[i];

}

return(suma);


}