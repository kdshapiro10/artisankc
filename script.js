const navEl = document.querySelector(".nav");
const hamburgerEl = document.querySelector(".hamburger");
const mainEl = document.getElementById("main-info");

hamburgerEl.addEventListener("click", () => {
    navEl.classList.toggle("nav--open");
    hamburgerEl.classList.toggle("hamburger--open");
    mainEl.classList.add("main-info");
});

navEl.addEventListener("click", () => {
    navEl.classList.remove("nav--open");
    hamburgerEl.classList.remove("hamburger--open");
    mainEl.classList.remove("main-info");
});