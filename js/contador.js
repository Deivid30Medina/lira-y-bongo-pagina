const url = '../contador_visitas/contador_visitas.php';


function insertarDataos(datos){
  let element = document.getElementById("idCont");
  element.innerText = datos;
}

// Crear el objeto a enviar en la solicitud
const dataToSend = {
  tabla: "visitas_comic_2"
};

fetch(url, {
  method: 'POST',
  body: JSON.stringify(dataToSend),
  headers:{
    'Content-Type': 'application/json'
  }
})
.then(response => response.text())
.then(data => {
  const cont = parseInt(data) + 409;
  console.log(data);
  insertarDataos(cont);
})
.catch(error => {
  console.error('Error:', error);
  insertarDataos(409);
});
