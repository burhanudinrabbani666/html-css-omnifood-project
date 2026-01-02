## Mobile navigation

It's a bit complicated because you have to add a lot of CSS properties to many elements.

The main example is in the HTML and body sections, where you need to add the overflow property to create a mobile navigation bar that doesn't break the layout. Then, for the navigation bar, you need to make it a column and add an icon for the menu display.

```css
html {
  /* Default font sze : 16px */
  /* font-size: 10px; */
  /* 10px / 16px = 0.265 = 62.5% */
  /* Percentage of user browser font-size */

  font-size: 62.5%;
  overflow-x: hidden;
}

body {
  font-family: "Rubik", sans-serif;
  line-height: 1;
  font-weight: 400;
  color: #1a1a1a;
  overflow-x: hidden;
}
```

```css
/* Mobile navigation */
/* media query 59em */

.btn-mobile-nav {
  display: block;
}

.main-nav {
  background-color: rgb(255, 255, 255);
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100vh;
  transform: translateX(100%);

  display: flex;
  justify-content: center;

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

  margin-top: 8rem;
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

[Next: responding-sammler-tablets](./06-responding-sammler-tablets.md)
