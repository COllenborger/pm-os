# PRD Best Practices for AI Prototypes

A PRD for an AI prototype is not a standard PRD with a paragraph about "the AI model" tacked on. Three things make it different, and all three are why Week 2 builds its own skill for it.

The first difference is the quality bet. For a normal feature, the risk is usually "will users adopt it." For an AI feature, the risk is almost always "is the output reliably good enough that users will trust it." Your PRD has to name that bet out loud.

The second difference is the eval plan. Standard PRDs end at success metrics. AI PRDs have to include the rubric, test cases, and thresholds that turn "is this good?" into a number you can run and re-run. Without that, you do not have a spec. You have a hope.

The third difference is the journey. A naked AI output tells you nothing about whether a user would trust it. You have to frame the feature inside a plausible way in and a plausible way out, or your prototype test measures confusion instead of trust. See `ins-and-outs.md` for the full treatment.

This doc is the reference you read once to internalize those differences, then paste the key requirements into your skill-creator invocation when you build your PRD skill in `build-your-prd-skill.md`. You also come back to it during self-review of your skill's output.

## The 10 required sections

Every PRD your skill produces should hit all ten. When you self-review its output against `sarah-example-prd.md`, you should be able to point at every section in both.

### 1. Problem Statement

What it is: Three sentences or fewer naming who has the problem, what the problem is, and why it matters. Cites specific Week 1 data (an interview quote, a ticket, a survey response).

Why it matters for AI: If the problem statement is "users want better summaries," the AI will generate plausible generic output that passes no real test. Sharp problem statements force sharp features.

Good: "Team leads on mid-market accounts maintain parallel spreadsheets because TaskFlow has no cross-project view. Rachel at GreenPath updates hers twice a week. That spreadsheet is a live churn signal."

Weak: "Users have trouble seeing their work across projects and want better tools for tracking."

### 2. Research Summary

What it is: A bulleted list of the Week 1 findings that ground the PRD. Each bullet cites a source (interview, ticket ID, survey respondent number, competitive analysis).

Why it matters for AI: AI features earn their keep by being grounded in real inputs. A research summary with specific quotes and numbers is what lets the AI build from reality instead of plausibility.

Good: "Rachel Torres, GreenPath, 2/20/2026 interview: keeps a sheet called 'The Real Dashboard,' updated Mon/Wed. Exit condition stated verbatim: 'If I still need my Google Sheet a year from now, I'll seriously evaluate switching.'"

Weak: "User research showed people want a cross-project view."

### 3. Users and Use Cases

What it is: Primary user named concretely (role, company size, workflow context), plus secondary beneficiaries and explicit exclusions.

Why it matters for AI: The user defines the rubric. A summary for a team lead is different from a summary for an exec. Naming the user constrains the feature.

Good: "Primary: team leads in mid-market accounts, 15-30 active projects, 10-30 direct reports, 3-8 months on the product. Excluded from v1: admins, enterprise SSO-gated accounts, viewer-only roles."

Weak: "Product managers and team members."

### 4. User Journey with Ins and Outs

What it is: A 4 to 6 screen journey. For each screen, the way in (arriving context) and the way out (exit action) are explicit. See `ins-and-outs.md`.

Why it matters for AI: AI output is judged in context. A summary page with no entry and no exit is a demo, not a feature. The shell is the stage. Without a stage, your eval measures confusion.

Good: "Dashboard. In: Monday morning, logged in as Rachel. Out: notices the Weekly Summary entry and clicks. Feature. In: clicked in with a real expectation. Out: click a blocker, share to Slack, or dismiss."

Weak: "User opens the summary feature and sees the output."

### 5. Goals and Non-Goals

What it is: Goals as measurable outcomes (percent lift, time saved, rate moved). Non-Goals name at least three things the PRD is deliberately not building, specifically.

Why it matters for AI: AI features expand to fill any ambiguity. Non-Goals keep the prototype testable instead of sprawling.

Good: "Non-Goal: not a custom report builder. No column picker, no filter UI. The AI decides what to surface. That is the whole bet."

Weak: "Non-Goal: we are not building a full analytics product."

### 6. Functional Requirements

What it is: Numbered list. Present tense. Each one testable. Covers generation, grouping, interaction, and provenance.

Why it matters for AI: Functional requirements are the prompt contract for the build. Vague requirements produce vague prototypes.

Good: "Every AI-generated claim has a 'why this was flagged' hover showing the source data (e.g., 'Task X is blocked: status changed to Blocked on 4/5, last comment @sarah waiting on legal')."

Weak: "Show the user why each recommendation was made."

### 7. Riskiest Assumption

What it is: One sentence in "my product only works if the AI can consistently ___" form. A quality assumption, not an adoption one. See `riskiest-assumption-setup.md`.

Why it matters for AI: This is the quality bet. Every rubric criterion should be extractable from this sentence. If the sentence is vague, the evals will be vague.

Good: "My product only works if the AI can consistently surface every real blocker, fabricate no owners or dates, and rank project urgency the way a team lead would rank it."

Weak: "The AI can write good summaries."

### 8. Eval Plan

What it is: The rubric, the test cases, the grading method, and the ship/iterate/pivot thresholds. Detailed enough that your skill can produce four files `run-evals.py` consumes without edits.

