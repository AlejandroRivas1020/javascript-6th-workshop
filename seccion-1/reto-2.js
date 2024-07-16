// vars call
console.log("Valor de a:", a);
console.log("Valor de b:", b);
console.log("Valor de c:", c);


// functions call
console.log("Resultado de funcionDeclarada:", funcionDeclarada());// Resultado: "Función declarada ha sido llamada."  --> Funciona perfectamente, es inicializada completamente durante el hoisting


console.log("Resultado de funcionExpresada:", funcionExpresada());// Resultado: Error: funcionExpresada is not defined  --> intentar llamar a una funcion expresada antes de su declaracion resultara en un error, si bien son inicializadas en el proceso de hoisting  solo se les asigna la referencia a la funcion, no su definicion completa.

// vars declaration
var a = 1;
let b = 2;
const c = 3;

// functions declarations
function funcionDeclarada() {
  return "Función declarada ha sido llamada.";
}

const funcionExpresada = function () {
  return "Función expresada ha sido llamada.";
};