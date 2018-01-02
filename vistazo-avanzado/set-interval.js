// setInterval(funcion a ejecutar, tiempo en milisegundos)
// retorna un identificador para poder limpiarlo mas tarde

let cuenta = 0;

const intervalo = setInterval(function() {
  cuenta++;
  console.log('El numero en este momento, es', cuenta);
}, 500);

setTimeout(function () {
  clearInterval(intervalo);
}, 2000);