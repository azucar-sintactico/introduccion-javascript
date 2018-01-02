// npm init
// npm install node-fetch --save

const fetch = require('node-fetch');

const posts = fetch('https://jsonplaceholder.typicode.com/posts');
console.log('Cargando posts');

posts
  .then(respuesta => respuesta.json())
  .then(datos => console.log(datos[0]));
