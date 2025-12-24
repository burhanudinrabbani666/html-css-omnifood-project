## building Hero

instead of adding a border that contains additions size to our design. it's better to use a box shadow that is directed into the content.

```css
.btn--outline:hover,
.btn--outline:active {
  background-color: #fae5d3;

  /* border: 3px solid white; */

  /* To Add Border Inside */
  box-shadow: inset 0 0 0 3px #fff;
}
```

adding helper style, can reusable.

```css
.margin-right-sm {
  margin-right: 1.6rem !important;
}
```

[Next: Building Header](./04-building-header.md)
