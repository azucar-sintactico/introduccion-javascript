// Funciones que reciben funciones

const nombres = [
  'David',
  'Mariana',
  'Andres',
  'Angelina'
];

const comianzaPorA = function(nombre) {
  return nombre[0] === 'A';
}

const nombresPorA = nombres.filter(comianzaPorA);

// [ 'Andres', 'Angelina' ]
console.log('Comienzan por A', nombresPorA);

// Funciones que retornan funciones
const comienzaPor = letra => nombre => nombre[0] === letra;
const comienzaPorD = comienzaPor('D');

const nombresPorD = nombres.filter(comienzaPorD);

// [ 'David' ]
console.log('Comienzan por D', nombresPorD);

// Otras funciones interesantes para arrays: map, reduce
const numeros = [1, 2, 3, 4];

const cuadrados = numeros.map(x => x * x);
console.log('Cuadrados de ', numeros, 'son', cuadrados, 'respectivamente');

const suma = numeros.reduce((a, b) => a + b, 0);
console.log('La suma de los numeros', numeros, 'es', suma);