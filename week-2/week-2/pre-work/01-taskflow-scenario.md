# The TaskFlow Scenario

Throughout Week 2 we will follow Sarah Chen, a PM at TaskFlow. Her work is based on real research data we already have access to from Week 1. We will build the same prototype she is building, using the same principles, on the same scenario, so every concept lands on a concrete example. When you apply this loop to your own product in the practice assignment, the pattern will already be familiar.

## Meet TaskFlow

TaskFlow is a fictional B2B project management tool. Think of it as a lighter, Slack-integrated alternative to Monday.com or Asana, aimed at mid-market teams that handle cross-functional work: marketing ops, campaign execution, professional services delivery, agency project tracking. The product has a clean board view, a strong Slack integration for creating tasks from messages, and a growing set of AI features (task summaries, auto-generated descriptions) that are early but promising.

The customer base spans three segments. Startups on the free and low tiers (IndieTrack, LaunchPad Co, FlowState Labs). Mid-market teams on paid plans (GreenPath Studios, Apex Marketing, BrightWave Digital, CrossPoint Analytics) running 15 to 30 active projects with 10 to 30 users. Enterprise accounts (Meridian Corp at 50+ projects and 87 users, Pinnacle Group at 95 users, NovaTech Industries) that stretch the product at scale and surface its gaps: no SSO, no audit logs, no RBAC, dashboard performance issues when project counts cross 50.

The mid-market segment is where TaskFlow's revenue concentration sits and where the research points hardest. That is the segment Sarah is building for.

## Meet Sarah

Sarah Chen is a PM at TaskFlow. In Week 1 she ran the standard research loop that Week 1 of this course teaches: a competitive landscape analysis of project management tools, a 32-minute user interview with Rachel Torres at GreenPath Studios, and a synthesis pass across TaskFlow's inbound support tickets and a recent customer survey. She is now responsible for deciding what ships next in the mid-market product surface.

## What the research found

Five findings came out of the synthesis. They ring true because they come straight from the Week 1 sample data.

1. **Team leads are manually maintaining parallel spreadsheets to get a cross-project view.** Rachel literally named hers "The Real Dashboard" and updates it every Monday and Wednesday. It has one row per project with owner, status, next deadline, and blockers. The survey echoes this (respondent 2, marketing manager, 45-person agency: "No cross-project view, I can't see everything due this week in one place"). The Meridian Corp support ticket (TK-1201) shows the same pattern at enterprise scale: "We've had to start using spreadsheets as a workaround" when the dashboard timed out.

2. **The cross-project view problem is operational, not reporting.** Rachel described what she wants precisely: "Across all my projects, what's due this week, what's overdue, and where there's a blocker. Grouped by project. With the ability to click into any task and update it right there." She is not asking for a status slide. She is asking for a workspace.

3. **Team leads are the load-bearing users.** Rachel runs the Monday standup, takes notes, then spends 20 minutes updating TaskFlow after the meeting to reflect what the team said. Only 4 of her 12 teammates update the tool directly. The rest treat it as read-only. Rachel calls herself "a human sync engine." That is roughly 50 minutes a week of pure sync work per team lead, before any planning happens.

4. **TaskFlow's existing AI features are landing, but they are context-blind.** Rachel used the task summary feature and found it "surprisingly helpful" for Monday reviews, but she wants it to know her team's terminology ("GTM launch," "Tier 1 campaign"). Survey respondent 17 said the same thing: "AI doesn't know anything about our product context, suggestions are generic." This tells Sarah there is AI appetite in the mid-market segment and a specific path to making the AI more useful: ground it in the team's actual project data.

5. **The migration cost is the moat, and the spreadsheet is the threat.** Rachel is not going to switch to Monday.com or Asana casually. 200+ projects and 12 people retrained is too expensive. But she told Sarah the exit condition plainly: "If I still need my Google Sheet a year from now, I'll seriously evaluate switching." The parallel spreadsheet is not a quirk. It is an early signal of churn.

## The problem statement that emerged

Team leads cannot see across their projects without manual work, so they maintain parallel spreadsheets. That spreadsheet is the real product. As long as it exists, TaskFlow is losing 50 minutes a week of its most valuable users' time and carrying a live churn signal in every mid-market account.

## The riskiest assumption Sarah will test

Sarah's prototype feature is an AI-generated weekly cross-project summary. Pulled automatically from existing TaskFlow task data, grouped by project, surfacing what is due this week, what is overdue, and where there is a blocker or risk. Delivered in-product (not as a static report), and actionable (click a blocker to open the task).

Her riskiest assumption, stated precisely:

> If TaskFlow auto-generates a weekly cross-project summary from existing task data, team leads will trust it enough to stop maintaining their parallel spreadsheet.

Note what this is and what it is not. It is not an adoption assumption ("will team leads want this?"). Rachel already told Sarah she wants exactly this thing. The adoption bet is close to won. It is a **quality assumption**: can the AI produce a summary that is complete (no missed blockers), accurate (no hallucinated dates or owners), actionable (surfaces the right things, not everything), and trustworthy enough that a team lead will stop double-checking by hand? If the AI is 80% right, Rachel will still maintain her spreadsheet, because the 20% is where the real blockers live. Quality assumptions are what evals test.

## The prototype Sarah will build

Sarah will not build just the weekly summary feature. She will build the full user journey: a landing page, a login screen, a dashboard, the weekly summary feature itself, and an exit path.

This is the **ins and outs** principle. A feature by itself tells you nothing about whether a user will trust it. A user arrives at a feature with context (a week of work, a Monday morning, an expectation) and leaves with an action (open a blocker, share with a teammate, close the tab). The feature is the test. The shell around it is the stage the test runs on. Without a plausible way in and a plausible way out, you are reviewing a component, not evaluating a product experience.

The journey:

1. **Landing** - a marketing page that sets the frame (TaskFlow, weekly summary, mid-market team leads).
2. **Login** - a fake login that captures a persona (Rachel at GreenPath, 15 projects, 12 teammates) and drops the user into a pre-seeded dashboard.
3. **Dashboard** - TaskFlow's existing surface: project list, boards, the normal daily view. The shell that makes the feature feel like part of a real product.
4. **Weekly summary feature** - the riskiest-assumption test. An AI-generated summary grouped by project, surfacing what is due, what is overdue, what is blocked. Clickable items route to their source task.
5. **Exit** - a plausible next action (share the summary, open a blocker, dismiss an item) that closes the loop.

See `pre-work/ins-and-outs.md` for the full treatment of this principle.

## How students use this scenario

In pre-work you study Sarah's PRD (`sarah-example-prd.md`) as the worked example of a research-grounded, evaluable, single-feature PRD. In the workshop you build Sarah's prototype, or if you are ready, bring your own PRD and your own feature. TaskFlow is the path of least resistance: the data is already written, the PRD is already drafted, the build prompt already works, and you can put all your attention on the prototype-to-eval-to-decision loop instead of on the scenario setup. In the practice assignment you apply the same loop to your own product, using your own Week 1 research.

## Where to go next

- `sarah-example-prd.md` - Sarah's worked PRD for the weekly summary.
- `pre-work/prd-best-practices.md` - the 9-section PRD shape for AI prototypes and the eval-file contract.
- `pre-work/build-your-prd-skill.md` - author your own `prd-from-research` skill with skill-creator and run it on your research.
- `pre-work/ins-and-outs.md` - the principle, applied to Sarah's journey.
- `pre-work/riskiest-assumption-setup.md` - how to name your riskiest assumption and connect it to an eval plan.
