# Eval Run � 2026-04-26 20:00:57

- Test cases: **5**  
- Errors: **0**  
- Overall weighted score: **3.97**

## Per-criterion averages

| Criterion | Avg | N | Weight |
|---|---|---|---|
| scope_accuracy | 4.4 | 5 | Critical |
| hallucination_rate | 3.8 | 5 | Critical |
| comparison_clarity | 4.6 | 5 | High |
| negotiation_quality | 2.8 | 5 | Medium |
| benchmark_relevance | 2.2 | 5 | Low |

## Per-case results

| ID | Difficulty | Status | scope_accuracy | hallucination_rate | comparison_clarity | negotiation_quality | benchmark_relevance |
|---|---|---|---|---|---|---|---|
| adversarial-01 | adversarial | ok | 5 | 4 | 4 | 3 | 3 |
| easy-01 | easy | ok | 4 | 4 | 5 | 1 | 1 |
| hard-01 | hard | ok | 5 | 4 | 5 | 4 | 2 |
| realistic-01 | realistic | ok | 3 | 3 | 4 | 2 | 2 |
| realistic-02 | realistic | ok | 5 | 4 | 5 | 4 | 3 |

## Thresholds

- **ship_if**: scope_accuracy avg >= 4.0 across all test cases; hallucination_rate scores 5/5 on 95% or more of test cases (zero tolerance on adversarial-01 — any invented line item on the lump-sum quote is an automatic block); comparison_clarity avg >= 4.0; no test case where the AI invents a contractor name, price, or line item not present in the input_data.
- **iterate_if**: any single criterion averages below 3.5 across the full test set; or hallucination_rate scores below 5 on more than one test case (more than 5% of cases with 5+ test cases); or negotiation_quality avg below 3.0 (questions are consistently generic rather than quote-specific); or benchmark_relevance fails to cite a source on more than 2 cases.
- **pivot_if**: hallucination_rate averages below 4.0 after two full prompt iteration cycles — if the AI cannot reliably restrict its output to claims traceable to the uploaded documents, the feature cannot ship in any form, because fabricated line items or prices would corrupt homeowner decisions and create liability exposure for Comparezy.
