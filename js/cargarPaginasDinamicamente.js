document.getElementById("idSection0").style.opacity = 0;
document.getElementById("idSectionBtnFinales").style.display = "none";
let banderaBtnDespintar, archivoAnterior, banderaBtnPintado, pathAnterior, pathSvg2Universo, pathSvg2Juego;


//Validar que al momento de dar clic en una opcion de la hamburgesa menu esta se cierre.
// Obtén la casilla de verificación y todos los elementos del menú
const navCheck = document.querySelector(".classNavCheck");
const menuButtons = document.querySelectorAll(".classbtnMenu");



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
    document.getElementById("idSection0").style.display = 1;
    cargarContenido("juego.html");
  }
});



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



/**
 * Función que me carga inicialmente el contenido inicio.html
 * @param {*} archivo 
 */
function cargarContenido(archivo) {
  // Capturar la URL completa
  if(screen.width >= 772){
    let objectInicio = document.querySelector('#svgObjectInicio');
    let SvgInicio = objectInicio.contentDocument;
    pathAnterior = SvgInicio.querySelector('#idPathSvg');
    pathAnterior.classList.add("pintar2");
  }  
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



/**
 * Función que me carga los html cuando se le da clic algun btn svg del sitio
 * @param {*} archivo contiene el nombre del html que se desea cargar en la pagina
 */
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

/**
 * Función que me crear el loader para tener un tiempo de espera más amigable con el usuario.
 * @returns mainDiv - Contiene la arquitectura del loader para que se peuda visualizar correctamente.
 */
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

/**
 * Función que al terminar el tiempo de espera de cargar el documento html se retira el loader.
 */
function removerLoader() {
  var loader = document.getElementById("idLoader");
  // Ocultar y eliminar el div del loader cuando la carga esté completa
  loader.style.display = "none";
  loader.remove();
}

/**
 * Función para ocultar algunos elementos en especifico que ya no deben ir en otras secciones.
 * Se oculta el canvas con movimiento de espiral
 * Se oculta los btn de universo y juego
 */
function ocualtarElementos() {
  // Ocultar el canvas, el section, contenido actual y botones de jeugo y universo 3 al cargar contenido diferente
  document.getElementById("canvas").style.display = "none";
  document.getElementById("idSectionBtnFinales").style.display = "none";
  document.getElementById("idSection0").style.opacity = 0;
  document.querySelector(".contenido_cambiante").style.opacity = 0;
}

/**
 * Función que me permite mostrar el nuevo contenido que se desea cargar, dado que se hubiera dado clic en algun btn svg
 * Los nuevos html o contenidos se cargan dentro de un div con id contenido_cambiante
 * @param {*} data - Nombre dek html que se desea cargar dinamicamente
 */
function mostrarContenido(data) {
  const contenidoCambiante = document.querySelector(".contenido_cambiante");
  contenidoCambiante.innerHTML = data;
  contenidoCambiante.style.opacity = 1;
  history.pushState({}, '', `index.html`);
}

/**
 * Función que vuelve el display en none del loader inicialmente para que no salga.
 * @param {*} loaderContainer 
 */
function ocultarLoader(loaderContainer) {
  loaderContainer.style.display = "none";
  loaderContainer.remove();
}

/**
 * Función para mostrar algunos elementos en especifico, dado que se dio alguna de estas acciones.
 * Si se dio en inicio.html, debe de cargar la espiral del canvas y los btn de juego e inicio.
 * Si se dio clic en juego o universo se debe desplegar nuevamente los nuevos btn de jeugo y universo 
 * @param {*} archivo 
 */
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
    section0.style.opacity = 1;
    section0.style.display = "flex";
  }
  validarObejectHtml(archivo);
}

/**
 * Función que me permite obtener el alto del html que se esta cargando en el object, co el fin de ajusatr el alto del object
 * @param {bienvenidos.html, creandoConLira_y_Bongo.html,registraTuObra.html,universo.html} archivo archivo html que se esta llamando, no todos los html tiene html sino solo los de la lista.
 */
function validarObejectHtml(archivo){
  if(archivo === "bienvenidos.html" || archivo === "creandoConLira_y_Bongo.html" || archivo === "registraTuObra.html" || archivo === "universo.html"){
    var miObjeto = document.getElementById('idObjeto');

    // Esperar a que el contenido se cargue completamente
    miObjeto.onload = function() {
      // Obtener el documento dentro del objeto
      var contenidoDoc = miObjeto.contentDocument;
      
      // Obtener el elemento raíz dentro del documento del objeto
      var contenidoBody = contenidoDoc.body;

      // Obtener la altura del contenido
      var alturaContenido = contenidoBody.clientHeight;
      // Asignar la altura del contenido al objeto
      if(archivo === "registraTuObra.html"){
        alturaContenido += 210;
      }
      miObjeto.style.height = (alturaContenido) + 'px';
    };
    
  }
}

