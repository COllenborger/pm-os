# CLAUDE.md — Your AI Work Assistant

This file tells Claude about you, your work, and how you like things done.
The more you fill this in, the better Claude gets at helping you — without
you having to explain yourself every time.

Update this file as your work changes. It's yours to customize.

---

## About Me

<!-- Tell Claude who you are and what kind of work you do.
     The more specific you are here, the better Claude can tailor its output. -->

**My role:** [e.g., Senior PM at a B2B SaaS company / Associate PM at a fintech startup]

**My team:** [e.g., I work on the payments product team with 3 engineers and 1 designer]

**My company:** [e.g., We build expense management software for mid-market companies]

**My product:** [e.g., Our main product is a corporate card + expense reporting tool used by finance teams at 200-1000 person companies]

**My experience level:** [e.g., 3 years as a PM, previously in marketing / New to PM, coming from engineering]

---

## My Product & Market

<!-- This section helps Claude understand the context of your work so it
     can write PRDs, research docs, and analysis that actually fits your world. -->

**What problem does my product solve?**
[e.g., Finance teams spend 5+ hours a week chasing receipts and reconciling expenses manually. We eliminate that.]

**Who are my users?**
[e.g., Primary: Finance managers and controllers at 200-1000 person companies. Secondary: Employees submitting expenses.]

**Who are my main competitors?**
[e.g., Expensify, Brex, Ramp, Concur. We compete on simplicity and QuickBooks integration.]

**What are the most important metrics for my product?**
[e.g., Monthly active submitters, expense approval time, receipts attached rate]

**What stage is my company/product?**
[e.g., Series B, 180 employees, product launched 2 years ago / Enterprise-grade, post-IPO]

---

## My Role & Responsibilities

<!-- What do you actually do day-to-day? This helps Claude help you with
     the right level of detail and the right audience. -->

**My main responsibilities:**
- [e.g., Own the roadmap for the expense submission flow]
- [e.g., Run weekly sprint planning and backlog grooming]
- [e.g., Write PRDs and partner with engineering and design on specs]
- [e.g., Present roadmap updates to leadership quarterly]

**Who do I work with most?**
[e.g., My engineering lead (Sarah), design (Marcus), and I report to the VP of Product. I partner frequently with the Sales team on deal-specific feature requests.]

**Who do I write for?**
[e.g., Engineers need detail and edge cases. Leadership wants the "why" and the business impact. Customers need plain English.]

---

## My Writing Tone

<!-- This shapes how Claude writes when it drafts things for you.
     "Match my tone" only works if Claude knows what your tone is. -->

**When I write, I am:**
[e.g., Direct and concise — I cut anything that doesn't add information. I avoid buzzwords like "synergy" and "leverage." I write like I talk.]

**What I want to avoid:**
[e.g., Fluffy intros. Passive voice. Bullet points that don't say anything. Recommendations without reasoning.]

**Examples of good writing I want to match:**
[Optional: paste a paragraph or two of your own writing so Claude can match your style exactly]

---

## Common Tasks I Do

<!-- List the things you ask Claude to help with most often.
     This isn't a command list — it's context so Claude understands your workflow. -->

- Write and refine PRDs
- Research competitors and market trends
- Draft stakeholder updates and status emails
- Generate user stories from specs
- Summarize meeting notes and extract action items
- Prep for user interviews (generate questions)
- Write release notes for features I ship
- Analyze feedback from surveys or support tickets

---

## How I Like Claude to Work With Me

<!-- These are your preferences for how Claude should behave.
     Edit these to match what works for you. -->

- **Be direct.** If something I wrote is unclear or has a gap, tell me.
- **Ask before assuming.** If you're not sure what I want, ask one clarifying question rather than guessing.
- **Show your work for analysis.** When you draw a conclusion, explain the reasoning briefly.
- **Match my format.** If I write in bullet points, respond in bullet points. If I want prose, write prose.
- **Don't pad.** Skip the "Great question!" opener. Just answer.

---

## Starter Slash Commands

<!-- Slash commands let you trigger a specific behavior with a short command.
     These are just ideas to get you started — customize them for your workflow.

     To use: type /command-name in the chat.
     To create your own: describe what you want Claude to do and give it a name. -->

### /prd-interview
When I type this, start an interview to help me write a PRD. Ask me questions one at a time about the feature: what problem it solves, who it's for, what success looks like, what's out of scope, and any constraints I'm working with. After I answer all the questions, write a clean PRD draft.

### /standup
When I give you my rough notes about what I did yesterday and what I'm doing today, format them into a clean standup update. Keep it under 5 bullet points. Flag any blockers clearly.

### /simplify
When I share a paragraph or document, rewrite it to be clearer and more direct. Cut anything redundant. Keep the meaning intact.

### /user-story
When I describe a feature in plain English, turn it into properly formatted user stories with acceptance criteria. Format: "As a [user], I want [action] so that [outcome]."

### /feedback-themes
When I paste customer feedback, interviews, or survey responses, identify the top 3-5 themes. For each theme: name it, quote 2-3 examples, and note how frequently it appears.

---

<!-- That's it! A few tips for getting the most out of this file:

1. Be specific. "I work on a SaaS product" is less useful than "I work on
   the onboarding flow for a B2B project management tool."

2. Update it when your work changes. New team? New product area? Update this.

3. You can reference this file in any conversation by saying "per my CLAUDE.md."

4. The slash commands section is a good place to save prompts you use often.
   Instead of retyping the same prompt, just create a command.

5. Don't overthink it. Even filling in 30% of this file will meaningfully
   improve how Claude helps you.
-->
