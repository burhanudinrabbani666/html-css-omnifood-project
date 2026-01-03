## Adding Favicon

```html
<link rel="icon" href="/img/favicon.png" type="image/x-icon" />
<link
  rel="apple-touch-icon"
  href="/img/apple-touch-icon.png"
  type="image/x-icon"
/>
<link rel="manifest" href="manifest.webmanifest" />
```

```json
{
  "icons": [
    {
      "src": "./img/favicon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "./img/favicon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

[Next: Image optimalization](./08-image-optimalization.md)
