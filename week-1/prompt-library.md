# Week 1 Prompt Library: PM Research
## AI-Native PM Bootcamp

These prompts are ready to use. Replace anything in [BRACKETS] with your specific information, then paste into Claude Code.

Each prompt works better when your CLAUDE.md is filled in - Claude will automatically apply your product context without you having to repeat it every time.

**A note on research prompts:** AI-generated competitive intelligence and market data is a research accelerator, not a research replacement. Always cross-reference key numbers (pricing, market size, funding rounds) against live sources before sharing with stakeholders. Claude's training data has a cutoff, and pricing pages change frequently.

---

## 1. Competitive Landscape Analysis

Use this for a full competitive overview of your market. Expect this to take 10–15 minutes to run.

```
Run a full competitive landscape analysis on the [YOUR MARKET] market.

Context: I'm a PM working on [YOUR PRODUCT DESCRIPTION]. I want to understand the competitive landscape to inform our roadmap and positioning.

Research the top 5–7 competitors. For each one, cover:
- Their core positioning and what they claim to be best at
- Who they're built for (company size, industry, buyer persona)
- Pricing model and tier structure (check their pricing page)
- Key strengths based on user reviews
- Key weaknesses or common complaints
- Any significant recent moves (launches, acquisitions, funding)

After profiling each competitor, produce:
1. A feature comparison matrix with the 8–10 most differentiating capabilities
2. A market map as a markdown table showing where each player sits on the key positioning axes (do not use ASCII art diagrams)
3. 3 strategic opportunities or whitespace areas not well-served by any current player

Format the output as a markdown document I can save and share with my team.

[Optional: Focus on [SPECIFIC ANGLE, e.g., "enterprise pricing", "AI features", "SMB competitors"]]

Format your response as clean markdown content only. Do not include preamble, meta-commentary, follow-up offers, or remarks about file operations. Start with the first content heading and end with the last content section.
```

---

## 2. Quick Competitor Snapshot

When you need a fast read on a specific competitor - not the whole market.

```
Give me a quick competitive snapshot on [COMPETITOR NAME].

I'm a PM at a company that competes in [YOUR MARKET]. I need to understand this competitor well enough to brief my team and answer questions in a strategy review.

Cover:
- What they do and who they're for (in plain English, not their marketing copy)
- Their positioning and what they claim to be uniquely good at
- Pricing: tiers, model, ballpark costs
- Top 3–4 strengths from user reviews
- Top 2–3 weaknesses or complaints
- What they've launched or changed in the last 12 months
- How they compare to [YOUR PRODUCT] in 3–4 key dimensions

Keep it tight. One page max.

Output the snapshot directly. Do not include preamble, meta-commentary, or notes about your process. Start with the content itself.
```

---

## 3. Market Sizing Analysis

Use this to build a TAM/SAM/SOM estimate for a business case, roadmap pitch, or strategy document.

```
Run a market sizing analysis on the [YOUR MARKET] market.

I need this for [PURPOSE: e.g., a leadership strategy review / a board presentation / a build-vs-buy analysis].

Produce:
1. TAM - Total Addressable Market (top-down analyst estimate + bottom-up calculation where possible)
2. SAM - Serviceable Addressable Market for [YOUR SPECIFIC SEGMENT, e.g., "mid-market US companies, 200-2000 employees"]
3. SOM - Realistic near-term capture estimate with assumptions stated
4. CAGR - projected annual growth rate with source
5. Top 3 growth drivers with evidence
6. Top 2 growth constraints

Show your work for every number. If an exact figure isn't available, show the calculation and state your assumptions. Provide ranges, not point estimates.

Format your response as clean markdown content only. Do not include preamble, meta-commentary, follow-up offers, or remarks about file operations. Start with the first content heading and end with the last content section.
```

---

## 4. Trend Analysis

Use this to understand what's changing in your industry and what to pay attention to.

```
Run a trend analysis on [YOUR INDUSTRY OR TECHNOLOGY SPACE].

I'm a PM focused on [YOUR PRODUCT AREA]. I want to understand what's changing in this space over the next 1–3 years to inform our roadmap priorities.

For each major trend:
- Name it and describe what's actually happening (concrete, not vague)
- Classify it: Technology shift / Behavioral shift / Regulatory / Investment pattern / Competitive dynamic
- Time horizon: Near-term (0-1yr), Medium-term (1-3yr), or Long-term (3-5yr)
- Evidence: at least one specific data point or company example
- Strategic implication: what should I be building for, watching, or preparing for?

Cover 6–8 trends. Finish with a section on what's overhyped or premature - things that get a lot of press but may be less impactful than claimed.

[Optional focus: [SPECIFIC ANGLE, e.g., "impact of AI on this category", "regulatory changes", "enterprise adoption patterns"]]

Format your response as clean markdown content only. Do not include preamble, meta-commentary, follow-up offers, or remarks about file operations. Start with the first content heading and end with the last content section.
```

