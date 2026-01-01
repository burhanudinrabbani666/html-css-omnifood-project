## Responding tablets

When entering a mobile device, it is recommended to start reducing the font size globally. Therefore, from the start, you should use a flexible font size such as rem.

```css
/* -------------------------*/
/* Bellow 1200px - Landscapes Tablet*/
/* -------------------------*/
@media (max-width: 75em) {
  html {
    /* font-size: 40%; */

    font-size: 56.25%;
  }

  .header {
    padding: 0 3.2rem;
  }

  .grid {
    column-gap: 4.8rem;
    row-gap: 6.4rem;
  }

  .heading-secondary {
    font-size: 3.6rem;
  }

  .heading-tertiary {
    font-size: 2.4rem;
  }

  .main-nav-list {
    gap: 3.2rem;
  }

  .hero {
    gap: 4.8rem;
  }

  .testimonial-container {
    padding: 9.6rem 3.2rem;
  }
}
```

start also to make one line layout

```css
/* -------------------------*/
/* Bellow 900px - Tablet*/
/* -------------------------*/
@media (max-width: 59em) {
  html {
    /* 8px / 16px = 0.5 */
    font-size: 50%;
  }

  .hero {
    grid-template-columns: 1fr;
    padding: 0 12rem;
    gap: 6.4rem;
  }

  .hero-text-box,
  .hero-img-box {
    text-align: center;
  }

  .deliver-meals {
    justify-content: center;
    margin-top: 3.2rem;
  }

  .hero-img {
    width: 60%;
  }

  .logos img {
    height: 2.4rem;
  }

  .step-number {
    font-size: 7.4rem;
  }

  .meal-content {
    padding: 2.4rem 3.2rem 3.2rem;
  }

  .section-testimonials {
    grid-template-columns: 1fr;
  }

  .gallery {
    grid-template-columns: repeat(6, 1fr);
  }

  .cta {
    grid-template-columns: 3fr 2fr;
  }

  .cta-form {
    grid-template-columns: 1fr;
  }

  .btn--form {
    margin-top: 1.2rem;
  }
}
```

[](./04-responding-tablets.md)
