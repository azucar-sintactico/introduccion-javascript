const persona = {
  nombre: 'David',
  edad: 23
};

console.log(
  'La persona es', persona
);

// Se pueden acceder a sus propiedades
console.log(
  'Hola, me llamo', persona.nombre
);

// Se pueden agregar propiedades
persona.pais = 'Argentina';

console.log(
  'El pais es', persona.pais
);

// Se puede crear un objeto vacio
const miObjeto = {};
const nuevoObjeto = new Object();

// Objeto que apunta a la nada, representa vacio!
const nulo = null;