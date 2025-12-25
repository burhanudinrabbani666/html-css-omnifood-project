## Building

Use Header as container of the nav.

```html
<header class="header">
  <img src="/img/omnifood-logo.png" alt="Omnifoos Logo" class="logo" />
  <nav class="main-nav">Navigation</nav>
</header>
```

for styling, make the height have some fix height so its make the element still good as navigation container when becoming sticky

```css
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fae5d3; /* Make height fix for sticky */
  height: 9.6rem;
  padding: 0 4.8rem;
}
```

[Next: Building Nav](./05-building-nav.md)
