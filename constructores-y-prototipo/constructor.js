function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

// This se refiere al objeto en cuestion
// que se crea al usar el constructor

const david = new Persona('David', 23);

console.log(david);

console.log('Cual es el tipo de david?', typeof david)
console.log('david es instancia de Persona?', david instanceof Persona);