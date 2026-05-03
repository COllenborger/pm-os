# AI Quote Intelligence — PRD

**Author:** Chris Ollenborger
**Feature owner:** Chris Ollenborger (PM, Comparezy)
**Status:** Draft — to test via prototype + evals before committing to build
**Last updated:** April 19, 2026

---

## 1. Problem Statement

Homeowners who have received 2–4 contractor quotes face their highest-stakes decision at the exact moment every platform abandons them. The competitive analysis confirms no funded, purpose-built product helps homeowners evaluate proposals they have already received — Angi, Thumbtack, AllBetter, and every comparable platform stops at contractor connection and has no incentive to go further because their revenue comes from contractors, not homeowners (Competitive Analysis: Feature Comparison Matrix, April 2026). The only current workaround is uploading PDFs to ChatGPT or Claude and manually asking for help — a behavior that validates market demand but delivers unstructured output with no local benchmarks, no persistent context, and no shareable result (Competitive Analysis: AI Chat profile, April 2026).

---

## 2. Research Summary

- **No platform owns the proposal evaluation moment.** Angi, Thumbtack, AllBetter, Bark.com, HomeGuide, and Houzz all have zero structured proposal comparison tools. The feature matrix confirms this is uncontested whitespace. (Competitive Analysis: Feature Comparison Matrix, April 2026)
- **AI chat is the active DIY workaround.** A growing segment of tech-savvy homeowners (35–55, higher education) uploads contractor proposals to ChatGPT Plus or Claude Pro ($20/month) and asks which is a better deal — validating that the need is real and that people will pay for it. (Competitive Analysis: AI Chat profile, April 2026)
- **AI chat's weaknesses define Comparezy's product requirements.** No persistent project context, no structured output, no local benchmarks, no shareable report, hallucination risk on cost norms, not mobile-first. Every weakness is a requirement. (Competitive Analysis: AI Chat weaknesses, April 2026)
- **Cost benchmarking is unclaimed at the proposal level.** HomeGuide offers pre-bid cost ranges but no platform provides zip-code-level benchmarks at the moment of proposal comparison. "You were quoted $18,500 for a roof replacement in Phoenix; median is $14,200–$16,800" does not exist as a product today. (Competitive Analysis: Opportunity 2, April 2026)
- **Negotiation coaching is completely absent.** After receiving bids, homeowners report "I don't know enough to push back" — no platform addresses the negotiation step. (Competitive Analysis: Opportunity 3, April 2026)
- **$20/month is the price ceiling.** ChatGPT Plus and Claude Pro set the consumer reference price. Comparezy must be a meaningfully better experience at the same or lower cost. Sweet spot: $5–$15/project or $10–$15/month. (Competitive Analysis: Pricing Strategy Notes, April 2026)
- **Angi's AI Helper validated AI + home services.** Homeowners who used Angi's ChatGPT plugin were 3x more likely to request a quote and 25% more likely to report project success — the behavior is adoptable. (Competitive Analysis: Angi profile, April 2026)

---

## 3. Users and Use Cases

**Primary: "Hallie Homeowner"** — time-constrained, risk-averse, cost-conscious homeowner (35–55) who has already received 2–4 contractor bids for a mid-to-large project (roof replacement, kitchen remodel, HVAC replacement, bathroom addition). Not a construction expert. Wants to make a confident decision without hiring a consultant. Has quotes in hand and does not know how to evaluate them systematically.

**Secondary: Real estate investors and small landlords.** Manage multiple properties with recurring project decisions. May upload quotes for multiple projects simultaneously. Less emotionally invested; more focused on cost efficiency and pattern recognition across bids.

**Long-term enterprise targets (out of scope for v1):** Insurance carriers, home warranty providers, HELOC/mortgage lenders who need structured proposal data at scale.

**Excluded from v1:**
- Homeowners still in contractor discovery (no quotes yet) — Comparezy is not a lead-gen tool; positioning is explicitly post-discovery
- Commercial property managers — project types and trade categories differ materially from residential
- Users uploading non-proposal documents (invoices, receipts, permits) — the parser is scoped to contractor proposals and quotes only

---

## 4. User Journey with Ins and Outs

The prototype covers five screens. The AI Quote Intelligence feature is not Screen 1 — the user arrives with context before hitting the feature.