Why it matters for AI: This section is where the PRD stops being a document and starts being a spec the harness can run. It is the section standard PRDs do not have.

Good: "8 test cases across easy (2), realistic (3), hard (2), adversarial (1). Rubric: completeness, hallucination, actionability, readability, each with 5/5 and 1/5 anchors. Ship if completeness >= 4.0 avg, hallucination 5/5 on 95%+ of cases, actionability >= 4.0."

Weak: "We will evaluate the quality of the output before launch."

### 9. Success Metrics and Open Questions

What it is: Measurable metrics at 30 / 60 / 90 days post-launch, plus a list of unresolved decisions the PRD is deliberately leaving open.

Why it matters for AI: Metrics at time horizons make "did it work" answerable. Open questions name the things your prototype cannot decide and that user research or later iteration will.

Good: "90-day: 'maintains parallel spreadsheet' rate drops from baseline 70% to under 40% among active summary users. Open: does share-to-Slack land in a channel, a DM, or both?"

Weak: "Success metrics TBD."

### 10. Design Reference and Prototype Fidelity

What it is: The visual and data conventions that stop your prototype from looking like generic AI output. Two to four named reference products (with the specific thing each one does well), a short list of aesthetic defaults to avoid, notes on seeded data, and a stance on loading, empty, and error states. Screenshots of the references live in a `design-refs/` folder next to the PRD.

Why it matters for AI: Claude Code builds what you describe. "A modern SaaS dashboard" produces the average of every dashboard on the internet, which is beige gradients and purple buttons. Named references with screenshots and an explicit avoid-list are how you suppress those defaults. Data fixtures and UI-state rules are how you stop the prototype from feeling like a wireframe and start making it feel like a tool someone would use on Monday morning. Most prototypes that come out of Week 2 looking like AI slop fail in this section, not in section 6.

Good: "Borrow: Linear (sidebar density, keyboard-forward interactions), Height (muted palette, quiet typography), Notion (card style for summary items). Screenshots in `design-refs/linear-projects.png`, `design-refs/height-dashboard.png`, `design-refs/notion-cards.png`. Avoid: purple primary buttons, gradient backgrounds, emoji-heavy empty states, shadcn-default styling, 'Acme Corp' in the nav. Data: 15 seeded projects named after plausible GreenPath workstreams, 3 in Blocked, 2 due this week, realistic owner names drawn from the research. No Lorem ipsum, no 'Project 1 / Project 2'. UI states: no loading skeletons (demo renders instantly), no empty states (the dashboard is pre-populated), login is one click that pre-seeds Rachel, exit is the reaction modal from the Ins and Outs section."

Weak: "Clean, modern, professional. Sample data as needed."

This section is consulted twice: during the User Journey pass (Section 4), and again when you prompt Claude Code to build each screen. Paste the relevant reference screenshot plus the one-line spec for the screen, and the combination produces prototypes that feel like real software instead of AI defaults. If you skip this section, the prototype is the average of every demo on the internet, and nothing about the workshop will feel like a "wow."

## The eval plan shape specifically

This is the section most PMs have never written. It is also the most important, because it is how your skill's output becomes runnable evidence instead of a document.

Your skill must produce four files the eval harness reads. The shapes below are compact. Full examples are available by running `python3 scripts/run-evals.py --init` in an empty folder, which writes starter files you can inspect.

`rubric.json` is a JSON array. One object per criterion.

```
[
  {
    "criterion": "completeness",
    "weight": "High",
    "five_out_of_five": "Every real blocker and due-this-week item surfaced.",
    "one_out_of_five": "Misses more than half of real blockers."
  },
  ...
]
```

`test-cases.json` is a JSON array. One object per test case.

```
[
  {
    "id": "easy-01",
    "description": "Small clean project set with one obvious blocker.",
    "difficulty": "easy",
    "input_data": { ... the input your product prompt will see ... }
  },
  ...
]
```

`thresholds.json` is a JSON object with exactly three keys.

```
{
  "ship_if": "completeness avg >= 4.0, hallucination 5/5 on 95%+ of cases, ...",
  "iterate_if": "any criterion below 3.5 avg, ...",
  "pivot_if": "hallucination averages below 4.0 after two prompt iterations"
}
```

`product-prompt.md` is the plain-text system prompt your AI feature uses to generate output. The harness passes each test case's `input_data` in after this prompt and collects the result for scoring.

Field names are exact. `five_out_of_five`, not "top". `input_data`, not "input". `ship_if`, not "ship". Your skill must emit these names verbatim or the harness rejects the file. If in doubt, compare your skill's output to the `--init` scaffold.

## The test: compare to Sarah's PRD

The fastest self-check is a side-by-side with `sarah-example-prd.md`. Open your skill's output and Sarah's in two tabs. Walk the ten sections. For each one:

- Is the section present in your PRD?
- Does it have a specific equivalent to what Sarah cites (a quote, a number, a named source)?
- If you handed only this section to a teammate, could they tell what you meant?

If any section is missing, thin, or hedged, the fix is to tell your skill-creator-authored skill to strengthen the prompt for that section. That iteration loop on the skill itself is covered in Step 4 of `build-your-prd-skill.md`.

When every section clears the three-question check, you have a PRD the prototype can aim at and the eval harness can grade. That is the bar. Nothing lower is worth handing to Claude Code for the build.
