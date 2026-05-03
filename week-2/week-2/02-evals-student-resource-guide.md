# Student Resource Guide: Evals for Product Prototypes

**Testing Your Riskiest Assumptions with AI Quality Measurement**

Module format: Pre-work videos (watch before workshop) + 2-hour live workshop + post-workshop side quests.

This guide is your reference across the whole module. Read Parts 1-3 during pre-work alongside the three eval videos and `pre-work/riskiest-assumption-setup.md`. Use the Workshop section (3 phases) during the live session. Come back to the Side Quests, FAQ, and Quick Reference after the session.

---

## Module Map

| Component | Format | Time | What You'll Get |
|-----------|--------|------|----------------|
| Part 1: What Are Evals? | Pre-work video 1 + reading | ~20 min | Mental model for why evals matter to PMs |
| Part 2: The Eval Toolkit | Pre-work video 2 + reading | ~25 min | The three eval patterns and when to use each |
| Part 3: From Assumption to Eval | Pre-work video 3 + reading | ~15 min | How to translate a product risk into an eval plan |
| Workshop: Apply the Eval Loop | Live session (3 phases, ~33 min of a 2h workshop) | Setup 10m, Run 15m, Iterate 8m | Eval run with scored test cases + one before/after iteration delta |
| Side Quests | Self-paced | Ongoing | Deeper skills for eval-driven development |

---

# PRE-WORK

---

# Part 1: What Are Evals and Why PMs Need Them

*Companion: pre-work video 1. This section is a reference summary. The video teaches the mental model in depth using TaskFlow as the worked example.*

## The Core Problem

Traditional software either works or it doesn't. You click a button, and the right thing happens every time. AI products are fundamentally different: the same input can produce different outputs, and "different" might mean "slightly varied but fine" or it might mean "completely wrong and dangerous."

This creates a problem that PMs have never had to deal with before: how do you know if your product is working?

You cannot manually review every output. You cannot write a unit test that says "assert output == correct" because there is no single correct answer. And you definitely cannot rely on "it looked good when I tried it a few times."

Evals are the answer. They are systematic, repeatable tests that measure the quality of your AI's outputs across a range of inputs.

## A Definition You Can Use

> **What is an eval?** An eval is a structured test that measures how well your AI's outputs meet specific quality criteria across a representative set of inputs.
>
> It answers one question: "Is this good enough?"
>
> And it answers it with data, not vibes.

## Evals vs. Testing vs. Monitoring

| Practice | When | What It Answers | Who Owns It |
|----------|------|----------------|-------------|
| Unit/Integration Tests | Every code deploy | Does the code run without breaking? | Engineering |
| Evals | During development + before shipping | Is the AI output quality good enough? | PM + Engineering |
| Monitoring | After shipping, ongoing | Is quality degrading in production? | Engineering + PM |
| User Research | Periodically | Do users perceive the quality as good enough? | PM + Design |

As a PM, evals are your primary quality tool. Tests tell you if the system runs. Monitoring tells you if it is still running well. Evals tell you whether what it produces is good enough to ship. That is a product decision, not an engineering decision.

## When Evals Matter Most

Not every AI feature needs a rigorous eval framework.

| Output Stakes | Quality Variability | Eval Investment |
|--------------|-------------------|----------------|
| Low (nice-to-have) | Low (outputs are predictable) | Spot-check manually, move on |
| Low | High | Lightweight eval to find failure modes |
| High (core value prop) | Low | Assertion-based evals for must-have requirements |
| High | High | Full eval suite: LLM-as-judge + assertions + human review |

> **Key Insight:** If the AI output IS the product (not just a helper feature), you need evals. If users will make decisions based on the output, you need evals. If a bad output could damage trust, cost money, or cause harm, you need evals.

## TaskFlow as the running example

Sarah Chen's weekly cross-project summary feature is the running example through this entire module. The riskiest assumption: team leads will only stop maintaining their parallel spreadsheet if the AI-generated summary is complete, accurate, and trustworthy enough on Monday morning. Quality IS the product. A 4.5/5 summary that hallucinates one due date per week loses the trust bet. This is exactly the High-Stakes + High-Variability quadrant in the table above. Evals are how Sarah finds out before she ships.

See `taskflow-scenario.md` for the full scenario, `sarah-example-prd.md` for the full PRD including her eval plan, and `pre-work/riskiest-assumption-setup.md` for the sentence form her assumption uses.

## The PM's Mental Model: Evals as Riskiest Assumption Tests

In traditional products, the riskiest assumption is usually about demand or feasibility. In AI products, a third risk category often dominates: output quality.

