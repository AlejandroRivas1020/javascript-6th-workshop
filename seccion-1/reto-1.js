//Codigo considerado

// Global Scope
var globalVariable = "Soy una variable global.";

function testScope() {
  // Function Scope
  var functionVariable = "Soy una variable local.";

  if (true) {
    // Block Scope
    let blockVariable = "Soy una variable de bloque.";
    console.log("Dentro del bloque:", blockVariable);
  }

  console.log("Dentro de la funcion:", functionVariable);
}

console.log("Fuera de la funcion:", globalVariable);
testScope();

alert("Bienvenido al quiz de Scope")

//Preguntas
const variableGlobal = prompt("1. Es posible acceder a la variable global 'globalVariable' desde cualquier parte del codigo? \n a) No, globalVariable no puede ser accedida desde cualquier parte del codigo.\n b) globalVariable puede ser accedida desde gran parte del codigo excepto en funciones.\n c) Si, globalVariable puede ser accedida desde cualquier parte del codigo.\n d) No, globalVariable solo puede ser accedida desde el ambito global.\nEscoge la opcion correcta.").toLowerCase();

const variableEnFuncion = prompt("2. Es posible acceder a la variable que esta dentro de la funcion 'testScope' llamada 'functionVariable' desde cualquier parte del codigo? \n a) Si, puedes acceder a ella desde cualquier parte del codigo.\n b) No, no se puede acceder a ella desde cualquier parte porque esta declarada dentro de la funcion testScope.\n c) Solo si se utiliza la palabra clave 'var' para declararla\n d) Solo si se utiliza la palabra clave 'let' para declararla\nEscoge la opcion correcta.").toLowerCase();

const variableEnBloque = prompt("3. Es posible acceder a la variable 'blockVariable' desde cualquier parte del codigo? \n a) No, pero blockVariable puede ser accedida desde cualquier funcion dentro del codigo.\n b) Si, blockVariable puede ser accedida desde cualquier parte del codigo.\n c) No, blockVariable tiene un alcance limitado al bloque donde esta declarada.\n d) Solo si se utiliza la palabra clave 'let' para declararla, blockVariable puede ser accedida desde cualquier parte del codigo.\nEscoge la opcion correcta.").toLowerCase();


//Respuesta con justificacion pregunta: 1 -----------------------
switch (variableGlobal) {
    case 'c': 
        alert(`Muy bien, ${variableGlobal}, Es la respuesta correcta.`);        
        
        break;

    default:
        alert(`La respuesta, ${variableGlobal}, es INCORRECTA.`);
        break;
}

// console.log("Calificando la primera pregunta: ");
// alert("Calificando la primera pregunta: ");
// if(variableGlobal == 'c'){
//     console.log(`Muy bien, ${variableGlobal}, Es respuesta correcta.`);
//     alert(`Muy bien, ${variableGlobal}, Es respuesta correcta.`);
// }else{
//     console.log(`La respuesta, ${variableGlobal}, es INCORRECTA.`);
//     alert(`La respuesta, ${variableGlobal}, es INCORRECTA.`);
// }
// console.log("La variable globalVariable esta declarada fuera de cualquier funcion o bloque, lo que la convierte en una variable global. Por lo tanto, puede ser accedida desde cualquier parte del codigo.")
// alert("La variable globalVariable esta declarada fuera de cualquier funcion o bloque, lo que la convierte en una variable global. Por lo tanto, puede ser accedida desde cualquier parte del codigo.")


//Respuesta con justificacion pregunta: 2 -----------------------
console.log("Calificando la segunda pregunta: ");
alert("Calificando la segunda pregunta: ");
if(variableEnFuncion == 'b'){
    console.log(`Muy bien, ${variableEnFuncion}, Es respuesta correcta.`);
    alert(`Muy bien, ${variableEnFuncion}, Es respuesta correcta.`);
}else{
    console.log(`La respuesta, ${variableEnFuncion}, es INCORRECTA.`);
    alert(`La respuesta, ${variableEnFuncion}, es INCORRECTA.`);
}
console.log("La variable functionVariable esta declarada dentro de la funcion testScope, lo que limita su alcance solo a esa funcion. Por lo tanto, no puede ser accedida desde fuera de esa funcion.")
alert("La variable functionVariable esta declarada dentro de la funcion testScope, lo que limita su alcance solo a esa funcion. Por lo tanto, no puede ser accedida desde fuera de esa funcion.")


//Respuesta con justificacion pregunta: 3 -----------------------
console.log("Calificando la tercera pregunta: ");
alert("Calificando la tercera pregunta: ");
if(variableEnBloque == 'c'){
    console.log(`Muy bien, ${variableEnBloque}, Es respuesta correcta.`);    
    alert(`Muy bien, ${variableEnBloque}, Es respuesta correcta.`);
}else{
    console.log(`La respuesta, ${variableEnBloque}, es INCORRECTA.`);    
    alert(`La respuesta, ${variableEnBloque}, es INCORRECTA.`);
}
console.log("La variable blockVariable esta declarada dentro de un bloque, lo que limita su alcance solo a ese bloque. Por lo tanto, no puede ser accedida desde fuera de ese bloque.");
alert("La variable blockVariable esta declarada dentro de un bloque, lo que limita su alcance solo a ese bloque. Por lo tanto, no puede ser accedida desde fuera de ese bloque.");