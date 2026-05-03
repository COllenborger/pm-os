# Ins and Outs: Framing Prototypes for Useful Feedback

Most PM demos fail at the edges, not in the middle. The user arrives unsure what product they are looking at, leaves without a clear next action, and the feedback you collect is noise. The feature in the middle might be great. You will never know, because you never framed the test.

## What this principle is

Every prototype has a way in and a way out. Both are part of the test, even when you only care about the feature in the middle.

**The way in** is what the user already thinks when your prototype loads. What product are they imagining? What job are they trying to do? What mental model did you hand them? If you have not answered those, the user is guessing, and their reaction is half about your feature and half about their confusion.

**The way out** is what the user does when the feature finishes rendering. What action is available? What do they carry back to their normal work? If your demo ends on a blank screen, you have learned nothing about whether they would come back on Monday.

The feature is the test. The shell around it (landing, login, dashboard, exit) is the stage. Treating the shell as decoration is a mistake. The stage is what gives the test its context, and context is most of what you are actually measuring.

## Why this matters for AI prototypes specifically

AI features are judged in context. A weekly summary read in isolation reads as a demo of language model output. The same summary read inside a dashboard a team lead has been using every Monday reads as a tool. One lands as "neat." The other lands as "I would use this." Trust is the product for most AI features, and trust is contextual. You cannot measure it on a naked feature page.

## Three questions every demo must answer before the feature loads

This is the "in." Before the user reaches the feature under test, the prototype must answer:

1. **What is this product?** The landing page settles this in five seconds. Name, one-line description, a screenshot that looks like real software.
2. **Why am I here?** The login or onboarding handoff answers this. "You are Rachel at GreenPath. 15 projects. Monday morning." One sentence of persona framing.
3. **What am I trying to do?** The dashboard seats the user in a plausible job. The entry point to the feature is the invitation. They arrive with a job already in mind.

If any of these three is missing, your feedback signal is corrupted.

## Three questions every demo must answer when the feature is done

This is the "out." When the user finishes interacting with the feature:

1. **Was this better than what I do today?** Rachel has a Google Sheet. Did this replace part of it?
2. **What would I change?** One free-text field.
3. **Would I come back?** A yes/no, or a "yes if," captures the core adoption signal.

A short exit modal handles all of this, not a full interview. Three questions, submit, done. You get a structured artifact per test user and a usable signal on whether the feature earns its next week.

## Fake-door craft

You are not building a real product, you are building a stage. This is a PM superpower, not a design job, and it takes under ten minutes per page.

The trick is mimicry. Pick a SaaS landing page you respect (Linear, Asana, Monday, Height, Notion) and borrow its structure or grab screenshots of your own product and think about the 'entry-point'. Grab that and create it for your user (even if it isn't fully functional). The landing page is not selling anything, it is setting a mental model. Same for the dashboard: show enough that the feature feels embedded. A project list with fifteen rows, a sidebar, a fake user avatar top right. Claude Code builds this in minutes with the right prompt. It is convincing because the shape is right, not because the pixels are polished.

## Sarah's TaskFlow journey as a worked example

See `../sarah-example-prd.md` for the PRD-level treatment. The five pages, with the in and the out called out at each hop:

1. **Landing.** *In:* cold arrival, no context. *Out:* "Try the dashboard" click. Frames TaskFlow as a mid-market PM tool with a weekly AI summary. Five seconds of mental-model setup.
2. **Login.** *In:* declared intent. *Out:* dropped into a dashboard pre-seeded with Rachel's 15 GreenPath projects. One click, hands over a persona, demo mode begins.
3. **Dashboard.** *In:* Monday morning, logged in as Rachel. *Out:* notices the Weekly Summary entry point and clicks. Enough surface to feel like a real product, not every TaskFlow view.
4. **Weekly Summary feature.** *In:* Rachel on Monday, expecting a cross-project read. *Out:* click a blocker to open its task, share to Slack, or dismiss an item. This page is the test.
5. **Exit modal.** *In:* finished reading. *Out:* three questions answered, modal closes. Reaction captured while it is fresh.

The summary is not evaluated in isolation. It is evaluated as "what a team lead reads on Monday morning and trusts enough to act on." Context changes the rubric.

## What ins and outs look like in your PRD

In your User Journey section, for every screen name the in (what context the user brings) and the out (what action closes the screen). Do not over-design. One line each. Naming them forces you to notice the ones you skipped, which is most of the value.

## A short checklist

Before you run your prototype in the workshop:

- Landing page says what the product is in one line.
- Login is one click, zero fields that matter.
- Dashboard seats the user in a plausible work context with realistic data.
- Feature page minimizes new-concept load. The user is judging an output, not learning a UI.
- Entry to the feature is obvious from the dashboard.
- Exit captures reaction. Three questions, one modal.
- Every clickable element either works or is visibly fake, not a dead link.

## Common failures

- **The naked feature.** AI output with no context, no entry, no exit. Users ask "what am I looking at?" and feedback is about the frame, not the feature.
- **The confusing login.** Ambiguous demo mode where the user cannot tell if they are signing up for a real account or entering a sandbox. Make it obviously fake and obviously scoped.
- **The dead exit.** Demo ends on a blank screen. You lose the reaction window. Capture it before they navigate away.
- **The infinite playground.** Too much to click, no clear test. The user wanders, tests nothing, and tells you the product feels "busy." You wanted signal on one feature, you built three.

Name your ins and outs before you build. The feature in the middle is what you care about. The stage around it is how you get a clean read.
