# Monolinc Landing Page Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a static, narrative-first landing page that introduces Monolinc's mission and vision without conversion mechanics (no waitlist, no signup flow).

**Architecture:** Single-page static site (`index.html`, `styles.css`, `script.js`) focused on manifesto storytelling. Content is segmented into semantic sections (hero, problem, belief, future, principles, closing statement). Styling uses a strong editorial visual language, responsive layout, accessible typography, and subtle motion that respects reduced-motion settings.

**Tech Stack:** HTML5, modern CSS (custom properties, grid/flex, media queries), vanilla JavaScript for scroll reveal and navigation highlighting.

---

### Task 1: Scaffold Static Site Structure

**Files:**
- Create: `index.html`
- Create: `styles.css`
- Create: `script.js`

**Step 1: Create semantic HTML shell**
- Add document metadata, responsive viewport, title, description, OG basics.
- Create section anchors: `#hero`, `#problem`, `#belief`, `#future`, `#principles`, `#manifesto`.

**Step 2: Link assets and scripts**
- Link `styles.css` in `<head>` and `script.js` before `</body>` with `defer`.

**Step 3: Add non-interactive nav skeleton**
- Add simple top nav with section links only (no CTA buttons/forms).

**Step 4: Verify render baseline**
Run: `open index.html` (or equivalent local static preview)
Expected: Page loads with sections in order, no console errors.

**Step 5: Commit scaffold**
```bash
git add index.html styles.css script.js
git commit -m "feat: scaffold monolinc static landing page"
```

### Task 2: Draft Landing Page Copy from Manifesto

**Files:**
- Modify: `index.html`
- Reference: `monolinc_manifesto.md`

**Step 1: Create copy map by section**
- Hero: "Beyond messaging" positioning statement.
- Problem: why modern messaging became thin/noisy.
- Belief: relationships are unique and deserve unique conversational spaces.
- Future: conversation includes humans and invited intelligence.
- Principles: ownership, rhythm, memory, care.
- Closing: "Your relationships belong to you."

**Step 2: Write concise section copy**
- Keep paragraphs readable (max ~75ch).
- Preserve manifesto voice: thoughtful, human, anti-platform capture.

**Step 3: Add accessibility text structure**
- Heading hierarchy (`h1` then ordered `h2` sections).
- Include descriptive `aria-label` for nav.

**Step 4: Verify content quality**
- Proofread for consistency with manifesto.
- Ensure no waitlist/signup/contact copy appears.

**Step 5: Commit copy structure**
```bash
git add index.html
git commit -m "feat: add manifesto-driven landing page narrative"
```

### Task 3: Define Visual Direction and Design Tokens

**Files:**
- Modify: `styles.css`

**Step 1: Define CSS custom properties**
- Color system with warm, editorial tones (no default purple bias).
- Typography scale, spacing scale, radius, shadows.

**Step 2: Set typography and layout foundations**
- Add expressive heading/body font stack.
- Constrain line length, set rhythm (`line-height` 1.5+).
- Implement container widths and section spacing system.

**Step 3: Add atmospheric background treatment**
- Use gradient layers/noise-like effect via CSS only.
- Keep contrast WCAG-friendly for body copy.

**Step 4: Style content blocks**
- Hero emphasis, pull quotes, principle cards.
- Ensure consistency across desktop/tablet/mobile.

**Step 5: Commit visual system**
```bash
git add styles.css
git commit -m "feat: implement editorial visual system for landing page"
```

### Task 4: Implement Responsive Layout and Navigation Behavior

**Files:**
- Modify: `styles.css`
- Modify: `script.js`

**Step 1: Responsive breakpoints**
- Add breakpoints for ~375px, 768px, 1024px+.
- Ensure no horizontal overflow.

**Step 2: Sticky/floating nav behavior**
- Keep nav readable and unobtrusive.
- Add current-section highlighting via IntersectionObserver.

**Step 3: Add progressive enhancement only**
- Page fully usable without JS.
- JS should only enhance orientation/reading flow.

**Step 4: Validate interaction quality**
- Keyboard tab order and focus visibility.
- Touch targets at least 44x44 for nav links.

**Step 5: Commit responsive behavior**
```bash
git add styles.css script.js
git commit -m "feat: add responsive layout and section-aware navigation"
```

### Task 5: Add Motion and Accessibility Guardrails

**Files:**
- Modify: `styles.css`
- Modify: `script.js`

**Step 1: Add subtle reveal animations**
- Fade/translate section blocks on scroll with stagger.
- Use transform/opacity only for performance.

**Step 2: Respect reduced motion**
- Disable or minimize animation under `prefers-reduced-motion: reduce`.

**Step 3: Add focus and contrast checks in styles**
- Visible focus rings.
- Verify text/background combinations meet contrast targets.

**Step 4: Manual QA pass**
- Desktop + mobile viewport checks.
- Confirm no layout shift from motion.

**Step 5: Commit motion/accessibility pass**
```bash
git add styles.css script.js
git commit -m "feat: add accessible motion and interaction polish"
```

### Task 6: Final Content and Production Readiness

**Files:**
- Modify: `index.html`
- Modify: `styles.css`
- Modify: `script.js`
- Optional Create: `README.md`

**Step 1: Add final metadata and social preview tags**
- Final title/description aligned to manifesto.
- OG tags and favicon placeholders.

**Step 2: Performance hygiene**
- Remove unused CSS/JS.
- Confirm zero dependency static build.

**Step 3: Cross-browser quick verification**
Run:
```bash
# Option 1: direct open
open index.html

# Option 2: simple local static server
python3 -m http.server 8080
```
Expected: clean load, no console errors, layout intact at major breakpoints.

**Step 4: Optional project usage notes**
- Add short run/serve instructions in `README.md`.

**Step 5: Final commit**
```bash
git add index.html styles.css script.js README.md
git commit -m "feat: deliver monolinc manifesto static landing page"
```

### Acceptance Criteria

- Static single-page site, no backend, no form submission, no waitlist UI.
- Messaging faithfully reflects `monolinc_manifesto.md`.
- Strong editorial visual identity with non-generic typography and atmosphere.
- Fully responsive and accessible (focus states, contrast, reduced motion support).
- Works as plain static hosting artifact (GitHub Pages/Netlify static upload).

### Content Blueprint (for implementation)

- Hero: "Beyond messaging" + one-sentence framing.
- Section 1 (Problem): communication got cheaper, meaning got thinner.
- Section 2 (Belief): relationships have different pace/tone/shape.
- Section 3 (Shift): conversation now includes invited intelligence.
- Section 4 (What Monolinc is building): space between people/conversations.
- Section 5 (Principles): rhythm over urgency, memory over feed loss, ownership over platform lock-in.
- Closing statement: "Your relationships don't belong to any platform. They belong to you."
