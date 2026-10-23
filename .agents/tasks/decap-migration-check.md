# Decap CMS Content Migration — Status Report

**Verdict: Migration is ~95% complete.** All six content areas have been extracted into JSON files and are consumed by their respective React components via a central `src/content.js` loader. The Decap CMS config at `public/admin/config.yml` covers every collection and field in those JSON files. Three minor gaps remain: one hardcoded string, one structural mismatch in the Decap list widget syntax, and two hardcoded UI labels in the Footer.

---

## 1. What Was Done (Evidence)

### Architecture

- **`src/content.js`** — central re-export module. Imports all six JSON files and re-exports them by name, plus a `stringsOf()` helper that normalises Decap CMS list-of-object notation back to plain strings.
- **`public/admin/config.yml`** — single Decap CMS config with a `files`-type collection (`site`) containing six file sub-collections, one per content JSON.
- **`admin/index.html`** + **`src/admin.js`** — admin panel entry-point. Loads config from `/admin/config.yml` (served from `public/admin/config.yml` by Vite's public-dir resolution). Calls `CMS.init()`.
- **`vite.config.js`** — multi-page build; both `index.html` and `admin/index.html` are entry points. A custom middleware rewrites `/admin` → `/admin/index.html` in dev.

### Component → JSON mapping (all fully wired)

| Component | Content file | Key fields consumed |
|---|---|---|
| `Hero.jsx` | `hero.json` | `firstName`, `lastName`, `tagline`, `image`, `primaryCta.{label,href}`, `secondaryCta.{label,href}` |
| `About.jsx` | `about.json` | `title`, `body`, `image`, `skills[]`, `stats[].{value,label}` |
| `Experience.jsx` | `experience.json` | `title`, `jobs[].{company,role,dates,summary,linkLabel,linkHref,tags[]}` |
| `Projects.jsx` | `projects.json` | `title`, `items[].{title,description,href,image,featured,theme,tags[]}` |
| `Services.jsx` | `services.json` | `title`, `items[]` |
| `Header.jsx` | `site.json` | `brand`, `resume` |
| `Footer.jsx` | `site.json` | `fullName`, `email`, `footerImage`, `coffeeUrl`, `socials[].{label,href}` |

Every component imports from `../content` (not from hard-coded literals), confirming all data paths are live.

---

## 2. Gaps Found

### Gap 1 — `document.title` hardcoded in `App.jsx` (minor)

**File:** `src/App.jsx`, line 16  
**Code:** `document.title = "Hematullah Waziri | Portfolio"`  
**Issue:** The page title is not driven by `site.json`. If the site owner edits `site.fullName` in Decap CMS, the browser tab title will not update.  
**Fix:** Replace with:
```jsx
import { site } from "./content";
// …
document.title = `${site.fullName} | Portfolio`;
```
Also add a `pageTitle` field to `site.json` and the Decap config if more control is needed.

---

### Gap 2 — `index.html` static title tag (minor)

**File:** `index.html`, `<title>` tag  
**Code:** `<title>Hemat Waziri | Portfolio</title>`  
**Issue:** This is the SSR/pre-render title and the fallback before React hydrates. It is hard to drive from JSON at build time without a plugin, but it is inconsistent with `site.fullName = "Hematullah Waziri"`. Not a Decap wiring gap per se, but a cosmetic inconsistency.  
**Fix:** Either accept the mismatch or use a Vite HTML plugin to inject the title from `site.json` at build time.

---

### Gap 3 — Decap list widget `field` vs `fields` for skills and services (config issue)

**File:** `public/admin/config.yml`

Two list widgets use the single-field shorthand `field:` but Decap CMS stores those as plain strings in JSON. The `stringsOf()` helper in `content.js` normalises this correctly at read time, but there is a subtle authoring difference: Decap will write `[ { "skill": "…" }, … ]` for the `skills` list and `[ { "item": "…" }, … ]` for the `services` list, while the current JSON files store plain string arrays (`["Next.js", "React", …]`).

**Evidence in config.yml:**
```yaml
# about → skills
- name: skills
  widget: list
  field: { name: skill, label: Skill, widget: string }

# services → items
- name: items
  widget: list
  field: { name: item, label: Service, widget: string }
```

**Evidence in JSON:**
```json
// about.json
"skills": ["Next.js", "React", "TypeScript", …]

// services.json
"items": ["Responsive Web Design", "Single Page Application", …]
```

**Impact:** The first time an editor saves either of these collections in Decap, it will convert the plain-string arrays into arrays of objects (`[{"skill":"Next.js"}, …]`). `stringsOf()` handles this, so the site will continue to render correctly — but it is a lossy one-way migration of the JSON format that anyone reading the file directly may find surprising.

**Fix option A (cleanest):** Convert the JSON files to the object format now, before the first Decap save:
```json
// about.json
"skills": [{"skill": "Next.js"}, {"skill": "React"}, …]
```
**Fix option B:** Change the Decap widget to use a plain string list (no `field:` key, Decap will then store plain strings), and remove the `stringsOf()` normalisation for those fields.

---

### Gap 4 — Footer navigation labels are hardcoded (cosmetic, low priority)

**File:** `src/components/Footer.jsx`  
The "Professional Links" heading, "Quick Menu" heading, and the five nav link labels (`Home`, `About`, `Experience`, `Projects`, `Services`) are hardcoded strings, not driven by any JSON or Decap field.  
**Impact:** An editor cannot change these labels from the CMS. For a personal portfolio this is acceptable, but it is technically outside the CMS's control.  
**Fix:** Add a `navLinks` list to `site.json` and the Decap config, or accept them as static UI chrome.

---

## 3. Decap CMS Config Coverage — Cross-reference

| JSON file | Decap collection file | All fields covered? |
|---|---|---|
| `hero.json` | `hero` | ✅ Yes |
| `about.json` | `about` | ✅ Yes (see Gap 3 re: skills format) |
| `experience.json` | `experience` | ✅ Yes |
| `projects.json` | `projects` | ✅ Yes |
| `services.json` | `services` | ✅ Yes (see Gap 3 re: items format) |
| `site.json` | `general` | ✅ Yes |

No Decap collections are defined but unwired. No component fields are missing from the Decap config.

---

## 4. Build / CMS Wiring Notes

- The `npm run cms` script starts `decap-server` for local development (proxies GitHub OAuth locally).
- The `admin/index.html` references `/admin/config.yml` — this resolves correctly because Vite serves everything under `public/` at the root, so `public/admin/config.yml` → `/admin/config.yml`. ✅
- `netlify.toml` has the correct build command (`vite build`) and publish dir (`dist`). The identity/Git Gateway configuration for production auth is not present in `netlify.toml` but that is typically configured in the Netlify UI.

---

## 5. Summary of Remaining Work

| Priority | Item | File(s) |
|---|---|---|
| Medium | Fix `document.title` to read from `site.fullName` | `src/App.jsx` |
| Medium | Resolve skills/services list format mismatch before first Decap save | `src/content/about.json`, `src/content/services.json`, `public/admin/config.yml` |
| Low | Align `index.html` `<title>` with `site.fullName` | `index.html` |
| Low | Decide whether Footer nav labels should be CMS-managed | `src/components/Footer.jsx`, `src/content/site.json`, `public/admin/config.yml` |

The migration is functionally complete. The Decap CMS admin panel is wired up, all content sections read from JSON, and the config covers all fields. The remaining items are polish and a format edge case that should be addressed before editors start using the CMS to avoid a silent data-format conversion.
