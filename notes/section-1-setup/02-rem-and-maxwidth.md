## How rem and max-widht

### Max-width

The max-width CSS property sets the maximum width of an element. It prevents the used value of the width property from becoming larger than the value specified by max-width.

```css
.test {
  /*width: 1000px; */

  max-width: 1000px;
  background-color: red;
  padding: 100px;
}
```

### Rem

rem is a size based on the user's default font size. In this project, the default was changed from 16px to 10px, but in an uncertain way. Instead, it uses a more flexible percentage method.

```css
html {
  /* Default font sze : 16px */
  /* font-size: 10px; */
  /* 10px / 16px = 0.265 = 62.5% */
  /* Percentage of user browser font-size */

  font-size: 62.5%;
}
```

That way, if you use the size rem, all the systems will match the size with the font size, which will keep the design in the same position.

[Next: building hero](./03-building-hero.md)
