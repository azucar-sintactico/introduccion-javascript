console.log('El tipo de 1 es', typeof 1);
console.log('El tipo de Hola es', typeof 'Hola');
console.log('El tipo de true es', typeof true);
console.log('El tipo de null es', typeof null);
console.log('El tipo de undefined es', typeof undefined);

// Javascript es orientado a objetos!

const persona = {
  nombre: 'David',
  edad: 23
};

const calificaciones = [
  17, 18, 20, 16
];

console.log('El tipo de persona es ', typeof calificaciones);
console.log('El tipo de calificaciones es', typeof calificaciones);

// Estos nos sugiere que pueden haber tipos de objetos
// Por ejemplo, en el caso de array, que es un objeto de tipo Array

console.log('calificaciones es instancia de Array?', calificaciones instanceof Array);