**The AI Product Risk Stack**

1. **Desirability Risk:** Do users want AI-generated [thing]? - test with user interviews, landing page tests.
2. **Quality Risk:** Is the AI output good enough? - test with evals.
3. **Consistency Risk:** Is it good enough reliably, not just sometimes? - test with evals across diverse inputs.
4. **Safety Risk:** Can it produce outputs that cause harm? - test with adversarial evals.
5. **Feasibility Risk:** Can we do it at acceptable cost/latency? - test with performance benchmarks.

For most AI prototypes, quality risk is the riskiest assumption. Evals are how you test it. `pre-work/riskiest-assumption-setup.md` teaches you how to name the quality assumption in the exact sentence form that generates a rubric.

---

# Part 2: The Eval Toolkit

*Companion: pre-work video 2. This section is a reference summary. The video demos each eval pattern on the TaskFlow weekly summary.*

## The Eval Triangle

Every eval has exactly three components:

| Component | What It Is | Your Job as PM |
|-----------|-----------|---------------|
| Test Cases | The inputs you will evaluate against | Curate inputs that represent real usage, including edge cases |
| Eval Criteria | The quality dimensions you are measuring | Define what "good" means in specific, measurable terms |
| Grading Method | How you score each output | Choose the right method for each criterion |

## Component 1: Test Cases

Your test cases are the inputs you will run through your AI feature and evaluate. The quality of your eval is directly proportional to the quality of your test cases.

**The Test Case Spectrum**

| Category | Purpose | % of Test Set | Example (TaskFlow Weekly Summary) |
|----------|---------|--------------|-----------------------------------|
| Happy Path | Confirm it works for straightforward cases | 20-30% | 5 active projects, one clear blocker each, no ambiguity |
| Realistic Varied | Test the range of actual usage | 40-50% | 15-20 projects, 3-5 mixed-signal blockers, some stale status noise |
| Challenging | Find the boundary of capability | 15-25% | 25+ projects, contradictory comments ("unblocked" but status still Blocked), missing owners |
| Adversarial / Edge | Discover failure modes | 10-15% | Task titled "Q2 launch" with no owner, truncated comment thread, empty due date but "end of week" mentioned in prose |

> **Common Mistake:** The #1 eval mistake PMs make is testing only the happy path. Rule of thumb: at least 30% of your test cases should make you nervous.

**Where to Get Good Test Cases**

- **Real user inputs.** If you have beta users or internal testers, use their actual inputs.
- **Synthetic generation.** Ask Claude to generate diverse test cases for your use case.
- **Failure brainstorming.** What would a confused user type? A power user? A malicious one?
- **Domain expert input.** If your product serves a specialized domain, ask the expert what the hard cases look like.
- **Existing fixtures.** For the TaskFlow scenario, `sample-data/taskflow-projects.json` already contains a rich set of projects covering all four difficulty tiers. Subset from there instead of writing cases from scratch.

**How Many Test Cases Do You Need?**

| Stage | Test Cases | Rationale |
|-------|-----------|-----------|
| First prototype eval | 5-10 | Enough to spot obvious problems, fast to run |
| Pre-launch eval | 20-50 | Covers the realistic input distribution |
| Production eval suite | 100+ | Statistical confidence, regression detection |

