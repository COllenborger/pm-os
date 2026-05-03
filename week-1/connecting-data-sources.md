# Connecting Data Sources: Getting Real Data Into Claude Code

The exercises in this course use sample data. But the real value comes when you use your own data. This guide covers how to get data out of the tools PMs actually use and into a format Claude Code can work with.

Start with the tools you already have. Don't try to connect everything at once.

## A note from Will: the messy truth of connecting real data

Before I walk you through the tiers, I want to tell you something nobody tells you when they show you a clean data pipeline diagram: the first few times you try to get real data into Claude Code, it's going to be messier than you expect. That's fine. It's the work.

Here's a specific example from my own practice. At IPM, students send me STAR stories in Google Docs using a template with a lot of scaffolding - prompts, instructions, example formatting. When I first tried to feed those docs to Claude for coaching, I got bad results. Claude was spending half its context trying to make sense of the template boilerplate instead of reading what the student had actually written.

The fix wasn't to pick a fancier tool. The fix was to write a small CLI that downloads the Google Doc and scrubs it down to just the specific writing. Claude Code wrote the scripts to do that scrubbing, based on me describing what the template structure looked like and what I wanted to keep. Now when a student request comes in, the skill pulls the doc, strips the template noise, and hands Claude only the student's actual content. The feedback quality went up the moment I did that.

The reason I'm telling you this: **the work of connecting data sources is rarely "click export, feed to Claude, done."** Sometimes you need a little CLI in the middle. Sometimes you need to strip noise. Sometimes you need to rename columns or reformat dates. That's not a failure. That's the normal shape of real PM work with AI, and Claude Code is good at helping you build those little connective pieces.

So: don't wait for the perfect pipeline. Start with copy-paste. When copy-paste starts hurting, graduate to CSV export. When CSV export starts hurting, build a small script with Claude Code's help. When that starts hurting, you're probably ready for the API. Each step is earned by a real problem the previous step couldn't solve.

The tiers below are ordered that way on purpose.

---

## Tier 1: Copy-Paste (No Setup Required)

These methods work right now, with tools you already use.

### Slack Threads

When a discussion happens in Slack that you want to analyze:

1. Open the thread
2. Select all the messages (click the first, scroll to the last)
3. Copy and paste into a new `.md` file in your workspace

```
# Slack Thread: [Channel] - [Topic]
# Date: [Date range]

[Paste the thread here]
```

**Good for:** Decision tracking, discussion synthesis, extracting action items from async conversations.

### Meeting Notes / Transcripts

If you take notes during meetings (or get transcripts from a tool):

1. Copy the transcript or notes
2. Save as a `.md` file: `meetings/[date]-[meeting-name].md`
3. Add context at the top: who was there, what the meeting was about

**Sources:** Otter.ai (export as text), Granola (copy transcript), Fireflies (download transcript), Google Meet (captions transcript), manual notes

### Email Threads

For important email threads you want to analyze:

1. Open the email thread in Gmail
2. Print > Save as PDF, or copy-paste the thread text
3. Save to your workspace

**Good for:** Stakeholder communication analysis, extracting decisions from long email chains.

### Google Docs / Notion Pages

1. **Google Docs:** File > Download > Plain Text (.txt) or copy-paste
2. **Notion:** Three-dot menu > Export > Markdown

Save to your workspace and point Claude at it.

---

## Tier 2: CSV Export (2-Minute Setup)

Most business tools let you export data as CSV. This is the sweet spot for PM research -- structured enough for analysis, easy enough to export.

### Google Forms

1. Open your form
2. Go to the Responses tab
3. Click the three-dot menu > "Download responses (.csv)"
4. Save to your workspace

### Google Sheets

1. Open the spreadsheet
2. File > Download > Comma Separated Values (.csv)
3. Save to your workspace

**Tip:** If you maintain a tracker in Google Sheets (feature requests, customer list, OKR progress), exporting it periodically and analyzing with Claude is a great habit.

### Jira

1. Go to your board or use a filter to select the issues you want
2. Click "Export" in the top right
3. Choose "Export CSV (all fields)" or "Export CSV (current fields)"
4. Save to your workspace

