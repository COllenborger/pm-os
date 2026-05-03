# Pre-Work: Build Your PRD Skill

By the end of this lesson you will have a reusable Claude Code skill called `prd-from-research` that turns any set of Week 1 style research artifacts plus a one-sentence feature hypothesis into a complete prototype PRD plus the four eval files `scripts/run-evals.py` needs. You will use the skill Sunday in the workshop, again in the practice assignment on your own product, again in Week 4 when you wrap the workflow in automation, and again every feature you spec from here on. Budget 60 to 90 minutes. Read `prd-best-practices.md` and `riskiest-assumption-setup.md` first.

## Why a skill and not a prompt

You already know how to prompt Claude Code to write a PRD. You could do it from scratch every time. You will not, because the second time you do it you will forget half of what worked the first time, and by the fifth time you will be pasting a stale prompt from a notes file. Prompts are single-use. Skills are reusable artifacts you own. Every feature you spec from now on gets a PRD, and the skill turns that from a 90-minute exercise into a 10-minute one. Week 4 is where the course makes the broader argument for owning skills. Week 2 is where you build the first load-bearing one.

## What your skill needs to do

Hand this to skill-creator. It is the spec.

**Inputs:**

- A folder path containing your Week 1 artifacts (competitive analysis, interview synthesis, support ticket themes, survey findings) or the raw text pasted in.
- A one-sentence feature hypothesis ("an AI-generated weekly cross-project summary for team leads").
- A target output folder path where the PRD and eval files should be written.

**Outputs (in the target folder):**

- `[feature-slug]-prd.md` -- the PRD in the 10-section structure from `prd-best-practices.md`.
- `rubric.json` -- eval rubric with 3 to 5 criteria, each with `criterion`, `weight`, `five_out_of_five`, `one_out_of_five`.
- `test-cases.json` -- 5 to 10 test cases, each with `id`, `description`, `difficulty`, `input_data`.
- `thresholds.json` -- ship/iterate/pivot conditions with keys `ship_if`, `iterate_if`, `pivot_if`.
- `product-prompt.md` -- the AI feature's system prompt, ready for the eval harness.
- `design-refs/README.md` -- a short file naming 2 to 4 reference products with a one-line "what to borrow" for each, plus an explicit "avoid" list. If the student has not provided screenshots, the README lists the filenames the student should drop in (e.g., `linear-projects.png`) so the folder is ready to receive them. This file backs Section 10 of the PRD.
- `fixtures.md` -- a short spec of the seeded data the prototype should render (names, counts, states), drawn from the research so it is plausible rather than Lorem ipsum.

**Behavior:**

- At the start, ask the student which path to take: interview (fuzzy hypothesis, answer questions one at a time) or notes (solid synthesis, just draft the structure). This maps to the PRD Interview Technique and PRD from Existing Notes prompts in the Week 2 prompt library.
- Only use content from the provided research. Do not invent quotes or data points.
- Produce all seven output files in a single run. The PRD, eval files, design-refs, and fixtures are siblings, not a sequence.
- At the end of the run, print a ready-to-paste `/plan` invocation with the student's actual file paths filled in, so they can hand the PRD to Claude Code's plan mode for build planning. The skill does not do build planning itself.

**Quality bar:** The output must be complete enough that `python3 scripts/run-evals.py` can read the four eval files without edits. Students are welcome to edit after, but the skill's first-pass output should not require edits to parse.

## Step 1: Invoke skill-creator

Open Claude Code in the folder where you want the skill to be installed. For most students this is their home directory, so the skill is available across every project going forward.

At the Claude Code prompt, invoke the skill-creator skill:

```
/skill-creator
```

Then paste the spec. Copy the block below verbatim. Fill in nothing. The spec is complete.

