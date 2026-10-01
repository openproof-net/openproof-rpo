# OpenProof RPO — public specification and examples

OpenProof helps a reviewer keep **sources, transformations, claims, uncertainty and human decisions** connected in a documentary case.

This repository contains the **draft RPO format, fictional examples and a supported local integrity checker**. It does not contain the hosted OpenProof Legal application or the private TruthX Engine. The public format remains **v0.1**; no certification, recognised-standard status, scientific validation or external adoption is claimed.

## Choose a public path

| Goal | Start here | What you will get |
| --- | --- | --- |
| Review a claim without coding | [Guided Cofounders investigation — suggested scope: 15 min](https://app.openproof.net/contribute?lang=en) · [Français](https://app.openproof.net/contribute?lang=fr) | A fictional case showing what a source supports, what it leaves open and what a person must decide |
| Reproduce a technical control | [Five-minute Atlas integrity exercise](START_HERE.md) | A local comparison that detects whether a JSON record changed relative to a retained reference |
| Inspect the format and limits | [RPO format](spec/rpo-format.md) · [schema](spec/rpo-schema.json) · [architecture](docs/architecture.md) | The draft structure, public verification boundary and implementation limits |
| Challenge or improve the method | [Contribution guide](COMMUNITY.md) | Small review, counter-example and documentation tasks with bounded scope |
| Discuss a Legal pilot | [Describe the need](https://openproof.net/qualify?intent=case) | A qualification conversation; no confidential evidence should be submitted through the public form |

A GitHub account is not required to explore the guided case. It is needed only if you choose to publish a contribution.

## The problem

A citation can resolve correctly while failing to support the sentence attached to it. A transformation can be traceable while changing the evidential scope. A complete-looking conclusion can hide missing premises.

OpenProof therefore keeps these objects distinguishable:

1. source and inspected version;
2. transformation and its provenance;
3. exact claim or clause;
4. support, adverse evidence and uncertainty;
5. reasoning and missing premises;
6. proposed conclusion;
7. human review decision.

This is a review discipline, not a truth score. A hash establishes neither authenticity nor factual accuracy when both the record and reference can be replaced.

## One worked example

In the fictional Cofounders case, S02 records collective approval of an investment capped at €120,000. The same passage can support:

> The investment was collectively approved up to €120,000.

It does not, by itself, support:

> Therefore none of the losses can be attributed to the third founder.

The second sentence needs additional premises about payments, loss, causation and responsibility. [Inspect the same-passage review](examples/cofounders-review/REVIEW_GUIDE.md#same-passage-two-conclusions), including adverse evidence and the proposed narrower wording.

The annotations are teaching proposals prepared with AI assistance. They are not engine output, independent human labels or a legal conclusion.

## What is available today

| Public component | Available | Boundary |
| --- | --- | --- |
| Fictional Cofounders review | Readable sources, proposed criteria and worked review | Manual example; no automatic semantic reasoning is demonstrated |
| Atlas integrity checker | Basic field inspection and deterministic fingerprint comparison | Not full schema validation, source verification, authenticity or truth checking |
| RPO format | Public v0.1 draft and JSON Schema | Not a recognised standard or certification |
| OpenProof Legal | A private product being prepared for bounded pilots | Not distributed from this repository |
| TruthX Engine | Private implementation | Not open sourced here |

The public repository is independently useful for examining the method and reproducing the integrity example. It must not be presented as the complete product.

## Run the public integrity check

Requires Node.js 22 or later and Git. No package installation, API key or OpenProof account is needed.

```sh
git clone https://github.com/openproof-net/openproof-rpo.git
cd openproof-rpo
node tools/verify-demo.cjs examples/public-demo/rpo-en.json examples/public-demo/rpo-en.sha256
node --test tests/public-verification.test.cjs
```

Expected result: `basic_structure_present: true`, `reference_matches: true`, exit code `0`.

To see a change detected, copy `rpo-en.json`, edit `narrative.summary`, and compare the edited file while retaining the original `.sha256` reference. The result becomes `reference_matches: false` with exit code `1`.

The checker reads local files only. It hashes the parsed object using recursively sorted object keys, preserved array order, compact JSON and UTF-8. This demonstration serialisation is not a claim of RFC 8785 conformance.

## Contribute something reusable

Three useful first gestures are:

- flag one ambiguity in a rule or example;
- propose a counter-example that breaks a proposed review criterion;
- improve one documented rule, fixture or explanation.

Start with the [community guide](COMMUNITY.md) and read [CONTRIBUTING.md](CONTRIBUTING.md) before a larger change. A comment becomes project progress only when the decision and resulting artefact are traceable. Contributions remain proposals until reviewed and merged.

The public issues currently focus on [source review and transformation provenance — #44](https://github.com/openproof-net/openproof-rpo/issues/44), [extraction and readable source attachment — #45](https://github.com/openproof-net/openproof-rpo/issues/45), and [reference resolution versus semantic support — #46](https://github.com/openproof-net/openproof-rpo/issues/46).

## Project and research context

**Gersende Ryard de Parcey**, founder of TruthX and OpenProof, leads the product and review method. [Professional background](https://www.linkedin.com/in/gryard/) · [GitHub](https://github.com/Gersenderdp)

Research work began in 2025 with Professor [Gaël Dias](https://dias.users.greyc.fr/) at GREYC / Université de Caen Normandie. Lucy Martin and Clément Correia-Peltier delivered a student research prototype, report and presentation in May 2026. That prototype is not yet integrated into the current engine. [Research collaboration and credits](RESEARCH_COLLABORATION.md)

## Licensing

Selected files are available under MIT, including this README, the public checker, named specification files and fictional reference examples. The grant is file-specific: see the exact list in [LICENSING.md](LICENSING.md) and the [MIT License](LICENSE). The private application, TruthX Engine, research archives, real dossiers and unlisted files are outside that grant.

[OpenProof website](https://openproof.net/) · [Architecture and limitations](docs/architecture.md) · [CITATION.cff](CITATION.cff)
