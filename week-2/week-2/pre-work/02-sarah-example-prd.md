# Weekly Cross-Project Summary - PRD

**Author:** Sarah Chen
**Feature owner:** Sarah Chen (PM) with AI Platform team (eng)
**Status:** Draft, to test via prototype + evals before committing to build
**Last updated:** April 8, 2026

---

## Problem Statement

Team leads on TaskFlow's mid-market accounts cannot see across their projects inside the product. To compensate, they maintain parallel spreadsheets that list every active project, its owner, current status, next deadline, and blockers, updated manually twice a week. That parallel spreadsheet is the operational source of truth for how these teams actually run, which means TaskFlow is losing 45 to 60 minutes per team lead per week to manual sync work and carrying a live churn signal in every account where the spreadsheet exists.

## Research Summary

- **Rachel Torres, Marketing Ops Manager, GreenPath Studios** (45-person agency, 8 months on TaskFlow, interview 2/20/2026). Keeps a Google Sheet she calls "The Real Dashboard," updated Mondays and Wednesdays. Estimates the weekly cross-project view would save her at least 1 hour. Described what she wants precisely: "Across all my projects, what's due this week, what's overdue, and where there's a blocker. Grouped by project." Exit condition stated verbatim: "If I still need my Google Sheet a year from now, I'll seriously evaluate switching."

- **Rachel's Monday sync cost.** Runs a 15-minute standup, then spends 20 minutes updating TaskFlow afterward. Only 4 of her 12 teammates update the tool directly. Self-described as "a human sync engine." Confirms the load-bearing user pattern: one team lead doing ICs' sync work for them.

- **Meridian Corp, enterprise account** (TK-1201, 2/3/2026). Dashboard timed out on 50+ active projects. Their stated workaround: "We've had to start using spreadsheets." Same pattern at enterprise scale.

- **Survey signal, mid-market.** Respondent 2 (marketing manager, 45-person agency): "No cross-project view, I can't see everything due this week in one place." Respondent 22 (marketing director, 110-person retail): cross-project visibility also named as biggest frustration. Pattern consistent across the mid-market segment.

- **AI appetite exists but context matters.** Rachel used TaskFlow's existing task summary feature and found it "surprisingly helpful." Flagged that the AI doesn't know team-specific terminology ("GTM launch," "Tier 1 campaign"). Survey respondent 17 echoed: "AI doesn't know anything about our product context, suggestions are generic." AI feature adoption is there; grounding is the gap.

- **Competitive context.** Monday.com has a "my work" portfolio view. Asana has Portfolios. Neither is AI-generated, both are filter-driven. This feature is a differentiated take: the same cross-project operational view, generated and prioritized by the AI using the team's own data.

## Users and Use Cases

**Primary: Team leads in mid-market accounts.** Marketing ops managers, agency project managers, professional services delivery leads. 10 to 30 direct reports, 15 to 30 active projects, 3 to 8 months on TaskFlow. They own the Monday morning cross-project ritual today and pay the sync tax.

**Secondary: Individual contributors who glance at the summary.** Get a read on their team's week without digging through the board. Not the user whose pain we are solving, but a beneficiary.

**Excluded from v1:** Admins, billing users, viewer-only roles. Enterprise customers with SSO and RBAC requirements (separate track, see TK-1202, TK-1208, TK-1213). Cross-org or cross-workspace summaries.

## User Journey (with Ins and Outs)

The prototype covers five pages. For each, the "way in" (arriving context) and "way out" (exit action) are explicit.

1. **Landing page** (TaskFlow marketing surface).
   - Way in: External link, Slack share, search. User arrives cold with zero context.
   - Way out: Click "Try the dashboard" and land in login. The promise on the landing page is "see every project in one place on Monday morning."

2. **Login** (fake persona capture).
   - Way in: From landing, or from a cold bookmark. User has declared intent.
   - Way out: Submit login, drop into dashboard pre-seeded with Rachel's 15 GreenPath projects.

