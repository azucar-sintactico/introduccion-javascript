function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

Persona.prototype.saludar = function() {
  console.log('Hola! soy', this.nombre);
}

// Se crea el objeto clonando el prototipo
// Mientras la palabra this se refiere al objeto en cuestion!

const david = new Persona('David', 23);
david.saludar();