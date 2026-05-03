# Discovery Workflows: 4 Ways to Do Research with Claude Code

A few weeks ago, a previous client of mine texted me out of the blue. We hadn't caught up in about six months, and he wanted to get on a call. I told him I'd be ready in a few minutes.

In those few minutes, I opened Claude Code and said: "Do a quick research pull on this person and this company. Give me an idea of what's been going on." Claude Code used my existing market and competitive research skills to go find a press release I hadn't seen, a recent launch I didn't know about, the direction the company was moving, and a few of the challenges they were navigating. All of it came back before the call started.

That call went somewhere it wouldn't have gone five years ago. I was able to reference the things they were actually working on, connect specific dots they didn't expect me to know, and have a conversation that felt like I'd been paying attention the whole time. It led to real work for me and real value for them. And the only thing I did differently was have the tools in place and actually reach for them.

That's what I mean when I say Claude is a research partner, not a search engine. Competitive analysis is one way to do research, but PMs do discovery across many channels - interviews, support tickets, surveys, transcripts, competitor moves. This guide walks you through four discovery workflows you can run with Claude Code, each with step-by-step instructions and sample data to practice with.

The goal: by the end of this guide, you'll have 4 reusable workflows you can run on real data at work. And next time someone texts you at 4:55 for a 5:00 call, you'll be the PM who shows up ready.

---

## Workflow 1: Transcript Processing

**What it is:** Taking a meeting transcript, user interview, or call recording and extracting structured insights from it.

**When to use it:** After any meeting or interview where you need to capture decisions, action items, themes, or insights. Especially useful for user research interviews where you need to find patterns across multiple conversations.

### The Basic Move

Point Claude at a transcript and tell it what you need:

```
Read sample-data/user-interview-transcript.md.

This is a user interview with a mid-market customer. Extract:

1. Key pain points (what's causing friction in their workflow)
2. Feature requests (explicit asks for new functionality)
3. Positive signals (what they like and why they stay)
4. Churn risks (anything that suggests they might leave)
5. Verbatim quotes that capture each point -- use their exact words

Format this as a research summary I could share with my product team.
```

### Going Deeper: Cross-Interview Synthesis

The real power shows up when you process multiple transcripts and look for patterns. If you had 5 interview transcripts in a folder, you could do:

```
Read all the transcript files in the interviews/ folder.

Across all interviews, identify:
1. The top 5 themes mentioned by multiple people
2. For each theme: who mentioned it, their exact words, and how severe it seems
3. Any contradictions -- places where one interviewee says X and another says the opposite
4. Signals that didn't come up often but seem high-impact
5. Gaps -- questions we should have asked but didn't

Create a cross-interview synthesis document. I want to present this to my team as the output of our research sprint.
```

### The Workflow Template

Every time you do transcript processing, the pattern is:

1. Get the transcript into a file (export from Otter.ai, Granola, Fireflies, Rev, or just copy-paste)
2. Tell Claude what kind of transcript it is (meeting, interview, sales call)
3. Tell Claude what you need extracted
4. Review and add your own interpretation

**Tip:** If you use a transcription service, set up a folder like `transcripts/` and drop each new transcript there. Over time, you build a research library Claude can reference.

### From my own practice: the coaching pattern I didn't know I had

I don't read through my transcripts very often, so whenever Claude finds things in them, it's a huge win. One of the ways I've been using transcripts that I didn't expect: finding frameworks for how I coach.

I've been doing product management for 20 years. There are a lot of approaches, ideas, frameworks, and principles that I live out that I don't always know how to articulate. But when I run Claude over a batch of my own coaching transcripts, it finds patterns in how I describe things to students. It can say: "Will, this is your way of doing X," or point out phrases I use that I hadn't recognized as signature phrases.

One of mine is "there's only one you." That's how I tell students I want them to value themselves and see why they're valued, because I think most of them devalue themselves. I acknowledge I have to work on this myself. That's why it's a mantra for me: there is only one you.

The first time I ran a transcript analysis across a batch of my sessions, Claude broke down my approach to coaching and gave me a summary of how it worked. It wasn't that I disagreed with it. It's that I was hearing an AI reviewing my own practice, assessing what impact it was having based on follow-up conversations with students, and saying "Will, you do X, and the students respond with Y." It came back as an affirmation. I was surprised by how much I valued it, because it articulated something I believed I wanted to be but hadn't written down. I really got a compliment from a bot, and it mattered.

The point for you: transcript processing isn't just "what did the customer say." It can be "what am I actually doing when I do my best work, and how do I get better at it."