**Screen 1: Landing page**
- **Way in:** Homeowner arrives from search, a shared link, or word-of-mouth. Has contractor quotes in hand and knows she needs help evaluating them.
- **What happens:** Headline: "Your quotes, decoded." Single CTA: "Compare My Quotes." One screenshot of the comparison output below the fold.
- **Way out:** Clicks "Compare My Quotes," lands on the upload screen.

**Screen 2: Quote upload**
- **Way in:** Declared intent — user knows she is uploading her contractor bids.
- **What happens:** Upload 1–3 PDF files or paste quote text. Selects project type from a menu (roofing, HVAC, kitchen, bathroom) and enters zip code.
- **Way out:** Clicks "Analyze," triggers AI processing, lands on the Assessment view.

**Screen 3: AI Assessment view** *(first half of the feature under test)*
- **Way in:** Processing complete. User arrives expecting to understand what each contractor is actually proposing.
- **What happens:** Per-quote structured card: scope items included, flagged gaps vs. project type norms, pricing anomalies, contractual red flags. If only 1 quote uploaded, this is the terminal screen with a persistent prompt to upload a second quote.
- **Way out:** Clicks "Compare All Quotes" (if 2+ uploaded), or "Add Another Quote" to return to upload.

**Screen 4: AI Comparison view** *(second half of the feature under test)*
- **Way in:** 2+ quotes uploaded; user arrives ready to decide between contractors.
- **What happens:** Side-by-side scope diff, pricing variance with local benchmark context, and 2–4 specific negotiation questions tied to the actual gaps found.
- **Way out:** Downloads or shares the comparison report, or clicks "Questions to ask your contractor."

**Screen 5: Shareable report / exit**
- **Way in:** User completed the comparison and took an action.
- **What happens:** Read-only shareable URL confirmed as active for 30 days. 3-question reaction modal: "Did this help you decide?" / "What would you change?" / "Would you come back for your next project?"
- **Way out:** Copies share link, returns to project dashboard, or closes.

---

## 5. Goals and Non-Goals

**Goals:**
1. **60%+ of users who upload a second quote view the AI comparison within the same session**, measured in-product at 30 days. This is the key trigger metric for Comparezy's revenue conversion.
2. **Avg rating of 4.0+/5 on "This helped me feel confident in my decision"** in in-session survey at 30 days post-launch.
3. **Zero reported hallucinations** on contractor names, quoted prices, or uploaded line items in production in the first 60 days.
4. **Eval quality bar cleared before ship:** scope_accuracy avg >= 4.0, hallucination_rate 5/5 on 95%+ of test cases.

**Non-Goals:**
1. **Not a contractor discovery tool.** Comparezy does not find or recommend new contractors. Positioning is explicitly post-discovery: "Use Angi to find contractors. Use Comparezy to choose one." Building discovery in v1 requires contractor monetization, which destroys the consumer-first positioning that is Comparezy's core differentiation.
2. **Not an escrow or payment product.** No financial transaction handling. Payments add regulatory, fraud, and operational complexity that would delay launch without contributing to the core evaluation value prop.
3. **Not a real-time proprietary cost database.** Local benchmarks at launch use publicly aggregated data (HomeGuide ranges, Angi cost guides). Proprietary zip-code benchmarks from submitted proposals are Phase 2 and require data volume Comparezy does not have at launch.
4. **Not a contractor-facing tool.** No contractor portal, bid response workflow, or contractor notifications in v1. Consumer-only; contractor features are an enterprise-tier consideration.
5. **Not customizable trade categories in v1.** Parser handles roofing, HVAC, kitchen remodel, and bathroom remodel at launch. Additional trade types are v1.5.

---

## 6. Functional Requirements

1. **Quote ingestion.** System accepts PDF file uploads and pasted plain text. Parses from each quote: contractor name, project type, total price, individual line items with associated prices, and any stated warranty, permit, or change-order language.

2. **Single-quote AI assessment.** For each uploaded quote, generates a structured card identifying: (a) scope items explicitly included, (b) items commonly included in this project type and region that are absent from this quote, (c) line items flagged as unusually high or low for the identified project type, and (d) contractual red flags (no warranty stated, permit responsibility unspecified, no change-order clause referenced).

