document.getElementById("svgBtnOpinion").addEventListener("load", function() {
    var svgDoc = this.contentDocument; // Accede al documento SVG dentro del objeto

    // Agrega un evento de clic al elemento SVG
    svgDoc.getElementById("Capa_1").addEventListener("click", function() {
        // Redirige al usuario a la URL deseada
        window.open( "https://docs.google.com/forms/d/e/1FAIpQLScqiX3V7tvZYl-azWrQ0c1aScFdhTrnI-dEGCPvPIvVi8ECWw/viewform");
    });
});
