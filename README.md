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
- `contact/index.html`: LinkedIn, GitHub, and email.
- `assets/style.css`: colors, typography, spacing, and mobile layouts.
- `docs/bio-review.md`: draft copy and decisions for Charles before launch.

Each page contains its final HTML, metadata, and navigation. Update shared navigation/footer and SEO details in all pages if they change. Update `sitemap.xml` when adding a page. `.nojekyll` makes Pages serve the files directly.

Portrait framing is controlled by `.portrait-frame img` in CSS; the supplied face has not been regenerated or retouched. The JPEG is a smaller, compressed copy with its metadata removed. The homepage portrait is about 125 KB, and both Montserrat weights are hosted locally. No JavaScript runtime, trackers, external font service, or contact-form backend is required. Core content and navigation work with JavaScript disabled.

The original Cyborg Challenge stays at https://charleslaw.me/cyborg/ and is linked from Home and Projects. `/cyborg/` also redirects there. Keep the old game hosting active.

## GitHub Pages

Use the public repository `charleslaw/iamclaw.dev`.

1. Push the `main` branch.
2. In **Settings → Pages → Build and deployment**, choose **Deploy from a branch**, branch **main**, folder **/ (root)**, and Save.
3. Set the custom domain to **iamclaw.dev**. The root `CNAME` file contains this domain as well.
4. Configure Namecheap DNS using [the deployment notes](docs/deployment.md).
5. Once GitHub’s certificate is issued, enable **Enforce HTTPS**. The `.dev` domain requires HTTPS.

Review the draft bio before enabling Pages. The public site is intentionally separate from the local resume and cover-letter source materials.

## Verification

The site is checked with a local HTTP server, internal-link and image validation, metadata checks, and desktop/mobile browser inspection. There are no package dependencies to audit or bundle.
