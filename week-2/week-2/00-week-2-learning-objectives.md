# Week 2 Learning Objectives

Week 2 is where the course pivots from intake to output. In Week 1 you used Claude Code to turn raw inputs (competitors, transcripts, survey data, tickets) into research artifacts. In Week 2 you use those artifacts to produce something testable: a clickable prototype of an AI feature, plus an eval harness that tells you whether the AI is actually good enough to ship. By the end of the week you will have practiced the full loop a PM now owns, from research synthesis to prototype to quality evidence to decision.

## By end of pre-work (entering the workshop)

**They know (conceptual)**
- What a "riskiest assumption" is, and why for AI features it is almost always a quality assumption, not an adoption assumption.
- The ins-and-outs principle: every prototype needs a plausible way in and a plausible way out, even when the feature itself is the only thing you care about testing.
- What an eval is at a PM level: test cases, a rubric, a grading method, a score. (The three eval videos teach the rest.)
- The shape of a PRD that is actually useful to feed into Claude Code: research grounded, journey described, riskiest assumption named, eval plan sketched.

**They can (skill)**
- Turn Week 1 research artifacts (competitive analysis, interview synthesis, survey signal, ticket trends) into a one-page PRD for a single AI feature.
- Name the riskiest quality assumption for that feature in "my product only works if the AI can consistently ___" form.
- Draft 5 to 10 test cases that cover easy, realistic-hard, and adversarial inputs.
- Draft a 3 to 4 criterion rubric with 5/5 and 1/5 anchors.

**They have (artifact)**
- A working `prd-from-research` skill they authored themselves with skill-creator, installed in Claude Code, that produces a PRD plus the four eval files (`rubric.json`, `test-cases.json`, `thresholds.json`, `product-prompt.md`) the harness consumes.
- A prototype PRD for their own product (output of their skill), or a working understanding of Sarah's PRD if they are bringing the TaskFlow scenario through the workshop.
- A stated riskiest assumption and an eval plan (test cases + rubric) ready to execute.
- A working local project folder, Claude Code verified, Python 3 installed.
- Pre-session checklist completed.

## By end of the workshop (2-hour live session)

**They know (conceptual)**
- What "taste calibration" on a PRD looks like in practice: which sections get sharp and which stay loose.
- How to prompt Claude Code to build a full user journey (landing, login, dashboard, feature, exit) as a local clickable prototype, without deploy infrastructure.
- How to use Claude Code as an eval runner by shelling out to headless Claude (`claude -p`) from a small Python script, no Anthropic API key required.
- What a score delta from one prompt change looks like, and how to read it as product evidence.

**They can (skill)**
- Write a build-kickoff prompt that produces a five-page journey with fake data, localStorage state, and a pre-generated feature output students can inspect.
- Iterate on the prompt inside Claude Code when the build drifts.
- Run their eval harness against the feature output, collect scores, read the results table.
- Make one targeted prompt change and re-run the eval to see the score move.

**They have (artifact)**
- A working local prototype of the full journey (their own feature or Sarah's TaskFlow weekly summary).
- A completed eval run with scored test cases.
- One before/after comparison showing how a prompt change moved a score.
- A one-paragraph ship/iterate/pivot decision grounded in the eval results.

## By end of Week 2 (after practice assignment, entering Week 3)

**They know (conceptual)**
- The full loop: research -> PRD -> prototype -> eval -> decision, and why each step is cheap enough that a PM can do it alone.
- Why "is the AI output good enough?" is a product question, not an engineering question, and how evals make it answerable.
- How the Week 2 artifacts (PRD, prototype, evals, decision paragraph) feed into Week 3, where the work becomes "what do I do about what I just learned?"

**They can (skill)**
- Apply the loop to their own product end-to-end, not just the TaskFlow example.
- Re-run their `prd-from-research` skill on any future feature to produce a PRD plus eval files in minutes instead of hours.
- Explain their riskiest assumption, their test set, and their go/no-go threshold to a skeptical stakeholder.
- Recognize when an eval result is telling them to ship, iterate, or pivot, and write the decision down.

**They have (artifact)**
- A prototype of an AI feature for their own product.
- A durable `prd-from-research` skill that compounds across the rest of the course and beyond, extended once during practice (exec-summary, PR/FAQ, or custom-template variant).
- An eval harness with a test set and rubric they can re-run as they iterate.
- A written ship/iterate/pivot decision paragraph tied to eval evidence.
- (Stretch) Two prompt variants evaluated head-to-head with data.

## How this fits the course arc: PM Operating System

Week 2 is the "test" step in the four-step PM operating system the course assembles over five weeks.

| Week | Step | What the PM produces |
|------|------|---------------------|
| W1 | Intake | Competitive analysis, user research synthesis, support/survey triangulation |
| W2 | Test | Prototype of an AI feature, eval harness, ship/iterate/pivot decision |
| W3 | Decide | Prioritized roadmap bet grounded in W1 + W2 evidence |
| W4 | Automate | Recurring skills and scheduled agents that run the loop without manual effort |

Week 2 contributes three operating-system primitives plus one durable tool. The primitives: the **prototype-as-test** primitive (a clickable artifact that lets you feel a feature before you commit to building it), the **eval-as-evidence** primitive (structured scoring that turns "is it good?" into a defensible answer), and the **decision-paragraph** primitive (a written artifact tying eval results to a ship, iterate, or pivot call). The durable tool is the **`prd-from-research` skill** students author in pre-work, their first visible PM Operating System component. It compounds across every feature they spec from Week 2 onward and gets extended in Week 4 when the course layers in recurring-skill and automation patterns. These four artifacts become reusable in every week that follows: Week 3 prioritization leans on the decision paragraph, Week 4 automation extends the PRD skill and wraps the eval harness in a recurring skill, and Week 5 pulls the whole loop into a single PM operating system you run on your own product.