---

## Workflow 2: Support Ticket Analysis

**What it is:** Taking a batch of support tickets and turning them into product intelligence -- trends, top issues, escalation patterns, feature request signals.

**When to use it:** When you want to understand what customers are struggling with, spot emerging issues before they blow up, or build a case for investing in a specific area.

### The Basic Move

```
Read sample-data/support-tickets.csv.

This is a batch of support tickets from the past month. Analyze them and produce:

1. Top 5 issue categories by frequency
2. For each category: number of tickets, average priority, most common customer segment, representative examples
3. Revenue risk: which open tickets are connected to renewal risk or enterprise churn? Calculate the monthly revenue at risk based on customer information in the tickets.
4. Resolution performance: what's the average time to resolve by priority level? Any outliers?
5. Emerging signals: any patterns in the last 2 weeks that weren't present in the first 2 weeks?

Format as a support intelligence brief I could share with the product team.
```

### Going Deeper: Connect to Product Roadmap

After the initial analysis, cross-reference with your roadmap:

```
Based on the support ticket analysis, tell me:

1. Which of these issues are already on our Q2 roadmap?
   (Our Q2 priorities are: notification settings redesign, timeline view,
   onboarding simplification)
2. Which issues are NOT on the roadmap but should be, based on frequency
   and severity?
3. If you were prioritizing these using a RICE framework, what would the
   top 3 be?

Be specific. Show the scoring.
```

### The Workflow Template

1. Export tickets from your support tool (Zendesk, Intercom, Freshdesk, Linear) as CSV
2. Drop the CSV in your workspace
3. Run the analysis prompt
4. Cross-reference with your roadmap or priorities
5. Share the brief with your team

**Where to get the data:**
- **Zendesk:** Admin > Reporting > Export (CSV)
- **Intercom:** Contacts > Conversations > Export
- **Freshdesk:** Analytics > Ticket Summary > Export
- **Linear:** Issues > Filter > Export
- **If you don't have access:** Ask your support lead to export a recent batch. Most support tools make this easy.

### From my own practice: the human in the middle

Here's how a real feedback synthesis workflow looks for me at IPM.

A student sends a support request asking me to review their STAR story. I kick off one of my skills - a star story review - which does two things. If they gave me a Google Doc link, it uses a CLI I built to download just the student's actual writing (not the template scaffolding around it - that pollutes context and I don't need it). If they gave me a Zendesk ticket number, it uses an MCP to pull the ticket, read through the conversation, and understand what they've been working on and where we left off. Then it processes their writing through a STAR story skill I've trained up over lots and lots of reviews. It generates an output document with ratings, notes, suggested rewrites, and things to consider.

Here's the important part: **I put a person in the middle of the process.** That's me. I open the Google Doc and go through it section by section, reading it alongside Claude's notes. What I find is that Claude often identifies what the need is - maybe a weaker section, maybe a missed opportunity to quantify impact - and drafts a version I can consider or tweak. Instead of writing feedback from scratch, I'm editing Claude's draft against my own judgment. That saves me a lot of time.

I don't give students the answers directly. I don't just forward the Claude export. I process and validate because sometimes Claude gets it wrong - sometimes badly. The follow-up is what closes the loop: I go back to Claude Code and tell it which part of the feedback I agreed with and which part I didn't. It logs that. And if the disagreement is substantial enough, it updates the skill so I don't hit the same problem on the next review.

The lesson I'd pass on: your first synthesis workflow is a draft of your second synthesis workflow. Don't try to build it right. Run it, catch what's wrong, tell Claude what was wrong, and let the skill evolve. Over time you end up with something that feels like it knows your coaching style - because you taught it, one correction at a time.

---

## Workflow 3: Survey Data Synthesis

**What it is:** Taking survey responses (NPS, CSAT, product feedback surveys, feature prioritization surveys) and finding the insights buried in open-ended responses.

**When to use it:** After running a customer survey, when you have more responses than you can manually read, or when you need to turn qualitative data into a structured report.

### The Basic Move

```
Read sample-data/survey-responses.csv.

This is a product satisfaction survey with 25 responses. Analyze the data:

1. Overall satisfaction distribution (how many 1s, 2s, 3s, 4s, 5s)
2. NPS calculation (based on q4_likelihood_to_recommend): what's the score?
   Break it into promoters (9-10), passives (7-8), and detractors (0-6).
3. Top themes from the open-ended questions (q3_biggest_frustration and
   q5_what_would_you_improve). Group similar responses into themes.
4. Segment analysis: do enterprise customers (200+ company_size) have
   different pain points than small companies (<50)?
5. Feature priorities: based on the improvement suggestions, rank the top 5
   most-requested changes.

Write this up as a survey results report. Include specific quotes from
respondents to support each finding.
```

