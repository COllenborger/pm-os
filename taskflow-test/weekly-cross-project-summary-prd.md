# Weekly Cross-Project Summary — PRD

**Feature owner:** PM with AI Platform team (eng)
**Status:** Draft — to validate via prototype and evals before committing to build
**Last updated:** 2026-04-18

---

## 1. Problem Statement

Team leads on TaskFlow mid-market accounts cannot see across their active projects inside the product. To compensate, they maintain parallel spreadsheets listing every project, its owner, current status, next deadline, and blockers — updated manually two or more times per week. That spreadsheet is the operational source of truth, which means TaskFlow is losing 45 to 60 minutes per team lead per week to manual sync work and carrying a live churn signal in every mid-market account where the spreadsheet exists.

---

## 2. Research Summary

- Rachel Torres (GreenPath Studios, 45-person agency, 8 months on TaskFlow) maintains a Google Sheet called "The Real Dashboard," updated every Monday and Wednesday. Estimates the cross-project view would save her at least one hour per week. Stated her requirement verbatim: "Across all my projects, what's due this week, what's overdue, and where there's a blocker. Grouped by project." Exit condition, also verbatim: "If I still need my Google Sheet a year from now, I'll seriously evaluate switching." (Interview: Rachel Torres, 2/20/2026)

- Rachel's Monday sync pattern: 15-minute standup, then 20 minutes updating TaskFlow afterward. Only 4 of 12 teammates update the tool directly. Self-described as "a human sync engine between the meeting and the tool." Confirms the load-bearing user pattern — one team lead absorbing ICs' sync work. (Interview: Rachel Torres, 2/20/2026)

- Meridian Corp dashboard timed out after crossing 50 active projects. Stated workaround: "We've had to start using spreadsheets." Same parallel-spreadsheet pattern at enterprise scale. (Ticket: TK-1201, 2/3/2026)

- Survey respondent 2 (marketing manager, 45-person agency, daily user): "No cross-project view — I can't see everything due this week in one place." Named as biggest frustration. (Survey: n=25, Q3, 2/1/2026)

- Survey respondent 22 (marketing director, 110-person retail, weekly user): cross-project visibility named as biggest frustration. (Survey: n=25, Q3, 2/12/2026)

- Survey respondent 17 (PM, EdTech, 120 employees, daily user): "AI doesn't know anything about our product context — suggestions are generic." AI appetite is confirmed; grounding is the gap. (Survey: n=25, Q5, 2/10/2026)

- Rachel uses TaskFlow's existing AI task summary feature and finds it "surprisingly helpful" for Monday reviews, but always edits output to match team terminology — "GTM launch" means VP approval required; "Tier 1 campaign" triggers a specific review gate. Generic AI output is not trusted without team context. (Interview: Rachel Torres, 2/20/2026)

- Monday.com has a "my work" portfolio view; Asana has Portfolios. Both are filter-driven, not AI-generated. Neither produces a prioritized, data-grounded weekly summary automatically. TaskFlow already has the AI infrastructure; this feature is a differentiated application of it. (Competitive: Monday.com and Asana product surfaces, 2026)

---

## 3. Users and Use Cases

**Primary: Team leads in mid-market accounts.** Marketing ops managers, agency project managers, professional services delivery leads. 10–30 direct reports, 15–30 active projects, 3–8 months on TaskFlow. They own the Monday morning cross-project ritual today and pay the sync tax. Rachel Torres at GreenPath Studios is the reference persona.

**Secondary: Individual contributors who receive or view the summary.** Get a read on the team's week without digging through every project board. Not the user whose pain we're solving, but a beneficiary of the shared artifact.

**Excluded from v1 (with rationale):**
- Admins and billing users — different jobs; don't run cross-project rituals
- Viewer-only roles — no task ownership; different information need
- Enterprise accounts with SSO/RBAC requirements — separate compliance track (TK-1202, TK-1208, TK-1213); don't block mid-market ship
- Cross-workspace or cross-organization summaries — scope explosion risk; single-workspace use case validated first

---

## 4. User Journey with Ins and Outs

The prototype covers five screens. For each, the way in and the way out are explicit.

**Screen 1 — Landing page**
- **Way in:** External link, Slack share, or cold search. User arrives with no context about the weekly summary feature.
- **What happens:** Page frames TaskFlow as the mid-market team lead's operational hub. Hero CTA is "See your whole week in one place." One screenshot of the weekly summary card is visible.
- **Way out:** Click "Try it now" → one-click login drops user into a pre-seeded dashboard as Rachel Torres.

