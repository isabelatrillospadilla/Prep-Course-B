// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
    var numeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    var suma = numeros.reduce(function (acc, elemento) {
    return acc + elemento;
});
 return suma;

 /*
 var suma = 0 
 for (var i = 0; i < 11; i++)
 suma = suma + i
 return suma;
 */
 
 /*
 var suma = 0;
 var i = 1;
 while (i < 11){
  suma = suma + i;
  i++
 }
 return suma;
 */

 /*

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var suma = 0;
for (var element of numeros){
  suma = elemetn + suma; 
}
return suma;
*/

/*var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var suma = 0;
numeros.forEach((element)  => {
  suma = suma + element;
});
return suma;
*/
}

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
   return array.filter((element) => element % 2 === 0)
}

function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  var cuadrado = array.map ((element) =>  element ** 2);
  return cuadrado;
  /* return array.map((element) => element ** 2)*/  
}

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
  return array.reduce((acc , sgte) => acc + sgte);
}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  return num.toString().length;
}
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
