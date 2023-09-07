const nav = document.querySelector("#idNav");
const abrir = document.querySelector("#idAbrirMenu");
const cerrar = document.querySelector("#idCerrarMenu");

abrir.addEventListener("click", () =>{
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () =>{
    nav.classList.remove("visible");
})