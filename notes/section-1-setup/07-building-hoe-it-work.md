## Building How it works

Creating effect bellow image using shudo class after and before

![psuedo class](/img/shudo-class-css.png)

```css
.step-img-box::before,
.step-img-box::after {
  content: "";
  display: block;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}

.step-img-box::before {
  width: 60%;
  /* height: 60%; */

  /* 60% of parent width */
  padding-bottom: 60%;
  background-color: #fae5d3;

  /* For bellowing the image */
  z-index: -2;
}

.step-img-box::after {
  width: 45%;
  /* height: 60%; */

  /* 60% of parent width */
  padding-bottom: 45%;
  background-color: #f8d8bd;

  z-index: -1;
}

.step-img {
  width: 35%;
}
```

[Next: building Featured](./08-building-featured.md)
