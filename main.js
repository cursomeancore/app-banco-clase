const frutas = {
  manzanas: 4,
  peras: 3
};

// console.log(frutas);
// console.log(frutas.manzanas);
// console.log(frutas['manzanas']);

const frutas2 = {};
frutas2.fresas = 4;


frutas2.mostrarFresas = (fresas) => {
  console.log(fresas);
};
// console.log(frutas2.fresas);
delete frutas2.fresas;

// for(const fruta in frutas) {
//   console.log(fruta);
// }

// propiedades es un array
const propiedades = Object.keys(frutas);

for(const propiedad of propiedades) {
  console.log(`La propiedad ${propiedad} tiene el valor ${frutas[propiedad]}`);
}
