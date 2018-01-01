// Scope o alcance de variables

const personas = [
  'Mariana',
  'Andres'
];

// let declara variables con alcance de bloque
function saludarPersonas() {
  for(let i = 0; i < personas.length; i++) {
    console.log('Hola', personas[i]);
  }

  //console.log(i)
}

saludarPersonas();