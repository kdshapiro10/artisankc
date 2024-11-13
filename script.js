const navEl = document.querySelector(".nav");
const hamburgerEl = document.querySelector(".hamburger");
const mainInfo = document.getElementById("main-info");


hamburgerEl.addEventListener("click", () => {
    navEl.classList.toggle(".nav--open");
    hamburgerEl.classList.toggle("hamburger--open");
    mainInfo.classList.add("main-info");

});

navEl.addEventListener("click", () => {
    navEl.classList.remove(".nav--open");
    hamburgerEl.classList.remove("hamburger--open");
    mainInfo.classList.remove("main-info");
   
});