# The picture library

Every framed panel in `index.html` can hold a photograph. Replace the inner
placeholder `<div>` with an image while keeping the surrounding element and its
classes. The classes preserve the intentional mosaic layout.

```html
<figure class="photo-slot photo-tall">
  <img src="assets/gallery/your-image.jpg" alt="Describe the image" />
  <figcaption>Your caption</figcaption>
</figure>
```

For hero, club, or timeline panels, replace the placeholder contents with an
`<img>` element and give it meaningful alternative text. Use locally stored
images where possible, or a direct image URL from a source you are permitted to
use.
