## Reusable Grid

the concept is to create a helper class that we can put in the html element that we will display in the grid

```css
.container {
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 3.2rem;
}

.grid {
  display: grid;
  gap: 9.6rem;
}

.grid--2-col {
  grid-template-columns: repeat(2, 1fr);
}

.grid--4-col {
  grid-template-columns: repeat(4, 1fr);
}
```

[Next: How it Work](./07-building-hoe-it-work.md)
