// Scope o alcance de variables

// var declara variables con alcance de funcion
function calcularCalificacion() {
  calificacion = 20;
  var calificacion;

  return calificacion;
}

console.log(
  'La calificacion es',
  calcularCalificacion()
);