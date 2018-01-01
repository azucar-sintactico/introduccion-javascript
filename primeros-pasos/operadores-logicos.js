// Javascript tiene valores booleanos

const verdad = true;
const falsedad = false;

console.log(
  'verdad es', verdad,
  'y falsedad es', falsedad
);

const numero = 8;


// Operador >, mayor que
const numeroEsMayorQue10 = numero > 10;
console.log('El numero es mayor que 10?', numeroEsMayorQue10);

// Operador ===, igual que
const numeroEsIgualA10 = numero === 10;
console.log('El numero es igual a 10?', numeroEsIgualA10);

// Operador !==, diferente de
const numeroEsDistintoDe10 = numero !== 10;
console.log('El numero es distinto de 10?', numeroEsDistintoDe10);


// Operador <, menor que
const numeroEsMenorQue10 = numero < 10;
console.log('El numero es mayor que 10?', numeroEsMenorQue10);

// Operador ||, verbalmente "o" bien llamado disyuncion
// Es verdad si alguno de las dos es cierto
const numeroEsMenorOIgualA10 = numeroEsIgualA10 ||  numeroEsMenorQue10
console.log(
  'El numero es menor o igual a 10?', numeroEsMenorOIgualA10,
  'El numero es menor o igual a 10?', numero <= 10,
  'El numero es mayor o igual a 10?', numero >= 10
);

// Operador &&, verbalmente "y"o bien llamado "conjuncion"
const usuarioEstaOnline = true;
const usuarioEstaVerificado = false;
const usuarioPuedeUsarLaAplicacion = usuarioEstaOnline && usuarioEstaVerificado;

console.log(
  'El usuario puede usar la aplicacion', usuarioPuedeUsarLaAplicacion
);