3. **Multi-quote AI comparison.** When 2+ quotes exist for the same project, generates a comparison identifying: (a) scope items present in one quote but absent in another, (b) pricing variance per matched line item and total, (c) which quote includes more of the expected standard scope, and (d) 2–4 specific questions the homeowner should ask each contractor, tied to the actual gaps found.

4. **Local benchmark context.** Displays a published cost range for the identified project type and location (e.g., "Roof replacement, Phoenix AZ: $14,200–$16,800 median — HomeGuide, 2025"). States whether the quoted totals fall within, above, or below the published range.

5. **Shareable report.** Generates a read-only URL for the full comparison report. Accessible without login for 30 days. Suitable for sharing with a spouse, financial advisor, or family member.

6. **Negotiation checklist.** After comparison, surfaces 2–4 specific questions tied to the actual scope gaps or pricing variances identified in the uploaded quotes. Questions are not generic; they reference the contractor name and the specific line item in question (e.g., "Ask Sunstate Contractors: your quote does not specify underlayment. Is synthetic underlayment included at this price?").

7. **Project persistence.** Each project (trade type + location + uploaded quotes) persists across sessions under a user account. Homeowner can return to add a third quote or revisit the comparison after reviewing with a spouse.

8. **Hallucination guardrail.** Every AI-generated claim in the output must be traceable to: (a) the uploaded quote content, or (b) the stated benchmark source. Claims that are inferences (e.g., "underlayment is typically included at this price point") are visually labeled as "industry norm — not from your quote," not presented as facts from the contractor.

---

## 7. Riskiest Assumption

My product only works if the AI can consistently identify scope gaps and pricing inconsistencies across contractor proposals with different formats and terminology, without fabricating line items, prices, or scope claims not present in the uploaded documents.

---

## 8. Eval Plan

### Rubric

| Criterion | Weight | 5/5 | 1/5 |
|---|---|---|---|
| scope_accuracy | Critical | Identifies all scope differences between quotes using only items present in the uploaded documents; zero invented items | Invents line items not in any quote, or misses more than half of the actual scope differences |
| hallucination_rate | Critical | Zero fabricated prices, contractor names, or line item claims; every stated fact traces to uploaded input or named benchmark | Multiple invented facts — prices, names, or scope items not found in the provided quotes |
| comparison_clarity | High | Comparison is specific to the actual quotes — tells the homeowner exactly what each contractor includes or omits at the line-item level | Vague statements like "Contractor A appears more thorough" with no reference to specific items or prices |
| negotiation_quality | Medium | Each suggested question is specific to an actual gap or variance found in this comparison — not generic | Generic contractor questions unrelated to the scope gaps or pricing differences identified |
| benchmark_relevance | Low | Cited range is plausible for the stated project type and region; source is named | Range is implausible for the project context, contradicts input data, or no source is cited |

### Test Cases

| ID | Description | Difficulty |
|---|---|---|
| easy-01 | Two clean roofing quotes, same format, one clear scope gap (underlayment included vs. not included) and $2,200 total variance | easy |
| realistic-01 | Two HVAC replacement quotes using different terminology ("labor" vs. "installation charge") with a $1,800 total variance | realistic |
| realistic-02 | Two kitchen remodel quotes where one includes permit cost and the other assigns permit responsibility to the homeowner | realistic |
| hard-01 | Three bathroom addition quotes with overlapping and conflicting scope descriptions; one uses a lump-sum total with partial line items | hard |
| adversarial-01 | One quote consisting only of a lump-sum total with vague description ("complete roof replacement, all materials and labor") — no line items, no warranty language, contractor name only | adversarial |

### Grading Method
LLM-as-judge via headless Claude Code (`scripts/run-evals.py`). Script shells out to `claude -p` once per test case with the judge prompt and input data appended, collects JSON scores, writes results table. No Anthropic API key required.

### Ship / Iterate / Pivot Thresholds
- **Ship if:** scope_accuracy avg >= 4.0, hallucination_rate 5/5 on 95%+ of test cases, comparison_clarity avg >= 4.0, zero adversarial cases where AI invents line items not in the input.
- **Iterate if:** any criterion below 3.5 avg, or hallucination_rate scores below 5 on more than 5% of cases.
- **Pivot if:** hallucination_rate averages below 4.0 after two prompt iterations. If the AI cannot reliably limit output to uploaded content, the feature cannot ship — fabricated line items would undermine homeowner decisions and expose Comparezy to liability.

