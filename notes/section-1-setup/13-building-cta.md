## Building CTA

make the div still read as an image with a role

```html
<div class="cta-img-box" role="img" aria-label="Women Enjoying Food"></div>
```

```css
.cta-img-box {
  background-image: linear-gradient(
      to right bottom,
      rgba(235, 150, 76, 0.35),
      rgba(230, 125, 34, 0.35)
    ), url("../img/eating.jpg");
  background-size: cover;
  background-position: center;
}
```

using complete input field with label

```html
<div>
  <label for="full-name">Full name</label>
  <input id="full-name" type="text" placeholder="Your name..." required />
</div>
```

[Next: Building Footer](./14-building-footer.md)
