## Responding Phones

for the size of the smartphone screen, it is better to grid only one line

```css
/* -------------------------*/
/* Bellow 550px - Phone ----*/
/* -------------------------*/

@media (max-width: 34em) {
  .grid--2-col,
  .grid--3-col,
  .grid--4-col {
    grid-template-columns: 1fr;
  }

  .btn,
  .btn:link,
  .btn:visited {
    padding: 2.4rem 1.6rem;
  }

  .hero {
    padding: 0 3.2rem;
  }

  .section-hero {
    background-color: #fae5d3;

    padding: 2.4rem 0 6.4rem 0;
  }

  .hero-img {
    width: 100%;
  }

  .logos img {
    height: 1.2rem;
  }

  .step-img-box:nth-child(2) {
    grid-row: 1;
  }

  .step-img-box:nth-child(6) {
    grid-row: 5;
  }

  .step-img-box {
    transform: translateY(2.4rem);
  }

  .testimonials {
    grid-template-columns: 1fr;
  }

  .gallery {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.2rem;
  }

  .cta {
    grid-template-columns: 1fr;
  }

  .cta-text-box {
    padding: 3.2rem;
  }

  .cta-img-box {
    height: 32rem;
    grid-row: 1;
  }
}
```

[Next: Implement JavaScript](../section-3-javascript/)
