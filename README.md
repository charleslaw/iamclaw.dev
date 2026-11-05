# iamclaw.dev

Charles Law’s personal website. Static HTML and CSS, designed for GitHub Pages at **https://iamclaw.dev**.

## Local preview

Requires Python 3; no package installation or build step.

```sh
cd ~/src/iamclawweb
python3 -m http.server 4173 --bind 127.0.0.1
```

Open http://127.0.0.1:4173. Stop with Ctrl-C.

## Edit

- `index.html`: homepage.
- `about/index.html`: bio and career background.
- `projects/index.html`: MedArmor and the original personal projects.
- `projects/whiteboard/index.html`: the full whiteboard capture write-up and interactive stroke-recognition example.
- `contact/index.html`: LinkedIn, GitHub, and email.
- `assets/style.css`: colors, typography, spacing, and mobile layouts.
- `docs/bio-review.md`: bio copy and editorial notes for future revisions.

Each page contains its final HTML, metadata, and navigation. Update shared navigation/footer and SEO details in all pages if they change. Update `sitemap.xml` when adding a page. `.nojekyll` makes Pages serve the files directly.

Portrait framing is controlled by `.portrait-frame img` in CSS; the supplied face has not been regenerated or retouched. The JPEG is a smaller, compressed copy with its metadata removed. The homepage portrait is about 125 KB, and both Montserrat weights are hosted locally. The main pages need no JavaScript, trackers, external font service, or contact-form backend. The Jurassic Park stroke overlay uses CSS for hover and a checkbox for touch and keyboard control. Core site content and navigation work with JavaScript disabled; the optional game requires JavaScript.

Cyborg Challenge is hosted locally at `/cyborg/` and linked from Home and Projects. The original game engine, level data, sprites, and Alertify library are included locally; the game runs JavaScript only on its own page. The original keyboard-input behavior is preserved. Mobile arrow buttons send the same keydown/keyup events, with pointer capture and release handling for press-and-hold movement.

## GitHub Pages

Use the public repository `charleslaw/iamclaw.dev`.

1. Push the `main` branch.
2. In **Settings → Pages → Build and deployment**, choose **Deploy from a branch**, branch **main**, folder **/ (root)**, and Save.
3. Set the custom domain to **iamclaw.dev**. The root `CNAME` file contains this domain as well.
4. Configure Namecheap DNS using [the deployment notes](docs/deployment.md).
5. Once GitHub’s certificate is issued, enable **Enforce HTTPS**. The `.dev` domain requires HTTPS.

The site is published from the `main` branch when Pages is enabled. Bio copy remains editable; private resume and cover-letter source documents are not included in this repository.

## Verification

The site is checked with a local HTTP server, internal-link and image validation, metadata checks, and desktop/mobile browser inspection. There are no package dependencies to audit or bundle.
