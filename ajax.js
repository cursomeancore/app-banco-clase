const metodosHTTP = ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'];

const http = (opciones, cb) => {

  // configuración
  const metodoHTTP = (metodosHTTP.includes(opciones.metodoHTTP)) ? opciones.metodoHTTP : 'GET';
  const url = opciones.url || 'http://localhost:8085/ok';
  const body = opciones.body || null;
  const json = opciones.json || false;

  // crea el objeto XMLHttpRequest
  const xhttp = new XMLHttpRequest();

  // define una función a invocar cuando el atributo readyState cambia
  xhttp.onreadystatechange = function () {

    if ((this.readyState == 4) && (this.status == 200)) {

      if (json) {
        try {
          return cb(null, JSON.parse(this.responseText));
        } catch (err) {
          return cb("Error parseando JSON");
        }
      }
      else {
        cb(null, this.responseText);
      }
    }
  };

  // define una función a invocar cuando se produce un error
  xhttp.onerror = function () {
    cb('Error accediendo al recurso web');
  }

  // especifica la petición (tipo, url y asincronismo)
  xhttp.open(metodoHTTP, url, true);

  // establecer cabeceras
  for (let cabecera in opciones.cabeceras) {    
    xhttp.setRequestHeader(cabecera, opciones.cabeceras[cabecera]);
  }

  // envía la petición al servidor
  (!body) ? xhttp.send(): xhttp.send(body);
}