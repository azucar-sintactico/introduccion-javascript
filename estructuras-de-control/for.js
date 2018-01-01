
// for(initializacion; condicion; expresion evaluada al final de cada iteracion)

const personas = [
  'Mariana',
  'Andres',
  'Angelina'
];

for(let indice = 0; indice < personas.length; indice++) {
  const persona = personas[indice];
  console.log('Hola', persona);
}