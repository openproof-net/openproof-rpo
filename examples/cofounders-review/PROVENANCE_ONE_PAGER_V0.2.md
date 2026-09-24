# Provenance × evidential support — synthetic review v0.2

**Status:** revised draft following external technical review — **not scientific validation**  
**Date:** 24 September 2026  
**Material:** fictional cofounders case, version 2026-09-16  
**Scope:** public synthetic material only  
**Not:** engine output, benchmark result, external validation or legal conclusion

This version preserves [v0.1](./PROVENANCE_ONE_PAGER_V0.1.md) unchanged and records a bounded correction to the PROV modelling. The correction changes the provenance structure; it does **not** strengthen any factual or causal conclusion in the fictional case.

## What changed from v0.1

1. The direction of the PROV relations is corrected in the diagram:
   - an **Activity** `prov:used` an **Entity**;
   - an **Entity** `prov:wasGeneratedBy` an **Activity**;
   - an **Activity** `prov:wasAssociatedWith` an **Agent**.
2. The reported-overrun observation now has an explicit `prov:wasDerivedFrom` relation to S02 and S03. A generation/usage chain is not treated as sufficient to imply derivation.
3. The model now separates three possible levels:
   - **operational provenance** — provenance about the underlying fictional business events;
   - **review provenance** — provenance of the documentary review itself;
   - **review hypothesis / reconstruction** — any reconstructed execution inferred from documents, explicitly not an observed operational fact.
4. The two provenance levels can be represented as separately attributed named bundles. A hypothetical reconstruction, if used, must remain separately named and attributed.

## 1. Public source fragment

| Source | Exact fictional excerpt |
| --- | --- |
| **S02 — Investment minutes** | “All three founders approve an investment capped at €120,000. A monthly update must flag any risk of overspending.” |
| **S03 — Spending schedule** | “Spending attributed to the investment totals €180,000, including €60,000 above the original budget. Supporting records for each line still need to be reconciled.” |
| **S04 — Late-warning message** | “I should have flagged the risk of overspending sooner. I was waiting for the final quotations.” |
| **S06 — Change to approval authority** | “From 5 May, new spending and recruitment require approval from the other two founders. The third retains operational coordination.” |

