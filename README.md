# OpenProof RPO — public specification and examples

OpenProof helps reviewers keep **sources, transformations, claims, uncertainty and human decisions** connected in a documentary case.

This repository contains the **draft RPO format, fictional examples and a supported local integrity checker**. It does not contain the hosted OpenProof Legal application or the private TruthX Engine. The public format remains **v0.1**; no certification, recognised-standard status, scientific validation or external adoption is claimed.

## Start here

| Goal | Path | Result |
| --- | --- | --- |
| Review a claim without coding | [Guided Cofounders investigation — suggested 15 min](https://app.openproof.net/contribute?lang=en) · [Français](https://app.openproof.net/contribute?lang=fr) | A fictional case showing what a source supports and what a person must still decide |
| Reproduce a technical control | [Five-minute Atlas integrity exercise](START_HERE.md) | A local comparison against a retained reference |
| Inspect the format | [RPO format](spec/rpo-format.md) · [schema](spec/rpo-schema.json) · [architecture](docs/architecture.md) | The draft structure and public verification limits |
| Contribute | [Community guide](COMMUNITY.md) | Small review, counter-example and documentation tasks |
| Discuss a Legal pilot | [Describe the need](https://openproof.net/qualify?intent=case) | Qualification only; do not submit confidential evidence |

A GitHub account is needed only if you choose to publish a contribution.

## The method in one example

A citation can resolve correctly without supporting the attached conclusion. OpenProof therefore keeps these objects distinguishable:

**source → transformation → exact claim → support or uncertainty → reasoning → proposed conclusion → human decision**

In the fictional Cofounders case, S02 records collective approval of an investment capped at €120,000. It supports:

> The investment was collectively approved up to €120,000.

It does not, by itself, support:

> Therefore none of the losses can be attributed to the third founder.

The second statement needs additional premises about payments, loss, causation and responsibility. [Inspect the same-passage review](examples/cofounders-review/REVIEW_GUIDE.md#same-passage-two-conclusions), including adverse evidence and the proposed narrower wording.

These annotations are teaching proposals prepared with AI assistance. They are not engine output, independent human labels or a legal conclusion.

## Available public controls

- **Cofounders review:** readable fictional sources, proposed criteria and a worked review; no automated semantic reasoning is demonstrated.
- **Atlas checker:** basic field inspection and deterministic fingerprint comparison; not full schema validation, source verification, authenticity or truth checking.
- **RPO format:** public v0.1 draft; not a recognised standard.
- **OpenProof Legal and TruthX Engine:** private components, not distributed here.

A hash is not a truth score. If both a record and its reference can be replaced, comparison alone does not establish authenticity.

## Run the integrity example

Requires Node.js 22 or later and Git. No package installation, API key or OpenProof account is needed.

```sh
git clone https://github.com/openproof-net/openproof-rpo.git
cd openproof-rpo
node tools/verify-demo.cjs examples/public-demo/rpo-en.json examples/public-demo/rpo-en.sha256
node --test tests/public-verification.test.cjs
```

Expected result: `basic_structure_present: true`, `reference_matches: true`, exit code `0`. The [exercise](START_HERE.md) explains how to edit a copy and observe `reference_matches: false`.

## Contribute something reusable

Three useful first gestures:

- flag one ambiguity;
- propose a counter-example;
- improve one rule, fixture or explanation.

Read [CONTRIBUTING.md](CONTRIBUTING.md) before a larger change. A comment becomes project progress only when the decision and resulting artefact are traceable. Current public questions cover [review and transformation provenance — #44](https://github.com/openproof-net/openproof-rpo/issues/44), [extraction and source attachment — #45](https://github.com/openproof-net/openproof-rpo/issues/45), and [reference resolution versus semantic support — #46](https://github.com/openproof-net/openproof-rpo/issues/46).

## Project, research and rights

**Gersende Ryard de Parcey**, founder of TruthX and OpenProof, leads the product and review method. [GitHub](https://github.com/Gersenderdp) · [Professional background](https://www.linkedin.com/in/gryard/)

Research began in 2025 with Professor [Gaël Dias](https://dias.users.greyc.fr/) at GREYC / Université de Caen Normandie. Lucy Martin and Clément Correia-Peltier delivered a student research prototype, report and presentation in May 2026; that prototype is not yet integrated into the current engine. [Credits and boundaries](RESEARCH_COLLABORATION.md)

Selected files are available under MIT. The grant is file-specific: see [LICENSING.md](LICENSING.md) and [LICENSE](LICENSE). The private application, engine, research archives, real dossiers and unlisted files are outside that grant.

[OpenProof](https://openproof.net/) · [CITATION.cff](CITATION.cff)
