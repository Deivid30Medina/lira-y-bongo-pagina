//Departamentos al darle un clic.	
const open1 = document.getElementById('OPEN12');

//Boton de vovler en el popup
const volver = document.getElementById('idPopupVolver');


//Venta PopUp que se mostrara.
    const popup1 = document.getElementById('idPopupBogota');
	const popup2 = document.getElementById('Cesar');
	const popup3 = document.getElementById('NortSant');
	const popup4 = document.getElementById('Risaralda');
	const popup5 = document.getElementById('Vichada');
	const popup6 = document.getElementById('Caqueta');
	const popup7 = document.getElementById('Arauca');
	const popup8 = document.getElementById('Casanare');
	const popup9 = document.getElementById('Guainia');
	const popup10 = document.getElementById('Guaviare');
	const popup11 = document.getElementById('Vaupes');
	const popup12 = document.getElementById('Putumayo');
	const popup13 = document.getElementById('Amazonas');
	const popup14 = document.getElementById('Antioquia');
	const popup15 = document.getElementById('Atlantico');
	const popup16 = document.getElementById('Bolivar');
	const popup17 = document.getElementById('Santander');
	const popup18 = document.getElementById('Cundinamarca');
	const popup19 = document.getElementById('Magdalena');
	const popup20 = document.getElementById('Cordoba');
	const popup21 = document.getElementById('Boyaca');
	const popup22 = document.getElementById('Tolima');
	const popup23 = document.getElementById('Cauca');
	const popup24 = document.getElementById('Nariño');
	const popup25 = document.getElementById('Huila');
	const popup26 = document.getElementById('Guajira');
	const popup27 = document.getElementById('Sucre');
	const popup28 = document.getElementById('Quindio');
	const popup29 = document.getElementById('Caldas');
	const popup30 = document.getElementById('Meta');
	const popup31 = document.getElementById('ValleCauca');
	const popup32 = document.getElementById('SanAndres');

//Button Cerrar de la ventana PopUp



//Evento para mostrar el Popup
open1.addEventListener('click', () => {
    popup1.classList.add('show');
});

//Evento para Ocultar el Popup
volver.addEventListener('click', () => {
    popup1.classList.remove('show');
});