````
Create-only mode. Skip evals, benchmarking, and variance analysis on the skill itself. Generate the SKILL.md, install it, print the install path. Done. (If I want to evaluate the skill's own performance later, I will invoke skill-creator separately for that. The eval files this skill produces — rubric.json, test-cases.json, etc. — are product evals for the AI feature, not skill evals; produce them as specified below.)

Before building this skill, read `[your-project-workspace]/week-2/scripts/run-evals.py` in full. The four eval files your skill produces must match exactly what that harness validates — field names, JSON shapes, and the weight label conventions. Use the scaffold files embedded at the bottom of that script (`--init` section) as your authoritative worked examples of well-formed output.

Build me a skill called `prd-from-research`.

PURPOSE
Turn Week 1 research artifacts (competitive analysis, interview synthesis, support tickets, survey findings) plus a one-sentence feature hypothesis into a complete prototype PRD and the four eval input files that scripts/run-evals.py consumes.

INPUTS
- A folder path with research artifacts OR pasted text for each artifact.
- A one-sentence feature hypothesis.
- A target output folder path where all outputs are written.

OUTPUTS (written to the target folder in a single run)
1. [feature-slug]-prd.md -- the PRD.
2. rubric.json
3. test-cases.json
4. thresholds.json
5. product-prompt.md
6. design-refs/README.md -- reference-product list, "borrow this" lines, and explicit avoid-list. Names screenshot filenames the student should drop into the folder.
7. fixtures.md -- seeded data spec for the prototype (project names, counts, states, owners), sourced from the research so it feels real.

PRD STRUCTURE (all 10 sections, in order)
1. Problem Statement -- three sentences or fewer, citing Week 1 data.
2. Research Summary -- bulleted, each bullet cites a source (interview name/date, ticket ID, survey respondent, competitive finding).
3. Users and Use Cases -- primary user named concretely, secondary, explicit exclusions.
4. User Journey with Ins and Outs -- 4 to 6 screens; for each, the arriving context (way in) and the exit action (way out). The feature cannot be screen 1.
5. Goals and Non-Goals -- measurable goals, at least three specific non-goals.
6. Functional Requirements -- numbered, present tense, testable.
7. Riskiest Assumption -- one sentence in "my product only works if the AI can consistently ___" form. Must be a quality assumption, not an adoption one.
8. Eval Plan -- rubric, test cases, grading method, ship/iterate/pivot thresholds.
9. Success Metrics and Open Questions -- metrics at 30/60/90 days, unresolved decisions listed.
10. Design Reference and Prototype Fidelity -- 2 to 4 named reference products with what to borrow from each, explicit avoid-list (gradients, purple defaults, emoji empty states, shadcn defaults, Lorem ipsum), seeded-data spec, and UI-state rules (no loading skeletons, no empty states, one-click login). Mirrors and references `design-refs/README.md` and `fixtures.md`.

EVAL FILE SHAPES (field names are exact)

rubric.json -- JSON array, one object per criterion:
{
  "criterion": "<name>",
  "weight": "Critical" | "High" | "Medium" | "Low",
  "five_out_of_five": "<one sentence describing a 5/5 output>",
  "one_out_of_five": "<one sentence describing a 1/5 output>"
}

test-cases.json -- JSON array, one object per case:
{
  "id": "<slug>",
  "description": "<one sentence>",
  "difficulty": "easy" | "realistic" | "hard" | "adversarial",
  "input_data": { <the input the product prompt will see, matching the shape the product expects> }
}

thresholds.json -- single JSON object with exactly these three keys:
{
  "ship_if": "<string>",
  "iterate_if": "<string>",
  "pivot_if": "<string>"
}

product-prompt.md -- plain markdown, the system prompt the AI feature uses to generate output. The harness appends each test case's input_data to this prompt at runtime.

BEHAVIOR
- At the start of every run, ask the student: "Is your feature hypothesis and research synthesis already solid (notes path), or is your thinking still fuzzy (interview path)?" Then take the appropriate path.
  - Interview path: ask questions one at a time about problem, users, success, scope, constraints, MVP, edge cases, open questions. After answers are complete, draft the PRD and eval files.
  - Notes path: accept pasted or folder-referenced artifacts, structure directly into the PRD and eval files.
- Before drafting Section 10, ask the student: "Name 2 to 4 products whose look-and-feel you want to borrow, and one specific thing each one does well. If you do not have a strong answer, I will propose defaults drawn from Linear, Height, Notion, and Monday, and you can adjust." Always produce Section 10 and `design-refs/README.md`; never skip this prompt.
- Before drafting Section 6 and `fixtures.md`, extract seeded-data candidates from the research (real company names, plausible project titles, owner names, counts) so the fixtures spec is grounded. If the research is thin, flag it as an Open Question rather than inventing.
- Only use content present in the provided research. If a section requires information not in the research, flag it as an Open Question rather than fabricating.
- Reference pre-work the user has already done: ins-and-outs framing from ins-and-outs.md, quality-assumption form from riskiest-assumption-setup.md, Section 10 conventions from prd-best-practices.md.
- Output all seven files in one pass. Print a tree at the end showing what was written.
- After the tree, print a ready-to-paste `/plan` invocation block the student can copy directly into a fresh Claude Code session. Fill in the real PRD path, design-refs path, and fixtures path based on the target output folder the student provided. Use this template verbatim, substituting `{PRD_PATH}`, `{DESIGN_REFS_PATH}`, and `{FIXTURES_PATH}`:

```
/plan

I'm building the prototype for the PRD at {PRD_PATH}.

Read the PRD end-to-end, plus {DESIGN_REFS_PATH} and {FIXTURES_PATH}.
Read the Week 2 starter repo in the current workspace.
Propose a build plan: screens (with their ins/outs per Section 4 of the PRD), file structure, seeded fixtures, and order of operations.
For each screen, name what is real vs. visibly fake per ins-and-outs.md.

Before proposing the plan, flag every place the PRD is ambiguous enough that your build would guess. I'd rather update the PRD now than find out at build time.
```

Do not execute plan mode yourself. Print the block as text for the student to use next.

QUALITY BAR
The four eval files must parse as valid JSON (for the JSON files) and must use the exact field names above. A student should be able to run `python3 scripts/run-evals.py --test-cases <path>/test-cases.json --rubric <path>/rubric.json --product-prompt <path>/product-prompt.md --thresholds <path>/thresholds.json` on your output without edits.

INSTALL AND CONFIRM
Install the skill in the default Claude Code skills location (typically ~/.claude/skills/ for global or .claude/skills/ for project-local). After install, print the full install path and tell me the exact invocation string I can use in future sessions.
````

Skill-creator will draft the skill, confirm the structure, and install it. When it finishes, it will print the install path. Keep that path handy.

## Step 2: Test the skill against Sarah's research

Do not run it on your own product yet. First run it on Sarah's research, which is the known-good fixture. The output should resemble `sarah-example-prd.md` and produce eval files that `run-evals.py` can consume. The two PRDs will not be identical. The skill is yours, not Sarah's, and the wording will differ. But both should hit all nine sections.

In a fresh Claude Code session, in your Week 2 project folder, invoke the skill:

```
Use the prd-from-research skill.

Inputs folder: course/week-1-research/sample-data/
Feature hypothesis: An AI-generated weekly cross-project summary for TaskFlow team leads.
Output folder: ./taskflow-test/
```

Take the notes path when it asks. Sarah's research is already synthesized and does not need an interview.

When the skill finishes, verify the files parse by running the eval harness end-to-end on them. In the command below, replace `[your-project-workspace]` with your actual folder name. You will not actually score a live prototype here. You are just confirming that the four files match the harness interface.

```
python3 [your-project-workspace]/week-2/scripts/run-evals.py \
  --test-cases [your-project-workspace]/week-2/taskflow-test/test-cases.json \
  --rubric [your-project-workspace]/week-2/taskflow-test/rubric.json \
  --product-prompt [your-project-workspace]/week-2/taskflow-test/product-prompt.md \
  --thresholds [your-project-workspace]/week-2/taskflow-test/thresholds.json
```

If the harness starts running test cases, your files are valid. You can interrupt once you see test cases start to execute. The point is to confirm the files parse, not to grade Sarah's output.

If the harness errors on a missing field or an unexpected shape, the skill needs tightening. Go back to Claude Code and tell skill-creator which file failed and how. Rebuild. Try again.

Compare your skill's PRD output to `sarah-example-prd.md` section by section. Is each of the 10 sections present? Does the Riskiest Assumption land as a quality assumption in the required sentence form? Is the User Journey a 4 to 6 screen sequence with ways in and ways out, feature not on screen one? Is the Eval Plan detailed enough that it could produce the files `run-evals.py` consumed? Does Section 10 name real reference products with specific borrow-lines and a concrete avoid-list, and does `design-refs/README.md` exist with the screenshot filenames the student should add? If any answer is no, iterate on the skill, not on the output.

## Step 3: Run the skill on your own research

Now point the skill at your own Week 1 folder and your own feature hypothesis.

```
Use the prd-from-research skill.

Inputs folder: <path to your Week 1 artifacts>
Feature hypothesis: <your one-sentence hypothesis>
Output folder: ./my-prototype/
```

Take the interview path if your thinking is still fuzzy. Take the notes path if your Week 1 synthesis is already solid. Most students land somewhere between; if in doubt, start with notes and tell the skill to ask follow-up questions where the research is thin.

You now have a PRD and four eval files scoped to your own product. This is your workshop artifact.

## Step 4: Self-review with the checklist

Open your PRD next to `prd-best-practices.md` and walk the ten-section checklist. For each section, one of three things is true:

- **Present and specific.** Move on.
- **Present but thin.** Fix by strengthening the skill itself, not by hand-editing the PRD. Tell skill-creator: "In the prd-from-research skill, the [section name] section is coming out thin. Sharpen the prompt for that section so the output cites specific sources and names concrete observable properties. Update the skill." Then re-run. This is the iteration loop on the skill itself, and it is the move worth naming: you are improving a tool you keep, not fixing an output you discard.
- **Missing.** Same fix, more urgent. The skill should produce every section on every run. If it is skipping one, add the section explicitly to the output schema in the skill's prompt.

When every section clears the check, you have your workshop PRD. Save it. Bring it Sunday.

## Step 5: Hand the PRD to `/plan` before you build

The PRD answers *what and why*. Claude Code's plan mode answers *how to build it*. Do not cross the streams. The skill produces the brief. Plan mode takes the brief, reads your starter repo, and proposes a concrete build plan you approve before any code is written.

Your skill should have printed a ready-to-paste `/plan` invocation at the end of its run. Open a fresh Claude Code session in your Week 2 project folder and paste it. The invocation looks like this (yours will have your actual paths filled in):

```
/plan

I'm building the prototype for the PRD at ./my-prototype/[feature-slug]-prd.md.

Read the PRD end-to-end, plus ./my-prototype/design-refs/README.md and ./my-prototype/fixtures.md.
Read the Week 2 starter repo in the current workspace.
Propose a build plan: screens (with their ins/outs per Section 4 of the PRD), file structure, seeded fixtures, and order of operations.
For each screen, name what is real vs. visibly fake per ins-and-outs.md.

Before proposing the plan, flag every place the PRD is ambiguous enough that your build would guess. I'd rather update the PRD now than find out at build time.
```

The last paragraph is the one that earns its keep. Plan mode will surface ambiguity you did not see while writing the PRD, because it is now reasoning about what it would actually type into a file. When that happens, do not just answer in chat and move on. Update the PRD (or the skill) to close the gap, then re-run plan mode. That loop is the second pass of PRD refinement, grounded in the reality of the build. It is the difference between a prototype that aims at a target and one that guesses.

When plan mode proposes a build plan you are satisfied with, approve it. Claude Code exits plan mode and builds. Your job at build time is to watch for the moments where the prototype drifts from Section 10's design reference or the fixtures spec, and tighten the prompts when it does.

If your skill did not print the `/plan` invocation at the end, tell skill-creator: "The prd-from-research skill must print a ready-to-paste `/plan` invocation at the end of every run, with the real paths filled in. Add this as a required final output. Update the skill." Then re-run.

## Stretch: extend your skill

Optional. 15 to 30 minutes per extension. The point is not to build every variant. It is to notice that your skill is now a surface you can evolve, not a one-shot prompt.

**Executive Summary format (`--format=exec-summary`).** A one-page variant for stakeholders. Lighter on functional requirements, heavier on problem statement, riskiest assumption, and the decision the exec is being asked to approve or fund. Tell skill-creator: "Add a --format argument to the prd-from-research skill. When --format=exec-summary, produce a one-page variant focused on problem, riskiest assumption, eval plan, and the ask. Default stays the full PRD."

**PR/FAQ format (`--format=prfaq`).** Amazon-style. A headline, a subhead, a customer quote, a team quote, and a FAQ section that does the real spec work. Useful when the feature is novel enough that internal stakeholders need the "why" before the "what." Tell skill-creator: "Add a --format=prfaq option. Produce a mock press release plus an internal FAQ. Use the research summary to source the customer quote verbatim."

**Custom template (`--template=path/to/template.md`).** Bring your own PRD shape. The skill renders its content into your company's template instead of the default. Tell skill-creator: "Add a --template argument. When set, use the provided markdown file as the section scaffold instead of the default 9 sections. Map my extracted PRD content into the headings present in the template."

Each of these is a small step on the skill, not a rewrite. That is how skills compound.

## Troubleshooting

**Skill-creator said it installed the skill but I cannot invoke it.** Check the install path skill-creator printed. Global skills go in `~/.claude/skills/`, project-local skills in `.claude/skills/`. If you installed it locally in a different folder than where you are running Claude Code now, move the file or reinvoke from the folder where it was installed. `ls ~/.claude/skills/` should list it.

**My skill's PRD comes out generic, like it could be any product.** You pasted too little context, or the skill is running without the research artifacts. Two fixes: first, paste more of your Week 1 material and make sure you are pointing at specific files, not an empty folder. Second, if you took the notes path and the output is still thin, re-run with the interview path. The interview path forces specificity by making you answer questions, which fills gaps the notes path could not see.

**Eval files do not parse.** Run `python3 -c "import json; json.load(open('rubric.json'))"` on each JSON file. Typical failures: trailing commas, single-quoted strings, missing required fields. If a field name is wrong ("weight_label" instead of "weight"), fix the skill, not the file. Tell skill-creator the exact field name that came out wrong, and which file it was in, and rebuild.

**My skill forgets a section.** Add the section explicitly to the output schema in the skill's prompt. "Every run must produce all 10 sections in order: Problem Statement, Research Summary, Users and Use Cases, User Journey with Ins and Outs, Goals and Non-Goals, Functional Requirements, Riskiest Assumption, Eval Plan, Success Metrics and Open Questions, Design Reference and Prototype Fidelity." Tell the skill not to collapse or merge sections.

**My prototype looks like generic AI output.** This is a Section 10 failure, not a prompting failure at build time. Re-run the skill and make sure Section 10 names 2 to 4 specific products, gives one concrete borrow-line for each, and lists at least four aesthetic defaults to avoid. Then make sure `design-refs/` contains actual screenshots, not just filenames. When you prompt Claude Code to build each screen, paste the relevant screenshot plus the Section 10 borrow-lines and avoid-list into the prompt. Generic PRD, generic prototype.

**My skill hallucinates quotes or data points that are not in the research.** Add a guardrail to the skill's prompt: "Only use content present in the provided research. If a section requires information not in the research, flag it as an Open Question rather than inventing content. Do not fabricate quotes, numbers, or named sources." Then re-run and verify.

**The skill's riskiest assumption section is an adoption assumption, not a quality one.** Add to the skill's prompt: "The riskiest assumption must be a quality assumption about AI output, not an adoption question. If the hypothesis reads as adoption (will users want it, will they pay), rewrite it as the quality question underneath (can the AI produce output trustworthy enough that adoption is possible). Reference riskiest-assumption-setup.md for the sentence form."

When the skill produces a clean PRD and four parseable eval files, you are done with pre-work for the PRD track. Bring the PRD Sunday. See `pre-session-checklist.md` for what remains.
