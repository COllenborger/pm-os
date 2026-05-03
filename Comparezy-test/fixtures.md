# Fixtures — AI Quote Intelligence Prototype

Seeded data for the Comparezy prototype. All project names, contractor names, and prices are drawn from or consistent with the competitive analysis research (Arizona market, roof replacement trade category). Items labeled "illustrative" should be replaced with real data before any user testing beyond the prototype workshop.

---

## Demo Project

| Field | Value |
|---|---|
| Project name | Roof Replacement — 2204 Mesa View Dr |
| Project type | Roof replacement |
| Location | Phoenix, AZ 85028 |
| Homeowner persona | Hallie M. |
| Status | Comparison complete |
| Quotes uploaded | 3 |
| Date created | April 14, 2026 |

---

## Contractors and Quotes

| Contractor | Total Price | Scope Gap? | Red Flag? |
|---|---|---|---|
| Desert Peak Roofing | $16,400 | No major gaps | None |
| Sunstate Contractors | $18,600 | Underlayment not specified; permit assigned to homeowner | Shorter warranty (2-year vs. 5-year) |
| Mesa Pro Roofing | $15,800 | Permit not mentioned; no vent replacement listed | No warranty stated |

### Desert Peak Roofing — Line Items
| Line Item | Price |
|---|---|
| Remove existing shingles (2 layers) | $1,200 |
| Install synthetic underlayment | $800 |
| Install 30-year architectural shingles (GAF Timberline HDZ) | $11,200 |
| Replace 4 pipe boots and 2 ridge vents | $600 |
| Haul away and cleanup | $400 |
| Permit (pulled by contractor) | $2,200 |
| **Total** | **$16,400** |

Warranty: 5-year workmanship. GAF certified installer.

### Sunstate Contractors — Line Items
| Line Item | Price |
|---|---|
| Tear off existing roof | $1,800 |
| Install 30-year architectural shingles | $13,600 |
| Install new ridge vents | $600 |
| Debris removal | $600 |
| Permit (homeowner responsibility — not included) | $0 |
| **Total** | **$18,600** |

Warranty: 2-year workmanship. Underlayment not specified.

### Mesa Pro Roofing — Line Items
| Line Item | Price |
|---|---|
| Roof tear-off (1 layer) | $1,000 |
| 30-year architectural shingles | $12,800 |
| Flashing replacement | $500 |
| Cleanup | $500 |
| Permit (not mentioned) | $0 |
| Mobilization | $1,000 |
| **Total** | **$15,800** |

Warranty: not stated. Vent replacement not listed.

---

## Benchmark Data

| Field | Value |
|---|---|
| Project type | Roof replacement |
| Location | Phoenix, AZ metro |
| Published median range | $14,200–$16,800 |
| Source | HomeGuide, 2025 |
| Desert Peak vs. range | Within range |
| Sunstate vs. range | 11% above range |
| Mesa Pro vs. range | Within range (low end) |

*Benchmark data is illustrative — replace with current HomeGuide or Angi cost guide data before live user testing.*

---

## Summary Card Values (Screen 3 and Screen 4)

These are the values that populate the Pendo-style metric cards at the top of the Assessment and Comparison views.

| Card Label | Value |
|---|---|
| Scope gaps found | 2 |
| Pricing variance | $2,800 |
| Red flags | 1 |
| vs. local median | Sunstate: 11% above |

---

## Homeowner Persona

| Field | Value |
|---|---|
| Name | Hallie M. |
| Location | Phoenix, AZ |
| Project | Roof replacement after 2024 monsoon season damage |
| Situation | Has 3 quotes, 1 week to decide before one contractor's offer expires |
| Goal | Understand what she's actually getting for each price, and what questions to ask |
| Tech comfort | Moderate — uses apps daily, not a power user |

*Persona is illustrative. "Hallie M." is the Comparezy primary user archetype from the product strategy, not a real user.*

---

## Negotiation Questions (pre-seeded for the demo)

These are the 3 questions Comparezy surfaces in the Negotiation Checklist on Screen 4, based on the seeded comparison above.

1. **Ask Sunstate Contractors:** Your quote does not specify underlayment. Is synthetic underlayment included at this price, or is it an additional cost?
2. **Ask Sunstate Contractors:** Your quote lists permit as the homeowner's responsibility. What is the estimated permit cost for this project in Phoenix, and who will manage the permit process?
3. **Ask Mesa Pro Roofing:** Your quote does not mention vent replacement. Will the existing ridge vents and pipe boots be inspected and replaced if needed, or is that outside your scope?
