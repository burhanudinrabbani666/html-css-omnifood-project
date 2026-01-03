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

// Implement smooth scrolling
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const href = link.getAttribute("href");
    // console.log(href);

    // Scrool back
    href === "#" && window.scrollTo({ top: 0, behavior: "smooth" });

    // scroll to another link
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // close navigation
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

// Stickt navigation
const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false)
      document.querySelector("body").classList.add("sticky");

    if (ent.isIntersecting === true)
      document.querySelector("body").classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: `-80px`,
  }
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js
