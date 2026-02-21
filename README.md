# Alessa Carbo — Personal Academic Website

Victorian / naturalist field-journal aesthetic. Static site, no build step.

## Files

```
index.html          Homepage (hero, selected publications, field notes)
publications.html   Full publication list (journal, workshops, preprints)
talks.html          Talks & presentations
alt-proteins.html   Alternative proteins research page
frida.html          Easter egg — accessed via paw icon in footer only
styles.css          Shared stylesheet
script.js           Minimal JS (modal, nav highlight, fade-in)
cv.pdf              ← Add your own CV here
README.md           This file
```

## Deploy on GitHub Pages

1. **Create the repository**
   - Go to github.com → New repository
   - Name it `<your-username>.github.io` for a user site, or any name for a project site

2. **Push the files**
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git remote add origin https://github.com/<username>/<repo>.git
   git push -u origin main
   ```

3. **Enable Pages** (if not a `<username>.github.io` repo)
   - Repository → Settings → Pages
   - Source: Deploy from branch → `main` → `/ (root)`
   - Save

4. **Add your CV**
   - Drop `cv.pdf` in the root directory and push
   - The CV link in the nav is already wired to `cv.pdf`

5. **Customise content**
   - Replace placeholder email, GitHub, LinkedIn, Substack URLs in all HTML files
   - Update publication titles, authors, and links throughout
   - Edit the bio paragraph in `index.html`

## Design Notes

- Accent colour: rust `#7a4b2a` — change `--accent` in `:root` in `styles.css`
- Fonts: EB Garamond (headings) + Spectral (body) via Google Fonts
- Illustrations: inline SVGs at low opacity (~0.10–0.12) in the aside column
- Kermit easter egg: click the word "green" in the footer
- Frida easter egg: click the paw print icon in the footer

## Accessibility

- All interactive elements are keyboard navigable
- Focus rings visible on all controls
- `aria-current="page"` set via JS on active nav link
- Modal traps focus and closes on Escape
- Illustrations marked `aria-hidden="true"`
- `prefers-reduced-motion` disables all transitions and animations
