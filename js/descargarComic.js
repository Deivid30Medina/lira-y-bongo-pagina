document.getElementById("svgBtnDescargarPDF").addEventListener("load", function() {
    var svgDoc = this.contentDocument; // Accede al documento SVG dentro del objeto
    // Agrega un evento de clic al elemento SVG
    svgDoc.getElementById("Capa_1").addEventListener("click", function() {
        // Crea un enlace de descarga
        var downloadLink = document.createElement('a');
        downloadLink.href = "assets/pdf/libro/Lira-y-Bongo-en-busqueda-del-bordon-de-los-Derechos-Patrimoniales.pdf";
        downloadLink.download = "Lira y Bongó en búsqueda del bordón de los Derechos Patrimoniales. RASTERIZADOpdf_compressed.pdf"; // Nombre del archivo que se descargará
        downloadLink.click(); // Simula un clic en el enlace para descargar el archivo
    });
    
});