### Going Deeper: Triangulate with Other Sources

The most powerful research combines multiple data sources. Try this:

```
I now have analysis from three sources:
1. Support tickets (sample-data/support-tickets.csv)
2. User interview (sample-data/user-interview-transcript.md)
3. Survey responses (sample-data/survey-responses.csv)

Cross-reference all three and answer:
1. What themes appear consistently across all three sources?
2. What shows up in support tickets but NOT in the survey? (Possible blind spots)
3. What does the interview reveal that the quantitative data doesn't?
4. If I had to present the top 3 customer priorities to leadership with
   evidence from multiple sources, what would they be?

Create a unified research synthesis that draws from all three sources.
Include a confidence level for each finding (high = multiple sources agree,
medium = 2 sources, low = single source).
```

### The Workflow Template

1. Export survey data as CSV (Google Forms, Typeform, SurveyMonkey, Qualtrics all support this)
2. Drop it in your workspace
3. Run the analysis prompt -- specify what metrics and segments matter
4. Cross-reference with other data sources for stronger findings
5. Write up the results for your audience

**Where to get the data:**
- **Google Forms:** Responses tab > three-dot menu > Download responses (.csv)
- **Typeform:** Results > Download responses
- **SurveyMonkey:** Analyze Results > Export > CSV
- **Qualtrics:** Data & Analysis > Export Data > CSV
- **If you don't have survey data:** Create a quick 5-question Google Form, share it with your team or a few customers, and use the responses

---

## Workflow 4: Competitive Monitoring

**What it is:** Setting up a recurring process to track what competitors are doing -- product launches, pricing changes, positioning shifts, hiring patterns.

**When to use it:** When you want to stay informed about competitor moves without spending hours browsing their websites and blogs every week.

### The Basic Move

```
Run a competitive update on these 3 companies:
1. Asana
2. Monday.com
3. Wrike

For each, check:
- Any product launches or major feature updates in the last 30 days
- Pricing changes
- New integrations or partnerships announced
- Notable blog posts, case studies, or thought leadership
- Job postings that signal strategic direction (e.g., hiring heavily for AI,
  or opening a new market)

Format as a weekly competitive intel brief. Keep each company to 3-5 bullets.
End with a "so what" section: what does this mean for our product?
```

### Setting Up a Recurring Workflow

This is where it gets powerful. Instead of running this manually every week, you can build a reusable skill:

1. Run `/skill-creator` in Claude Code and use the competitive-monitor starter prompt from `build-your-skills.md`
2. Answer skill-creator's questions to calibrate it to your competitors and monitoring criteria
3. Each week, run the skill to get an updated brief
4. Over time, you can append each brief to a running log so you can spot trends across weeks

```
Create a file called skills/competitive-monitor.md that contains a reusable
prompt for weekly competitive monitoring. The prompt should:

- Accept a list of competitors (default: Asana, Monday.com, Wrike)
- Check for product updates, pricing changes, partnerships, and strategic signals
- Format output as a dated weekly brief
- Append to a running log file called research/competitive/weekly-log.md
- Include a "trend over time" section after 4+ entries

Save the skill file. I want to be able to run this every Monday morning
with one command.
```

### The Side Quest: Make It Truly Recurring

If you want to automate this completely, you can set up a scheduled trigger that runs the competitive monitoring skill on a schedule. This is an advanced move -- think of it as the "set it and forget it" version.

The basic idea:
1. Write the competitive monitoring skill
2. Set up a scheduled Claude Code session (using the `/schedule` command) that runs weekly
3. The output gets saved to a file you review on Monday mornings

You don't need to do this now. But by Week 4 of this course, you'll have the skills to set this up. Bookmark this section and come back to it.

### From my own practice: the email competitive scan that changed how I market

Here's a recent one. I'm a business owner, and I don't love the sales side of things. There are people in my space who are very good at the marketing side - growing their audience, meeting their customers where they are. I wanted to evaluate what they were doing.

What I'd forgotten is that I had connected my Gmail to Claude in a read-only format. I asked: "Are you connected to my email? If so, can you pull the last two weeks of emails from this company?" It was connected. It pulled them.

