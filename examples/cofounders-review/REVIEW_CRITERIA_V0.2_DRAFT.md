# OpenProof review criteria — v0.2 draft

**Status:** candidate criteria for the public fictional Cofounders case.  
**Date:** 23 September 2026.  
**Revision:** 3 October 2026 — measurement gate added after public review; Candidates A–F remain unvalidated.  
**Scope:** public synthetic material only.

This draft records candidate methodological criteria for review. It does **not** claim that the criteria have been implemented, run as tests, scientifically validated, or accepted by the provenance reviewer. The submitted [provenance one-pager v0.1](./PROVENANCE_ONE_PAGER_V0.1.md) remains preserved; a separate [v0.2 revised draft](./PROVENANCE_ONE_PAGER_V0.2.md) records later bounded PROV corrections from external technical review.

## Existing four-field review record

1. **Claim** — the exact proposition under review.
2. **Exact sources** — the passages or records linked to that proposition.
3. **Support / reservation** — what the sources support, contradict, or leave missing.
4. **Human decision** — keep, narrow, reject, or leave open, with the next evidence to seek.

## Candidate A — paired-conclusion entailment check

Use the same retrieved passage to form two conclusions:

- one conclusion that the passage directly supports;
- one conclusion that goes beyond the passage because a premise is missing.

The review should fail if the overreaching conclusion is accepted without identifying the missing premise.

