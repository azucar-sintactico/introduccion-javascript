// new Promise(funcion que especifica como se resuelve o rechaza el valor)

const valorFuturo = new Promise(resolve => {
  setTimeout(
    () => resolve(10),
    3000
  );
});

valorFuturo.then(
  valor => console.log('El valor es', valor)
);