---

## 9. Success Metrics and Open Questions

**30 days post-launch:**
- 40%+ of sessions with 1 quote uploaded result in a second quote upload (funnel entry metric)
- Avg "helped me decide" rating >= 3.5/5 on in-session survey
- Zero reported hallucinations on contractor names, quoted prices, or line items in production

**60 days:**
- 60%+ of projects with 2+ quotes view the AI Comparison (second-quote conversion target)
- 10%+ of completed comparisons result in a shared report URL being accessed (shareable report activation)
- In-session survey: "I would have paid for this" >= 40% agree (willingness-to-pay signal pre-monetization)

**90 days:**
- 25%+ of free users convert to a paid project after completing their first comparison
- 3+ homeowner testimonials citing a specific dollar amount saved or a negotiation outcome driven by Comparezy output
- Benchmark data coverage: Comparezy's aggregated quote data covers at least 3 trade categories with >= 50 data points per metro area (Phase 2 data moat signal)

**Open Questions:**
1. **Quote format diversity.** Can the parser reliably handle handwritten or scanned/photographed quotes, or is PDF-only the v1 constraint? Handwritten quotes are common for smaller contractors — excluding them narrows the addressable use case.
2. **Project type inference vs. selection.** Does the homeowner select the trade category from a menu, or does the AI infer it from the uploaded content? Inference reduces friction but is a second AI quality risk on top of the comparison itself.
3. **Benchmark data sourcing.** Which specific public datasets are available at launch with zip-code resolution? HomeGuide and Angi cost guides are candidates but may only resolve to metro area, not zip code.
4. **Shareable report access.** Does the share URL require a Comparezy account to view, or is it fully public? Fully public serves the "share with spouse" use case but may create data exposure issues if the report contains address or personal project details.
5. **Single-quote entry point.** Should a homeowner be able to get value from Comparezy with only one quote uploaded (assessment mode), or is two-quote minimum the product? Single-quote entry lowers the acquisition barrier but may reduce the second-quote conversion trigger.

---

## 10. Design Reference and Prototype Fidelity

*See `design-refs/README.md` for full visual reference details and `fixtures.md` for seeded data spec.*

**Reference products:**
- **Amazon Prime** — borrow: the structured comparison table used in "Compare Plans" and product detail pages. Clear columns, specific attribute rows, differences highlighted at a glance. Decision confidence comes from structure, not visual flair. Consumer-grade clarity without being patronizing.
- **Pendo** — borrow: the metric card dashboard. "3 scope gaps found. $2,800 pricing variance. 1 red flag." Counts and statuses as clean summary cards before the detail view. Professional, data-dense, SaaS-caliber without feeling cold.

**Explicit avoid-list:**
- Purple primary buttons or gradient backgrounds
- Emoji-heavy empty states (no 🏠 or 🔨 scattered through the UI)
- Shadcn default component styling (the generic card/badge look)
- Lorem ipsum or "Contractor A / Contractor B" as placeholder names
- Loading skeleton animations (prototype renders instantly with seeded data)
- Empty states — the prototype is always pre-populated
- Multi-field login — one click drops the user directly into Hallie's project

**Seeded data:** *(full spec in `fixtures.md`)*
- Project: "Roof Replacement — 2204 Mesa View Dr"
- Homeowner: Hallie M.
- Contractors: Desert Peak Roofing ($16,400), Sunstate Contractors ($18,600), Mesa Pro Roofing ($15,800)
- Scope gaps identified: 2 (underlayment spec, permit responsibility)
- Pricing variance: $2,800 between high and low bid
- Benchmark: Phoenix AZ median for roof replacement: $14,200–$16,800 (HomeGuide, 2025)

**UI-state rules:**
- No loading skeletons — comparison renders immediately
- No empty states — project is pre-populated with Hallie's roof replacement quotes
- Login is one click, drops user directly into Hallie's project dashboard as the demo persona
- Exit is the shareable report view with a 3-question reaction modal
