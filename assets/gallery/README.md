# The picture library

Every framed bracket in `index.html` is an image location. To add an image, replace the placeholder `<div class="photo-placeholder">…</div>` with an image element while keeping the surrounding `figure` and its classes.

```html
<figure class="gallery-slot">
  <img src="assets/gallery/your-image.jpg" alt="Describe your image" />
  <figcaption>Your caption</figcaption>
</figure>
```

Keep the `gallery-slot`, `photo-tall`, `photo-wide`, or `photo-quote` classes to preserve the mosaic. Timeline, hero, and Argentina brackets can be replaced with the same `<img>` markup.
