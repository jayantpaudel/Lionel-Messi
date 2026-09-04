# The picture library

Place permanent gallery images in this folder, then replace the visible `[ YOUR ... IMAGE ]` bracket (and its surrounding `<div class="photo-placeholder">…</div>`) inside one of the gallery figures in `index.html` with an image element. For example:

```html
<figure class="gallery-slot">
  <img src="assets/gallery/world-cup-night.jpg" alt="Celebrating Argentina's World Cup win" />
  <figcaption>World Cup night</figcaption>
</figure>
```

Keep the `gallery-slot`, `photo-tall`, `photo-wide`, or `photo-quote` classes on the figure to preserve the intentional mosaic layout. The `[ YOUR HERO IMAGE ]` and `[ PLACE YOUR ARGENTINA / WORLD CUP IMAGE HERE ]` brackets can be replaced the same way. Every bracket is intentionally visible in the page source so you can quickly find where to add your own imagery; no browser upload control is used.