3. **Dashboard** (existing TaskFlow shell).
   - Way in: Just logged in, Monday morning, ready to plan the week.
   - Way out: Notice the "Weekly Summary" entry point (nav item or dashboard card) and click through.

4. **Weekly summary feature** (the feature under test).
   - Way in: Clicked from dashboard, Monday morning, expecting a cross-project read.
   - Way out: Three plausible exits. (a) Click a specific blocker to open the source task. (b) Share or export the summary (copy to clipboard, send to Slack). (c) Dismiss an item (marks it reviewed, removes from next week's summary).

5. **Exit** (action confirmation).
   - Way in: Took an action on the summary.
   - Way out: Back to dashboard or into a task. Loop closed.

The ins-and-outs framing matters specifically for eval design: the summary is not evaluated in isolation, it is evaluated as "what a team lead reads on Monday morning and trusts enough to act on." Context changes the rubric.

## Goals

1. **Reduce weekly sync overhead for target users by 30+ minutes/week,** measured via in-product survey at 30 and 60 days post-launch.
2. **Hit 40% weekly active usage of the summary feature among mid-market team leads** within 60 days of GA.
3. **Move the "maintains parallel spreadsheet" rate** (measured by in-product prompt) **from ~70% of mid-market team leads to under 40%** within 90 days.
4. **Eval quality bar met before ship:** completeness >= 4.0/5 avg, hallucination rate 5/5 on 95%+ of test cases, actionability >= 4.0/5 avg.

## Non-Goals

1. **Not a real-time collaborative surface.** No live editing, no @mentions inside the summary. This is a read-and-route artifact.
2. **Not a replacement for the task board or project detail view.** The summary links out; it doesn't duplicate the full project surface.
3. **Not a custom report builder.** No column picker, no filter UI. The AI decides what to surface. That is the whole bet.
4. **Not a cross-workspace or cross-organization view.** v1 is within a single workspace.
5. **Not customizable terminology in v1.** Team-specific vocabulary (the GreenPath "GTM launch" pattern) is a known gap, deferred to v2.

## Functional Requirements

1. **Cross-project summary generation.** On demand (button) and on schedule (auto-generated Sunday night, ready for Monday morning). Pulls from existing task data: tasks, owners, due dates, status, comments from the last 7 days.
2. **Grouping by project.** Summary organized as one block per active project, projects ordered by urgency (overdue > due this week > blocked > on track).
3. **Time-range selection.** Default "this week" (Mon-Sun of current calendar week). Dropdown supports "next week," "last 2 weeks," "custom range."
4. **Blocker and risk highlighting.** AI flags tasks where risk signals are present in the data: stalled status, overdue, comments with escalation language, missed dependencies. Each flag is linked to the source task.
5. **Click-through to source.** Every item in the summary is a link to the underlying task, project, or comment thread. No orphaned text.
6. **Dismiss / hide.** Team lead can mark an item as reviewed, which removes it from next week's summary and logs feedback for the AI's grounding.
7. **Share / export.** Copy to clipboard (markdown format), send to Slack channel via existing integration, export as PDF.
8. **Provenance.** Every AI-generated claim has a "why this was flagged" hover that shows the source data (e.g., "Task X is blocked: status changed to Blocked on 4/5, last comment '@sarah waiting on legal'").
9. **Feedback loop.** Thumbs up/down on each summary section. Feedback is logged for quality tracking and future prompt iteration.

## Riskiest Assumption

**My product only works if the AI can consistently produce a weekly summary that surfaces every real blocker, fabricates no owners or dates, and ranks project urgency the way a team lead would rank it.**

This is a quality assumption, not an adoption assumption. Rachel already told us she wants this feature. The question is whether the AI output will be trustworthy enough that she will stop maintaining her spreadsheet. If the summary misses one real blocker per week, or hallucinates one deadline, a team lead will keep double-checking by hand. The spreadsheet wins unless the AI clears the trust bar. Evals are how we find out before we ship.

## Eval Plan

Preview only. The full harness gets built in the Week 2 workshop.

**Test set: 8 test cases.** Synthetic project datasets mirroring real TaskFlow data structures, each with known ground truth (which blockers exist, which deadlines are real, which projects should surface first).

- **Easy (2 cases):** 5 projects, 1 clear blocker each, no ambiguity. A competent summarizer should nail these.
- **Realistic (3 cases):** 15-20 projects, 3-5 mixed-signal blockers (some real, some stale status that looks like a blocker but isn't), mixed due dates including some in the past that are actually completed. Mirrors Rachel's actual workload.
- **Hard (2 cases):** 25+ projects, contradictory signals (comments saying "unblocked" but status still "Blocked"), missing owners, inherited tasks from archived projects.
- **Adversarial (1 case):** Project data designed to tempt hallucination: task titled "Q2 launch" with no owner, comment thread ending mid-sentence, deadline field empty but a comment mentions "end of week."

**Rubric: 4 criteria, 1-5 scale.**

| Criterion | 5/5 | 1/5 | Weight |
|-----------|-----|-----|--------|
| Completeness | Every real blocker and due-this-week item surfaced | Misses more than half of real blockers | High |
| Hallucination rate | Zero fabricated owners, dates, or status claims | Multiple invented facts | Critical |
| Actionability | Each item is specific, linked, and has a clear next step | Vague statements ("check in on X") with no linkage | High |
| Readability | Scannable in under 60 seconds, grouped coherently | Wall of text, inconsistent structure | Medium |

**Grading method: LLM-as-judge via headless Claude Code.** Python script (`scripts/run-evals.py`) shells out to `claude -p` once per test case with the judge prompt, collects JSON scores, writes results table. No Anthropic API key required.

**Go/no-go thresholds:**
- Ship if: completeness avg >= 4.0, hallucination 5/5 on 95%+ of cases, actionability avg >= 4.0, zero critical failures.
- Iterate if: any criterion below 3.5 avg, or hallucination scores below 5 on more than 5% of cases.
- Pivot if: hallucination rate averages below 4.0 even after two prompt iterations (reliability is the product; if we cannot clear this bar, the feature does not ship).

## Success Metrics

**30 days post-launch (GA in mid-market segment):**
- 25%+ weekly active usage among mid-market team leads
- >60% thumbs-up rate on summary sections with feedback

**60 days:**
- 40%+ weekly active usage
- In-product survey: "This summary replaced at least part of my manual workflow" >= 50% agree
- Zero reported critical hallucinations (wrong owner/date on real task) in production

**90 days:**
- "Maintains parallel spreadsheet" rate drops from baseline ~70% to under 40% among active summary users
- 2+ customer testimonials citing time saved (the Rachel-style story, on the record)
- Expansion signal: 3+ accounts upgrade or add seats citing the summary feature

## Open Questions

1. **Generation timing.** Sunday night pre-generate, or generate on first Monday view? Pre-gen lets us catch failures before users see them; on-demand keeps data fresh but risks a slow first load. Test both in the prototype.
2. **Grounding signals beyond the task board.** Rachel wants team-specific terminology. Do we ingest a team vocabulary file in v1.5, or wait for the broader grounding work the AI platform team is scoping?
3. **Share surface.** Does "share to Slack" land in a channel, a DM, or both? Rachel's team uses channels for project updates. Validate in the workshop with the prototype share path.
4. **Enterprise deferred, or enterprise blocker?** Meridian hit the same pain but has SSO as a hard renewal blocker (TK-1202). Does the summary feature gate on enterprise readiness, or ship to mid-market first and back-fill to enterprise when SSO lands?
5. **Feedback signal richness.** Is thumbs up/down enough to improve the AI's grounding over time, or do we need a "what was wrong with this?" free-text prompt on thumbs-down? Defer to v1.5 if thumbs are sufficient, but instrument now.
