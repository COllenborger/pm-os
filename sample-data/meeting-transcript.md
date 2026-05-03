# Product Team Weekly Sync — March 12, 2026

**Attendees:** Sarah Chen (PM), Marcus Rivera (Engineering Lead), Priya Patel (Designer), Alex Nowak (Data Analyst), Jordan Kim (QA Lead)

---

**Sarah:** Okay, let's get started. We've got a lot to cover today. First, I want to talk about the Q2 roadmap priorities. I met with leadership on Monday and the big message is: retention is the top priority. Our churn rate ticked up to 4.2% last month, up from 3.1% in January. They want us focused on reducing churn, not new customer acquisition features.

**Marcus:** Do we know what's driving the churn? Is it specific segments or across the board?

**Sarah:** Good question. Alex, you pulled the data, right?

**Alex:** Yeah. The short answer is it's heavily concentrated in mid-market accounts -- companies with 20-50 users. Enterprise churn is actually flat. Startups churn a lot but they always have, and the volume is small. The mid-market segment is where we're losing the most revenue.

**Marcus:** Do we know why? Are they leaving for specific competitors?

**Alex:** From the exit surveys, the top three reasons are: one, they outgrew our planning features -- they need Gantt charts, dependencies, resource allocation. We don't have that. Two, notification overload -- this comes up constantly. People say they get too many emails and can't figure out how to turn them off. Three, onboarding -- they say it takes too long for their team to get productive.

**Sarah:** So the planning features gap, notification settings, and onboarding. Those are the three areas I want us to focus on for Q2.

**Priya:** The notification thing feels like the quickest win. We've been hearing that forever. The settings page is genuinely confusing -- I tried to adjust my own notifications last week and I couldn't figure out where the controls were.

**Marcus:** Agreed. We've had a ticket for notification settings redesign sitting in the backlog for six months. Technically it's not that hard. The backend supports granular controls already -- the problem is purely the UI.

**Sarah:** Okay so let's slot that for the first sprint of Q2. Priya, can you have mocks by end of next week?

**Priya:** Yeah, I'll have something by Thursday. I want to look at how Linear and Slack handle it first. They both do a good job of letting you control notifications without a wall of checkboxes.

**Sarah:** Perfect. Now, the planning features -- that's the bigger investment. Marcus, what's your sense of scope for even a basic timeline view?

**Marcus:** A basic timeline view with dependencies? If we're talking about a read-only visualization of tasks on a timeline with dependency arrows -- that's maybe 3-4 weeks of engineering work. If we want drag-and-drop rescheduling and automatic dependency shifting, that's 8-10 weeks minimum. And that doesn't include resource allocation, which is a whole separate thing.

**Sarah:** Let's start with the read-only version. If we can show people their project on a timeline with dependencies visible, that might be enough to keep mid-market customers from leaving for Wrike or Monday. We don't need to build the full Gantt chart to start.

**Marcus:** That's reasonable. We could ship the read-only timeline by end of April if we start sprint one.

**Jordan:** One flag on that -- we'll need to figure out how dependencies render when there are circular references. I've seen bugs in other tools where that crashes the view. We should add test cases for that early.

**Marcus:** Good call. I'll make sure that's in the tech spec.

**Sarah:** And onboarding -- Priya, you did that audit last quarter, right?

**Priya:** Yeah. The current onboarding is 14 steps. I timed myself going through it as a new user and it took 22 minutes. That's way too long. The biggest problem is that it tries to show you everything -- templates, automations, integrations, custom fields -- before you've even created your first task. New users don't need all that on day one. They need to create a project, add some tasks, and invite a teammate. That's it.

**Sarah:** Can we get it down to 5 steps?

**Priya:** I think we can do 5-7. The design work is straightforward. The harder part is deciding what to cut. Every feature owner thinks their thing should be in the onboarding.

**Sarah:** Let's do it. Cut it to 7 steps max. If anyone complains, send them to me. The data is clear -- 35% of new users drop off during onboarding and half of them never come back.

**Alex:** One more data point on that -- the users who complete onboarding in under 10 minutes have a 78% 90-day retention rate. Users who take more than 20 minutes have a 41% retention rate. Speed of onboarding is directly correlated with retention.

**Sarah:** That's huge. Can you put that in a one-slider? I want to show that to leadership.

**Alex:** Yeah, I'll have it by tomorrow.

**Sarah:** Okay, let me summarize. Q2 priorities in order:
1. Notification settings redesign -- sprint 1, Priya has mocks by Thursday
2. Timeline view (read-only with dependencies) -- sprints 1-2, ship by end of April
3. Onboarding simplification -- sprint 2, cut to 7 steps max

Anything else before we wrap?

**Jordan:** One quick thing -- we've had 3 reports this week of the PDF export being broken. It's been an issue since the February release. I've got a repro case. Can we get a hotfix in?

**Marcus:** Yeah, I'll look at it today. That should be a quick fix -- I think it's a rendering library version issue.

**Sarah:** Good. Let's fix that ASAP -- enterprise customers use PDF exports for client reporting and I've gotten two support escalations about it.

**Jordan:** I'll verify the fix as soon as Marcus has it ready.

**Sarah:** Great. Thanks everyone. Let's have a strong Q2.
