## Smaller tablets

start making a grid into 2 parts and tidy up the cards that have writing starting in 2 lines

```css
@media (max-width: 44em) {
  .grid--3-col,
  .grid--4-col {
    grid-template-columns: 1fr 1fr;
  }

  .diets {
    grid-column: 1 /-1;
    justify-self: center;
  }

  .heading-secondary {
    margin-bottom: 4.8rem;
  }

  .pricing-plan {
    width: 100%;
  }

  .grid--footer {
    grid-template-columns: repeat(6, 1fr);
  }

  .logo-col,
  .address-col {
    grid-column: span 3;
  }

  .nav-col {
    grid-row: 1;
    grid-column: span 2;

    margin-bottom: 3.2rem;
  }
}
```

[Next: Responding to phones](./07-responding-to-phones.md)
