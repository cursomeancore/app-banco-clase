// declaración de la función ok
const ok = (callback) => {

  const opciones = {
    url: 'http://localhost:8085/ok',
    metodoHTTP: 'GET'
  };
  

  http(opciones, (err, response) => {
    if (err) return callback(err);
    callback(null, response);
  });  
};

// declaración de la función loginGestor
const loginGestor = (usuario, password, callback) => {

  const opcionesLogin = {
    url: 'http://localhost:8085/login/gestor/',
    metodoHTTP: 'POST',
    cabeceras: {
      "Content-Type": 'application/x-www-form-urlencoded'
    },
    json: true,
    body: `usuario=${usuario}&password=${password}`
  }
  
  http(opcionesLogin, (err, response) => {
    if (err) return callback(err);
    if(!response.ok) return callback(response.msg);

    // en este punto del código la respuesta ha sido correcta (response.ok === true)
    localStorage.setItem("token", response.data.token);

    callback(null);

    // guardo token en una variable
    //const token = response.data.token;
  });
};