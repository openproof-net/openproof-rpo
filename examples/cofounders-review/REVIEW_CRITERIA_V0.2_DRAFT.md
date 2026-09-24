# OpenProof review criteria — v0.2 draft

**Status:** candidate criteria for the public fictional Cofounders case.  
**Date:** 23 September 2026.  
**Scope:** public synthetic material only.

This draft records three methodological suggestions for review. It does **not** claim that the criteria have been implemented, run as tests, scientifically validated, or accepted by the provenance reviewer. The submitted [provenance one-pager v0.1](./PROVENANCE_ONE_PAGER_V0.1.md) remains preserved; a separate [v0.2 revised draft](./PROVENANCE_ONE_PAGER_V0.2.md) records later bounded PROV corrections from external technical review.

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

## Review questions

1. Does the paired-conclusion check expose the missing premise?
2. Are event validity and recording time kept distinct?
3. Is the inference type explicit before a human accepts a causal conclusion?
4. Does the final decision preserve what is established while keeping authorization, payment, loss, and causation open where evidence is missing?

## Change rule

Feedback becomes a new version only through an attributable public diff. A reply, citation, or private suggestion is not counted as scientific validation, product implementation, or a passed benchmark.