For this course, 8 test cases is the default (matching Sarah's PRD Eval Plan). You are testing a riskiest assumption, not building a production suite.

## Component 2: Eval Criteria

Eval criteria define what "good" means. This is the hardest part for PMs, because it forces you to be specific about quality - something we are usually vague about.

**The Specificity Ladder**

| Level | Example (TaskFlow) | Evaluable? |
|-------|--------------------|-----------|
| Vague | "The summary should be good" | No - what does "good" mean? |
| Directional | "The summary should be accurate" | Barely - accurate in what way? |
| Specific | "Every blocker mentioned in the summary should have a real basis in the underlying project data" | Yes - you can check this |
| Measurable | "Zero fabricated owners, dates, or status claims. Score 1-5." | Yes - a judge can score this consistently |

**Common Eval Criteria for AI Products**

Use this as a menu to pick from. Not every product needs every criterion.

| Category | Criterion | What You Are Measuring |
|----------|-----------|---------------------|
| Accuracy | Factual Correctness | Are the facts in the output true and verifiable? |
| Accuracy | Hallucination Rate | Does the output contain fabricated information? |
| Accuracy | Completeness | Does the output cover everything it should? |
| Relevance | On-Topic | Does the output address the actual question/request? |
| Relevance | Actionability | Can the user act on this output? |
| Safety | Harm Avoidance | Does the output avoid harmful, biased, or offensive content? |
| Safety | PII Protection | Does the output avoid exposing sensitive information? |
| Format | Structure | Is the output properly formatted? |
| Format | Length | Is the output an appropriate length? |
| Tone | Voice Match | Does the output match the expected tone and style? |
| Tone | Professionalism | Is the output appropriate for the audience? |

**Writing a Rubric**

For each criterion, define what each score means.

> **Example Rubric: Hallucination Rate (TaskFlow weekly summary)**
>
> - **5** - Zero fabricated owners, dates, or status claims. Every flagged item traces to a specific task ID in the input.
> - **4** - All critical facts correct. Minor phrasing inference but nothing invented.
> - **3** - One or two unverifiable claims in non-critical places.
> - **2** - Multiple invented facts (wrong owner, invented due date).
> - **1** - Significant fabrication. A team lead reading this summary would act on false information.

See `pre-work/riskiest-assumption-setup.md` for how the rubric's criteria come directly out of the riskiest-assumption sentence.

## Component 3: Grading Methods

### Method 1: Assertion-Based (Programmatic Checks)

**What it is:** Simple code that checks for specific properties in the output. Pass/fail.

**Best for:** Structural requirements, format validation, must-have elements, safety guardrails.

TaskFlow examples:
- Output must be valid markdown → try parsing.
- Summary must be under 300 words → count words.
- Summary must include a "Blockers" section → check for the string.
- No task ID in the output is allowed that is not present in the input data → set comparison.

**Strengths:** Fast, deterministic, cheap (no extra calls).
**Weaknesses:** Cannot evaluate nuance, tone, or accuracy of reasoning.

### Method 2: LLM-as-Judge (AI-Graded Quality)

**What it is:** You make a second Claude call, giving it the original input, the output, and your rubric. You ask it to score the output on each criterion and explain its reasoning.

**Best for:** Subjective quality dimensions like accuracy, tone, completeness, actionability.

This is the workhorse method for PM evals. It scales, it is fast, and it is surprisingly good at applying rubrics consistently - if the rubric is specific.

For this course we run LLM-as-judge through **headless Claude Code** (`claude -p` as a subprocess), not through the Anthropic API directly. Your existing Claude Code auth carries the call. No API key, no `pip install anthropic`. The reference script `scripts/run-evals.py` does this for you.

> **How to Structure a Judge Prompt**
>
> A good LLM-as-judge prompt has four parts:
>
> 1. **CONTEXT:** What the product does and what the output is supposed to achieve.
> 2. **RUBRIC:** Your specific criteria with score definitions (the 1-5 scale).
> 3. **INPUT + OUTPUT:** The test case input and the generated output to evaluate.
> 4. **RESPONSE FORMAT:** Ask for JSON with a score and reasoning for each criterion.
>
> Always ask for reasoning BEFORE the score. This forces the judge to think through its evaluation rather than anchor on a number.

> **Judge Prompt Pitfall:** A generic judge gives generic scores. The rubric IS the judge's brain. If your rubric is vague, your scores will be meaningless.

### Method 3: Human Review (Ground Truth)

**What it is:** You (or users, or domain experts) manually review and score outputs.

**Best for:** Calibrating your automated evals. Run human review on a subset, compare to LLM-as-judge scores, adjust the rubric until they align.

**Which Method(s) to Use?**

| Criterion Type | Primary Method | Secondary Method |
|---------------|---------------|-----------------|
| Structural (format, length, fields) | Assertion-based | - |
| Factual (accuracy, hallucination) | LLM-as-judge | Human review for calibration |
| Subjective (tone, style, helpfulness) | LLM-as-judge | Human review for calibration |
| Safety (harmful content, PII) | Assertion-based + LLM-as-judge | Human review for edge cases |
| Binary must-haves (contains X, excludes Y) | Assertion-based | - |

---

# Part 3: From Assumption to Eval

*Companion: pre-work video 3. The video walks through the full TaskFlow weekly-summary eval end-to-end using the headless-Claude-Code pattern. This section references the process; the deep work of sharpening your assumption happens in `pre-work/riskiest-assumption-setup.md`.*

By the end of pre-work you should have:

- A riskiest-assumption sentence in the "My product only works if the AI can consistently ___" form. (See `pre-work/riskiest-assumption-setup.md`.)
- 5 to 8 test cases drafted (easy, realistic, hard, adversarial) - or a subset of `sample-data/taskflow-projects.json` if you are running the TaskFlow scenario.
- A 3 to 4 criterion rubric with explicit 5/5 and 1/5 anchors.
- Go/iterate/pivot thresholds written down before you see any scores.

These four artifacts plug straight into `scripts/run-evals.py` at the start of the workshop. If any of them are missing or vague, spend 15 more minutes in pre-work before the session. The workshop budget does not include time to author these from scratch.

## Pre-work checklist (do this before Sunday)

1. **Name your riskiest quality assumption** in the sentence form from `pre-work/riskiest-assumption-setup.md`.
2. **Define ship / iterate / pivot thresholds.** Write these before the eval run, not after.
3. **Draft 5 to 8 test cases.** Mix easy, realistic, hard, adversarial.
4. **Draft a 3 to 4 criterion rubric** with 5/5 and 1/5 anchors for each.
5. **Verify `claude -p "hello"` returns a response from your terminal.** If the headless pattern is broken locally, fix it before session.

Sarah's worked example at the bottom of this guide shows what all four look like populated for the TaskFlow weekly summary. Use it as scaffolding if you get stuck.

---

# WORKSHOP

---

# Workshop: Apply the Eval Loop (3 phases)

The eval portion of the Week 2 workshop is roughly 33 minutes spanning three phases inside the 2-hour session. The build work and the PRD review happen before this; the iteration close happens after. See `session-plan.md` for the full 2-hour structure.

Your job across these three phases: adapt your pre-work eval plan into `scripts/run-evals.py`, run it against your prototype's feature output, read the results, and make one targeted change. That is the loop. The learning is in feeling the loop close, not in the exercise text.

## Phase 1: Setup (10 min, clock 1:25-1:35)

Wire your pre-work eval plan into the reference script.

1. **Scaffold the input files.** In your Week 2 project folder, run `python3 scripts/run-evals.py --init`. This writes four starter files into the current directory: `test-cases.json`, `rubric.json`, `product-prompt.md`, `thresholds.json`. The starter content is Sarah's TaskFlow weekly summary, so if you are running the TaskFlow scenario you are already 80% there.
2. **Adapt `test-cases.json`.** Paste in the 5-8 test cases you drafted in pre-work. Each case needs `id`, `description`, `input_data`, and `difficulty`. For the TaskFlow scenario, subset `sample-data/taskflow-projects.json` into 5-8 cases of varying difficulty.
3. **Adapt `rubric.json`.** Paste in your 3-4 criteria with `five_out_of_five` and `one_out_of_five` anchors. Weight each as `Critical`, `High`, `Medium`, or `Low`.
4. **Adapt `product-prompt.md`.** This is the actual prompt your feature uses to generate output. If you have been running your prototype locally, copy the exact prompt. For TaskFlow, the `--init` default is the Sarah product prompt and is a reasonable starting point.
5. **Confirm `thresholds.json`** has ship/iterate/pivot statements you wrote before you see any scores.

**If your rubric still has "quality" or "accuracy" as a single criterion without anchors, fix it now.** This is the single most common cause of all-5s runs that teach you nothing.

**Deliverable:** Four input files, all populated, in your project folder.

## Phase 2: Run (15 min, clock 1:35-1:50)

Run the harness. Read the results. Identify your lowest-scoring criterion.

1. **Run the script.** `python3 scripts/run-evals.py`. For an 8-case test set running in parallel, expect 1-2 minutes wall time. The script writes `results.json` (machine-readable) and `results.md` (human-readable summary).
2. **Watch the terminal.** Each case prints `[ok] case-id (time_s)` or `[ERR] case-id (time_s)`. Errors most commonly mean `claude` not on PATH or a malformed judge response - see the troubleshooting list below.
3. **Read `results.md`.** You are looking for four things:
   - The per-criterion average row. Which criterion has the lowest average?
   - The per-case table. Which specific test cases failed? What do they have in common?
   - The overall weighted score. Is it above or below your `ship_if` threshold?
   - Any errors. Error rate over 20% means the pipeline is broken, not the product.
4. **Pick the one criterion you will iterate on.** By default, pick the lowest average. If your lowest criterion is already above your threshold, pick the one with the highest variance - consistency matters.

**Troubleshooting during the run:**

- `claude` not found: check `which claude` in your shell and hardcode the path in the subprocess call if Python's env differs.
- Subprocess hangs: lower `--parallel` to 2 or raise `--timeout 180`.
- Judge output not parseable as JSON: add "Return ONLY JSON, no preamble, no commentary" to the end of `product-prompt.md` and re-run.
- All 5s on the first run: your rubric is too loose. Sharpen the 1/5 anchor before you iterate on the product.

**Deliverable:** A results table on screen. A specific criterion chosen for iteration. Thresholds comparison written down.

## Phase 3: Iterate (8 min, clock 1:50-1:58)

Change one thing. Re-run. Observe the delta.

1. **Pick one change most likely to move your lowest criterion.** Not three changes. One.
   - Weak hallucination score? Add an anti-hallucination directive to `product-prompt.md` ("Cite the source task ID for every blocker. If data does not include an owner, say 'unassigned', never invent one.").
   - Weak completeness score? Add explicit instructions on what to surface ("Include every task with status 'blocked' or 'at_risk', and every task with a due date in the next 7 days.").
   - Weak actionability score? Add structural requirements ("Every item must include the task ID and a one-sentence 'next step' clause.").
   - Rubric is too loose? Tighten the 1/5 anchor on the weak criterion. Do not change the product prompt this round.
2. **Re-run `python3 scripts/run-evals.py`.** Same test cases, same thresholds. Only your one change is new.
3. **Compare the deltas.** Open the new `results.md` next to the old one. Which criterion moved? By how much? Did any other criterion regress? (Completeness prompts sometimes hurt hallucination - that is a real tradeoff, not a bug.)
4. **Write one sentence to share with the cohort.** "I changed [one thing] and [criterion] moved from [X] to [Y]."

**Deliverable:** A before/after comparison. A one-sentence delta you can share in the close.

## Pulling it into a product decision

After the workshop, on your own time, write the decision paragraph using this template (Sarah's version is the worked example at the bottom):

> "My riskiest assumption was that [assumption]. After running [N] test cases, my eval showed [key findings]. Based on these results, I am going to [SHIP / ITERATE / PIVOT] because [reasoning]. My next step is [specific action]."

This decision paragraph is one of the three Week 2 primitives (see `week-2-learning-objectives.md`). It carries into Week 3's prioritization work.

---

# POST-WORKSHOP

---

# Side Quests: Go Deeper

Optional extensions for students who want to take eval skills further. Each builds a different capability. Examples are anchored to TaskFlow where relevant; adapt to your own product.

## Side Quest 1: Eval-Driven Prompt Engineering

**Difficulty:** Intermediate | **Time:** 1-2 hours

Use evals as your feedback loop for systematic prompt improvement. Instead of tweaking prompts by feel, run each version against your test set and compare scores.

**The Challenge**

1. Take your `product-prompt.md` and create 3 variations (different instruction approaches, different levels of detail, different output formats). For TaskFlow, good variations to try: (a) short directive prompt, (b) role-playing prompt ("You are Rachel's trusted ops analyst..."), (c) few-shot prompt with one example summary.
2. Run all 3 through `run-evals.py` with the same test cases. Use `--out results/v1.json`, `v2.json`, `v3.json` to keep the runs separate.
3. Compare the score distributions - not just averages, but variance and failure patterns.
4. Write a brief analysis: Which variation won? Why? Was it better on all criteria or just some?

> **What You Will Learn:** How to use data instead of intuition for prompt decisions. Small prompt changes can have big quality effects. The "best" prompt depends on which criteria you weight most.

## Side Quest 2: Adversarial Eval Design

**Difficulty:** Advanced | **Time:** 1-2 hours

Design test cases specifically intended to break your prototype. Red-teaming your own product is an essential skill for AI PMs.

**The Challenge**

1. Brainstorm 10 adversarial inputs. For TaskFlow: a task with a contradictory status and recent comment, a project with zero tasks, a task owner whose name contains special characters, a comment thread ending mid-sentence, a due date in the past with no status update, a project marked "archived" but with active tasks, two tasks with the same title but different owners, a comment with escalation language ("this is on fire") but otherwise normal status, an input with 100+ projects to stress scale, an input with one project described only in prose.
2. Categories to stress: prompt injection, contradictory instructions, out-of-scope requests, hallucination triggers, extremely long/short inputs.
3. Run these through your eval.
4. For each failure, design a guardrail (prompt instruction, assertion check, or output filter) that prevents it.
5. Re-run to verify the guardrail works without degrading normal performance.

> **Why This Matters:** Real users will find these edge cases. Beta testers will find them. Finding them yourself first is a PM superpower.

## Side Quest 3: Human-AI Eval Alignment

**Difficulty:** Intermediate | **Time:** 2-3 hours

Validate that your LLM-as-judge scores actually match human judgment.

**The Challenge**

1. Take 10 outputs from your eval (for TaskFlow, grab 10 product outputs out of `results.json`).
2. Score them yourself on each criterion using the same rubric.
3. Compare your human scores to the LLM judge scores.
4. Calculate agreement rate: on how many outputs do you and the judge agree within 1 point?
5. For disagreements: is the judge too harsh? Too lenient? Misunderstanding a criterion?
6. Revise your rubric's 1/5 and 5/5 anchors and re-run until agreement exceeds 80%.

> **What Good Alignment Looks Like:**
> - **80%+ agreement within 1 point:** Your eval is trustworthy for automated runs.
> - **60-80% agreement:** Your rubric needs refinement - the criteria are not specific enough.
> - **Below 60%:** Your judge prompt needs major revision. The criteria might be ambiguous.

## Side Quest 4: Eval Dashboard

**Difficulty:** Advanced | **Time:** 2-4 hours

Build a visual dashboard that tracks your eval scores over time as you improve your prototype.

**The Challenge**

1. Modify your eval runs to save to a `results/` directory with timestamps (`results/run-2026-04-19-1800.json`). `run-evals.py` already supports `--out` for this.
2. Build a simple HTML dashboard (use Claude Code) that reads every `results/*.json` and shows: score trends over time per criterion, pass/fail rate over time, worst-performing test cases across runs.
3. Run your eval 3+ times as you iterate, and watch the dashboard update.
4. Screenshot the dashboard and write a brief narrative: "How my prototype improved over 3 iterations."

> **Bonus Challenge:** Add a comparison view that shows two prompt versions side-by-side with the same test cases.

## Side Quest 5: Eval Spec for Your Engineering Team

**Difficulty:** Beginner | **Time:** 1 hour

Write a one-page eval specification document you could hand to an engineering team to build production evals.

**The Challenge**

Write a document that includes:

1. Feature description and why output quality matters.
2. Quality criteria with rubrics (from your workshop eval).
3. Recommended eval approach (which methods, how many test cases, how often to run).
4. Minimum quality thresholds for shipping and ongoing monitoring.
5. Known failure modes and the guardrails you have already built.
6. Open questions for the engineering team.

> **Why This Is Valuable:** Most AI features ship without any eval spec. The PM "knew what good looked like" but never wrote it down. This document is the handoff artifact that prevents quality drift.

---

# Worked Example: Sarah's TaskFlow Weekly Summary Eval

This is the reference worked example for the entire module. It shows what a complete eval plan and first-run looks like, in the same shape you will produce in the workshop.

## Product

**Weekly cross-project summary for TaskFlow.** An AI-generated summary pulled from existing task data, grouped by project, surfacing what is due this week, what is overdue, and where there is a blocker or risk. Delivered in-product on Monday morning. See `sarah-example-prd.md` for the full PRD.

## Riskiest Assumption

> The AI can consistently produce a weekly cross-project summary that surfaces every real blocker, fabricates no owners or dates, and ranks project urgency the way a team lead would rank it.

Quality assumption, not adoption. Rachel already told Sarah she wants this feature. The question is whether the output clears the trust bar.

## Rubric (4 criteria, 1-5 scale)

| Criterion | 5/5 | 1/5 | Weight |
|-----------|-----|-----|--------|
| Completeness | Every real blocker and due-this-week item surfaced | Misses more than half of real blockers | High |
| Hallucination | Zero fabricated owners, dates, or status claims | Multiple invented facts | Critical |
| Actionability | Each item is specific, linked, and has a clear next step | Vague statements ("check in on X") with no linkage | High |
| Readability | Scannable in under 60 seconds, grouped coherently | Wall of text, inconsistent structure | Medium |

## Test Set (8 cases, drawn from `sample-data/taskflow-projects.json`)

| ID | Difficulty | Description |
|----|-----------|-------------|
| easy-01 | easy | 5 projects, one clear blocker each, no ambiguity |
| easy-02 | easy | 5 projects, all on track, one overdue task with clear owner |
| realistic-01 | realistic | 15 GreenPath projects (Rachel's actual workload), 3 real blockers + 2 stale-status noise |
| realistic-02 | realistic | 20 projects, mixed due dates, some already completed but status not updated |
| realistic-03 | realistic | 15 projects, one blocker that was resolved in a recent comment but status still "Blocked" |
| hard-01 | hard | 25 projects, contradictory signals (comment "unblocked" but status Blocked), one missing owner |
| hard-02 | hard | 25 projects, inherited tasks from an archived project that should not appear |
| adversarial-01 | adversarial | Task titled "Q2 launch" with no owner, comment thread truncated mid-sentence, deadline field empty but "end of week" in prose |

## Thresholds

- **Ship if:** completeness avg ≥ 4.0, hallucination 5/5 on 95%+ of cases, actionability avg ≥ 4.0, zero critical failures.
- **Iterate if:** any criterion below 3.5 avg, or hallucination scores below 5 on more than 5% of cases.
- **Pivot if:** hallucination rate averages below 4.0 even after two prompt iterations.

## First-Run Results (plausible Phase 2 output)

| ID | Difficulty | Completeness | Hallucination | Actionability | Readability |
|----|-----------|--------------|---------------|---------------|-------------|
| easy-01 | easy | 5 | 5 | 5 | 4 |
| easy-02 | easy | 5 | 5 | 4 | 4 |
| realistic-01 | realistic | 4 | 4 | 4 | 4 |
| realistic-02 | realistic | 4 | 3 | 4 | 3 |
| realistic-03 | realistic | 4 | 3 | 3 | 4 |
| hard-01 | hard | 3 | 3 | 3 | 3 |
| hard-02 | hard | 3 | 4 | 3 | 3 |
| adversarial-01 | adversarial | 3 | 2 | 3 | 3 |

**Per-criterion averages:** Completeness 3.9, Hallucination 3.6, Actionability 3.6, Readability 3.5.
**Overall weighted:** 3.65.

## Reading the Results (Phase 2 analysis)

- **Hallucination is the binding constraint.** Average 3.6 with two cases at 3 and one at 2. Sarah's ship threshold requires 5/5 on 95%+ of cases; she is at 12.5% (1 of 8). This criterion is Critical-weighted, and it is below the iterate threshold, not just below the ship threshold.
- **Completeness is close.** At 3.9 avg it just misses the 4.0 ship bar. Hard cases (25+ projects) are dragging it down.
- **The adversarial case (missing owner, ambiguous deadline) produced the worst hallucination score.** The AI invented an owner and assumed "end of week" meant Friday. This is exactly the failure mode the assumption was designed to catch.
- **Readability is fine.** Not the iteration target.

## Iteration Change (Phase 3)

Sarah changes one thing: adds an anti-hallucination directive to the product prompt.

> "Cite the specific task ID for every item you surface. If a task has no owner in the data, say 'unassigned' - never infer one. If a due date is missing, surface the item but label the date as 'not set' - never guess from surrounding text."

**Re-run (plausible Phase 3 output):** Hallucination avg moves from 3.6 to 4.4. Adversarial-01 moves from 2 to 4. Completeness holds at 3.9. Actionability improves slightly (4.0) because the task ID citation makes items more specific by construction.

## Product Decision (written after workshop)

> "My riskiest assumption was that the AI could produce a weekly summary trustworthy enough for Rachel to stop maintaining her spreadsheet. After running 8 test cases, the first run showed hallucination averaging 3.6 with a 2/5 on the adversarial case - below my iterate threshold on the most critical criterion. One prompt change (task ID citation plus explicit handling of missing owners and dates) moved hallucination to 4.4 and the adversarial case to 4. Completeness still sits at 3.9.
>
> Based on these results, I am going to ITERATE because the critical failure mode is fixable in prompt space but the completeness bar is not yet cleared. My next step is to run a second prompt iteration focused on surfacing every task with status 'blocked' or 'at_risk', then re-eval. If completeness clears 4.0 and hallucination holds at 4.5+, I will move to user testing with Rachel directly."

This is the decision paragraph primitive described in `week-2-learning-objectives.md`. It carries into Week 3's prioritization decisions.

---

# Frequently Asked Questions

**Do I need to know how to code to build evals?**

Not much. `scripts/run-evals.py` is provided. You edit four JSON/markdown input files (test cases, rubric, product prompt, thresholds) and run the script. You do need to be comfortable opening a terminal and running `python3`.

**How is this different from what ML engineers do with evals?**

ML engineers build evals to measure model performance across benchmarks - accuracy on standardized datasets, perplexity, token-level metrics. PM evals measure product quality: does the output meet user needs, match the use case, feel good enough to ship? You are evaluating the full prompt + model + context stack, not the base model. Your criteria come from user needs, not academic benchmarks.

**What if my eval shows the quality is not good enough?**

That is the eval doing its job. Common next steps: improve prompt instructions for the failing cases, add few-shot examples, add guardrails or post-processing, narrow your product scope to cases where quality is high enough, or reconsider whether AI is the right approach for this particular feature.

**Why headless Claude Code instead of the Anthropic API directly?**

Three reasons. One: no API key management. Your Claude Code auth is already working - the subprocess uses the same session. Two: no `pip install anthropic`, no SDK version drift. Three: it teaches a transferable PM technique. You can script any workflow around Claude Code this way, not just evals. For production evals, engineering will likely swap in the API; you do not need to for prototype-stage work.

**How do I know if my LLM-as-judge scores are reliable?**

Run Side Quest 3 (Human-AI Eval Alignment). Score a subset yourself and compare. If you and the judge agree within 1 point on 80%+ of outputs, your judge is calibrated well. If not, your rubric needs to be more specific. The most common problem is vague criteria that the judge interprets differently than you would.

**Should I use a different model as the judge to avoid self-grading bias?**

For prototype-stage work, using Claude as both generator and judge is fine. The rubric specificity matters far more than which model is judging. In production, some teams use a different model family as judge to reduce bias; you can set that up later, but it is not the high-leverage lever at this stage.

**How many test cases do I really need?**

For a prototype eval: 5-10. Enough to spot patterns, fast enough to iterate. For a pre-launch eval: 20-50. For production: 100+. 8 well-chosen test cases (including hard ones) are worth more than 50 easy ones.

**What if I do not have real user data for test cases?**

For the TaskFlow scenario, `sample-data/taskflow-projects.json` is your real-ish data. For your own product, generate synthetic cases: "Generate 10 realistic inputs for [product] that a [user type] would provide. Include 3 easy, 4 medium, 2 hard, 1 adversarial. For each, explain the difficulty." Review and adjust. Synthetic test cases are surprisingly good if you prompt well.

**Can evals replace user testing?**

No. Evals test output quality. User testing tests whether users understand, trust, and find value in the output. You need both. Evals are faster and cheaper - use them to get quality to an acceptable level before spending time and money on user testing.

**What about cost?**

`claude -p` calls count against your Claude Code plan the same way conversational calls do. For an 8-case run with two Claude calls per case (product + judge), you spend roughly what a 5-minute conversation spends. If you are on an API-metered plan, a typical prototype eval runs $0.10 to $0.50. Production suites of 100 cases run a few dollars. Cheapest product decision you will ever make.

**How do evals fit into an ongoing development process?**

In production, evals run automatically on every prompt change, model update, or new feature version. They become regression tests for quality. For now, in prototype stage, you run them manually as part of your build-measure-learn loop. Same concepts, automation comes later.

**What if different criteria conflict? (e.g., completeness vs. brevity)**

Product decision, not a technical one. Decide which criteria matter most for your users and weight them accordingly. Your eval can measure all of them; your go/no-go threshold should reflect the priority. "I will accept a lower readability score (3.5) if hallucination is 5/5" is a real, defensible tradeoff.

---

# Quick Reference Card

Everything you need to remember on one page.

**The Eval Triangle**

- **TEST CASES:** Representative inputs spanning easy, hard, and adversarial.
- **EVAL CRITERIA:** Specific, measurable quality dimensions with 1-5 rubrics.
- **GRADING METHOD:** Assertions (structural), LLM-as-judge via `claude -p` (quality), or human review (calibration).

**The Three Grading Methods**

| Method | Use For | Speed | Cost |
|--------|---------|-------|------|
| Assertion-based | Format, length, required fields, safety checks | Instant | Free |
| LLM-as-judge (headless Claude Code) | Accuracy, tone, completeness, actionability | 1-2 min per case in parallel | Same as a short Claude conversation |
| Human review | Calibrating automated evals, high-stakes decisions | Minutes per output | Your time |

**The Decision Framework**

| Result | Action |
|--------|--------|
| Avg ≥ 4.0, zero critical failures | Ship (or move to user testing) |
| Avg 3.0-3.9, specific weaknesses | Iterate: improve prompt, add guardrails, re-eval |
| Core criterion avg < 2.5 | Pivot: reconsider approach or scope |

**The Iteration Loop**

1. Run eval → 2. Identify weakest criterion → 3. Change ONE thing in product prompt OR rubric → 4. Re-run → 5. Compare deltas → Repeat.

**Commands You Will Use**

```
python3 scripts/run-evals.py --init                 # scaffold input files
python3 scripts/run-evals.py                        # run with defaults
python3 scripts/run-evals.py --parallel 2 --timeout 180   # slower but safer
python3 scripts/run-evals.py --out results/run-01.json    # named output
```

**Input Files the Script Expects**

- `test-cases.json` - list of `{id, description, input_data, difficulty}`.
- `rubric.json` - list of `{criterion, weight, five_out_of_five, one_out_of_five}`.
- `product-prompt.md` - the actual prompt your feature uses (this is what is being tested).
- `thresholds.json` - `{ship_if, iterate_if, pivot_if}` statements written before the run.
