document.getElementById("svgBtnDescargarPDF").addEventListener("load", function() {
    var svgDoc = this.contentDocument; // Accede al documento SVG dentro del objeto
    // Agrega un evento de clic al elemento SVG
    svgDoc.getElementById("Capa_1").addEventListener("click", function() {
        // Crea un enlace de descarga
        var downloadLink = document.createElement('a');
        downloadLink.href = "assets/pdf/libro/LirayBongoenbusquedadelbordondelosDerechosPatrimoniales.pdf";
        downloadLink.download = "Lira-y-Bongo-en-busca-del-bordon-de-los-Derechos-Patrimoniales.pdf"; // Nombre del archivo que se descargará
        downloadLink.click(); // Simula un clic en el enlace para descargar el archivo
        type="text/javascript"
        src="https://counter8.optistats.ovh/private/counter.js?c=md3kysqrqtk23stbd9kaer9e45h17mw9&down=async"
        async
    });
    
});
