# Design References — AI Quote Intelligence

This folder contains visual reference screenshots for the Comparezy AI Quote Intelligence prototype. Screenshots should be dropped here before handing the build prompt to Claude Code.

---

## Reference 1: Amazon Prime — Comparison Table Layout

**What to borrow:** The structured comparison table from Amazon's "Compare Plans" and product detail views. Clear columns, one row per attribute, highlighted differences, and decision confidence built through information density rather than visual decoration. Consumer-grade clarity without being patronizing.

**Apply to:** Screen 4 (AI Comparison view). The scope diff table should look like Amazon's plan comparison — contractor names as column headers, scope items as rows, checkmarks and X marks (or equivalent) per cell. The "pricing variance" row should be visually prominent, similar to how Amazon highlights the price difference between Prime and non-Prime.

**Screenshot filenames to drop in this folder:**
- `amazon-compare-plans.png` — the Compare Plans table on amazon.com/prime
- `amazon-product-detail-comparison.png` — a product detail page showing the feature comparison table

---

## Reference 2: Pendo — Metric Card Dashboard

**What to borrow:** The summary metric cards on Pendo's analytics dashboard. Key numbers displayed as clean, bordered cards before the detail view: total count, a label, and a status indicator. Professional, data-dense, SaaS-caliber without feeling clinical or cold.

**Apply to:** Screen 3 (AI Assessment view) and the top of Screen 4 (AI Comparison view). Before the line-item detail, show 3–4 summary cards: "Scope gaps found: 2", "Pricing variance: $2,800", "Red flags: 1", "vs. local median: 14% above". These give the homeowner a scannable summary before they read the full analysis.

**Screenshot filenames to drop in this folder:**
- `pendo-dashboard-cards.png` — the metric card row from a Pendo analytics dashboard
- `pendo-feature-detail.png` — a Pendo detail view showing how data transitions from summary cards to line-item detail

---

## Explicit Avoid-List

Do not use any of the following in the prototype — these are the defaults that make AI-built prototypes look generic:

- **Purple primary buttons or gradient backgrounds** — use a neutral, muted palette (off-white background, near-black text, one accent color for action states only)
- **Emoji-heavy empty states** — no 🏠, 🔨, ✅ scattered through the UI
- **Shadcn default component styling** — the out-of-the-box card, badge, and button styling is immediately recognizable as a boilerplate. Override it.
- **Lorem ipsum or "Contractor A / Contractor B" as placeholder names** — use the seeded fixtures from `fixtures.md`
- **Loading skeleton animations** — the prototype renders instantly with pre-seeded data; do not show spinners or shimmer states
- **Empty states** — the project is always pre-populated with Hallie's roof replacement quotes
- **Multi-field login** — login is one click that drops the user directly into Hallie's project as the demo persona

---

## Color and Typography Guidance

- **Background:** Off-white (#F7F6F3 or similar) — avoids the stark white that reads as wireframe
- **Text:** Near-black (#1A1A1A or #18181B) — not pure black
- **Accent / action color:** A single muted blue or teal (no purple, no bright orange)
- **Positive / included scope:** Subtle green indicator — not a large colored badge
- **Missing / flagged scope:** Muted amber or orange — not red (red signals error, not gap)
- **Red flag items:** True red, used sparingly (only for contractual red flags, not scope gaps)
- **Typography:** System font stack or a clean sans-serif (Inter, DM Sans) — no decorative fonts

---

## UI State Rules

- **No loading states.** The demo loads instantly with Hallie's seeded project.
- **No empty states.** Every screen is pre-populated. There is no "upload your first quote" screen in the demo flow.
- **One-click login.** A single "Enter as Hallie M." button drops the user into the project dashboard. No username, no password.
- **Exit is the reaction modal.** After the user views the comparison report, a 3-question modal captures reaction: "Did this help you decide?" / "What would you change?" / "Would you come back for your next project?" — modal appears automatically after 15 seconds on the report screen, or when the user clicks the share link.
