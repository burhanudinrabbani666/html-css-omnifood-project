## Implement navigation sticky

```js
// Stickt navigation
const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false)
      document.querySelector("body").classList.add("sticky");

    if (ent.isIntersecting === true)
      document.querySelector("body").classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: `-80px`,
  }
);
obs.observe(sectionHeroEl);
```

[Next: browser support](./05-browser-support.md)
