# Pilot review aid — v0.1

**Frozen on 4 October 2026. Status: proposed and unvalidated.**

This is the complete link-free reviewer-facing review aid for the fictional cofounders pilot. It contains no item identifiers, expected annotations, worked-example links, contribution trails, repository links or other reviewers' answers. It is a review aid, not an implemented checker, scientific validation, legal opinion or production-engine output.

## Candidate A — paired-conclusion entailment check

Use the same retrieved passage to form two conclusions:

- one conclusion that the passage directly supports;
- one conclusion that goes beyond the passage because a premise is missing.

The review should fail if the overreaching conclusion is accepted without identifying the missing premise. This tests claim support, not merely citation presence or citation formatting.

## Candidate B — bitemporal decision context

Record separately:

- `valid_from` / `valid_to`: when a rule, authority or fact applies in the case chronology;
- `recorded_at`: when it was learned or recorded.

A narrative summary remains derived and non-authoritative. The underlying dated source controls.

Before labelling two passages contradictory, establish that they concern the same decision context:

- the same expense, transaction or explicitly linked set of expenses;
- the commitment date and the approval rule then in force;
- the identified approver or approvers;
- the payment date and documented consequence, recorded separately from commitment.

If that linkage is missing, classify the relationship as **missing context / unresolved linkage**, not as a contradiction. A payment made after an authority change does not by itself show that the later approval rule governed the earlier commitment.

For a causal statement, record the asserted inference family: succession, correlation, mechanism or cause.

## Candidate C — inference-type tag

Tag each reviewed claim as:

- `stated`;
- `correlational`;
- `inferred-causal`.

An `inferred-causal` claim defaults to **not established** until the record contains the premises and evidence required for the causal step. Accurate citations do not establish that step by themselves.

## Candidate D — inspect each clause before accepting the proposition

A located reference is not a support verdict. Record these properties separately:

| Property | What to record | Boundary |
| --- | --- | --- |
| Reference resolution | Source identity, inspected version, exact passage or locator; resolved or unresolved | A missing reference cannot be replaced by an invented passage. Keep the original identifier visible. |
| Clause support | Exact clause, passage, supported / not established / contradicted / not assessable, and a reason | Check direction, scope, population or actors, and strength. A premise inferred from the text is not automatically stated by it. |
| Retraction status | Not checked, checked with dated evidence, or not applicable with a reason | No retraction found is not proof of support. Unknown is not cleared. |
| Human decision | Pending, keep, narrow, reject or leave open; reviewer, rationale and time when actually reviewed | Approval records a decision; it cannot overwrite an unsupported clause as supported. |

Split a sentence into inspectable clauses and make that split visible and open to correction. For each material clause:

1. Compare its exact wording against the exact inspected source version, including limiting text.
2. Keep supporting, adverse and opposing passages visible together. Apply Candidate B before labelling a contradiction.
3. If evidence is silent, use **not established / unresolved**, with the missing premise. A `NEUTRAL` label alone supplies neither support nor contradiction.
4. Reserve **contradicted** for evidence that supports an incompatible proposition in the same relevant context. Adverse evidence can weaken a conclusion without establishing its opposite.
5. Do not mark a whole proposition supported while any material clause remains not established, contradicted or not assessable. Show the clause results rather than averaging them into a score. An unresolved-reference state and an unresolved-support state must name their different layers.

For a supported observation, expose its explanatory boundary: no causal or responsibility attribution unless the necessary additional premises are supported. Scope may also exclude authorization, payment or economic loss.

If wording is too strong, preserve it and its failed support judgment, then propose narrower wording supported by the passage. Seek evidence for a named gap; do not silently rewrite the original merely to justify it. A rewritten block can be traceable yet unsupported.

## Candidate E — verify transformed blocks and migrated citations at the output

Transformation provenance and evidential support are independent review axes.

For each transformed block, keep:

- `source_ref`: original source identity, expected scope and exact inspected version;
- `actor` or `agent_id`: who or what performed the transformation;
- `change_type`: for example verbatim extraction, rephrasing, summarisation or restructuring;
- `transformed_at`: the actual transformation time;
- the exact output block and its version.

A non-empty, structurally valid record fails traceability when `source_ref` names the wrong source or scope. Passing traceability does not establish support. Compare every material clause in the exact output with the exact source version using Candidate D.

When a citation is migrated, preserve both the before and after claim–citation pairings. At the final location, record the relevant passage and locator, a short support reason and the separate support state. Distinguish:

- a citation attached to the wrong claim during migration;
- a citation already attached to an unsupported claim;
- a correctly placed citation whose reference resolves but whose final claim still lacks support.

Identifier mapping, formatting, document integrity and citation placement are migration checks. None is a final support verdict.

## Candidate F — keep extraction ambiguity and footnote attachment unresolved

Extraction quality and evidential support are separate layers. A sentence and a footnote are linked only when the attachment itself can be inspected.

For each proposed sentence–footnote link, record:

- the exact visible marker in the sentence and its page location, or the frozen inline locator when the source has no page artifact;
- the exact opening marker of the proposed footnote and its page location, or the frozen inline locator when the source has no page artifact;
- whether the proposed footnote is a distinct text block rather than part of a figure, table or independent chart note;
- the result and reason for both marker matching and block classification.

Visual proximity, shared region membership or a valid `source_ref` does not establish the link. If marker recognition or block segmentation cannot be checked, disagrees or remains ambiguous, keep the attachment **unresolved at the extraction layer**. Show both exact locations, provide one plain-language reason and route the pair to human review. Do not count an unavailable key check as a pass.

Any support judgment that depends on the proposed footnote remains not established until the attachment is resolved. Resolving the attachment establishes only which note belongs to which sentence; it does not establish every downstream inference drawn from the note.

## Decision boundary

Record each individual judgment and reason before discussion or access to expected annotations. Keep reference resolution, clause support, retraction status and human acceptance separate. Do not average unlike checks into a score. If these criteria do not reduce overreach acceptance, or create a different error, report that result and revise or retire the relevant rule.
