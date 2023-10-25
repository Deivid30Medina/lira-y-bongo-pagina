$(document).ready(function(){
    // Carrusel 1
    $('#idCarruselPersonajesFotos').on('slid.bs.carousel', function (e) {
        var currentIndex = $(this).find('.carousel-item.active').index();
        // Obtén el carrusel 2 y cambia al mismo índice que el carrusel 1
        $('#idCarruselPersonajesInformacion').carousel(currentIndex);
        console.log("Carrusel 1: "+ currentIndex);
    });


    // Mostrar los botones de prev y next cuando se haga hover sobre los carruseles
    $('.carruselPersonajes').hover(function() {
        $(this).find('.btn1Prev, .btn1Next, .btn2Next').show();
    }, function() {
        $(this).find('.btn1Prev, .btn1Next, .btn2Next').show();
    });


});
