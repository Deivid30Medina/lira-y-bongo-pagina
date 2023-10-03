$(document).ready(function () {
    // código de Slick Carousel aquí
    $('.classCarrusel').slick({
      dots: false,        //Activar/Desactivar los puntos de posicion de la galeria
      infinite: true,     //Activar/Desactivar sí el movimiento del carrusel sea inifinito
      autoplay: true,     //Activar/Desactivar el movimiento automatico del carrusel
      autoplaySpeed: 3000, // Cambia las diapositivas cada 3 segundos
      speed: 800,         //Definir la velocidad de movimiento de el carrusel (Ojo, no confundir con el tiempo en el que tarda en moverse)
      slidesToShow: 3,    //Cantidad de imagenes o enlaces que queremos que se muestre en el carrusel
      slidesToScroll: 1,  // Cantidad de imagenes o enlaces que se moveran en el carrusel
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  });