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
}

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
}

function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  var numeros = [1, 2, 3 ,5, 8, 9, 11 ,14,20];
  var doble = numeros.map(function (elemento){
  return elemento *2});
  doble
    
}

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
  var numeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, ];

    var suma = numeros.reduce(function (acc, elemento) {
    return acc + elemento;
});
 return suma;
  
}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  var longitud = num.length;
  return longitud;
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
