
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
          }, 500); // Ajusta el tiempo de espera según tus necesidades
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
      }, 500); // Ajustar el tiempo de espera según las necesidades
    }
// Fin cargar paginas .html