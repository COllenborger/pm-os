# Side-Quest: PostHog as a Riskiest-Assumption Generator

**Size:** Medium (2 to 3 hours)
**When to do this:** If your product already has PostHog (or any analytics tool you can point Claude Code at) and real users flowing through it.
**Why it's optional:** If you do not have production telemetry yet, skip this. Come back when you do.

---

## Outcome

You have a Claude Code skill that reads PostHog data and produces a ranked list of riskiest-assumption candidates grounded in real user behavior. Instead of guessing where the leverage is, you let the funnel tell you.

You should end up with:

- Access to PostHog via its MCP, verified by a simple "show me my top 10 events last week" call.
- A skill or saved prompt that pulls a specific signal (funnel drop-off, feature-flag adoption, event frequency) and drafts 2 to 3 candidate PRDs with riskiest assumptions already written in the "my product only works if the AI can consistently ___" form.
- At least one case where the data pointed you at a feature opportunity you would not have picked on instinct.

## Why this is worth your time

Week 2 asks you to name a riskiest assumption. Most PMs name the one they have been thinking about for weeks, not the one their data would point at. PostHog flips that. The biggest funnel drop-off is an objective fact. The feature flag with 8% adoption is an objective fact. Those facts are better prototype candidates than your hunches, because they come pre-loaded with evidence.

The deeper reason: this is the first time in the course you let a data source drive feature selection instead of your own pattern-matching. That handoff (from "what I want to build" to "what the evidence says deserves building") is the move that separates PMs who ship useful features from PMs who ship interesting ones.

## Things to consider

- **The biggest drop-off is rarely the right drop-off.** The signup-to-activation drop-off is almost always huge, and almost always a known problem with a known solution. Look for mid-funnel drops inside features your team has already built. Those are where AI can actually change the shape of the curve.
- **Feature-flag adoption is a hypothesis graveyard.** A flag at 8% adoption after a month is either a bad feature, a discoverability problem, or a quality problem. Your job is to tell them apart. The prototype-plus-eval loop is the cheapest way to find out which.
- **Event data is lumpy.** PostHog does not know why someone did or did not click. Pair any signal you pull with a qualitative source (Tally form, support ticket, interview transcript) before writing the PRD. One data source alone lies; two data sources triangulate.
- **The skill is a format, not a verdict.** The skill's job is to turn raw numbers into PRD-shaped candidates. You still have to pick which candidate to actually prototype. Do not outsource that judgment to Claude.
- **Watch for "cool metric, no decision."** If the signal you pull does not change what you would build, it is not a useful signal. Bias toward metrics that would make you pick a different feature.
- **Privacy check.** Pulling user-level data through an MCP means it passes through your Claude Code context. Check your company's policy on this before pointing the skill at production data. Anonymized or aggregated queries are the safe default.

## Starter prompts to try in Claude Code

- "Use the PostHog MCP to find the biggest week-over-week drop in any event I am tracking. Give me the top three with percent change and absolute volume."
- "Pull adoption data for every feature flag currently active. Which ones are under 15% after two weeks? For each, draft a one-paragraph hypothesis for why."
- "Find the step in my main funnel with the highest drop-off rate. Write three candidate prototype PRDs for features that might address it, each with a riskiest assumption in the 'my product only works if the AI can consistently ___' form."

## Stretch

- Chain this with `prd-from-research`: PostHog pulls the signal, the skill produces the evidence doc, `prd-from-research` turns it into a full PRD with eval files. One command from "what does my data say this week?" to "a PRD I could prototype tomorrow."
- Build a weekly recurring skill that posts the top three signal-driven prototype candidates to a file every Monday. Week 4 previews this automation pattern.
- After running your Week 2 eval loop, circle back and write the *second* set of riskiest assumptions you would want PostHog to tell you about on the next version. That is the evidence-to-prototype-to-evidence flywheel.

## What not to do

- Do not let the skill pick the feature for you. The skill surfaces candidates. You decide which one to prototype based on strategy, effort, and taste, not just the biggest number.
- Do not use production user-level data without checking your company's privacy policy. Aggregated or anonymized queries first.
- Do not confuse a signal with a cause. A drop-off tells you where, not why. The why still comes from users.