---

## 5. Company Deep Dive

When you need to go deep on a single company - for a competitive response, a partnership evaluation, or a leadership briefing.

```
Do a deep dive on [COMPANY NAME].

I'm a PM at [YOUR COMPANY]. I need a comprehensive profile of this company because [REASON: e.g., they're our most direct competitor / we're evaluating a partnership / they just raised and we need to understand their trajectory].

Cover:
- Company overview: founded, size, funding, revenue (if known)
- Product: what it does, key features, UX philosophy, pricing
- Business model: how they make money, GTM motion, target customer
- Customer sentiment: what users love, what they complain about (from reviews)
- Strategic direction: what they've launched in the last 18 months and where they seem to be heading
- Competitive positioning: their 2–3 closest alternatives and how they differentiate
- Vulnerabilities: where are they exposed?

Flag anything you're uncertain about. I'd rather have "not publicly disclosed" than a confident guess.

Format your response as clean markdown content only. Do not include preamble, meta-commentary, follow-up offers, or remarks about file operations. Start with the first content heading and end with the last content section.
```

---

## 6. User Interview Question Generator

Use this before conducting user interviews. Give it context and it generates a tailored question guide.

```
Generate a user interview guide for research on [TOPIC: e.g., "why customers churn in the first 90 days" / "how finance teams currently manage expense approvals"].

My product: [BRIEF DESCRIPTION]
Interview subject: [WHO YOU'RE TALKING TO - role, company type, context]
Research goal: [WHAT YOU'RE TRYING TO LEARN]
Session length: [e.g., 30 minutes / 45 minutes]

Structure the guide with:
- 2–3 warm-up questions to get them talking (about their role, their workflow)
- 5–7 core research questions focused on behavior, not opinions (avoid "would you" questions - ask "do you" and "tell me about a time when")
- 2–3 probing follow-ups for each core question
- A closing question to capture anything you missed

Flag any questions that might lead the witness - things I should reframe.

Output the guide directly. Do not include preamble, meta-commentary, or notes about your process. Start with the content itself.
```

---

## 7. Customer Feedback Synthesis

Use this when you have a pile of support tickets, survey responses, or interview notes that need to be organized.

```
Synthesize the following customer feedback and identify the key themes.

[PASTE YOUR FEEDBACK HERE - survey responses, support tickets, interview notes, NPS comments, etc.]

Produce:
1. The top 5–7 themes, each with:
   - A clear name for the theme
   - 2–3 direct quotes that represent it
   - An estimate of frequency (how many of the responses touched on this)
   - Whether it's primarily positive, negative, or mixed

2. Any themes that appear small in volume but feel high-severity (things that would be serious problems even if few people mention them)

3. One section called "What customers are NOT saying" - notable gaps or what you'd expect to hear but didn't

Format as a structured markdown document I can share with my team.

Output the synthesis directly. Do not include preamble, meta-commentary, or notes about your process. Start with the first content heading and end with the last content section.
```

---

## 8. Industry Report Summarization

When you have a long analyst report, earnings call transcript, or research paper and need the PM-relevant highlights.

```
Summarize the following [REPORT TYPE: e.g., analyst report / earnings call transcript / research paper] with a focus on what matters for product strategy.

[PASTE DOCUMENT TEXT OR KEY SECTIONS HERE]

I'm a PM in [YOUR MARKET]. I need to understand:
1. The 3–5 most important findings or data points
2. Any market sizing or growth rate figures cited
3. Any specific product trends, user behavior changes, or emerging needs mentioned
4. What the author predicts will happen in the next 1–3 years
5. Anything that's directly relevant to [YOUR SPECIFIC PRODUCT/PROBLEM AREA]

Keep the summary under 500 words. Use bullet points. Flag any claims that seem unsupported or overly speculative.

Output the summary directly. Do not include preamble, meta-commentary, or notes about your process. Start with the content itself.
```

---

## 9. Feature Gap Analysis

Use this when you want to identify what your product is missing compared to competitors.