**Screen 2 — Login (one-click demo mode)**
- **Way in:** Clicked "Try it now" from landing with declared intent.
- **What happens:** Single button: "Enter as Rachel Torres — GreenPath Studios." No form fields, no email, no password. Drops user into dashboard pre-seeded with 15 GreenPath projects.
- **Way out:** Click the button → arrive at the dashboard.

**Screen 3 — Dashboard (TaskFlow shell)**
- **Way in:** Just logged in, Monday morning framing, 15 projects visible in the sidebar with status indicators.
- **What happens:** Standard TaskFlow dashboard with project list and a top-of-page banner: "Your weekly summary is ready — 3 items need attention." A Weekly Summary card is visible in the main panel alongside other project views.
- **Way out:** Click the Weekly Summary card or the nav item → arrive at the summary feature.

**Screen 4 — Weekly Summary (the feature under test)**
- **Way in:** Arrived from dashboard expecting a Monday morning cross-project read. Mental model is already set.
- **What happens:** AI-generated summary grouped by project, ordered by urgency: Overdue → Blocked → At Risk → On Track. Each project block shows a status badge, owner, completion percentage, and a bulleted list of flagged tasks with provenance. Every flagged item is a link to the source task.
- **Way out:** Three exits: (a) click a specific blocker link to open the source task; (b) share to Slack via the existing integration; (c) dismiss a flagged item and return to the summary.

**Screen 5 — Exit modal (reaction capture)**
- **Way in:** User has read the summary and taken an action (or spent 30+ seconds reading without acting).
- **What happens:** Three-question modal: "Did this replace any part of your manual review? (Yes / Partially / No)" / "What would you change?" (free text, optional) / "Would you use this every Monday? (Yes / Yes, if... / No)"
- **Way out:** Submit → modal closes, user returns to dashboard. Responses logged for signal.

---

## 5. Goals and Non-Goals

**Goals (measurable):**
1. Reduce weekly sync overhead for target users by 30+ minutes/week, measured via in-product survey at 30 and 60 days post-launch.
2. Hit 40% weekly active usage of the summary feature among mid-market team leads within 60 days of GA.
3. Move the "maintains a parallel spreadsheet" rate from ~70% of mid-market team leads to under 40% within 90 days, measured by in-product prompt on first Monday login each week.
4. Clear eval quality bar before ship: completeness avg ≥ 4.0/5, hallucination rate 5/5 on ≥ 95% of test cases, actionability avg ≥ 4.0/5.

**Non-Goals:**
1. **Not a real-time collaborative surface.** No live editing, no @mentions inside the summary. This is a read-and-route artifact, not a communication channel. Adding collaboration features would change the trust model entirely.
2. **Not a custom report builder.** No column picker, no filter UI. The AI decides what to surface — that is the whole bet. Adding user controls turns this into a filtered view, which Monday and Asana already do.
3. **Not a cross-workspace or cross-organization view.** v1 is scoped to a single workspace. Cross-org requires a separate trust, permissions, and data isolation design.
4. **Not a replacement for the task board or project detail view.** The summary links out to tasks; it does not replicate or replace the project surface. Any team lead who wants to edit, assign, or comment still goes to the task.
5. **Not customizable terminology in v1.** The "GTM launch" and "Tier 1 campaign" grounding gap Rachel flagged is a real product need — but it's a separate AI grounding workstream. Deferred to v2.

---

## 6. Functional Requirements

1. **Cross-project summary generation.** On demand via a "Regenerate" button, and on schedule (auto-generated Sunday night at 11 PM user local time, ready for Monday morning). Data source: all tasks, owners, due dates, statuses, and comments from the last 7 days across all active projects in the workspace.

2. **Project grouping and urgency ordering.** Summary organized as one block per active project. Projects ordered by urgency: Overdue → Blocked → At Risk → On Track. Completed projects excluded by default. Within each project block, flagged tasks ordered by due date ascending.

3. **Blocker and risk detection.** The AI identifies risk signals: tasks with `status: blocked`, tasks overdue by any amount, tasks with `assignee: unassigned` and a due date within 7 days, and comments containing escalation language ("waiting on," "no owner," "slipping," "behind," "blocked"). Each flagged item links to its source task.

4. **Time-range selector.** Default: "this week" (Mon–Sun of current calendar week). Dropdown supports "next week," "last 2 weeks," and "custom range (up to 4 weeks)."

5. **Click-through to source.** Every project name, task title, assignee name, and quoted comment in the summary is a hyperlink to the underlying record in TaskFlow. No orphaned text that can't be traced.

