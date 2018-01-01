// Podemos guardar una funcion en una variable o constante

function calcularSueldoNeto(sueldoBruto) {
  return sueldoBruto * 0.8;
}

const enUnaVariable = calcularSueldoNeto;
console.log('El sueldo neto para 15000 es', enUnaVariable(15000));

// Podemos crear funciones anonimas!
const saludar = function(nombre) {
  console.log('Hola', nombre);
}

saludar('Mariana');

// Otra manera de crear funciones anonimas o lambdas
const persentar = (nombre, edad) => `Soy ${nombre} y tengo ${edad} años`;
console.log(
  persentar('David', 23)
);