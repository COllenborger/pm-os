# Eval Run � 2026-04-29 21:03:58

- Test cases: **20**  
- Errors: **0**  
- Overall weighted score: **3.6**

## Per-criterion averages

| Criterion | Avg | N | Weight |
|---|---|---|---|
| hallucination_rate | 3.55 | 20 | Critical |
| recommendation_defensibility | 3.5 | 20 | Critical |
| scope_risk_identification | 3.65 | 20 | High |
| comparison_clarity | 3.95 | 20 | High |
| questions_quality | 3.2 | 20 | Medium |

## Per-case results

| ID | Difficulty | Status | hallucination_rate | recommendation_defensibility | scope_risk_identification | comparison_clarity | questions_quality |
|---|---|---|---|---|---|---|---|
| adversarial-01 | adversarial | ok | 5 | 5 | 5 | 5 | 4 |
| adversarial-02 | adversarial | ok | 1 | 1 | 1 | 1 | 1 |
| adversarial-03 | adversarial | ok | 5 | 5 | 5 | 5 | 5 |
| adversarial-04 | adversarial | ok | 5 | 5 | 5 | 5 | 5 |
| adversarial-05 | adversarial | ok | 4 | 4 | 5 | 5 | 4 |
| easy-01 | easy | ok | 3 | 3 | 4 | 5 | 5 |
| easy-02 | easy | ok | 2 | 3 | 4 | 5 | 5 |
| easy-03 | easy | ok | 5 | 1 | 1 | 1 | 1 |
| hard-01 | hard | ok | 2 | 4 | 4 | 5 | 4 |
| hard-02 | hard | ok | 5 | 5 | 5 | 5 | 2 |
| hard-03 | hard | ok | 4 | 5 | 5 | 5 | 5 |
| hard-04 | hard | ok | 4 | 5 | 5 | 5 | 5 |
| realistic-01 | realistic | ok | 1 | 1 | 1 | 1 | 1 |
| realistic-02 | realistic | ok | 5 | 5 | 5 | 5 | 5 |
| realistic-03 | realistic | ok | 4 | 5 | 5 | 5 | 1 |
| realistic-04 | realistic | ok | 2 | 2 | 2 | 4 | 3 |
| realistic-05 | realistic | ok | 5 | 1 | 1 | 1 | 1 |
| realistic-06 | realistic | ok | 4 | 5 | 5 | 5 | 2 |
| realistic-07 | realistic | ok | 4 | 4 | 4 | 5 | 4 |
| realistic-08 | realistic | ok | 1 | 1 | 1 | 1 | 1 |

## Thresholds

- **ship_if**: hallucination_rate 5/5 on 95%+ of cases (zero tolerance on adversarial-01 — any invented comparison vendor or fabricated price is an automatic block); recommendation_defensibility avg >= 4.0; scope_risk_identification avg >= 4.0; comparison_clarity avg >= 4.0.
- **iterate_if**: any criterion averages below 3.5 across the full test set; or hallucination_rate below 5 on more than one case; or questions_quality avg below 3.0 (questions are consistently generic rather than quote-specific); or recommendation contradicts stated risk tolerance on more than one case.
- **pivot_if**: hallucination_rate avg below 4.0 after two full prompt iteration cycles — if the model fabricates vendor comparisons, prices, or contract terms not present in the input, the feature creates direct liability exposure for Comparezy by corrupting homeowner decisions.
