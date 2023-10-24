// Lista de comentarios     ,{color:"", nombre:"", cargo: "", fecha: "", comentario: ""}
const comentarios = [
    { color: '#ffae01', nombre: 'Daren Tang', cargo: 'Director General de la Organización Mundial de la Propiedad Intelectual OMPI', fecha: '', comentario: 'Felicito a la DNDA por su iniciativa y a los autores por su creatividad. Considero que esta herramienta interactiva es valiosa para promover la propiedad intelectual en los jóvenes. Además, agradezco a la DNDA por crear un código QR y el audiolibro el cual facilita el acceso a los niños con discapacidad visual.' }
    ,{ color: '#ff8000', nombre: 'Edgar Mellan', cargo: 'Lector', fecha: '6 diciembre 2022', comentario: 'Felicitaciones por apoyar a los niños y jóvenes compositores y creadores, Dios los bendiga siempre.' }
    ,{ color: '#ff3402', nombre: 'Patricia Liévano', cargo: 'Lectora', fecha: '12 diciembre 2022', comentario: 'Felicitaciones por esta labor tan bella, felicitaciones a cada uno de los que han realizado esta publicación. Soy autora del pequeño libro las aventuras del espíritu. Mi intención es publicar mi trabajo reciente para niños.'}
    ,{color:"#f5014f", nombre:"Luz María Piedrahita", cargo: "Escultora", fecha: "29 noviembre 2022", comentario: "¡Que bien! Aplaudo esta idea hecha realidad. Muy importante que desde la infancia se respete el Derecho de Autor  y los niños sepan que su creatividad vale y no me refiero a solo el valor material sino a la importancia del valor intelectual."}
    ,{color:"#c50171", nombre:"Rosalba Salazar Gallo", cargo: "Escritora", fecha: "28 noviembre 2022", comentario: "La Cartilla me  parece divina, felicitaciones y que herramienta tan útil para apropiar el conocimiento."}
];

// Contenedor del carrusel
const carruselContainer = document.getElementById('carruselContainer');

// Función para crear elementos de comentario
function crearComentario(comentario) {
    const itemCarrusel = document.createElement('div');
    itemCarrusel.className = 'ItemCarrusel';

    const classItemCarrusel = document.createElement('div');
    classItemCarrusel.className = `classItemCarrusel classColorTop`;
    classItemCarrusel.style.backgroundColor = comentario.color;
    

    const classUserCarrusel = document.createElement('div');
    classUserCarrusel.className = 'classUserCarrusel';

    const datosUserCarrusel = document.createElement('div');
    datosUserCarrusel.className = 'classDatosUserCarrusel';

    const nombreUserCarrusel = document.createElement('p');
    nombreUserCarrusel.className = 'classNombreUserCarrusel';
    nombreUserCarrusel.textContent = comentario.nombre;

    const datosFechaUserCarrusel = document.createElement('div');
    datosFechaUserCarrusel.className = 'classDatosFechaUserCarrusel';

    const cargoCarrusel = document.createElement('p');
    cargoCarrusel.className = 'classCargoCarrusel';
    cargoCarrusel.textContent = comentario.cargo;

    const fechaComentarioCarrusel = document.createElement('p');
    fechaComentarioCarrusel.className = 'classFechaComentarioCarrusel';
    fechaComentarioCarrusel.textContent = comentario.fecha;

    const comentarioCarrusel = document.createElement('div');
    comentarioCarrusel.className = 'classComentarioUserCarrusel';

    const comentarioText = document.createElement('p');
    comentarioText.className = 'classComentarioCarrusel';
    comentarioText.textContent = comentario.comentario;

    // Construir la estructura del comentario
    datosFechaUserCarrusel.appendChild(cargoCarrusel);
    datosFechaUserCarrusel.appendChild(fechaComentarioCarrusel);

    datosUserCarrusel.appendChild(nombreUserCarrusel);
    datosUserCarrusel.appendChild(datosFechaUserCarrusel);

    comentarioCarrusel.appendChild(comentarioText);

    classUserCarrusel.appendChild(datosUserCarrusel);
    classUserCarrusel.appendChild(comentarioCarrusel);

    classItemCarrusel.appendChild(classUserCarrusel);
    itemCarrusel.appendChild(classItemCarrusel);

    return itemCarrusel;
}

// Crear elementos de comentarios y añadirlos al contenedor
comentarios.forEach(comentario => {
    carruselContainer.appendChild(crearComentario(comentario));
});