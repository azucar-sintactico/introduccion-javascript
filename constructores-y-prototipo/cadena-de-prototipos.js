function Persona(nombre) {
  this.nombre = nombre;
}

Persona.prototype.saludar = function() {
  console.log('Hola! soy ', this.nombre);
}

function Empleado(nombre, profesion) {
  Persona.call(this, nombre);
  this.profesion = profesion;
}

Empleado.prototype = Object.create(Persona.prototype);
Empleado.prototype.constructor = Empleado;
Empleado.prototype.presentarse = function() {
  console.log('Mi nombre es', this.nombre, 'y soy', this.profesion);
}

const david = new Empleado('David', 'programador');
david.saludar();
david.presentarse();

console.log('david es una instancia de Empleado?', david instanceof Empleado);

// Javascript clone los prototipos en forma de cadena, hasta que llega al prototipo que es null
console.log('david es una instancia de Persona?', david instanceof Persona);

console.log('david es una instancia de Object?', david instanceof Object);