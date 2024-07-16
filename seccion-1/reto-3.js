//3.1 Creación de la Función con Closure

function crearSumador(num){
    return function(num2){
        let sum = num + num2;
        return sum;
    }
}

//3.2 Uso de la Función y Observación de Closures

let sumarNueve = crearSumador(9);
console.log(sumarNueve); //muestra la funcion
console.log(sumarNueve(6));

//3.3 Ejecución y Análisis:


let sumarCuatro = crearSumador(4);
let sumarDiez = crearSumador(10);

console.log(sumarDiez(sumarCuatro(sumarNueve(5)))); //suma hasta el numero 28 es decir 5+9+4+10 = 28