Then I asked it to run a specific assessment:
- How often are they sending?
- What format are they using?
- What is working and what is not working?
- What should I change in my own email plan over the next seven days?

The first part was the competitive insight. It told me my send frequency was lower than I could be sending without being outside the norm - I had room to ramp up. That was encouraging. It also looked at my tone and my coaching approach and then did something I didn't expect: it told me not to try to copy what the others were doing. It told me to stay in my lane and protect my own voice, because that was what my audience would come for. There were some competitive things worth borrowing, but they needed to be adapted to who I am and who my business is becoming.

I ended up sending more emails than I was before. It was uncomfortable, but it was the right move. And I kept my messaging aligned to what I actually believe - that in marketing, 90% should be giving, and you earn the right to ask for something in the remaining 10%. I held to that.

The lesson: competitive monitoring isn't about copying. The best output is an honest read of what the market is doing, filtered against your own positioning. When Claude tells you to stay in your lane, it's because you trained it on what your lane is in the first place.

---

## Connecting to Real Data Sources

The exercises above use sample data. Here's how to get real data from tools PMs commonly use.

### Tools You Likely Have Access To

| Tool | How to Get Data Out | What You Can Do With It |
|------|-------------------|----------------------|
| **Google Forms** | Responses > Download CSV | Survey synthesis, feedback analysis |
| **Google Sheets** | File > Download > CSV | Any structured data you track |
| **Slack** | Copy-paste threads into .md files | Discussion analysis, decision tracking |
| **Notion** | Export page as Markdown | Research synthesis, document analysis |
| **Linear** | Issues > Export, or use CLI/API | Ticket analysis, sprint review, backlog health |
| **Jira** | Filters > Export > CSV | Bug trends, sprint metrics, backlog analysis |
| **Otter.ai / Fireflies / Granola** | Export transcript as text | Interview and meeting processing |
| **Zendesk** | Admin > Reporting > Export | Support ticket analysis |

### Tools That Need API Access

Some tools require API integration for the best experience. These are more advanced and we'll cover them in Week 4, but here's the rundown:

| Tool | API Access | What You'd Use It For |
|------|-----------|---------------------|
| **Salesforce** | REST API, requires admin to create connected app | Win/loss analysis, pipeline insights, customer data |
| **Hubspot** | API key in settings | Marketing analytics, lead scoring analysis |
| **Amplitude / Mixpanel** | API export | User behavior data, funnel analysis |
| **Zendesk** | API token in admin settings | Automated ticket analysis at scale |
| **Intercom** | API access via app settings | Customer conversation analysis |

**The practical advice:** Don't try to connect everything at once. Start with the tools you already have CSV export access to. In my coaching practice, that's covered most of the research work I see PMs trying to do - the API integrations are a nice-to-have for automation, not a requirement for getting value.

### If You Can't Use Work Data

That's completely fine. You have three options:

1. **Use the sample data provided** -- the support tickets, survey responses, and interview transcript are realistic enough to learn the workflows
2. **Create synthetic data** -- ask Claude to generate realistic data for your industry:

```
Generate 30 realistic support tickets for a [YOUR INDUSTRY] product. Include
fields for: ticket_id, date, priority, category, customer_segment, subject,
description, status. Make them realistic -- include a mix of bugs, feature
requests, and complaints. Save as sample-tickets.csv.
```

3. **Use public data** -- many companies publish case studies, G2 reviews, and survey results that you can use for practice. App store reviews are another great source.

---

## Putting It All Together

These four workflows cover the main ways PMs do discovery. The time estimates below are from my own runs with Claude Code - your mileage will vary based on data volume and how much iteration you do, but this is the rough shape:

| Workflow | Input | Output | Time (my runs) |
|----------|-------|--------|------|
| Transcript Processing | Meeting/interview recordings | Structured insights, themes, action items | 5-10 min |
| Support Ticket Analysis | Ticket exports (CSV) | Issue trends, revenue risk, priority recommendations | 10-15 min |
| Survey Synthesis | Survey responses (CSV) | Quantitative summary, qualitative themes, segment analysis | 10-15 min |
| Competitive Monitoring | Competitor names | Weekly intel brief, trend tracking | 10-15 min |

In the live session, we'll focus on competitive analysis and feedback synthesis. But all four workflows use the same pattern: get data into a file, point Claude at it, tell it what you need, review the output.

The skill you're really building isn't "how to use Claude for competitive analysis." It's "how to turn any pile of unstructured data into structured product intelligence." That skill transfers to any tool, any data source, and any research question.
