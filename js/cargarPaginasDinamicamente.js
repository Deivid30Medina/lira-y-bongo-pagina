
//Validar que al momento de dar clic en una opcion de la hamburgesa menu esta se cierre.
  // Obtén la casilla de verificación y todos los elementos del menú
  const navCheck = document.querySelector('.classNavCheck');
  const menuButtons = document.querySelectorAll('.classbtnMenu');

  // Agrega un evento clic a cada botón del menú
  menuButtons.forEach(button => {
      button.addEventListener('click', () => {
          // Agrega un tiempo de espera de 500 milisegundos antes de desmarcar la casilla de verificación
          setTimeout(() => {
              navCheck.checked = false;
          }, 1000); // Ajusta el tiempo de espera según tus necesidades
      });
  });
// Fin Validación


// Cargar el contenido de "inicio.html" al cargar la página
window.addEventListener('load', function () {
    cargarContenido('inicio.html');
  });

//Cargar Dinamicamente html al dar clic en una opción dle menu
  function cargarContenido(archivo) {
      // Oculta el contenido actual
      document.querySelector('.contenido_cambiante').style.opacity = 0;
      setTimeout(function () {
        // Carga el nuevo contenido
        fetch(archivo)
          .then((response) => response.text())
          .then((data) => {
            // Actualiza el contenido
            document.querySelector('.contenido_cambiante').innerHTML = data;

            // Muestra el contenido con una animación
            document.querySelector('.contenido_cambiante').style.opacity = 1;
          });
      }, 1000); // Ajustar el tiempo de carga html
    }
// Fin cargar paginas .html



function cargarContenidoDesdeSVG(archivo) {
  // Obtener una referencia al div del main
  const mainDiv = document.querySelector('.classMainPagina');

  // Crear el div del loader dinámicamente
  const loaderContainer = document.createElement('div');
  loaderContainer.id = 'idLoader';
  loaderContainer.className = 'container';

  // Crear el div del loader
  const loaderElement = document.createElement('div');
  loaderElement.id = 'idLoader2';
  loaderElement.className = 'loader';

  // Crear el párrafo del mensaje
  const messageElement = document.createElement('p');
  messageElement.id = 'idloader3';
  messageElement.className = 'message';
  messageElement.textContent = 'Cargando...';

  // Agregar el div del loader y el párrafo al contenedor del loader
  loaderContainer.appendChild(loaderElement);
  loaderContainer.appendChild(messageElement);

  // Agregar el contenedor del loader al main
  mainDiv.appendChild(loaderContainer);

  // Ocultar el canvas y el section al cargar contenido diferente
  document.getElementById('canvas').style.display = 'none';
  document.getElementById('idSectionBtnFinales').style.display = 'none';

  // Ocultar el contenido actual
  document.querySelector('.contenido_cambiante').style.opacity = 0;

  //Desmarcar contenido del menuHamburguesa
  const hamburgesa = document.getElementById('menu');
  hamburgesa.checked = false;

  // Aplicar estilos para centrar el loader
  loaderContainer.style.display = 'flex';
  loaderContainer.style.alignItems = 'start';
  loaderContainer.style.justifyContent = 'center';
  loaderContainer.style.position = 'absolute'; // Posición absoluta
  loaderContainer.style.width = '100%'; // Ancho completo
  loaderContainer.style.top = '50%'; // Parte superior del main

  setTimeout(function () {
    // Cargar el nuevo contenido
    fetch(archivo)
      .then((response) => response.text())
      .then((data) => {

        
        // Actualizar el contenido
        document.querySelector('.contenido_cambiante').innerHTML = data;

        // Mostrar el contenido con una animación
        document.querySelector('.contenido_cambiante').style.opacity = 1;

        // Ocultar y eliminar el div del loader cuando la carga esté completa
        loaderContainer.style.display = 'none';
        loaderContainer.remove();

        // Mostrar el canvas solo cuando se vuelve a la página principal
        if (archivo === 'inicio.html') {
          document.getElementById('canvas').style.display = 'block';
          document.getElementById('idSectionBtnFinales').style.display = 'flex';
        }
      });
  }, 2000); // Ajustar el tiempo de carga HTML
}



// Manejar eventos load para Inicio.html
function manejarEventosLoad() {
  // Escuchar el evento load del objeto <object> para el SVG de Inicio
  document.getElementById('svgObjectInicio').addEventListener('load', function () {
      const svgDoc = this.contentDocument;
      svgDoc.documentElement.addEventListener('click', function () {
          const archivo = svgDoc.documentElement.getAttribute('data-archivo') || 'inicio.html';
          cargarContenidoDesdeSVG(archivo);
      });
  });

  // Escuchar el evento load del objeto <object> para bienvenidos.html
  document.getElementById('svgObjectBienvenido').addEventListener('load', function () {
      const svgDoc = this.contentDocument;
      svgDoc.documentElement.addEventListener('click', function () {
          const archivo = svgDoc.documentElement.getAttribute('data-archivo') || 'bienvenidos.html';
          cargarContenidoDesdeSVG(archivo);
      });
  });

  // Escuchar el evento load del objeto <object> para RegistrarObra.html
  document.getElementById('svgObjectRegistraObra').addEventListener('load', function () {
    const svgDoc = this.contentDocument;
    svgDoc.documentElement.addEventListener('click', function () {
        const archivo = svgDoc.documentElement.getAttribute('data-archivo') || 'registraTuObra.html';
        cargarContenidoDesdeSVG(archivo);
    });
  });
  
  // Escuchar el evento load del objeto <object> para Sobre el proyecto
  document.getElementById('svgObjectProyecto').addEventListener('load', function () {
    const svgDoc = this.contentDocument;
    svgDoc.documentElement.addEventListener('click', function () {
        const archivo = svgDoc.documentElement.getAttribute('data-archivo') || 'sobreElProyecto.html';
        cargarContenidoDesdeSVG(archivo);
    });
  });

  // Escuchar el evento load del objeto <object> para CreandoLiraBongo
  document.getElementById('svgObjectLiraBongo').addEventListener('load', function () {
    const svgDoc = this.contentDocument;
    svgDoc.documentElement.addEventListener('click', function () {
        const archivo = svgDoc.documentElement.getAttribute('data-archivo') || 'creandoConLira_y_Bongo.html';
        cargarContenidoDesdeSVG(archivo);
    });
  });

  // Escuchar el evento load del objeto <object> para descargarLibro
  document.getElementById('svgObjectPDF').addEventListener('load', function () {
    const svgDoc = this.contentDocument;
    svgDoc.documentElement.addEventListener('click', function () {
        const archivo = svgDoc.documentElement.getAttribute('data-archivo') || 'libro.html';
        cargarContenidoDesdeSVG(archivo);
    });
  });

  // Escuchar el evento load del objeto <object> para Juego
  document.getElementById('svgObjectJuego').addEventListener('load', function () {
    const svgDoc = this.contentDocument;
    svgDoc.documentElement.addEventListener('click', function () {
        const archivo = svgDoc.documentElement.getAttribute('data-archivo') || 'juego.html';
        cargarContenidoDesdeSVG(archivo);
    });
  });

  // Escuchar el evento load del objeto <object> para Universo
  document.getElementById('svgObjectUniverso').addEventListener('load', function () {
    const svgDoc = this.contentDocument;
    svgDoc.documentElement.addEventListener('click', function () {
        const archivo = svgDoc.documentElement.getAttribute('data-archivo') || 'universo.html';
        cargarContenidoDesdeSVG(archivo);
    });
  });

}

// Llamar a la función para manejar eventos load
manejarEventosLoad();


