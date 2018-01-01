class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }

  saludar() {
    console.log('Hola, mi nombre es', this.nombre)
  }
}

const david = new Persona('David');
david.saludar();

console.log('david es instancia de Persona?', david instanceof Persona);