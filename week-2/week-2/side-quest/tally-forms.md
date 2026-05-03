# Side-Quest: Tally.so as a Research Intake Funnel

**Size:** Small to Medium (1 to 2 hours)
**When to do this:** After you have run the Week 2 loop at least once and have a feature prototype you want to put in front of real humans.
**Why it's optional:** You do not need live user input to practice the loop. You need it to start replacing your hypotheses with evidence.

---

## Outcome

You have a live Tally form collecting structured input from real users (or real teammates role-playing as users) that feeds directly into a Claude Code skill. One command pulls the latest responses, synthesizes them, and drops an updated research doc into your project folder. The next time you run `prd-from-research`, it reads real signal instead of your gut.

You should end up with:

- A published Tally form with 5 to 8 questions tied to the riskiest assumption you named in your PRD.
- A small Claude Code skill (or a saved prompt) that pulls responses via the Tally MCP and produces a synthesis doc.
- At least one cycle where a new response shifted something in your PRD or your eval plan.

## Why this is worth your time

Most PMs stop at "I should talk to users" and never close the loop because the logistics (scheduling, recording, transcribing, synthesizing) are real work. Tally collapses that to: write five questions, share a link, get structured answers back. The MCP closes the last mile by making "pull and synthesize" a one-command move instead of a copy-paste slog.

The deeper reason: your Week 2 riskiest assumption is a guess until a real person tells you otherwise. Tally is the cheapest possible instrument for testing the *adoption* side of the feature, while your evals test the *quality* side. Both matter. Running them in parallel is the PM operating system the course is building toward.

## Things to consider

- **Questions are a rubric.** Treat your Tally questions the way you treat eval rubric criteria. Each question should produce visibly different answers from a user who needs your feature versus a user who does not. Vague questions get vague responses that do not move your PRD.
- **Multiple-choice beats free-text for signal.** Free-text reads nicer but clusters harder. If you want themes, use ranked or multi-select. Keep free-text for the "what are we missing?" final question.
- **Ship-gate: one answer that would change your decision.** Before publishing, name the single response that, if you got it, would change your ship/iterate/pivot call. If no answer would change your mind, the form is decoration. Rewrite it.
- **Where it lives in your loop.** Option A: run Tally before the prototype to sharpen the PRD. Option B: run it alongside the prototype, asking users to react to a screenshot. Option C: run it after the prototype, as the first real validation step. All three are legitimate. Pick one on purpose.
- **The MCP does not grade for you.** The skill you build on top of it decides how raw responses become themes. This is where your Week 1 `feedback-synthesizer` instincts come back. Treat each batch of responses the way you treated the support tickets and interview transcripts.
- **Sample size reality.** Ten honest answers from real users beats 100 answers from a broad email blast. Do not pad.

## Starter prompts to try in Claude Code

- "Use the Tally MCP to list my forms and show me the response count for each."
- "Pull the latest 20 responses from form X. Cluster the free-text answers and tell me the top three themes. Quote two responses per theme."
- "Compare this batch of Tally responses against the riskiest assumption in my PRD at `./prd.md`. Is the assumption holding, cracking, or broken? Cite specific responses."

## Stretch

- Build a recurring skill that runs weekly, pulls new responses, diffs against last week's synthesis, and posts the delta to a `research-log.md` file. Week 4 previews this pattern. You can get there now.
- Pipe the synthesis output directly into `prd-from-research` as an updated research input. The whole chain (form response to refreshed PRD) becomes one command.

## What not to do

- Do not skip writing the questions yourself and let Claude draft them cold. The act of writing the questions is half the thinking. Claude is a fine editor on your draft. It is a mediocre first-drafter because it does not know your riskiest assumption the way you do.
- Do not collect responses indefinitely before synthesizing. Synthesize every five responses. Early signal is the most valuable signal.
