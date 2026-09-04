# The picture library

Every framed bracket in `index.html` is an image location. To add an image, replace the placeholder `<div class="photo-placeholder">…</div>` with an image element while keeping the surrounding `figure` and its classes.

```html
<figure class="gallery-slot">
  <img src="assets/gallery/your-image.jpg" alt="Describe your image" />
  <figcaption>Your caption</figcaption>
</figure>
```

Keep the `gallery-slot`, `photo-tall`, `photo-wide`, or `photo-quote` classes to preserve the mosaic. Timeline, hero, and Argentina brackets can be replaced with the same `<img>` markup.
</figure>
```

Keep the `gallery-slot`, `photo-tall`, `photo-wide`, or `photo-quote` classes to preserve the mosaic. Timeline, hero, and Argentina brackets can be replaced with the same `<img>` markup.
</figure>
```

Keep the `gallery-slot`, `photo-tall`, `photo-wide`, or `photo-quote` classes to preserve the mosaic. Timeline, hero, and Argentina brackets can be replaced with the same `<img>` markup.
This page uses external image links, so no image files need to be saved in this folder. To change a picture, replace only the URL inside that image’s `src` attribute in `index.html`. For example:

```html
<figure class="gallery-slot">
  <img src="https://example.com/your-image.jpg" alt="Describe your image" />
  <figcaption>World Cup night</figcaption>
</figure>
```

Keep the `gallery-slot`, `photo-tall`, `photo-wide`, or `photo-quote` classes on the figure to preserve the intentional mosaic layout. The hero and Argentina feature use the same approach: replace the external URL in their `src` attributes. Use direct image URLs supplied by an image host and always provide accurate `alt` text for your replacement image.