function pintarUniverso(archivo){
    let objectUniverso3 = document.querySelector('#svgObjectUniverso3');
    let svgUniverso3 = objectUniverso3.contentDocument;
    let objectUniverso2 = document.querySelector('#svgObjectUniverso2');
    let svgUniverso2 = objectUniverso2.contentDocument;
    pathSvg2Universo = svgUniverso2.querySelector('#idPath');
    pathSvg2Universo.classList.add("pintar2");

    if(archivo != "universo.html" ){
      pathAnterior.classList.remove("pintar2");
      pathAnterior.classList.add("pintar1");
    }

    
    pathAnterior = svgUniverso3.querySelector('#idPath');
    pathAnterior.classList.add("pintar2");
}

function pintarJuego(archivo) {
  let objectUniverso3 = document.querySelector('#svgObjectJuego3');
  let svgUniverso3 = objectUniverso3.contentDocument;
  let objectUniverso2 = document.querySelector('#svgObjectJuego2');
  let svgUniverso2 = objectUniverso2.contentDocument;
  pathSvg2Juego = svgUniverso2.querySelector('#idPath');
  pathSvg2Juego.classList.add("pintar2");

  // Si el archivo no es "juego.html", desvincula la clase "pintar2" del elemento anterior y agrega la clase "pintar1"
  if (archivo !== "juego.html") {
    pathAnterior.classList.remove("pintar2");
    pathAnterior.classList.add("pintar1");
  }
  
  pathAnterior = svgUniverso3.querySelector('#idPath');
  pathAnterior.classList.add("pintar2");
}

function despintarUniverso2Btn(){
  if (pathSvg2Universo) {
    pathSvg2Universo.classList.remove("pintar2");
    pathSvg2Universo.classList.add("pintar1");
    pathSvg2Universo = null;
  }
}

function despintarJuego2Btn(){
  if (pathSvg2Juego) {
    pathSvg2Juego.classList.remove("pintar2");
    pathSvg2Juego.classList.add("pintar1");
    pathSvg2Juego = null;
  }
}

// Función para despintar los botones iniciales y resetear los estilos
function despintarBtnIniciales() {
  let objectUniverso2 = document.querySelector('#svgObjectUniverso');
  let svgUniverso2 = objectUniverso2.contentDocument;
  let svUniverso1 = svgUniverso2.querySelector('#idPath');

  svUniverso1.classList.remove("pintar2");
  svUniverso1.classList.add("pintar1");

  let objectJuego1 = document.querySelector('#svgObjectJuego');
  let svgJuego1 = objectJuego1.contentDocument;
  let svJuego1 = svgJuego1.querySelector('#idPath');

  svJuego1.classList.remove("pintar2");
  svJuego1.classList.add("pintar1");

  despintarUniverso2Btn();

  despintarJuego2Btn();
 
}

// Función para pintar el botón del SVG especificado y despintar los botones iniciales
function pintarBtnSvg(path, archivo) {
  if (path !== pathAnterior) {
    if (pathAnterior) {
      pathAnterior.classList.remove("pintar2");
      pathAnterior.classList.add("pintar1");
      if(archivoAnterior = "Universo.html"){
        despintarUniverso2Btn();
      }
      if(archivoAnterior = "juego.html"){
        despintarJuego2Btn();
      }
    }
    path.classList.add("pintar2");
    pathAnterior = path;
    archivoAnterior = archivo;

    // Despinta los botones iniciales si existe si se va a inicio
    if (archivo == "inicio.html") {
      despintarBtnIniciales();  
    }
    
    // Pinta el universo o el juego según el archivo especificado
    if (archivo === "universo.html") {
      pintarUniverso(archivo);
    }
    if (archivo === "juego.html") {
      pintarJuego(archivo);
    }
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

        var elementPath = svgDocument.querySelectorAll(".elementoPintar");

        // Llama a la función cargarContenido con el archivo HTML como argumento
        cargarContenidoDesdeSVG(archivoHTML,elementPath[0]);
        pintarBtnSvg(elementPath[0], archivoHTML);
      };
    });
  });
});
