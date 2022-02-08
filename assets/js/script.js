//Insertando Album ID =1
const albumId = 1;
//Seleccionado los 20 primeros
const posicion = 20;

const request = async () => {
  const urlBase = ` https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`;
  try {
    const result = await fetch(urlBase);
    const response = await result.json();
    response.slice(0, posicion).forEach((item, ind) => {
      mensaje('Listo!');
      const albumTitle = item.title;
      const idAlbum = item.albumId;
      setTexto(
        `<ul> ${
          ind + 1
        }.- El ID es: ${idAlbum} y el Titulo Album: ${albumTitle} </ul> `
      );
    });
  } catch (error) {
    console.log('error en la request', error);
  }
};

// función asíncrona en conjunto con el await( para esperar y retornar la promesa)
// Para pedir datos externos a través de requests, necesitamos que se ejecute esa sentencia antes de devolver la respuesta

//Ejecutar Promesa despues de 3 segundos
const getExternalData = () => {
  return new Promise((resolve, reject) => {
    mensaje('Información Enviada, espere 3seg');
    setTexto('');
    setTimeout(() => {
      resolve(request());
    }, 3000);
  });
};

const getData = async () => {
  const resp = await getExternalData();
  return resp;
};
//Termino Async / Await

//Inserta 20 items en HTML
const setTexto = (datos) => {
  contenido.innerHTML += datos;
};
//Inserta mensaje de solicitud en HTML
const mensaje = (datos) => {
  msg.textContent = datos;
};

//llamando la funcion para los 20 albums
getData();
