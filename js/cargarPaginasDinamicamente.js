document.getElementById("idSection0").style.display = "none";
document.getElementById("idSectionBtnFinales").style.display = "none";

// Cargar el contenido de "inicio.html" al cargar la página
window.addEventListener("load", function () {
  const urlCompleta = window.location.href;
  if (urlCompleta.includes("juego") == false) {
    cargarContenido("inicio.html"); 
    document.getElementById("idSectionBtnFinales").style.display = "flex";
  } else {
    // Ocultar el canvas y el section al cargar contenido diferente
    document.getElementById("canvas").style.display = "none";
    document.getElementById("idSectionBtnFinales").style.display = "none";
    document.getElementById("idSection0").style.display = "flex";
    cargarContenido("juego.html");
  }
});

//Validar que al momento de dar clic en una opcion de la hamburgesa menu esta se cierre.
// Obtén la casilla de verificación y todos los elementos del menú
const navCheck = document.querySelector(".classNavCheck");
const menuButtons = document.querySelectorAll(".classbtnMenu");

// Agrega un evento clic a cada botón del menú
menuButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Agrega un tiempo de espera de 500 milisegundos antes de desmarcar la casilla de verificación
    setTimeout(() => {
      navCheck.checked = false;
    }, 1000); // Ajusta el tiempo de espera según tus necesidades
  });
});
// Fin Validación



//Cargar Dinamicamente html al dar clic en una opción dle menu
function cargarContenido(archivo) {
  // Capturar la URL completa
  document.querySelector(".contenido_cambiante").style.opacity = 0;
  setTimeout(function () {
    // Carga el nuevo contenido
    fetch(archivo)
      .then((response) => response.text())
      .then((data) => {
        // Actualiza el contenido
        
        document.querySelector(".contenido_cambiante").innerHTML = data;

        // Muestra el contenido con una animación
        document.querySelector(".contenido_cambiante").style.opacity = 1;
      });
  }, 1000); // Ajustar el tiempo de carga html
}
// Fin cargar paginas .html

function cargarContenidoDesdeSVG(archivo) {
  // Ocultar elementos que ya no deben mostarse
  ocualtarElementos();

  // Mostrar loader mientras se carga el contenido
  const mainContainer = mostrarLoader();

  //Desmarcar contenido del menuHamburguesa
  const hamburgesa = document.getElementById("menu");
  hamburgesa.checked = false;

  setTimeout(function () {
    // Cargar el nuevo contenido
    fetch(archivo)
      .then((response) => response.text())
      .then((data) => {
        //Actualizar el contenido del div con el nuevo html
        mostrarContenido(data);

        //Remover el loader
        removerLoader();

        //Mostar Elementos especificos de otras paginas
        mostrarElementosEspecificos(archivo);
      });
  }, 2000); // Ajustar el tiempo de carga HTML
  
}

function mostrarLoader() {
  // Obtener una referencia al div del main
  const mainDiv = document.querySelector(".classMainPagina");

  // Crear el div del loader dinámicamente
  const loaderContainer = document.createElement("div");
  loaderContainer.id = "idLoader";
  loaderContainer.className = "container";

  // Crear el div del loader
  const loaderElement = document.createElement("div");
  loaderElement.id = "idLoader2";
  loaderElement.className = "loader";

  // Crear el párrafo del mensaje
  const messageElement = document.createElement("p");
  messageElement.id = "idloader3";
  messageElement.className = "message";
  messageElement.textContent = "Cargando...";

  // Agregar el div del loader y el párrafo al contenedor del loader
  loaderContainer.appendChild(loaderElement);
  loaderContainer.appendChild(messageElement);

  // Aplicar estilos para centrar el loader
  loaderContainer.style.display = "flex";
  loaderContainer.style.alignItems = "start";
  loaderContainer.style.justifyContent = "center";
  loaderContainer.style.position = "absolute"; // Posición absoluta
  loaderContainer.style.width = "100%"; // Ancho completo
  loaderContainer.style.top = "0%"; // Parte superior del main

  // Agregar el contenedor del loader al main
  mainDiv.appendChild(loaderContainer);

  return mainDiv;
}

