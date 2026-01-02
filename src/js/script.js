// Set Current Year
const yearEl = document.querySelector(".year");
const getYear = new Date().getFullYear();
yearEl.textContent = getYear;

// Set Mobile Navigation
const menuEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

menuEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});