Source pack: [cofounders-review](README.md) · structured fixture: [case-en.json](https://openproof.net/docs/examples/cofounders/case-en.json)

## 2. Corrected review-level PROV view

The following notation uses **subject → relation → object**.

~~~text
review:comparison                    prov:Activity
review:comparison
        ├── prov:used ──────────────► S02                 prov:Entity
        └── prov:used ──────────────► S03                 prov:Entity

review:reported-overrun              prov:Entity
review:reported-overrun
        ├── prov:wasGeneratedBy ────► review:comparison
        ├── prov:wasDerivedFrom ────► S02
        └── prov:wasDerivedFrom ────► S03

review:activity                      prov:Activity
review:activity
        ├── prov:used ──────────────► review:reported-overrun
        ├── prov:used ──────────────► S04
        ├── prov:used ──────────────► S06
        └── prov:wasAssociatedWith ─► human reviewer      prov:Agent

review:decision-v0.2                 prov:Entity
review:decision-v0.2
        └── prov:wasGeneratedBy ────► review:activity
~~~

The explicit `prov:wasDerivedFrom` links record that the reported-overrun observation is derived from S02 and S03. The diagram no longer assumes that this derivation follows automatically from the combination of `prov:used` and `prov:wasGeneratedBy`.

**Boundary retained:** none of these PROV relations means “this source proves this conclusion”. Lineage and evidential support remain distinct questions.

## 3. Separate levels and named bundles

### A. Operational level

An operational provenance bundle would describe the underlying fictional business events themselves: for example, an approval activity, a spending activity and the actors associated with those activities.

~~~text
bundle:operations-v0.2               prov:Bundle
~~~

This document does **not** claim that the source pack contains a complete operational provenance record. The fictional minutes and schedules are documentary entities about those events.

### B. Review level

The review provenance belongs in a separate attributed bundle:

~~~text
bundle:review-v0.2                   prov:Bundle
    contains the comparison activity,
    reported-overrun observation,
    review activity and review decision
~~~

This makes the provenance of the review traceable without treating the review record as identical to the operational history.

A candidate bridge for further review is to model a documentary record such as the minutes as an Entity derived from an attributed operational bundle when that relation is actually justified. That bridge is a **modelling proposal**, not a fact established by the fictional fixture.

### C. Review hypothesis / reconstructed execution

If the reviewer reconstructs a possible execution from minutes and other evidence, that reconstruction must be represented separately:

~~~text
bundle:reconstruction-hypothesis-v0.2    prov:Bundle
status: review hypothesis
~~~

It must not be presented as observed operational provenance. If later evidence aligns the reconstruction with the operational record, that alignment is a review conclusion that still requires its own evidence and human decision.

## 4. Evidential-support layer remains separate

| Candidate statement | What the public material supports | What remains unsupported / missing |
| --- | --- | --- |
| **A €60,000 overrun is reported.** | S02 gives the €120,000 cap; S03 reports €180,000 spending and the €60,000 excess. | Supporting records for each line are not yet reconciled. |
| **The excess spending was unauthorised.** | S06 establishes a changed approval rule from 5 May. | Transaction dates and transaction-level approvals are missing. |
| **The €60,000 overrun is a €60,000 economic loss.** | None of S02/S03/S04/S06 establishes this. | Consequence, recoverability, benefit received, double counting and causal link remain unestablished. |
| **The third founder caused — or cannot have caused — the loss.** | S04 records a late-warning acknowledgement; S06 retains operational coordination while restricting approval power. | Those facts neither allocate all responsibility nor rule it out. Individual acts, approvals and consequences remain to examine. |

OpenProof therefore keeps four review notions explicit without assigning them to PROV lineage itself:

1. **supports this wording**;
2. **limits or contradicts this wording**;
3. **evidence still missing for this wording**;
4. **human review decision and status**.

## 5. Four-field human review

**1 — Supported wording**

> The investment was collectively approved up to €120,000. The later fictional spending schedule reports €180,000, including €60,000 above that cap.

**2 — Sources and passages**

S02 supports the collective decision and cap. S03 supports the reported spending and also says that line-level supporting records still need reconciliation.

**3 — Contrary, limiting or missing evidence**

S04 preserves the adverse fact that the founder acknowledges a late warning. S06 changes approval authority from 5 May while preserving operational coordination. Neither source establishes the approvals for each disputed transaction. A budget overrun does not, by itself, establish an economic loss.

**4 — Human review decision / next evidence**

Retain the reported-overrun observation. Do **not** infer, from this fragment alone, unauthorised spending, a €60,000 loss, or a complete attribution of responsibility. Next inspect each disputed commitment: date, rule then in force, approver, supporting record and documented consequence.

## 6. Questions remaining after the correction

1. Is the corrected review-level chain now scoped correctly?
2. Is the explicit `prov:wasDerivedFrom` relation from the observation to S02/S03 the appropriate way to record that derivation?
3. Is the split between operational bundle, review bundle and separately attributed reconstruction hypothesis a sound pattern?
4. When a documentary record is modelled as derived from an attributed operational bundle, what additional qualification is needed to avoid implying that the document is a direct observation of the event?
5. Should evidential support, contrary evidence and missing evidence remain explicitly outside the PROV lineage relations shown here?

A future version should be created only if a new correction is attributable and materially changes the model. This v0.2 is a revised draft following technical review, not a scientific validation.

---

**Limits:** all people, dates, amounts and passages in this exercise are fictional. No private case material is represented here. The external technical review is recorded internally; no public attribution is made here without explicit attribution clearance.
