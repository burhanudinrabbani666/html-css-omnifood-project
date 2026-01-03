## Implement Smooth Scrooling

To add smooth scrolling, we first need to add an ID to each section included in the navigation. This ID will then be passed to JavaScript to retrieve the section via the DOM. Don't forget to also provide logic for closing the menu after clicking the navigation.

```js
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
```

package for safari browser. because safari browser is a bit different from chrome or firefox or others

```html
<script
  defer
  src="https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js"
></script>
```

[Next: Implement sticky navigation](./04-implement-sticky-navigation.md)
