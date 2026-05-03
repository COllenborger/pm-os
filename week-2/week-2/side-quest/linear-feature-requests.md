# Side-Quest: A Linear Skill That Writes Tickets the Way You Wish They Were Written

**Size:** Small to Medium (1 to 2 hours)
**When to do this:** Any time after you have run the Week 2 loop once and have a PRD, eval plan, or research doc worth linking to. The `linear` CLI makes this fast.
**Why it's optional:** Your Week 2 artifacts are useful on their own. This closes the loop between "I have a PRD and evals" and "the team has a ticket they can actually work from."

---

## Outcome

You have a Claude Code skill that takes a rough idea, a PRD excerpt, a user complaint, or a finding from an eval run, and turns it into a well-formatted Linear ticket. The skill calls the `linear` CLI to either create the ticket in triage or reformat an existing one you point it at. Tickets you create with it carry the evidence, the acceptance criteria, and the eval context a good engineer needs to start work without a kickoff meeting.

You should end up with:

- The `linear` CLI working locally, verified by listing your own issues.
- A skill (something like `linear-ticket` or `format-linear-ticket`) that takes input in a few shapes (a paragraph of thinking, a PRD file, an eval result) and produces a ticket draft with the sections you care about filled in.
- At least one real ticket in Linear created by the skill that you are willing to assign to someone. If you would not hand it off, the skill needs another pass.

## Why this is worth your time

The ticket is where product work hits the floor. A well-formed ticket pulls a full sprint of context (the customer voice that motivated it, the acceptance criteria that define done, the eval scores that told you to ship or iterate) into one linkable artifact. A poorly-formed ticket is a meeting waiting to happen. Most PMs write tickets in the shape that is fastest for them, which is almost never the shape that is most useful to engineering.

The deeper reason: this is where your Week 2 artifacts (PRD, eval results, decision paragraph) become actionable inside your team's system of record. If the PRD never makes it into a ticket, the work stalls in your notes. A skill that writes the ticket for you means the cost of turning a decision into a tracked unit of work drops to near zero. You will create better tickets more often, which compounds.

## Things to consider

- **Name the sections you actually want.** Before you build the skill, write down the section structure a great ticket for your team would have. A reasonable starting set: problem statement, customer evidence, acceptance criteria, eval or quality bar, links to related artifacts, open questions. Your team may care about others (design handoff, analytics events, feature flag). The skill is only as good as the template you give it.
- **Triage versus assigned.** Decide up front whether the skill creates tickets in triage (low-commitment, for review) or in a specific team's backlog (higher-commitment, needs owner and priority). Triage is the safer default while you are learning what your skill produces.
- **Evidence is a link, not a paragraph.** Customer feedback embedded as a wall of text in a ticket rots fast. A link to a synthesis doc, a Zendesk ticket, an interview transcript, or a Tally response file stays alive. If the evidence is local (in your project folder), decide where it will live long-term so the link does not break. If you are posting to Linear, a pasted quote plus a link to the source is the right balance.
- **Acceptance criteria are observable.** "The AI feature works well" is not an acceptance criterion. "The weekly summary surfaces every blocker that appears in the project data, with no owner or date fabricated, scoring 4 or higher on the completeness rubric across 8 of 10 test cases" is. If you have an eval plan, acceptance criteria mostly write themselves.
- **Input shapes the skill handles.** Think about what you actually want to feed in. A rough paragraph you dictated on a walk. A PRD file at a specific path. An eval results JSON. A Zendesk ticket ID. The skill does not need to handle all of these on day one. Start with the one you will use this week.
- **The skill is a coach, not a scribe.** A great ticket skill should push back if you hand it a weak idea. If there is no customer evidence, it should ask. If the acceptance criteria are vague, it should demand numbers. If you would rather it just do what you say, you are optimizing for speed over quality. Decide which one you want and build accordingly.
- **Keep it reversible.** The skill should show you the ticket draft before it creates anything in Linear. "Here is the ticket I am about to create, approve to proceed" is the right default. Autonomous ticket creation sounds cool and is a great way to pollute your triage queue.
- **Reformatting is a first-class use case.** Half the value is taking an existing messy ticket and cleaning it up. Your skill should handle "here is BRI-403, pull it down, reformat it against my template, and update it" as naturally as "here is a new idea, create a ticket."

## Starter prompts to try in Claude Code

- "Create a Linear skill that takes a paragraph of product thinking plus optional paths to a PRD and an eval results file, and produces a ticket draft with sections: problem, customer evidence, acceptance criteria, eval context, links, open questions. Show me the draft before creating anything."
- "Pull BRI-403 with the linear CLI. Reformat the description against the template in my skill. Propose an update, do not apply it yet."
- "I just finished a Week 2 eval run. Read the results at `./evals/run-2026-04-20.json` and my PRD at `./prd.md`, and draft a triage ticket proposing the one prompt iteration the scores suggest. Include the specific scores as evidence."

## Stretch

- Teach the skill to link evidence properly. If you mention a Zendesk ticket, it includes the ticket URL. If you mention a customer name, it checks `wiki/people/` for a page and links it. If you mention a PRD file, it pastes the riskiest assumption and links to the full doc.
- Add a `--from-prd` mode: point it at a completed PRD and it generates a parent epic plus child tickets for the journey pages, the feature build, the eval setup, and the iteration pass. That is the Week 2 loop expressed as tracked work.
- Pair it with the Tally or PostHog side-quest. New Tally responses or a concerning PostHog drop-off trigger a draft ticket automatically, stopping short of creation. You review and approve. That is the Week 4 automation preview with guardrails.

## What not to do

- Do not let the skill create tickets without showing you the draft first. Review gate, every time. The friction is the feature.
- Do not build the skill with fifteen sections because your team uses fifteen. Start with four or five you will actually fill in. Add sections only when you notice tickets going out without them.
- Do not skip the "would I assign this to an engineer right now?" test on every ticket the skill produces. If the answer is no, the skill needs sharpening, not the ticket.