function removerLoader() {
  var loader = document.getElementById("idLoader");
  // Ocultar y eliminar el div del loader cuando la carga esté completa
  loader.style.display = "none";
  loader.remove();
}

function ocualtarElementos() {
  // Ocultar el canvas, el section, contenido actual y botones de jeugo y universo 3 al cargar contenido diferente
  document.getElementById("canvas").style.display = "none";
  document.getElementById("idSectionBtnFinales").style.display = "none";
  document.getElementById("idSection0").style.display = "none";
  document.querySelector(".contenido_cambiante").style.opacity = 0;
}

function mostrarContenido(data) {
  const contenidoCambiante = document.querySelector(".contenido_cambiante");
  contenidoCambiante.innerHTML = data;
  contenidoCambiante.style.opacity = 1;
  history.pushState({}, '', `index.html`);
}

function ocultarLoader(loaderContainer) {
  loaderContainer.style.display = "none";
  loaderContainer.remove();
}

function mostrarElementosEspecificos(archivo) {
  const canvas = document.getElementById("canvas");
  const sectionBtnFinales = document.getElementById("idSectionBtnFinales");
  const section0 = document.getElementById("idSection0");

  if (archivo === "inicio.html") {
    canvas.style.display = "block";
    sectionBtnFinales.style.display = "flex";
    sectionBtnFinales.style.position = "relative";
    sectionBtnFinales.style.top = "-10vh";
  } else if (archivo === "juego.html" || archivo === "universo.html") {
    if (archivo === "juego.html") {
      history.pushState({}, '', `index.html?page=juego`);
    }
    section0.style.display = "flex";
  }
  validarObejectHtml(archivo);
}

function validarObejectHtml(archivo){
  if(archivo === "bienvenidos.html" || archivo === "creandoConLira_y_Bongo.html" || archivo === "registraTuObra.html"){
    var miObjeto = document.getElementById('idObjeto');

    // Esperar a que el contenido se cargue completamente
    miObjeto.onload = function() {
      // Obtener el documento dentro del objeto
      var contenidoDoc = miObjeto.contentDocument;
      
      // Obtener el elemento raíz dentro del documento del objeto
      var contenidoBody = contenidoDoc.body;

      // Obtener la altura del contenido
      var alturaContenido = contenidoBody.clientHeight;
      console.log(alturaContenido);
      // Asignar la altura del contenido al objeto
      if(archivo === "registraTuObra.html"){
        alturaContenido += 210;
      }
      console.log(alturaContenido);
      miObjeto.style.height = (alturaContenido) + 'px';
    };
    
  }
}

//Metodo por  AXIOS   <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
var svgObjects = document.querySelectorAll(".classSvgContainer");

// Para cada elemento SVG seleccionado, agrega un evento de carga
svgObjects.forEach(function (svgObject) {
  svgObject.addEventListener("load", function () {
    // Obtiene el documento SVG cargado dentro del objeto <object>
    var svgDocument = svgObject.contentDocument;

    // Selecciona todos los elementos con la clase '.elemento-svg' dentro del documento SVG
    var elementsSVG = svgDocument.querySelectorAll(".elemento-svg");

    // Para cada elemento con la clase '.elemento-svg', agrega un evento de clic
    elementsSVG.forEach(function (elementoSVG) {
      elementoSVG.onclick = function () {
        // Obtiene el atributo 'data-src' del objeto <object> que contiene el SVG
        var archivoHTML = svgObject.getAttribute("data-src");

        // Llama a la función cargarContenido con el archivo HTML como argumento
        cargarContenidoDesdeSVG(archivoHTML);
      };
    });
  });
});
