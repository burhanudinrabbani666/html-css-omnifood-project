## Making mobile navigation

```js
// Set Mobile Navigation
const menuEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

menuEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});
```

```css
.btn-mobile-nav {
  display: block;
  z-index: 999;
}

.main-nav {
  background-color: rgb(255, 255, 255);
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100dvh;
  transform: translateX(100%);

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 1s;

  /* Hide Navigation */
  /* Not allows transition */
  /* display: none; */

  /* 1. Hide the element */
  opacity: 0;

  /* 2. Make it unaccessable */
  pointer-events: none;

  /* 3. Hide it from screen reader */
  visibility: hidden;
}

.main-nav-list {
  flex-direction: column;
  gap: 4.8rem;
}

.main-nav-link:link,
.main-nav-link:visited {
  font-size: 3rem;
}

.nav-open .main-nav {
  opacity: 1;
  pointer-events: auto;
  visibility: visible;

  transform: translateX(0);
}

.nav-open .btn-mobile-nav ion-icon[name="close-outline"] {
  display: block;
}

.nav-open .btn-mobile-nav ion-icon[name="menu-outline"] {
  display: none;
}
```

[Next: Implement Smooth scrolling](./03-implement-smooth-scrolling.md)