6. **Provenance hover.** Each AI-generated flag has a "why flagged" tooltip showing the source data. Example: "TSK-001-3 'Legal review of email copy': status set to Blocked on 4/2/2026. Last comment 4/8 (Marcus Lee): 'Need legal to unblock this week or we miss the send window.'"

7. **Dismiss / mark reviewed.** Team lead can dismiss any flagged item. Dismissed items are removed from next week's summary and the dismissal is logged as a negative feedback signal for grounding quality tracking.

8. **Share / export.** Copy to clipboard (markdown format), post to a Slack channel via the existing Slack integration, export as PDF.

9. **Thumbs up/down per project block.** Shown after each project block in the summary. Responses logged for quality tracking and future prompt iteration.

10. **Completed projects excluded by default.** A "Show completed" toggle re-includes them with visual distinction (dimmed, collapsed) so they don't crowd the operational view.

---

## 7. Riskiest Assumption

My product only works if the AI can consistently surface every real blocker and overdue item across all active projects, fabricate no owner names, due dates, or task statuses, and order projects by urgency in the way a team lead would rank them without any manual prompting.

---

## 8. Eval Plan

### Rubric

| Criterion | Weight | 5/5 | 1/5 |
|---|---|---|---|
| hallucination | Critical | Zero fabricated owners, dates, task IDs, or status claims — every fact in the summary traces directly to the input data. | Multiple invented facts present; owners, dates, or statuses appear that have no basis in the input data. |
| completeness | High | Every real blocker, overdue item, and due-this-week task is surfaced; no signal in the input data is silently omitted. | More than half of the real blockers or overdue items in the input are missing from the summary. |
| actionability | High | Each flagged item names the specific task, its owner (or flags "unassigned"), its due date, and a concrete next step or question a team lead can act on immediately. | Vague statements such as "check in on X project" with no task-level specificity, no owner named, no due date cited. |
| urgency_ranking | Medium | Projects are ordered so the highest-risk items appear first; a team lead reading top-to-bottom hits the most urgent item within the first two project blocks. | On-track projects appear ahead of blocked or overdue ones; ordering is random or alphabetical. |
| readability | Low | Summary is scannable in under 60 seconds, grouped coherently by project, with status labels that are distinct and not verbatim-repeated for every task. | Wall of text with no project grouping, repeated boilerplate per item, requires multiple re-reads to extract any actionable signal. |

### Test Cases

| ID | Difficulty | What it tests |
|---|---|---|
| easy-01 | Easy | 4 projects, 1 obvious blocked task with a clear owner and due date. Should surface exactly one flag. |
| easy-02 | Easy | 3 all-on-track projects, no blockers, nothing overdue. Should produce a clean summary with zero false alarms. |
| realistic-01 | Realistic | 15 GreenPath projects: 3 blocked, 4 at risk, 1 overdue. Mirrors Rachel's actual Monday workload. |
| realistic-02 | Realistic | 8 projects where "blocked" status on 3 tasks is contradicted by comment threads saying the issue is resolved. AI must not flag resolved items as active blockers. |
| realistic-03 | Realistic | 12 projects with 6 tasks due within 3 days and 3 overdue; correct urgency ordering required under time pressure. |
| hard-01 | Hard | 20 projects with contradictory signals: status = "blocked" on 4 tasks, but comments say "unblocked, moving forward." AI must use comment context to downgrade the flags. |
| hard-02 | Hard | 15 projects where 5 critical tasks have no assignee field. AI must flag missing ownership explicitly without inventing an owner name. |
| adversarial-01 | Adversarial | Project "Q2 Campaign Sprint" with no owner field, comment thread ending mid-sentence, no due date set — but a comment mentions "need this by end of week." AI must report the ambiguity, not hallucinate a deadline or owner. |

### Grading Method

LLM-as-judge via headless Claude Code. `scripts/run-evals.py` shells out to `claude -p` once per test case to generate the feature output, then a second time with a judge prompt that scores against the rubric criteria. Scores are returned as JSON (1–5 per criterion). The harness aggregates per-criterion averages, applies weights (Critical × 3, High × 2, Medium × 1, Low × 0.5), and writes `results.json` + `results.md`. No Anthropic API key required.

### Ship / Iterate / Pivot Thresholds

- **Ship if:** hallucination scores 5/5 on ≥ 95% of test cases (including adversarial-01), completeness avg ≥ 4.0, actionability avg ≥ 4.0, urgency_ranking avg ≥ 3.5, and no single test case produces a hallucination score below 3.
- **Iterate if:** any criterion avg falls below 3.5, or hallucination scores below 5 on more than 5% of cases, or urgency_ranking avg below 3.0, or actionability fails on either realistic-01 or realistic-02.
- **Pivot if:** hallucination avg remains below 4.0 after two full rounds of prompt revision — reliability is the product; if the AI cannot clear this bar with real project data structures, the feature does not ship until the grounding problem is solved at the infrastructure level.

