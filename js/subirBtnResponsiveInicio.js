// Función para ajustar el estilo según el ancho de la pantalla
function ajustarEstilo() {
    // Obtener el ancho de la pantalla
    var anchoPantalla = window.innerWidth;

    // Calcular el valor de 'bottom' basado en el ancho de la pantalla
    var nuevoBottom = -95 - Math.floor((anchoPantalla - 500) / 10) * 5;

    // Obtener el elemento con la clase .classBtnSvgUniverso
    var elemento = document.querySelector('.classBtnSvgUniverso');

    // Modificar el estilo del elemento
    elemento.style.bottom = nuevoBottom + '%';
}

// Llamar a la función al cargar la página y cuando se redimensiona la ventana
window.onload = ajustarEstilo;
window.onresize = ajustarEstilo;
