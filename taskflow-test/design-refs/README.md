# Design References — Weekly Cross-Project Summary

This folder contains screenshots and visual conventions for the prototype.
Drop reference screenshots here before the build session. Filenames are listed below — they don't exist yet; you create them by saving screenshots from the products named.

---

## Reference Products

### Notion — Card layout and typography
**Borrow:** The card-based layout for project blocks. White cards on a light gray (`#F7F7F5`) page background. Clean sans-serif type (Inter or equivalent). Generous vertical spacing between cards — each project block should breathe, not stack tight. Sidebar navigation with collapsible sections and subtle active-state highlighting.

**Specific pattern to replicate:** Notion database rows with a property bar (status, owner, date) across the top of each card before the content begins. The font weight contrast between a heading and its property list is the right visual hierarchy for project name vs. task details.

**Screenshot to save:** `notion-database-view.png` — a Notion database in gallery or board view showing cards with property pills. `notion-sidebar.png` — the left nav with nested pages and a collapsed section.

---

### Monday.com — Status badges and project grouping
**Borrow:** The color-coded status pill system: red = Blocked, amber/orange = At Risk, green = On Track, dark gray = Overdue. Pill shape is rounded, font is small-caps or all-caps, background is muted (not neon). The portfolio/board view where each row is a project with status, owner avatar, and progress bar visible without expanding.

**Specific pattern to replicate:** Monday's "Group by status" view where project rows cluster under colored group headers (e.g., a red header row for "Stuck" projects, a green one for "On track"). That visual separation of urgency tiers is the ordering model for the weekly summary.

**Screenshot to save:** `monday-portfolio-view.png` — Monday board with grouped status rows and color-coded pills. `monday-status-pills.png` — close-up of the pill color system.

---

### Atlassian Jira — Issue-row density and provenance
**Borrow:** The issue-row format: issue ID (`TSK-001-3`) + title + assignee avatar + due date badge, all visible on a single scannable row without needing to expand. The "blocked by" and "linked issues" inline relationship pattern — this is the model for the provenance hover showing why an item was flagged.

**Specific pattern to replicate:** Jira's backlog list view — compact rows, monospace or near-monospace IDs on the left, soft separator lines between issues, no wasted vertical space. The "why flagged" tooltip should render like Jira's "Linked Issues" popover: small card with a one-line source citation.

**Screenshot to save:** `jira-backlog-list.png` — Jira backlog in list mode showing issue IDs, titles, assignees, and status badges on one row per issue. `jira-linked-issues.png` — a Jira issue showing the "blocked by" inline linkage.

---

## Explicit Avoid List

Do not use any of the following in the prototype — Claude Code will default to these if not told:

- Purple primary buttons (Monday default, Notion default)
- Gradient backgrounds of any kind — solid fills only
- Emoji in empty states, toasts, or status labels (no 🎉, no ✅, no 🚀)
- Shadcn default component styling — especially default button radius, input borders, and card shadows
- "Acme Corp" or "Project Alpha" as placeholder names — use GreenPath Studios and the actual project names from `fixtures.md`
- Loading skeletons — the demo renders instantly, data is pre-seeded, skeletons break the illusion
- Empty states anywhere — the dashboard and summary are always pre-populated
- Lorem ipsum — every text element uses real content from `fixtures.md`

---

## Color System (drawn from references)

| Token | Value | Usage |
|---|---|---|
| surface-bg | `#F7F7F5` | Page background (Notion-style) |
| card-bg | `#FFFFFF` | Project block cards |
| border | `#E5E5E3` | Card borders, dividers |
| text-primary | `#191919` | Headings, task titles |
| text-secondary | `#6B6B6B` | Owner names, dates, metadata |
| status-blocked | `#E03131` | Blocked pill background |
| status-at-risk | `#F76707` | At Risk pill background |
| status-on-track | `#2F9E44` | On Track pill background |
| status-overdue | `#495057` | Overdue pill background (dark gray, not red — overdue is a state, not an emergency) |
| status-completed | `#ADB5BD` | Completed pill (muted) |
| flag-accent | `#FFD43B` | Thin left-border on flagged task rows (Jira-style attention marker) |

---

## UI State Rules

- **Login:** One button, no fields. Label: "Enter as Rachel Torres — GreenPath Studios Marketing Ops." One click → dashboard.
- **Dashboard:** Always shows 15 projects in sidebar with status indicators. Banner at top: "Your weekly summary is ready — 3 items need attention." No onboarding tour, no empty state.
- **Summary page:** Always renders populated. The 15 GreenPath projects are pre-seeded from `fixtures.md`. No spinner, no skeleton, no "generating..." state.
- **Clickable elements:** Every project name, task ID, and assignee name is a hyperlink. If navigation is not built yet, show a tooltip on hover: "(demo only — opens source task in full build)." Never dead links that silently do nothing.
- **Exit modal:** Fires once per session when the user has been on the summary page for 30+ seconds, or when they click "Done reviewing." Three questions, one submit button, no required fields except Q1.
