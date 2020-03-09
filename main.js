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

  gestores.forEach(gestor => {
    console.log(`Id: ${gestor.id}`);
    console.log(`Usuario: ${gestor.usuario}`);
    console.log(`Correo: ${gestor.correo}`);
    console.log('-----');
  });

};


const mostrarClientes = (clientes) => {

  console.log('CLIENTES');

  clientes.forEach(cliente => {

    const usuarioGestor = obtenerGestorUsuario(cliente.id_gestor);

    console.log(`Id: ${cliente.id}`);
    console.log(`Id gestor: ${cliente.id_gestor}`);
    console.log(`Usuario gestor: ${usuarioGestor}`);
    console.log(`Usuario: ${cliente.usuario}`);
    console.log(`Password: ${cliente.password}`);
    console.log(`Correo: ${cliente.correo}`);
    console.log('-----');
  });
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

const banco = new Banco();

// invocación a la función ok
banco.ok((err, datos) => {
  if(err) {
    return console.log(err);
  }
  
  console.log(datos);
});

// invocación a la función loginGestor
const usuario = 'gestor1';
const password = 'gestor1';
banco.loginGestor(usuario, password, (err) => {
  if(err) return console.log(err);

  // estoy autenticado
  console.log('Estoy autenticado');
  
  // invocación a la función obtenerGestores
  banco.obtenerGestores((err, gestores) => {
    if(err) return console.log(err);

    // tengo el array de gestores y los muestro
    mostrarGestores(gestores);
  });
});

console.log('Sigo ejecutando código');









 
 

  
 /*

loginGestor('gestor1', 'gestor2', err => {


  // gestores sería un array de objetos gestor
  obtenerGestores((err, gestores) => {
    console.log(gestores);
  });

  // gestor sería un objeto
  obtenerGestor(1, (err, gestor) => {

  });

});*/