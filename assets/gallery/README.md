# The picture library

Place permanent gallery images in this folder, then replace the `<div class="photo-placeholder">…</div>` inside one of the gallery figures in `index.html` with an image element. For example:

```html
<figure class="gallery-slot">
  <img src="assets/gallery/world-cup-night.jpg" alt="Celebrating Argentina's World Cup win" />
  <figcaption>World Cup night</figcaption>
</figure>
```

Keep the `gallery-slot`, `photo-tall`, `photo-wide`, or `photo-quote` classes on the figure to preserve the intentional mosaic layout. The four empty frames on the page are ready for direct code-based image replacement; no browser upload control is used.
