# Fixtures — Weekly Cross-Project Summary Prototype

All data below is drawn directly from the Week 1 research (`week-2/week-2/sample-data/taskflow-projects.json` and the Rachel Torres interview, 2/20/2026). Nothing here is invented.

---

## Team

| Field | Value |
|---|---|
| Team name | GreenPath Studios Marketing Ops |
| Team lead | Rachel Torres |
| Team size | 12 |
| TaskFlow tenure | 8 months |
| Persona label | "Rachel" — the reference user for all prototype screens |

---

## Team Members

| Name | Role (illustrative — replace with real data if known) |
|---|---|
| Rachel Torres | Team Lead / Marketing Ops Manager |
| Marcus Lee | Email Marketing |
| Jenna Pak | Content / Copywriter |
| Priya Shah | Marketing Ops / Analytics |
| Devon Scott | Front-End / QA |
| Anika Raman | Events |
| Ben Alvarez | Partnerships |
| Sofia Ruiz | Content / Brand |
| Theo Kim | Design |
| Hana Nakamura | Content / Research |
| Lucas Weber | Engineering / Technical Ops |
| Amara Okafor | SEO / Content |

---

## Projects (15 active)

Status distribution: 3 Blocked, 4 At Risk, 2 Overdue, 5 On Track, 1 Completed.

| ID | Name | Status | Owner | Target Date | % Complete |
|---|---|---|---|---|---|
| PRJ-001 | Launch Email — Q2 Product v3 | Blocked | Marcus Lee | 2026-04-20 | 62% |
| PRJ-002 | GreenPath Summit 2026 — Event Logistics | At Risk | Anika Raman | 2026-06-08 | 40% |
| PRJ-003 | Website Rebrand Phase 2 — Product Pages | At Risk | Theo Kim | 2026-05-15 | 55% |
| PRJ-004 | Lifecycle Email Overhaul — Onboarding Series | On Track | Jenna Pak | 2026-05-01 | 70% |
| PRJ-005 | Customer Case Study Series — Q2 | On Track | Hana Nakamura | 2026-05-30 | 45% |
| PRJ-006 | Q1 Marketing Retro Report | Completed | Rachel Torres | 2026-04-10 | 100% |
| PRJ-007 | Paid Ads Reactivation — Google + Meta | Blocked | Priya Shah | 2026-04-25 | 35% |
| PRJ-008 | Partner Co-Marketing — BrightWave + Apex | At Risk | Ben Alvarez | 2026-05-12 | 30% |
| PRJ-009 | Quarterly Stakeholder Deck — Q2 | On Track | Rachel Torres | 2026-04-24 | 25% |
| PRJ-010 | Q2 Launch One-Pager | On Track | Sofia Ruiz | 2026-04-17 | 65% |
| PRJ-011 | SEO Content Backlog — Q2 Batch | Overdue | Amara Okafor | 2026-04-05 | 55% |
| PRJ-012 | Trade Show Booth — ODSC East 2026 | On Track | Ben Alvarez | 2026-05-05 | 50% |
| PRJ-013 | Email Deliverability Audit | Blocked | Marcus Lee | 2026-04-30 | 20% |
| PRJ-014 | HubSpot Cleanup — Contacts + Workflows | At Risk | Priya Shah | 2026-04-22 | 48% |
| PRJ-015 | Brand Asset Library Migration — Frontify to Bynder | Overdue | Theo Kim | 2026-04-08 | 72% |

---

## Key Flagged Tasks (for summary pre-seed)

These are the items that should appear in the Monday morning summary view. Use these to pre-populate the summary page so it renders immediately on load.

| Task ID | Project | Title | Assignee | Due | Flag Reason |
|---|---|---|---|---|---|
| TSK-001-3 | PRJ-001 | Legal review of email copy | unassigned | 2026-04-10 | Blocked + unassigned; overdue by 4 days |
| TSK-007-3 | PRJ-007 | Audience research from analytics | unassigned | 2026-04-03 | Blocked + unassigned; overdue by 11 days |
| TSK-013-2 | PRJ-013 | Vendor NDA + SOW signed (Mailhealth Inc) | Marcus Lee | 2026-04-05 | Blocked; procurement delay 14 days |
| TSK-003-5 | PRJ-003 | SEO redirects mapping | unassigned | 2026-05-01 | Unassigned, no owner claimed in 4 weeks |
| TSK-008-4 | PRJ-008 | Co-branded landing page | unassigned | 2026-04-22 | Unassigned; no internal owner claimed |
| TSK-011-3 | PRJ-011 | Freelancer drafts (12 articles) | Amara Okafor | 2026-04-01 | Overdue; freelancer (Mira Kovac) went dark |
| TSK-002-2 | PRJ-002 | Keynote speaker confirmations (3) | Anika Raman | 2026-04-01 | Overdue; 2 of 3 confirmed, Dr. Patel unresponsive |
| TSK-014-3 | PRJ-014 | Audit 63 active workflows | Priya Shah | 2026-04-05 | Scope 30% larger than scoped; at risk of missing 4/22 |

---

## Status Badge Colors

Use these exact labels in the UI. Match to the color tokens in `design-refs/README.md`.

| Status | Display Label | Color Token |
|---|---|---|
| blocked | BLOCKED | status-blocked (#E03131) |
| at_risk | AT RISK | status-at-risk (#F76707) |
| on_track | ON TRACK | status-on-track (#2F9E44) |
| overdue | OVERDUE | status-overdue (#495057) |
| completed | COMPLETED | status-completed (#ADB5BD) |

---

## Summary Page Ordering (pre-seeded state)

The summary page as Rachel sees it on Monday April 14, 2026:

**Overdue (2 projects)**
1. SEO Content Backlog — Q2 Batch (PRJ-011) — Amara Okafor
2. Brand Asset Library Migration (PRJ-015) — Theo Kim *(note: PRJ-015 is "controlled tail" per 4/10 comment — prototype should show the comment context)*

**Blocked (3 projects)**
3. Launch Email — Q2 Product v3 (PRJ-001) — Marcus Lee
4. Paid Ads Reactivation (PRJ-007) — Priya Shah
5. Email Deliverability Audit (PRJ-013) — Marcus Lee

**At Risk (4 projects)**
6. GreenPath Summit 2026 (PRJ-002) — Anika Raman
7. Website Rebrand Phase 2 (PRJ-003) — Theo Kim
8. Partner Co-Marketing (PRJ-008) — Ben Alvarez
9. HubSpot Cleanup (PRJ-014) — Priya Shah

**On Track (5 projects)**
10. Quarterly Stakeholder Deck Q2 (PRJ-009) — Rachel Torres
11. Q2 Launch One-Pager (PRJ-010) — Sofia Ruiz
12. Lifecycle Email Overhaul (PRJ-004) — Jenna Pak
13. Customer Case Study Series Q2 (PRJ-005) — Hana Nakamura
14. Trade Show Booth ODSC East (PRJ-012) — Ben Alvarez

**Completed — collapsed by default (1 project)**
15. Q1 Marketing Retro Report (PRJ-006) — Rachel Torres

---

## Illustrative Data Note

All project names, owner names, task IDs, and dates above are drawn from the research data and are real fixtures, not invented. If you replace this team with a different account for the live demo, update all names, IDs, and dates throughout — do not leave GreenPath data mixed with a different team's data.
