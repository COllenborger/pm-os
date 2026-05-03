# Eval Run � 2026-04-19 17:49:58

- Test cases: **8**  
- Errors: **2**  
- Overall weighted score: **4.7**

## Per-criterion averages

| Criterion | Avg | N | Weight |
|---|---|---|---|
| hallucination | 4.83 | 6 | Critical |
| completeness | 4.5 | 6 | High |
| actionability | 5.0 | 6 | High |
| urgency_ranking | 4.33 | 6 | Medium |
| readability | 4.33 | 6 | Low |

## Per-case results

| ID | Difficulty | Status | hallucination | completeness | actionability | urgency_ranking | readability |
|---|---|---|---|---|---|---|---|
| adversarial-01 | adversarial | ok | 5 | 5 | 5 | 4 | 5 |
| easy-01 | easy | ok | 5 | 5 | 5 | 5 | 4 |
| easy-02 | easy | error | - | - | - | - | - |
| hard-01 | hard | error | - | - | - | - | - |
| hard-02 | hard | ok | 5 | 4 | 5 | 5 | 4 |
| realistic-01 | realistic | ok | 5 | 4 | 5 | 4 | 5 |
| realistic-02 | realistic | ok | 4 | 4 | 5 | 4 | 4 |
| realistic-03 | realistic | ok | 5 | 5 | 5 | 4 | 4 |

## Thresholds

- **ship_if**: hallucination scores 5/5 on at least 95% of test cases (adversarial-01 must score 5 — no invented owner or deadline); completeness avg >= 4.0; actionability avg >= 4.0; urgency_ranking avg >= 3.5; no single test case produces a hallucination score below 3.
- **iterate_if**: any criterion avg falls below 3.5; or hallucination scores below 5 on more than 5% of cases (more than 0 of 8); or urgency_ranking avg below 3.0; or actionability fails (score <= 2) on realistic-01 or realistic-02; or hard-02 produces invented owner names on any unassigned task.
- **pivot_if**: hallucination avg remains below 4.0 after two full rounds of prompt revision — if the AI cannot reliably avoid fabricating owners, dates, or statuses when presented with real project data structures, the feature does not ship in any form until the grounding problem is resolved at the infrastructure level.

## Errors

- `easy-02`: ValueError: Could not parse judge output as JSON: Expecting ',' delimiter: line 1 column 958 (char 957)
- `hard-01`: ValueError: Could not parse judge output as JSON: Expecting ',' delimiter: line 1 column 1052 (char 1051)
