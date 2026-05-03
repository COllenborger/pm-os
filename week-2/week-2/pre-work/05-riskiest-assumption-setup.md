# The Riskiest Assumption: How It Works (and How to Evaluate Yours)

You just watched the video. You know the concept. This doc goes one level deeper — it shows you how to write a riskiest assumption manually, which is exactly what the `prd-from-research` skill is going to do for you. Understanding the mechanics is what lets you tell whether it did it well.

Read this before you run the skill. Use it after to evaluate section 7 of your PRD.

## Traditional RAT vs. AI RAT

The Riskiest Assumption Test is a lean product concept: before you build, name the one thing that most needs to be true for the product to work, then design the cheapest possible experiment to test it. For AI features, the "riskiest assumption" usually shifts categories.

| | Traditional product RAT | AI product RAT |
|---|---|---|
| Typical risk | Desirability, pricing, channel | Output quality under real inputs |
| How you test | Landing page, concierge MVP, smoke test | Evals on a representative test set |
| Who grades | Users (clicks, signups, interviews) | A rubric (human, LLM-as-judge, or assertion) |
| Signal | "Do people want this?" | "Is it reliably good enough that people will trust it?" |
| Time to signal | Days to weeks | Minutes to hours |

The mindset is the same: run the test most likely to kill the idea before you commit engineering to it. What changed is that the kill-shot question for an AI feature is rarely "will anyone use it?" It is "is the AI actually any good at this?" And the cheapest test for that question is an eval, not a user study.

## Two kinds of assumptions

The single most common mistake in Week 2 PRDs is mixing these two up. Your skill knows the difference — but it will not always get it right, and you need to be able to catch it when it does not.

- **Quality assumption.** "The AI can produce X reliably enough that users will trust it." Testable with evals. Week 2 territory. Example: the AI can generate a weekly summary that never invents a due date.
- **Adoption assumption.** "Users will actually use this even if the quality is great." Testable with users, not evals. Week 4 or later territory. Example: team leads will open the summary on Monday mornings instead of their spreadsheet.

Week 2 tests quality. If your riskiest assumption is actually about adoption, evals will tell you nothing useful. This is the most important thing to check in your skill's output.

When in doubt: ask whether you could prove or disprove the assumption by looking only at AI outputs. If yes, it is a quality assumption. If you need to watch what users do, it is an adoption assumption.

## The sentence form

A well-formed riskiest assumption looks like this:

> My product only works if the AI can consistently __________.

**Bad examples** — too vague, not evaluable:
- "The AI can write good summaries." What does "good" mean? Two readers will disagree on the same output.
- "The AI is accurate enough to be useful." Accurate about what? Useful to whom?

**Good examples** — specific, observable, close to binary:
- Sarah's TaskFlow: "The AI can consistently produce a weekly cross-project summary that surfaces every real blocker, fabricates no owners or dates, and ranks project urgency the way a team lead would rank it."
- Meeting notes feature: "The AI can consistently extract every action item from a 60-minute transcript with zero hallucinated owners and zero hallucinated deadlines."

Notice what the good examples share: a concrete output, a quality dimension, and a failure mode a reader could point at in a specific piece of output.

## How to evaluate what your skill produced

Open section 7 of your PRD and run it through this checklist. This is the same process a skilled PM would use to write it manually — you are applying it as a reviewer, not an author.

**Step 1: Is it a quality assumption or an adoption assumption?**
The sentence should be about what the AI can do, not what users will do. If it says "users will trust it" or "team leads will adopt it," that is an adoption assumption. Tell skill-creator: "In the `prd-from-research` skill, the Riskiest Assumption section is producing adoption assumptions. Add a guardrail that rewrites any adoption assumption as the quality assumption underneath it. Update the skill." Then re-run.

**Step 2: Can two people agree on pass/fail from a single output?**
Hand the sentence to a hypothetical teammate. Show them one piece of AI output. Could they mark it pass or fail against the sentence without arguing? If words like "good," "useful," "helpful," or "accurate" appear without a specific criterion attached, sharpen the sentence. Tell skill-creator the specific word that is too vague and ask it to replace with an observable property.

**Step 3: Does the sentence have at least one specific failure mode?**
"The AI can write a clear summary" has no failure mode. "The AI can produce a summary that contains zero fabricated due dates" fails visibly when a date is wrong. The failure mode is what makes the rubric evaluable. If the sentence could never fail, the eval will always pass and teach you nothing.

**Step 4: Do the eval files map back to this sentence?**
Open `rubric.json`. Each criterion should be extractable from the assumption sentence — completeness, hallucination rate, prioritization quality, etc. If the rubric criteria and the assumption sentence feel unrelated, the skill may have drafted them independently. Flag it: tell skill-creator "The rubric criteria in `prd-from-research` should be extracted directly from the riskiest assumption sentence, not generated independently. Update the skill to derive rubric criteria from the assumption text." Then re-run.

## Connecting the assumption to the eval plan

Your sharpened sentence is the spine of your eval plan. Look at Sarah's assumption again:

> The AI can consistently produce a weekly cross-project summary that surfaces every real blocker, fabricates no owners or dates, and ranks project urgency the way a team lead would rank it.

Three quality dimensions are sitting right inside that sentence: completeness (every real blocker surfaced), hallucination rate (no fabricated owners or dates), and actionability/prioritization (ranks urgency the way a team lead would). Those become three of the four rubric criteria in Sarah's Eval Plan. The fourth (readability) comes from the in-product context the PRD describes, not from the sentence itself.

The test cases come from the same sentence. "Every real blocker" implies test cases with known blockers you can check against. "Fabricates no owners or dates" implies adversarial cases with missing owners or ambiguous dates, designed to tempt hallucination. The assumption is the generator for the test set.

If your skill's `test-cases.json` does not feel designed to break the assumption, that is a signal the skill drafted the test cases without grounding them in the sentence. Fix the skill, not the file.

## Common pitfalls to catch in your skill's output

- **Adoption assumption in disguise.** "Users will trust the summary enough to use it" sounds testable but depends on user behavior, not output quality. Rewrite as a quality assumption: "The summary contains no fabricated blockers, which is the precondition for trust."
- **"It works" with no criterion.** "The AI can consistently generate a working summary." Working how? What does a broken one look like? The sentence needs a named failure mode.
- **Too many criteria in one sentence.** "Accurate, complete, actionable, well-formatted, on-brand, and compliant" is five assumptions stacked. Pick the one or two that, if they fail, kill the feature. Demote the rest to secondary rubric criteria.
- **An assumption that could never fail.** "The AI can consistently produce a summary that is at least somewhat helpful." If any output at all clears the bar, the eval will always pass. Raise the bar until a realistic AI output could plausibly miss it.

When your skill's section 7 survives all four checks, your eval files have a strong foundation and you are ready for the session.
