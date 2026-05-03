# Side-Quest: Zoom Transcripts as a Qualitative Intake Pipeline

**Size:** Medium to Large (2 to 4 hours, plus however long it takes to figure out access)
**When to do this:** Once you have the other MCP-driven side-quests working and you want to close the loop on the richest, messiest source of user signal you already own.
**Why it's optional and warning flagged:** Zoom's API access varies by plan, by admin settings, and by your company's recording policy. You may hit a wall. That is part of the quest.

---

## Outcome

You have a working path from "a Zoom meeting ended" to "themed synthesis in a file Claude Code can read," using whatever combination of tools your access allows. The prototype and eval loop downstream is unchanged. Only the intake got automated.

You should end up with:

- A clear picture of what access you actually have. Admin API, user-level OAuth, Cloud Recording export, or just manual download. All four are legitimate answers.
- A skill or script that takes a Zoom transcript (VTT, SRT, or whatever format you can get) and produces a synthesis using the `transcript-processor` skill patterns you already have.
- Bonus if you can reach a state where "last week's customer calls" becomes a single command. Acceptable if you land on "download, drop in folder, run synthesis skill." That is still a real improvement.

## Why this is worth your time

Zoom is where the richest qualitative signal lives and where the highest friction to using it also lives. Sales calls, user interviews, customer success check-ins, candidate screens. A PM who can mine this source systematically has a research intake most of their peers do not. The friction is also the reason it is a side-quest and not a core assignment: there is no clean universal path. You will have to figure out what you can actually access.

The deeper reason: this is the first side-quest in the set where the answer might be "I cannot do this yet, and here is specifically what is blocking me." That is also a valid deliverable. A clear write-up of "I need admin X, approval Y, and budget Z to unlock this pipeline" is a product artifact you can take to your manager. Sometimes the skill is not code. Sometimes it is a memo.

## Things to consider

- **Access tiers, in rough order of difficulty.** (1) You already download your own Zoom recordings manually; this is the easiest path and works today. (2) Your team uses a meeting intelligence tool (Grain, Fathom, Otter, Fireflies, Granola, Gong) that has its own API or export; often easier than Zoom directly. (3) You have user-level OAuth access to your own Zoom account's cloud recordings; workable with an OAuth app. (4) You have admin access to the whole org's recordings; most powerful, most restricted. Know which tier you are on before you start building.
- **There may not be an MCP for this.** The transcript processing step has a skill (`transcript-processor`). The pull-from-Zoom step may require you to build it yourself, or to use an existing tool's export. Be honest with yourself about whether you want to write an OAuth flow or just drop files in a folder.
- **Policy before plumbing.** Recorded calls often contain personally identifiable information, confidential customer data, or legal exposure. Check your company's recording and retention policy before automating anything that moves transcripts around. "I built a skill that pulls all sales calls into a local folder" is an incident waiting to happen if your company has not blessed that flow.
- **Structure beats volume.** A transcript of one 30-minute user interview, properly processed, is worth more than a pile of ten unprocessed recordings. Do not optimize for throughput until you have optimized for synthesis quality on a single call.
- **Transcripts are noisy.** Speakers get misattributed, words get mangled, cross-talk gets flattened. The `transcript-processor` skill is already tuned for this, but your output quality depends on the raw transcript quality. Some tools produce dramatically better transcripts than others. Try a few.
- **The fallback is fine.** If you cannot get API access, "run the `transcript-processor` skill on manually-downloaded transcripts once a week" is still a massive upgrade over "I keep meaning to review these."
- **Where this lands in the loop.** Transcripts are Week 1 intake. The synthesis feeds `prd-from-research`. The PRD feeds your Week 2 prototype. The eval tests the quality assumption that came out of what a real customer said on a real call. That is the cleanest evidence chain a PM can build.

## Starter prompts to try in Claude Code

- "Use the transcript-processor skill on this file at `./transcripts/customer-call-april-12.vtt`. Save the synthesis to `analysis/`."
- "I want to pull Zoom cloud recordings for my own account automatically. What are my options given I have a Pro account and no admin access? Map the paths and the blockers."
- "Read the synthesis files in `./analysis/` for the last six customer calls. Cluster the feature requests into themes. Which themes appear in three or more calls?"

## Stretch

- Once you have the synthesis half working, chain it: new transcript drops in the folder, a recurring skill (see the `schedule` skill, or a watcher script) runs `transcript-processor`, then runs `feedback-synthesizer` across the last N calls, then updates a `customer-voice.md` file. That file becomes a permanent, recency-weighted record of what customers are saying.
- Pair with the Linear side-quest: every feature request mentioned in a transcript gets an issue ID auto-appended if one exists, or gets flagged as "no linear issue found" if it does not. Closes the loop between what customers said and what the team tracks.
- Pair with the Tally side-quest: after a call, auto-generate a three-question follow-up survey targeted at what the customer said was unclear. Tally form gets drafted, you send the link.

## What not to do

- Do not process recordings from calls where the participants were not told the recording could be used this way. Consent matters and is usually already covered in your recording disclosure, but double-check before you route anything to a file in Claude Code's context.
- Do not try to automate the pull before you have proven the synthesis is useful on a single manual transcript. The hardest part of this quest is the pull. Do not sink four hours into it only to discover your synthesis skill needed sharpening.
- Do not treat a single call as a theme. Themes appear across calls. One customer saying something once is a data point. Three customers saying the same thing is a signal.
