class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }

  saludar() {
    console.log('Hola, mi nombre es', this.nombre)
  }
}

class Empleado extends Persona {
  constructor(nombre, profesion) {
    super(nombre);
    this.profesion = profesion;
  }

  presentarse() {
    console.log('Mi nombre es', this.nombre, 'y soy', this.profesion);
  }
}

const david = new Empleado('David', 'programador');
david.saludar();
david.presentarse();

console.log('david es una instancia de Empleado?', david instanceof Empleado);

console.log('david es una instancia de Persona?', david instanceof Persona);

console.log('david es una instancia de Object?', david instanceof Object);