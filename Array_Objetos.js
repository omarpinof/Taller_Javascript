//8) Escribir una función que reciba un arreglo el siguiente arreglo con objetos y retorne cuantos son modelos superiores a 2018
// Solución usando Consola del Inspeccionador de Google Chrome

function orden_carros() {
    var carros = [
        { marca: 'Mazda', modelo: 2029 },
        { marca: 'Chevrolet', modelo: 2017 },
        { marca: 'Jeep', modelo: 2018 },
        { marca: 'Ferrari', modelo: 2015 },
        { marca: 'Nissan', modelo: 2021 },
    ]
    carros.sort(function (a,b) {

        if (a.modelo > 2018){
            return 1;
        } 
        if (a.modelo<2018){
            return 0
        }
        //return 0;
    }) 

    return(carros);

}

