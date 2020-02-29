//7) Escribir una función que reciba una lista de nombres de perros y retorne cuales empiezan por "p"
// Solución usando Consola del Inspeccionador de Google Chrome



function Orden_p(Lista_Perros) {

    var Lista_Perros=['Linda','Tato','Douglas','Pepe','Wendy','Pedro','Panamá'];

//var nueva_Lista= Lista_Perros.sort();
Lista_Perros.sort(function (a, b) {
return a.localeCompare(b);


});
}