**Good for:** Sprint retrospective analysis, bug trend tracking, backlog health checks.

### Zendesk

1. Admin Center > Reporting
2. Choose the report type (Tickets, Satisfaction, etc.)
3. Export as CSV
4. Save to your workspace

**Good for:** Support ticket analysis, CSAT trend tracking, identifying recurring issues.

### SurveyMonkey / Typeform / Qualtrics

All three have similar export flows:
1. Go to Results / Responses / Data & Analysis
2. Look for Export or Download option
3. Choose CSV format
4. Save to your workspace

### Linear

Linear has both a UI export and a CLI:

**UI Export:**
1. Go to your team's issues view
2. Filter to the issues you want
3. Right-click > Export (or use the three-dot menu)

**CLI (more flexible):**
```bash
linear issue list --team BRI --state "In Progress" --format csv > linear-issues.csv
```

**Good for:** Sprint analysis, backlog prioritization, tracking issue resolution rates.

---

## Tier 3: API Access (For Power Users)

These require some setup but enable automated, recurring data pipelines.

### Salesforce

**What you'd use it for:** Win/loss analysis, pipeline insights, customer health data, deal stage analysis.

**What it takes to connect:**
1. Your Salesforce admin creates a Connected App (this is an admin task, not something you do yourself)
2. You get API credentials (client ID, client secret, security token)
3. You use the Salesforce REST API to query data

**The realistic path for a PM:**
- Ask your Salesforce admin or RevOps team for a CSV export of the data you need
- If you need recurring access, ask them to set up a scheduled report that emails you a CSV weekly
- API access is powerful but usually requires IT approval and security review

**What to ask for:** "Can you export a CSV of all closed-won and closed-lost opportunities from the last 6 months, including the loss reason field?" That one export can power a win/loss analysis.

### HubSpot

**What it takes:** Go to Settings > Integrations > API Key to get your key. HubSpot's API is more accessible than Salesforce -- most HubSpot users can get an API key without admin help.

**Simpler path:** Marketing > Reports > Export. Most PM-relevant data can be exported as CSV from the UI.

### Amplitude / Mixpanel

**What it takes:** API keys from your analytics admin, plus knowledge of the event schema.

**Simpler path:** Create a dashboard with the metrics you care about, then export the underlying data as CSV. Share the dashboard with your team and export fresh data whenever you need it.

---

## Tier 4: Simulating Data (When You Can't Use Work Data)

If your company has strict data policies, or if you're between jobs, or if you just want to practice without risking anything:

### Ask Claude to Generate Realistic Data

```
Generate a realistic dataset of 50 support tickets for a [YOUR INDUSTRY]
product. Include columns for: ticket_id, date, priority, category,
customer_segment, subject, description, resolution_status, resolution_time.

Make the data realistic:
- Mix of bug reports, feature requests, and complaints
- Some tickets should be related to each other (same issue reported multiple times)
- Include a few critical/escalated tickets
- Vary the customer segments (enterprise, mid-market, startup)

Save as sample-data/support-tickets.csv
```

You can do this for any data type:
- Survey responses
- NPS data
- Feature request backlog
- User interview transcripts
- Web traffic data
- Sales pipeline data

The generated data won't be real, but the workflows you build with it are. When you're ready to use real data, you just swap the file.

### Use Public Data

Some free sources of real data for practice:
- **G2 reviews** for any product category (copy-paste reviews into a file)
- **App Store / Play Store reviews** for consumer products
- **Product Hunt comments** for recently launched tools
- **Reddit threads** about product categories (r/ProductManagement, r/SaaS)
- **Glassdoor reviews** for understanding company culture (relevant for competitive analysis)

---

## The Most Important Advice

Don't wait until you have the perfect data pipeline to start using Claude for research. The pattern is always:

1. Get data into a file (any file, any format)
2. Point Claude at it
3. Ask your question
4. Review the output

A messy CSV export you analyze today is infinitely more valuable than a perfect API integration you never build. Start with copy-paste. Graduate to CSV exports. Maybe someday build the API pipeline. But start today.
