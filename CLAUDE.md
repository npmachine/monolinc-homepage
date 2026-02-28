# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Monolinc is a manifesto-first static landing page introducing a new vision for human communication. There is no backend, no build step, no package manager, and no framework — just plain HTML, CSS, and vanilla JavaScript.

## Development

**Preview locally:**
```bash
open index.html
# or with a local server:
python3 -m http.server 8080
```

**Run structural tests:**
```bash
bash tests/landing-page.sh
```

The test script must be run from the project root. It checks that required files exist and that key HTML sections, CSS features, and JS patterns are present.

## Architecture

Three files, no compilation required:

- `index.html` — All page content. Sections use `id` anchors (`#hero`, `#problem`, `#belief`, `#future`, `#principles`, `#manifesto`) and `data-section` attributes that `script.js` targets.
- `styles.css` — All visual design. CSS custom properties in `:root` define the full design token system (colors, spacing, radii, shadows). Google Fonts (`Newsreader` serif for headings/brand, `Work Sans` sans-serif for body) are loaded via `@import`.
- `script.js` — Two `IntersectionObserver` instances: one for scroll-reveal (`.reveal` → `.visible`) and one for nav active-link highlighting. Both respect `prefers-reduced-motion`.

## Key Constraints

- **No waitlist, no signup, no CTA forms.** The page is purely narrative.
- **Zero dependencies.** No npm, no bundler, no CDN libraries other than Google Fonts.
- **Progressive enhancement.** The page must be fully readable with JavaScript disabled; JS only adds scroll animations and active nav state.
- **Accessibility.** Maintain WCAG contrast, visible focus rings (`a:focus-visible`), semantic heading hierarchy (`h1` → `h2` → `h3`), and `aria-label`/`aria-current` on nav.
- **Reduced motion.** All animations must be disabled under `prefers-reduced-motion: reduce` (handled in both CSS and JS).

## Design Tokens (`:root` in `styles.css`)

The color palette is warm/editorial. Primary accent is `--accent: #1d7f8c` (teal). Background is `--bg: #f8f5ee` (off-white). Typography uses `--container: 1100px` max-width. Spacing runs `xs` → `sm` → `md` → `lg` → `xl` → `2xl`.

## Content Source

All copy derives from `monolinc_manifesto.md`. Any changes to page messaging should remain faithful to that document's voice: thoughtful, human, anti-platform-capture.
