## Responding to small laptops

jangan gunakan px untuk menentukan ukuran breakpoint layar, melainkan gunakan em yang lebih fleksibel

```css
/*  rem and em ddo NOT depend on html font size in media query!
    Instead, 1rem = 1em = 16px */

/* -------------------------*/
/* Bellow 1344px - Small desktop*/
/* -------------------------*/
@media (max-width: 84em) {
  .hero {
    max-width: 120rem;
  }

  .heading-primary {
    font-size: 4.4rem;
  }

  .gallery {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

[Next: Responding to tablet](./04-responding-tablets.md)
