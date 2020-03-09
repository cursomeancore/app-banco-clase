class BancoPromise {

  // declaración de la función ok
  ok() {

    const promise = new Promise((resolve, reject) => {

      const opciones = {
        url: 'http://localhost:8085/ok',
        metodoHTTP: 'GET'
      };
      
  
      http(opciones, (err, response) => {
        if (err) {
          reject(err);
        }
        resolve(response);
      });
    });

    return promise;
  }

  // declaración de la función loginGestor
  loginGestor (usuario, password) {

    return new Promise((resolve, reject) => {

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
        if (err) reject(err);
        if(!response.ok) reject(response.msg);

        // en este punto del código la respuesta ha sido correcta (response.ok === true)
        localStorage.setItem("token", response.data.token);

        resolve();
      });
    });
  }

  // declaración de la función obtenerGestores
  obtenerGestores() {

    return new Promise((resolve, reject) => {

      const token = localStorage.getItem('token');

      const opcionesObtenerGestores = {
        url: 'http://localhost:8085/gestores/',
        metodoHTTP: 'GET',
        cabeceras: {
          Authorization: `Basic ${token}`
        },
        json: true
      }

      http(opcionesObtenerGestores, (err, response) => {
        if (err) reject(err);
        if(!response.ok) reject(response.msg);

        // la respuesta que me ha llegado es correcta
        const gestores = response.data;
        resolve(gestores);
      });
    });
  }
}