**What this tests:** claim support, not merely citation presence or citation formatting.  
**Current state:** proposed; not yet implemented or run against any external system.  
**Credit:** suggested by [Bruhadev45](https://github.com/Bruhadev45) after discussion of the public fictional example.

## Candidate B — bitemporal decision context

Record separately:

- `valid_from` / `valid_to`: when a rule, authority, or fact applies in the case chronology;
- `recorded_at`: when OpenProof or a reviewer learned or recorded it.

A narrative summary remains derived and non-authoritative. The underlying dated source controls.

Before labelling two passages as contradictory, first establish that they concern the same decision context:

- the same expense, transaction, or explicitly linked set of expenses;
- the commitment date and the approval rule then in force;
- the identified approver or approvers;
- the payment date and documented consequence, recorded separately from commitment.

If that linkage is missing, classify the relationship as **missing context / unresolved linkage**, not as a contradiction to be resolved. A payment made after an authority change does not by itself show that the later approval rule governed the earlier commitment.

**Public review note:** this clarification follows [AlekseiUL's comment on #44](https://github.com/openproof-net/openproof-rpo/issues/44#issuecomment-5869099083). It refines a proposed criterion; it is not an implementation, test result, or scientific validation.

For a causal statement, also record the asserted inference family:

- succession;
- correlation;
- mechanism;
- cause.

**What this tests:** whether a later-discovered rule or document is applied to the correct period, without rewriting what was known at an earlier review point.  
**Current state:** proposed; not yet implemented.  
**Credit:** contributed through direct methodological feedback; contributor identity is not published here pending explicit attribution clearance.

## Candidate C — inference-type tag

Add an explicit tag to each reviewed claim:

- `stated`;
- `correlational`;
- `inferred-causal`.

An `inferred-causal` claim defaults to **unsupported** until the record contains the premises and evidence required for the causal step. Accurate citations do not by themselves establish that step.

**What this tests:** citation validity and claim entailment remain separate checks.  
**Current state:** proposed; not yet implemented or tested against HECTOR or any other external system.  
**Credit:** proposed by [Daniel Deshmukh](https://github.com/DanielDeshmukh), with attribution as requested.

## Application to the fictional S02 / S03 / S04 / S06 case

A supported observation may be:

> The reported amount exceeds the stated collective budget by €60,000.

The following do not follow without additional evidence:

- the amount was fully paid;
- the overrun was unauthorized;
- it caused a €60,000 economic loss;
- a named cofounder caused that loss.

A compliant review must therefore preserve the dated authority change in S06, identify transaction-level approval and payment evidence as missing, and leave individual causation open.

## Candidate D — inspect each clause before accepting the proposition

A located reference is not a support verdict. Record these properties separately:

| Property | What to record | Boundary |
| --- | --- | --- |
| Reference resolution | Source identity, inspected version, exact passage/locator; resolved or unresolved | A missing reference cannot be replaced by an invented passage. Keep the original identifier visible. |
| Clause support | Exact clause, passage, supported / not established / contradicted, and a reason | Check direction, scope, population or actors, and strength. A premise inferred from the text is not automatically stated by it. |
| Retraction status | Not checked, checked with dated evidence, or not applicable with a reason | No retraction found is not proof of support. Unknown is not cleared. |
| Human decision | Pending, keep, narrow, reject or leave open; reviewer, rationale and time when actually reviewed | Approval records a decision; it cannot overwrite an unsupported clause as supported. |

These are **proposed review fields**, not additions to the RPO v0.1 schema or an implemented interface.

Split a sentence into inspectable clauses. Make that split visible and open to correction.
For each material clause:

1. Compare its exact wording against the exact inspected source version, including limiting text.
2. Keep supporting, adverse and opposing passages visible together. Check the contextual linkage in Candidate B before labelling a contradiction.
3. If evidence is silent, use **not established / unresolved**, with the missing premise. A classifier's `NEUTRAL` label alone supplies neither support nor contradiction.
4. Reserve **contradicted** for evidence that supports an incompatible proposition in the same relevant context. Adverse evidence can weaken a conclusion without establishing its opposite.
5. Do not mark a whole proposition supported while any material clause remains not established or contradicted. Show the clause results rather than averaging them into a score. An unresolved-reference state and an unresolved-support state must name their different layers.

For a supported observation, expose its explanatory boundary: **no causal or responsibility attribution** unless the necessary additional premises are supported. Scope may also exclude claims about authorization, payment or economic loss.

If wording is too strong, preserve it and its failed support judgment, then propose narrower wording supported by the passage. Seek additional evidence for a named gap; do not silently rewrite the original or repeatedly retrieve merely to justify it. A rewritten block can be traceable yet unsupported: transformation metadata does not replace comparison with the exact source version.

**Reusable worked example:** [same S02 passage, supported observation and excessive conclusion](REVIEW_GUIDE.md#same-passage-two-conclusions). Its annotations are proposed review judgments prepared with AI assistance, not model output or an independent human evaluation.

**Public review trail:** [clause split and adverse evidence](https://github.com/openproof-net/openproof-rpo/issues/46#issuecomment-5887164319), [unresolved versus contradicted](https://github.com/openproof-net/openproof-rpo/issues/46#issuecomment-5887464067), [repair and retrieval](https://github.com/openproof-net/openproof-rpo/issues/46#issuecomment-5890865713), [three independent gates](https://github.com/openproof-net/openproof-rpo/issues/46#issuecomment-5906001757), [neutral evidence](https://github.com/openproof-net/openproof-rpo/issues/46#issuecomment-5906911399), [clause-level display proposal](https://github.com/openproof-net/openproof-rpo/issues/46#issuecomment-5906911618), [Muhammad Rashid's public contribution](https://github.com/openproof-net/openproof-rpo/issues/46#issuecomment-5911992308), [Aryan Pardeshi's authorized verbatim contribution and the separate OpenProof decision](https://github.com/openproof-net/openproof-rpo/issues/46#issuecomment-5919636011), and [transformed-block review](https://github.com/openproof-net/openproof-rpo/issues/44#issuecomment-5886569076).

The rules above are OpenProof's methodological synthesis. The linked contributions retain their own wording, attribution choices and rights; no private correspondence is reproduced or newly paraphrased here. The different proposed vocabularies are not claimed to form a validated universal taxonomy.

**Current state:** documented proposal with a worked example; not an automated semantic checker, external trial or scientific validation.

## Candidate E — verify transformed blocks and migrated citations at the output

Transformation provenance and evidential support are independent review axes.

For each transformed block, keep an inspectable record of:

- `source_ref`: the original source identity, its expected scope and the exact inspected version;
- `actor` or `agent_id`: who or what performed the transformation;
- `change_type`: for example, verbatim extraction, rephrasing, summarisation or restructuring;
- `transformed_at`: the actual transformation time;
- the exact output block and its version.

A non-empty, structurally valid record fails the traceability check when `source_ref` names the wrong source or scope. Passing traceability does not establish support. Compare every material clause in the exact output with the exact source version using Candidate D.

When a citation is migrated, preserve both the before and after claim–citation pairings. At the final location, record the relevant passage and locator, a short support reason and the separate support status. This distinguishes:

- a citation attached to the wrong claim during migration;
- a citation that was already attached to an unsupported claim;
- a correctly placed citation whose reference resolves but whose final claim still lacks support.

Identifier mapping, formatting, document integrity and citation placement are migration checks. None is a final support verdict.

**Reusable worked example:** [one traceable transformation, two support outcomes](REVIEW_GUIDE.md#traceable-transformation-two-support-outcomes). The proposed judgments are human review annotations prepared for this fictional exercise, not engine output.

**Public review trail:** [four-field transformation provenance](https://github.com/openproof-net/openproof-rpo/issues/44#issuecomment-5886373624), [traceable but unsupported rewrite](https://github.com/openproof-net/openproof-rpo/issues/44#issuecomment-5886569076), [source identity and scope](https://github.com/openproof-net/openproof-rpo/issues/44#issuecomment-5887915790), and [before/after migration review](https://github.com/openproof-net/openproof-rpo/issues/46#issuecomment-5898754156).

The rules above are OpenProof's methodological synthesis. Linked contributions retain their wording, attribution choices and rights.

**Current state:** documented proposal with a worked example; not an implemented transformation log, migration checker, semantic checker or external trial.

## Candidate F — keep extraction ambiguity and footnote attachment unresolved

Extraction quality and evidential support are separate review layers. A sentence and a footnote are linked only when the attachment itself can be inspected.

For each proposed sentence–footnote link, record:

- the exact visible marker in the sentence and its page location;
- the exact opening marker of the proposed footnote and its page location;
- whether the proposed footnote is a distinct text block rather than part of a figure, table or independent chart note;
- the result and reason for both marker matching and block classification.

Visual proximity, shared region membership or a valid `source_ref` does not establish the link. If marker recognition or block segmentation cannot be checked, disagrees or remains ambiguous, keep the attachment **unresolved at the extraction layer**. Show both exact locations, provide one plain-language reason and route the pair to human review. Do not count an unavailable key check as a pass.

Any support judgment that depends on the proposed footnote remains not established until the attachment is resolved. Resolving the attachment establishes only which note belongs to which sentence; it does not establish every downstream inference drawn from the note.

A proposed review surface may use a light paired marker plus one grouped exception that opens both locations. This is an untested interface proposal, not released product behaviour.

**Reusable worked example:** [footnote marker lost at a figure boundary](REVIEW_GUIDE.md#footnote-marker-lost-at-a-figure-boundary). It distinguishes the fictional source text, an added extraction fixture, expected human annotations and behaviour that has not been implemented.

**Public review trail:** [Zaher's invented S03 footnote case and untested display proposal](https://github.com/openproof-net/openproof-rpo/issues/45#issuecomment-5897783582) and [OpenProof's retained methodological decision](https://github.com/openproof-net/openproof-rpo/issues/45#issuecomment-5898754553).

The rule above is OpenProof's methodological synthesis. The linked contribution retains its wording, attribution and rights.

**Current state:** documented proposal with a fictional worked fixture; not an extraction engine, layout benchmark, interface implementation, external-reader result or scientific validation.

## Measurement gate before another criterion

Candidates A–F are proposed review methods, not validated controls. Before adding Candidate G, changing the RPO schema or claiming that the criteria improve review, freeze a versioned fictional pilot with:

- 16 claims covering bounded support, overreach despite a valid reference, reference failure, missing context, authority/time roles, transformed output and extraction/footnote attachment;
- an expected clause-level annotation, exact source version, reason and missing premise written before reviewers see each item;
- independent reviewers who did not write the fixtures, with expected annotations hidden;
- separate baseline and criteria conditions, so the review record shows whether access to Candidates A–F changes a decision;
- individual judgments and reasons recorded before discussion or reconciliation.

The primary descriptive result is the raw count of overreaching claims accepted as supported in each condition. Also report reference-resolution/support confusion, correct use of unresolved states, reviewer disagreement and any new error caused by a criterion. Keep item-level reasons visible. Do not turn a small pilot into model accuracy, scientific validation or a universal benchmark.

The reusable draft protocol is in the [review guide](REVIEW_GUIDE.md#proposed-blind-pilot-for-candidates-af). Publishing that draft does not authorize recruitment; scope, consent and conditions must be agreed before involving reviewers.

**Public review trail:** [Daniel Ari Friedman's authority-state analysis and measurement proposal](https://github.com/openproof-net/openproof-rpo/issues/44#issuecomment-5958907120) and [OpenProof's bounded decision](https://github.com/openproof-net/openproof-rpo/issues/44#issuecomment-5966164733).

**Current state:** proposed measurement gate and protocol only; no pilot, reviewer recruitment, result or validation has occurred.

## Review questions

1. Does the paired-conclusion check expose the missing premise?
2. Are event validity and recording time kept distinct?
3. Is the inference type explicit before a human accepts a causal conclusion?
4. Does the final decision preserve what is established while keeping authorization, payment, loss, and causation open where evidence is missing?
5. Can the reader distinguish reference resolution, each clause's support, retraction status and the human decision without a combined score?
6. Does a rewrite preserve the original wording and make its missing premise visible?
7. Can a reviewer distinguish transformation traceability, migration placement and final-output support?
8. Can a reviewer keep a sentence–footnote link unresolved when marker recognition or block segmentation cannot be verified?
9. Before another criterion is added, is there a frozen pilot that can show whether Candidates A–F change reviewer decisions or errors?

## Change rule

Feedback becomes a new version only through an attributable public diff. A reply, citation, or private suggestion is not counted as scientific validation, product implementation, or a passed benchmark.
