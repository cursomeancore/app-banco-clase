const obtenerGestorUsuario = (id_gestor) => {

  for (const gestor of gestores) {
    if (gestor.id === id_gestor) {
      return gestor.usuario;
    }
  }
  return 'desconocido';
};

const mostrarGestores = (gestores) => {

  console.log('GESTORES');

  for (const gestor of gestores) {
    console.log(`Id: ${gestor.id}`);
    console.log(`Usuario: ${gestor.usuario}`);
    console.log(`Password: ${gestor.password}`);
    console.log(`Correo: ${gestor.correo}`);
    console.log('-----');
  }
};


const mostrarClientes = (clientes) => {

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
}


/*

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

*/

// invocación a la función ok
ok((err, datos) => {
  if(err) {
    return console.log(err);
  }
  
  console.log(datos);
});

// invocación a la función loginGestor
const usuario = 'gestor1';
const password = 'gestor1';
loginGestor(usuario, password, (err) => {
  if(err) {
    // no estoy autenticado
    return console.log(err);
  }

  // estoy autenticado
  console.log('Estoy autenticado');
});












  /*
  const opcionesObtenerGestores = {
    url: 'http://localhost:8085/gestores/',
    metodoHTTP: 'GET',
    cabeceras: {
      Authorization: `Basic ${token}`
    },
    json: true
  }

  http(opcionesObtenerGestores, (err, response) => {
    if (err) return console.log(err);
    if (!response.ok) return console.log(response.msg);

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


loginGestor('gestor1', 'gestor2', err => {


  // gestores sería un array de objetos gestor
  obtenerGestores((err, gestores) => {
    console.log(gestores);
  });

  // gestor sería un objeto
  obtenerGestor(1, (err, gestor) => {

  });

});*/