---

## 9. Success Metrics and Open Questions

**30 days post-launch (GA to mid-market segment):**
- 25%+ weekly active usage among mid-market team leads who have ≥ 10 active projects
- >60% thumbs-up rate on summary project blocks where feedback was submitted

**60 days:**
- 40%+ weekly active usage among eligible team leads
- In-product survey: "This summary replaced at least part of my manual review workflow" ≥ 50% agree
- Zero reported critical hallucinations (invented owner, date, or task status on a real project) in production

**90 days:**
- "Maintains a parallel spreadsheet for cross-project tracking" rate drops from ~70% baseline to under 40% among active summary users (measured via in-product prompt at first login each week)
- 2+ on-the-record customer testimonials citing time saved
- Expansion signal: 3+ accounts upgrade tier or add seats citing the summary feature

**Open Questions:**

1. **Pre-generate vs. on-demand.** Sunday-night pre-generation lets us catch failures before users see them on Monday; on-demand keeps data fresher but risks a slow first load at peak time. Test both in the prototype and observe latency tolerance before committing.

2. **Team vocabulary grounding.** Rachel needs the AI to know "GTM launch" = VP approval required. Do we ingest a team glossary file in v1.5, or wait for the AI Platform team's broader grounding workstream? Unresolved; depends on eng scope.

3. **Share-to-Slack surface.** Does the Slack send land in a public channel, a private channel, or as a DM? Rachel's team uses channels for project updates. Validate preferred surface in prototype testing before building the integration.

4. **Enterprise track.** Meridian Corp has the same pain (TK-1201) but is blocked on SSO renewal (TK-1202). Does the summary ship mid-market first and back-fill to enterprise when SSO lands, or does the enterprise dependency gate the whole feature? Needs a decision before GA planning starts.

5. **Thumbs-down detail.** Is binary thumbs up/down enough signal to improve grounding over time, or do we need a free-text "what was wrong?" field on thumbs-down? Instrument the option in v1 even if not surfaced in the UI, so it can be toggled on without a re-deploy.

---

## 10. Design Reference and Prototype Fidelity

See `design-refs/README.md` for the full visual reference doc and screenshot list. See `fixtures.md` for the seeded data spec.

**Reference products:**
- **Notion** — borrow the card-based layout for project blocks: white cards on a light gray background, clean sans-serif type (Inter or equivalent), generous whitespace between sections, no loud visual hierarchy. The sidebar nav density and collapsible sections are the right structural model for the project list.
- **Monday.com** — borrow the status badge system: color-coded pills (red = Blocked, amber = At Risk, green = On Track, gray = Overdue). The project-level grouping in Monday's portfolio view — one row per project with status, owner, and progress visible at a glance — is the right model for the summary's project blocks.
- **Atlassian Jira** — borrow the issue-row density for individual flagged tasks: task ID + title + assignee + due date on a single scannable row, no need to expand or click to see the basics. The provenance hover mirrors Jira's issue-linkage pattern (blocked-by, linked issues shown inline with context).

**Explicit avoid list:**
- Purple primary buttons (Monday default, Notion default)
- Gradient backgrounds of any kind
- Emoji-heavy empty states (e.g., "🎉 You're all caught up!")
- Shadcn default component styling (buttons, inputs, cards)
- "Acme Corp" or "Project Alpha" placeholder text
- Loading skeletons — demo renders instantly, data is pre-seeded
- Empty states — dashboard is always pre-populated with GreenPath data
- Lorem ipsum anywhere in the UI

**Seeded data spec** — see `fixtures.md` for full tables. Summary: 15 GreenPath Studios Marketing Ops projects drawn from the research data (`week-2/week-2/sample-data/taskflow-projects.json`), Rachel Torres as team lead, 11 named team members, statuses distributed as: 3 Blocked, 4 At Risk, 2 Overdue, 5 On Track, 1 Completed.

**UI-state rules:**
- Login is one click — no form fields, no email, no password
- Dashboard always shows projects in the sidebar with status indicators and a "Weekly Summary ready" banner
- Summary page always renders populated — no first-load skeleton, no spinner
- Every clickable element either navigates correctly or is visibly labeled "(demo only)"
- Exit modal fires once per session after the user has spent 30+ seconds on the summary page
