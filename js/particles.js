// Esta función se ejecuta cuando la página se carga completamente
window.onload = function() {
    var fps = 30; // Velocidad de fotogramas por segundo

    // Configuración inicial de las partículas
    var settings = {
        angulo: 80,       // Ángulo inicial de las partículas en grados
        wow: 35,           // Control de velocidad de rotación de las partículas en sus órbitas
        omg: 0.35,         // Control de velocidad de cambio del ángulo de las partículas en sus órbitas
        spartaX: 1,       // Control de la forma en que las partículas se mueven en el eje X
        spartaY: 1,       // Control de la forma en que las partículas se mueven en el eje Y
        height: 2,        // Altura de las órbitas de las partículas
        width: 2          // Ancho de las órbitas de las partículas
    };

    // Obtiene el elemento canvas y su contexto
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var width = canvas.width = window.innerWidth;
    var height = canvas.height = window.innerHeight;

    // Función para generar un número aleatorio
    function random(max) {
        return ~~(Math.random() * max);
    }

    // Constructor de partículas
    function Particle(x, y, radio, angulo, orbita) {
        this.x = x
        this.y = y
        this.radio = radio
        this.angulo = angulo * (Math.PI / 180)
        this.orbita = orbita
    }

    // Array que contendrá las partículas
    var particulas = [];

    // Inicializa el array de partículas con valores aleatorios
    for (var i = 0; i < 1000; i++) {
        particulas.push(new Particle(0, 0, 2, 0, i))
    }

    // Función para actualizar las posiciones de las partículas en cada fotograma
    function run() {
        settings.angulo += 1

        for (var i = 0; i < particulas.length; i++) {
            particulas[i].angulo = settings.angulo * (Math.PI / 180)
            particulas[i].angulo = settings.angulo * (Math.PI / 180)
            particulas[i].x = Math.cos((particulas[i].angulo * settings.omg + particulas[i].orbita * settings.wow) * settings.spartaX) * particulas[i].orbita / settings.width + width / 2
            particulas[i].y = Math.sin((particulas[i].angulo * settings.omg + particulas[i].orbita * settings.wow) * settings.spartaY) * particulas[i].orbita / settings.height + height / 2
        }
    }

    // Función para dibujar las partículas en el canvas
    function paint(ctx) {
        // Cambia el color de fondo del canvas 
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, width, height);

        ctx.globalCompositeOperation = "source-over";
        ctx.globalAlpha = 0.4;

        // Cambia el color de las partículas 
        ctx.fillStyle = "blue";

        ctx.globalCompositeOperation = "source-over";
        for (var i = 0; i < particulas.length; i++) {
            ctx.fillRect(particulas[i].x, particulas[i].y, particulas[i].radio, particulas[i].radio);
        }
    }

    // Establece el color de fondo del canvas
    context.fillStyle = "#000";
    context.fillRect(0, 0, width, height);

    // Bucle principal de animación
    function gameloop() {
        setTimeout(function() {
            requestAnimationFrame(gameloop);
            run()
            paint(context);
        }, 1000 / fps);
    }

    // Comenta o elimina las líneas relacionadas con dat.gui si no deseas la interfaz de usuario
    /*
    var gui = new dat.GUI();
    gui.add(settings, 'angulo', 0, 360).listen();
    gui.add(settings, 'wow', 0, 100);
    gui.add(settings, 'omg', 0, 2);
    gui.add(settings, 'spartaX', 1, 20);
    gui.add(settings, 'spartaY', 1, 20);
    gui.add(settings, 'height', 2, 50);
    gui.add(settings, 'width', 2, 50);
    */

    // Inicia el bucle de animación
    gameloop();
}