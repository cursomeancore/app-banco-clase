const obtenerGestoresDePrueba = () => {

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

  const gestores = [];
  gestores.push(gestor1, gestor2, gestor3);
  return gestores;
}

const obtenerClientesDePrueba = () => {

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
    id_gestor: 1,
    usuario: 'cliente3',
    password: 'cliente3',
    correo: 'cliente3@mail.com',
    saldo: 1000
  };

  const clientes = [cliente1, cliente2, cliente3];
  return clientes;
}

const obtenerMensajesDePrueba = () => {

  // agregar los mensajes al array de mensajes
  const mensajes = [{
      id: 1,
      id_origen: 1,
      id_destino: 2,
      texto: 'hola',
      fecha: new Date()
    },
    {
      id: 2,
      id_origen: 2,
      id_destino: 1,
      texto: 'adiós',
      fecha: new Date()
    }
  ];

  return mensajes;
}

const obtenerTransferenciasDePrueba = () => {
  const transferencias = [];
  return transferencias;
}