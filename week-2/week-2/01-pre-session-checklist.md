# Pre-Session Checklist - Week 2

Run this Sunday morning before the 4pm session. The workshop moves fast and assumes you arrive with a PRD, a journey sketch, and test cases in hand. If the pre-work is done, you will spend the two hours building and evaluating. If it is not, you will spend it catching up.

## Read

- [ ] [`../taskflow-scenario.md`](../taskflow-scenario.md) - the scenario we anchor every concept on.
- [ ] [`../sarah-example-prd.md`](../sarah-example-prd.md) - the gold-standard PRD. Your PRD should match this shape.
- [ ] [`ins-and-outs.md`](./ins-and-outs.md) - why prototypes need a way in and a way out.
- [ ] [`riskiest-assumption-setup.md`](./riskiest-assumption-setup.md) - how to name your riskiest assumption and tie it to an eval plan.
- [ ] [`prd-best-practices.md`](./prd-best-practices.md) - the 9-section PRD shape and eval-file shapes your skill must produce.
- [ ] [`build-your-prd-skill.md`](./build-your-prd-skill.md) - this is the doing work. Treat it as a 60 to 90 minute exercise, not a read. You author a `prd-from-research` skill with skill-creator and run it on your own research.

## Watch

- [ ] Eval video 1: What are evals?
- [ ] Eval video 2: The eval toolkit (test cases, rubrics, grading methods).
- [ ] Eval video 3: From riskiest assumption to eval, with the headless Claude Code pattern.

All three are in the Maven course materials. Budget about 45 minutes total.

## Do

- [ ] Author your `prd-from-research` skill by working through [`build-your-prd-skill.md`](./build-your-prd-skill.md), then run it on your own Week 1 research to produce your prototype PRD plus the four eval files (`rubric.json`, `test-cases.json`, `thresholds.json`, `product-prompt.md`).
- [ ] Draft a 4 to 6 screen journey sketch with ways in and ways out for each screen. Bullet list in your PRD is fine.
- [ ] Write 5 to 8 eval test cases covering easy, realistic, and adversarial zones.
- [ ] Complete [`../local-project-setup.md`](../local-project-setup.md) so your Week 2 project folder is ready.

## Verify your environment

- [ ] `claude --version` prints a version in your terminal.
- [ ] `python3 --version` prints 3.x.
- [ ] VS Code (or your editor of choice) opens on your Week 2 project folder.
- [ ] Your Week 1 artifacts (competitive analysis, interview synthesis, survey and ticket themes) are in a folder you can find in under 10 seconds.

## Bring to the session

- [ ] Your PRD, your journey sketch, and your eval test cases open in editor tabs.
- [ ] A laptop that can share screen. We do quick peer reviews of PRDs in the first 20 minutes.
- [ ] Coffee. The workshop is hands-on for 95 of its 120 minutes.

## If you are behind

The most important artifact is the PRD. If you only do one thing before the session, work through [`build-your-prd-skill.md`](./build-your-prd-skill.md) at least through Step 2, which gets your skill built and tested against Sarah's research. Step 3 (running it on your own research) can happen Sunday morning if you run out of time. The journey sketch and eval test cases come out of the skill, so once the skill works, the rest follows. Without the PRD you will be a spectator.

If even building the skill feels out of reach, fall back to the TaskFlow scenario. Run your skill on Sarah's research (`course/week-1-research/sample-data/` plus the hypothesis "an AI-generated weekly cross-project summary for TaskFlow team leads") and bring that output Sunday. If you have not built the skill at all, read [`../taskflow-scenario.md`](../taskflow-scenario.md) and [`../sarah-example-prd.md`](../sarah-example-prd.md) carefully enough that you could explain the problem, the riskiest assumption, and the journey to a teammate. You will still get the full value of the workshop: the prototype build and the eval loop land the same way, and you can apply the pattern to your own product in the practice assignment. Showing up with Sarah's PRD as yours is a legitimate path. Showing up with nothing is not.
