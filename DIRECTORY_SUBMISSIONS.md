# Directory Submission Instructions

Instructions for submitting **Roof Pitch Calculator** to product/SaaS/tools directories.

---

## Auth

- **Google account:** yaroshepta.b@gmail.com
- **GitHub OAuth:** same account (yaroshepta)
- **Business email:** ceo@yaro-labs.com (use when sites reject gmail)
- Prefer Google OAuth when offered; fall back to GitHub or email signup

---

## App Details (copy-paste)

| Field | Value |
|-------|-------|
| **Name** | Roof Pitch Calculator |
| **URL** | https://roofangler.com |
| **Tagline** | Free roof pitch calculator — pitch ratio, angle, slope & rafter length |
| **Short description** | Free roof pitch calculator. Enter rise and run, a degree angle, or a pitch ratio to instantly get pitch ratio, angle in degrees, slope percentage, and rafter length. |
| **Full description** | Roof Pitch Calculator is a free tool for homeowners, contractors, and roofers. Enter rise and run, a degree angle, or a pitch ratio (X:12) to instantly calculate pitch ratio, angle in degrees, slope percentage, rafter multiplier, and rafter length. Includes a live SVG roof diagram, a reference chart of 20+ common roof pitches, and a blog covering roofing guides. All calculations run in your browser — no account needed, no ads, no data collected, completely free. |
| **Category** | Tools / Home Improvement / Construction / Calculators |
| **Pricing** | Free |
| **Logo** | https://roofangler.com/icon.svg |
| **OG image** | https://roofangler.com/opengraph-image |
| **Email** | yaroshepta.b@gmail.com |
| **Business email** | ceo@yaro-labs.com |

**Features to highlight:**
- Three input modes: Rise & Run, Angle (degrees), or Pitch Ratio (X:12)
- Outputs pitch ratio, angle in degrees, slope percentage, rafter multiplier, and rafter length
- Live SVG roof diagram that updates as you type
- Common roof pitches reference chart (flat / low / conventional / steep categories)
- Blog with 9 roofing guides (what is roof pitch, how to measure, shingles, shed roofs, etc.)
- All calculations run in the browser — no server, no data collected
- No account required, no ads, completely free
- Mobile-friendly, fast, clean interface

---

## Workflow for Each Submission

### 0. Session setup (before anything else)

1. **Read the listings report** to get current status of all submissions:
   - Search for the Roof Pitch Calculator listings report in NoteOperator
   - Use `mcp__noteoperator__list_documents` to find it, then read in chunks
   - Review which directories are done, pending, or need follow-up before starting new ones

   **If the report doesn't exist yet**, create it:
   ```
   mcp__noteoperator__create_document
   title: "Roof Pitch Calculator Directory Listings Report"
   content: (use the template below)
   ```

   **Initial report template:**
   ```markdown
   # Roof Pitch Calculator Directory Listings Report

   Last updated: YYYY-MM-DD

   ## Submitted

   (none yet)

   ## Paid / Requires Manual Action / Blocked

   | Directory | Reason | Notes |
   |-----------|--------|-------|
   ```

2. **Find new directories** to target:
   - https://launchdirectories.com/ — browse for ones not already in the report
   - General SaaS/tools/productivity/home improvement listings

### 1. Take screenshots

The site requires no login. Take screenshots of the live site using Playwright:

| Screen | URL / action |
|--------|-------------|
| `homepage.png` | https://roofangler.com — before entering any values |
| `result.png` | Enter rise=6, run=12 → shows diagram + results card |
| `blog.png` | https://roofangler.com/blog |

### 2. Log in to the directory

**Pick the fastest available method — do it fully autonomously:**

- **Google OAuth** (preferred) — click "Continue with Google", sign in as `yaroshepta.b@gmail.com`
- **GitHub OAuth** (fallback) — sign in as `yaroshepta`
- **Email signup** (last resort) — use `yaroshepta.b@gmail.com`; if rejected use `ceo@yaro-labs.com`

**Natural behavior (critical for CAPTCHA bypass):**

When using computer-use, always mimic human patterns:

- **Mouse movement** — never teleport straight to a target; move nearby first, pause, then click
- **Typing** — short bursts with 200–500ms pauses between fields
- **Before clicking anything** — scroll slightly, move the mouse around, then click
- **After page load** — wait 1–3 seconds before interacting
- **Checkbox CAPTCHAs** — move near checkbox, pause ~300ms, then click; don't click from a static position
- **On CAPTCHA image challenges** — screenshot first, study, then click naturally (slight offset from center)

**CAPTCHAs:**
- Image/checkbox — attempt via computer-use with natural behavior rules above
- hCaptcha / reCAPTCHA v2 — attempt; if unsolvable after 2 tries, mark "Blocked: CAPTCHA" and move on
- reCAPTCHA v3 / invisible — usually passes automatically with Playwright

**Never skip a directory just because login looks hard** — attempt it fully before giving up.

### 3. Fill the form

Use app details from the table above. For long descriptions, use the **Full description** value.

**Keywords / tags (for sites that ask):**
roof pitch calculator, roof angle calculator, rafter length calculator, slope calculator, roof pitch to degrees, pitch ratio, rise and run

### 4. Add badge to landing page (if required)

Many directories require a backlink badge on the homepage to activate the free listing. Add it inside `app/page.tsx` in a "Featured On" section.

**First time only** — add the section before the closing `</div>` of the page content:

```tsx
      {/* Featured On */}
      <section aria-label="Featured On" className="mb-8">
        <div className="flex items-baseline gap-4 mb-5">
          <span className="text-[10px] uppercase tracking-widest text-muted">Featured On</span>
          <div className="flex-1 h-px bg-border" />
        </div>
        <div className="flex flex-wrap items-center gap-6">
          {/* badges go here */}
        </div>
      </section>
```

**Each badge** follows this pattern (add inside the `flex flex-wrap` div):

```tsx
<a href="DIRECTORY_URL" target="_blank" rel="noopener noreferrer" className="opacity-60 transition hover:opacity-100">
  <img src="BADGE_IMAGE_URL" alt="DIRECTORY_NAME" height={40} style={{ height: 40, width: 'auto' }} />
</a>
```

After editing, deploy:
```bash
git add app/page.tsx && git commit -m "feat: add DIRECTORY_NAME badge to Featured On section" && git push
```

### 5. Update the listings report

After **every attempt** (success or failure), update the report note:

- `mcp__noteoperator__append_document_content` — for adding new log entries
- `mcp__noteoperator__replace_document_range` — for targeted edits
- Successful → add under "Submitted" with status and listing URL
- Failed/skipped → add to "Paid / Requires Manual Action / Blocked" with reason

---

## Badge Code Reference

Badges already on homepage: *(none yet — this section grows as submissions are approved)*

```tsx
// (first badge will go here)
```

---

## Notes

- The site has **no login wall** — screenshots and demo links work for anyone
- OG image (`https://roofangler.com/opengraph-image`) is generated by Next.js at 1200×630 — use for cover/preview image fields
- Logo is an SVG angle-arc favicon — also available as `app/icon.svg` in the repo
- The `NEXT_PUBLIC_SITE_URL` env var controls the canonical domain (defaults to `https://roofangler.com`)
