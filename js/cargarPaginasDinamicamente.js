
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
  // Ocultar el canvas al cargar contenido diferente
  document.getElementById('canvas').style.display = 'none';

  // Ocultar el contenido actual
  document.querySelector('.contenido_cambiante').style.opacity = 0;

  setTimeout(function () {
    // Cargar el nuevo contenido
    fetch(archivo)
      .then((response) => response.text())
      .then((data) => {
        // Actualizar el contenido
        document.querySelector('.contenido_cambiante').innerHTML = data;

        // Mostrar el contenido con una animación
        document.querySelector('.contenido_cambiante').style.opacity = 1;

        // Mostrar el canvas solo cuando se vuelve a la página principal
        if (archivo === 'inicio.html') {
          document.getElementById('canvas').style.display = 'block';
        }
      });
  }, 1000); // Ajustar el tiempo de carga HTML
}

// Manejar eventos load para varios elementos SVG
function manejarEventosLoad() {
  // Escuchar el evento load del objeto <object> para el SVG de Inicio
  document.getElementById('svgObjectInicio').addEventListener('load', function () {
      const svgDoc = this.contentDocument;
      svgDoc.documentElement.addEventListener('click', function () {
          const archivo = svgDoc.documentElement.getAttribute('data-archivo') || 'inicio.html';
          cargarContenidoDesdeSVG(archivo);
      });
  });

  // Escuchar el evento load del objeto <object> para el otro SVG
  document.getElementById('svgObjectBienvenido').addEventListener('load', function () {
      const svgDoc = this.contentDocument;
      svgDoc.documentElement.addEventListener('click', function () {
          const archivo = svgDoc.documentElement.getAttribute('data-archivo') || 'bienvenidos.html';
          cargarContenidoDesdeSVG(archivo);
      });
  });

  // Escuchar el evento load del objeto <object> para el otro SVG
  document.getElementById('svgObjectRegistraObra').addEventListener('load', function () {
    const svgDoc = this.contentDocument;
    svgDoc.documentElement.addEventListener('click', function () {
        const archivo = svgDoc.documentElement.getAttribute('data-archivo') || 'registraTuObra.html';
        cargarContenidoDesdeSVG(archivo);
    });
  });
  
  // Escuchar el evento load del objeto <object> para el otro SVG
  document.getElementById('svgObjectProyecto').addEventListener('load', function () {
    const svgDoc = this.contentDocument;
    svgDoc.documentElement.addEventListener('click', function () {
        const archivo = svgDoc.documentElement.getAttribute('data-archivo') || 'sobreElProyecto.html';
        cargarContenidoDesdeSVG(archivo);
    });
  });

  // Escuchar el evento load del objeto <object> para el otro SVG
  document.getElementById('svgObjectLiraBongo').addEventListener('load', function () {
    const svgDoc = this.contentDocument;
    svgDoc.documentElement.addEventListener('click', function () {
        const archivo = svgDoc.documentElement.getAttribute('data-archivo') || 'creandoConLira_y_Bongo.html';
        cargarContenidoDesdeSVG(archivo);
    });
  });
}

// Llamar a la función para manejar eventos load
manejarEventosLoad();