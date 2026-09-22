# Provenance × evidential support — synthetic review v0.1

**Status:** review draft · **Material:** fictional cofounders case, version 2026-09-16 · **Scope:** public material only · **Not:** engine output, external validation or legal conclusion

**Review question:** which relations below belong naturally in W3C PROV, and which should remain in a separate evidential-support / contestability layer rather than being mistaken for provenance?

This note uses the public fictional exercise from [#44](https://github.com/openproof-net/openproof-rpo/issues/44). It deliberately separates **how a review result was produced** from **whether the cited material is sufficient to justify a claim**.

## 1. Public source fragment

| Source | Exact fictional excerpt |
| --- | --- |
| **S02 — Investment minutes** | “All three founders approve an investment capped at €120,000. A monthly update must flag any risk of overspending.” |
| **S03 — Spending schedule** | “Spending attributed to the investment totals €180,000, including €60,000 above the original budget. Supporting records for each line still need to be reconciled.” |
| **S04 — Late-warning message** | “I should have flagged the risk of overspending sooner. I was waiting for the final quotations.” |
| **S06 — Change to approval authority** | “From 5 May, new spending and recruitment require approval from the other two founders. The third retains operational coordination.” |

Source pack: [cofounders-review](README.md) · structured fixture: [case-en.json](https://openproof.net/docs/examples/cofounders/case-en.json)

## 2. Candidate minimal PROV view

The following is intentionally a **candidate model for review**, not a claim that PROV itself expresses evidential sufficiency.

~~~text
S02, S03, S04, S06                         prov:Entity
        │
        │ prov:used
        ▼
comparison / review activities             prov:Activity
        │
        │ prov:wasAssociatedWith
        ├──────────────────────────────► human reviewer   prov:Agent
        │
        │ prov:wasGeneratedBy
        ▼
reported-overrun observation               prov:Entity
review decision v0.1                       prov:Entity
~~~

A more explicit production chain could say:

- a **comparison activity** uses S02 and S03 and generates the observation that the fictional record reports a €60,000 overrun;
- a **review activity** uses that observation together with S04 and S06 and generates a versioned review decision;
- the human reviewer is associated with the review activity.

This follows the ordinary PROV distinction between **Entity**, **Activity** and **Agent**, with relations such as **prov:used**, **prov:wasGeneratedBy** and **prov:wasAssociatedWith**. See [W3C PROV-O](https://www.w3.org/TR/prov-o/).

**Deliberate boundary:** in this draft, neither `prov:used` nor `prov:wasDerivedFrom` is treated as meaning “this source proves this claim”.

## 3. Evidential-support layer kept separate in this draft

| Candidate statement | What the public material supports | What remains unsupported / missing |
| --- | --- | --- |
| **A €60,000 overrun is reported.** | S02 gives the €120,000 cap; S03 reports €180,000 spending and the €60,000 excess. | Supporting records for each line are not yet reconciled. |
| **The excess spending was unauthorised.** | S06 establishes a changed approval rule from 5 May. | Transaction dates and transaction-level approvals are missing. |
| **The €60,000 overrun is a €60,000 economic loss.** | None of S02/S03/S04/S06 establishes this. | Consequence, recoverability, benefit received, double counting and causal link remain unestablished. |
| **The third founder caused — or cannot have caused — the loss.** | S04 records a late-warning acknowledgement; S06 retains operational coordination while restricting approval power. | Those facts neither allocate all responsibility nor rule it out. Individual acts, approvals and consequences remain to examine. |

For the purpose of this review, OpenProof therefore keeps four notions explicit without assigning them to PROV itself:

1. **supports this wording**;
2. **limits or contradicts this wording**;
3. **evidence still missing for this wording**;
4. **human review decision and status**.

The modelling question is whether these should remain a separate vocabulary/layer, be represented through qualified PROV patterns, or be expressed in another established way.

## 4. Four-field human review

**1 — Supported wording**

> The investment was collectively approved up to €120,000. The later fictional spending schedule reports €180,000, including €60,000 above that cap.

**2 — Sources and passages**

S02 supports the collective decision and cap. S03 supports the reported spending and also says that line-level supporting records still need reconciliation.

**3 — Contrary, limiting or missing evidence**

S04 preserves the adverse fact that the founder acknowledges a late warning. S06 changes approval authority from 5 May while preserving operational coordination. Neither source establishes the approvals for each disputed transaction. A budget overrun does not, by itself, establish an economic loss.

**4 — Human review decision / next evidence**

Retain the reported-overrun observation. Do **not** infer, from this fragment alone, unauthorised spending, a €60,000 loss, or a complete attribution of responsibility. Next inspect each disputed commitment: date, rule then in force, approver, supporting record and documented consequence.

## Question for provenance review

For this bounded example:

1. Is the PROV production chain above scoped correctly?
2. Is a versioned **review decision** reasonably modelled as an Entity generated by a review Activity associated with a human reviewer?
3. Should **evidential support, contrary evidence and missing evidence** remain explicitly outside the PROV relations shown here, rather than overloading lineage/derivation?
4. Is there a better PROV / ProvToolbox / PLEAD pattern for preserving this boundary while keeping the whole review traceable?

A correction to any one relation or boundary is sufficient for this first pass. A deeper provenance model can be handled separately after this one-page review.

---

**Limits:** all people, dates, amounts and passages in this exercise are fictional. No private case material is represented here.
