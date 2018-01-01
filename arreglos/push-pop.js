const empleados = [
  'Carlos',
  'John',
  'David'
];

empleados.push(
  'Mariana'
);

const cantidadDeElementos = empleados.push(
  'Angelina'
);

console.log(
  'Cuando hice push quedaron', cantidadDeElementos, 'empleados',
  'mi coleccion ahora es', empleados
);

const elementoEliminado = empleados.pop();
console.log(
  'Elimine el elemento', elementoEliminado,
  'y ahora la coleccion es', empleados
);