```
Run a feature gap analysis comparing [YOUR PRODUCT] to its competitors in the [YOUR MARKET] space.

My product: [DESCRIPTION OF WHAT YOUR PRODUCT DOES AND WHO IT'S FOR]

Known competitors to include: [LIST 3–5 COMPETITORS]

For each competitor:
1. List the features they have that my product does not (gaps I should close)
2. List the features my product has that they don't (advantages to emphasize)
3. List features neither of us has well (potential whitespace)

Organize the output as a feature matrix first, then a written summary of the 3 most important gaps I should consider for my roadmap.

[Optional: weight the analysis toward [CUSTOMER SEGMENT, e.g., enterprise buyers / self-serve users / teams under 50 people]]

Format your response as clean markdown content only. Do not include preamble, meta-commentary, follow-up offers, or remarks about file operations. Start with the first content heading and end with the last content section.
```

---

## 10. Competitive Positioning Statement Draft

Use this when you need to articulate how your product is differentiated - for a pitch, a sales deck, or a positioning workshop.

```
Help me draft a competitive positioning statement for [YOUR PRODUCT].

Context:
- My product: [WHAT IT DOES]
- Primary customer: [WHO IT'S FOR]
- Main competitors: [LIST 2–3]
- What we do better than anyone else: [YOUR KEY DIFFERENTIATOR - even if rough]
- What we don't compete on: [WHERE YOU INTENTIONALLY DON'T TRY TO WIN]

Produce:
1. Three positioning statement options, each taking a different angle (e.g., one emphasizing the customer outcome, one emphasizing the differentiator, one emphasizing the customer segment we're built for)
2. A "for the website" version: a 1–2 sentence headline + subheadline
3. A "for a sales call" version: a 2–3 sentence verbal positioning you could say naturally

For each option, explain what assumption it makes about what our buyers care most about.

Output the positioning options directly. Do not include preamble, meta-commentary, or notes about your process. Start with the content itself.
```

---

## How I actually use these prompts

A few principles I keep telling PMs when they ask me how to get more out of Claude Code:

### Do this with me, not for me

This is the most important mental shift, and it's the one most people get wrong. The PMs who treat Claude as a delegation target - throw a task at it, accept the output, move on - are the ones at risk of being quickly replaced by anyone who's willing to put some actual thinking into the loop. If you don't engage your own experiences and thoughts, if you don't critically review what comes back, if you don't tell Claude when it's wrong or dumb or going off the rails, you're missing the entire point. The value isn't the output. The value is the conversation that gets you to the output.

Every prompt in this library is designed to start a conversation, not to be a one-shot answer.

### Messy prompts are fine. Perfect prompts are overrated.

I don't craft perfect prompts. I use Wispr Flow and talk things out. The prompt that goes into Claude has ums, ahs, and filler words in it. I don't care. What I care about is that I've started the conversation with enough context for Claude to do something useful, and then I can iterate.

Start with a brain dump. Let Claude shape it. That's meta-prompting - asking Claude to help you ask better questions - and it's one of the highest-leverage moves you can make.

### Ask Claude to interview you back

When I'm trying to figure out a research question - like "what's the best way to use Claude to do market research against one of my competitors?" - my first move isn't "do market research." It's "tell me how I'd approach this, then interview me to get the information you need from my experience before you start."

This is the move that turns Claude from a generic tool into a partner who knows your situation. Try it on any of the prompts in this library. Before you run the full prompt, ask Claude to ask you questions about your product, your users, your competitors. Answer those. Then run the real prompt with all that context loaded.

### Be specific about your market

Claude can only work with what you give it. "B2B software" produces generic results. "Accounts payable automation for mid-market manufacturing companies" produces useful results. The specificity compounds: the more specific your market description, the more specific the competitors, the more specific the comparisons, the more useful the output.

### Iterate, don't regenerate

If the first output isn't right, tell Claude specifically what to fix: "the competitor profiles are too long - trim each one to 5 bullets" or "you missed [Competitor X], add them." Don't start over from scratch with a new prompt. Starting over loses the working context you've built. Iterating builds on it.

### Verify pricing and recent news

Claude's training data has a cutoff. Pricing pages change. Always check primary sources for anything that goes in front of stakeholders. This is also a place where the "with me, not for me" rule matters: Claude drafts, you verify. That division of labor works.

### Save your outputs

After a good research session, tell Claude: "Save this as [filename].md." Or copy it into a file yourself. Don't leave good research in a chat window where you'll lose it. Every output that matters should become a file you can come back to and feed into the next workflow.

### The meta-point

The PMs who get real value from Claude Code are the ones doing the work with Claude, not handing the work to Claude. These prompts are a starting line, not a finish line. Your thinking is the thing that makes the output worth anything.
