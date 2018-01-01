const a = 3;
const b = 5;

const operacion = 'suma';

switch(operacion) {
  case 'suma':
    console.log('Resultado a + b = ', a + b)
    break;

  case 'resta':
    console.log('Resultado a - b = ', a - b)
    break;

  default: console.log('Caso por defecto, ninguna operacion');
}