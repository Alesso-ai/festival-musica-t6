document.addEventListener("DOMContentLoaded", function () {
  iniciarApp();
});

function iniciarApp() {
  scrollNav();
  navegacionFija();
  crearGaleria();
  mostrarImagen();
}

function navegacionFija() {
  const barra = document.querySelector(".header");
  const sobreFestival = document.querySelector(".sobre-festival");
  const body = document.querySelector("body");

  window.addEventListener("scroll", function () {
    //Si el usuario ha hecho scroll hacia abajo lo suficiente como para que llegue
    // a la seccion sobre festival que suceda algo
    if (sobreFestival.getBoundingClientRect().bottom < 0) {
      barra.classList.add("fijo");
      body.classList.add("body-scroll");
    } else {
      barra.classList.remove("fijo");
      body.classList.remove("body-scroll");
    }
  });
}

function scrollNav() {}

function crearGaleria() {}

function mostrarImagen(id) {}
