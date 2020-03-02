/*
Ejercicio proyecto: escribe un programa que declare 3 objetos de cada modelo de datos considerado: gestor, cliente, mensaje y transferencia. Los valores de las propiedades de los objetos pueden ser arbitrarios.
*/

// objetos gestores
const gestor1 = {
  id: 1,
  usuario: 'gestor1',
  password: 'gestor1',
  correo: 'gestor1@mail.com'
};

const gestor2 = {
  id: 2,
  usuario: 'gestor2',
  password: 'gestor2',
  correo: 'gestor2@mail.com'
};

const gestor3 = {
  id: 3,
  usuario: 'gestor3',
  password: 'gestor3',
  correo: 'gestor3@mail.com'
};

// objetos clientes
const cliente1 = {
  id: 1,
  id_gestor: 2,
  usuario: 'cliente1',
  password: 'cliente1',
  correo: 'cliente1@mail.com',
  saldo: 3000
};

const cliente2 = {
  id: 2,
  id_gestor: 1,
  usuario: 'cliente2',
  password: 'cliente2',
  correo: 'cliente2@mail.com',
  saldo: 5000
};
const cliente3 = {
  id: 3,
  id_gestor: 2,
  usuario: 'cliente3',
  password: 'cliente3',
  correo: 'cliente3@mail.com',
  saldo: 1000
};