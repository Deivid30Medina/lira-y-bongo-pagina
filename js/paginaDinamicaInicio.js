// Obtener referencia al div de contenido dinámico
const contenidoDinamico = document.getElementById('contenido-dinamico');

// Manejar eventos load para Juego.html
document.getElementById('svgObjectJuego').addEventListener('load', function () {
    const svgDoc = this.contentDocument;
    svgDoc.documentElement.addEventListener('click', function () {
        const archivo = svgDoc.documentElement.getAttribute('data-archivo') || 'juego.html';
        
        // Ocultar el contenido principal
        document.querySelector('.classPrincipalInicio').style.display = 'none';

        // Cargar el nuevo contenido en el contenedor dinámico
        fetch(archivo)
            .then((response) => response.text())
            .then((data) => {
                // Actualizar el contenido dinámico
                contenidoDinamico.innerHTML = data;
                // Mostrar el contenido dinámico
                contenidoDinamico.style.display = 'block';
            });
    });
});
