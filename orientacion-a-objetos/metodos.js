class Auto {
  constructor(modelo) {
    this.modelo = modelo;
  }

  describir() {
    console.log('Este auto es modelo', this.modelo);
  }

  static cantidadDeRuedas() {
    return 4;
  }
}

const bmw = new Auto('BMW M3');
bmw.describir();

console.log('Los autos tienen', Auto.cantidadDeRuedas(), 'ruedas')

// Ejemplo con prototipos

function Empleado() {
  // algunas operaciones de construccion
  // pone el nombre, sueldo, profesion, etc.
}

Empleado.sueldoBase = 3000;
console.log('El sueldo base de los empleados es', Empleado.sueldoBase);