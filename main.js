function init() {
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
    id_gestor: 80,
    usuario: 'cliente3',
    password: 'cliente3',
    correo: 'cliente3@mail.com',
    saldo: 1000
  };

  /*
  Ejercicio proyecto: escribe un programa que almacene los objetos creados en el ejercio anterior del proyecto dentro de un array (un array por cada modelo de datos). A continuación, recorre cada uno de los arrays y muestra todas propiedades.
  */

  // agrego los gestores al array de gestores
  const gestores = [];
  gestores.push(gestor1, gestor2, gestor3);
  // console.log(gestores);

  // agrego los clientes al array de clientes
  const clientes = [cliente1, cliente2, cliente3];
  // console.log(clientes);

  /* 
  esta función recibe como parámetro el id de un gestor y devuelve su nombre de usuario
  */
  const obtenerGestorUsuario = (id_gestor) => {

    for (const gestor of gestores) {
      if (gestor.id === id_gestor) {
        return gestor.usuario;
      }
    }
    return 'desconocido';
  };

  console.log('GESTORES');

  for (const gestor of gestores) {
    console.log(`Id: ${gestor.id}`);
    console.log(`Usuario: ${gestor.usuario}`);
    console.log(`Password: ${gestor.password}`);
    console.log(`Correo: ${gestor.correo}`);
    console.log('-----');
  }

  console.log('CLIENTES');

  for (const cliente of clientes) {

    const usuarioGestor = obtenerGestorUsuario(cliente.id_gestor);

    console.log(`Id: ${cliente.id}`);
    console.log(`Id gestor: ${cliente.id_gestor}`);
    console.log(`Usuario gestor: ${usuarioGestor}`);
    console.log(`Usuario: ${cliente.usuario}`);
    console.log(`Password: ${cliente.password}`);
    console.log(`Correo: ${cliente.correo}`);
    console.log('-----');
  }


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

  // de array JavaScript a array JSON (string)
  const arrayJSON = JSON.stringify(gestores);
  console.log(arrayJSON);

  // de objeto JavaScript a objeto JSON (string)
  const objetoJSON = JSON.stringify(gestor1);
  console.log(objetoJSON);

  // de array JSON (string) a array JavaScript
  const arrayJavaScript = JSON.parse(arrayJSON);
  console.log(arrayJavaScript);

  // de objeto JSON (string) a objeto JavaScript
  const objetoJavaSript = JSON.parse(objetoJSON);
  console.log(objetoJavaSript);
}

const opciones = {
  url: 'http://localhost:8085/ok',
  metodoHTTP: 'GET'
}


http(opciones, (err, response) => {
  if(err) return console.log(err);

  // si la ejecución ha llegado esta línea es que la petición se ha efectuado correctamente
  console.log(response);

});

const opcionesLogin = {
  url: 'http://localhost:8085/login/gestor/',
  metodoHTTP: 'POST',
  cabeceras: {
    "Content-Type": 'application/x-www-form-urlencoded'
  },
  json: true,
  body: 'usuario=gestor1&password=gestor1'
}

http(opcionesLogin, (err, response) => {
  if(err) return console.log(err);
  if(!response.ok) return console.log(response.msg);
  
  // guardo token en una variable
  const token = response.data.token;

  const opcionesObtenerGestores = {
    url: 'http://localhost:8085/gestores/',
    metodoHTTP: 'GET',
    cabeceras: {
      Authorization: `Basic ${token}`
    },
    json: true
  }

  http(opcionesObtenerGestores, (err, response) => {
    if(err) return console.log(err);
    if(!response.ok) return console.log(response.msg);

    const gestores = response.data;

    console.log('GESTORES');

    for (const gestor of gestores) {
      console.log(`Id: ${gestor.id}`);
      console.log(`Usuario: ${gestor.usuario}`);
      console.log(`Correo: ${gestor.correo}`);
      console.log('-----');
    }
  });  
});

