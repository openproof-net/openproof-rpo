# Historical RPO public entries

The 29 historical HTML pages now point directly to their corresponding canonical OpenProof pages. The manifest is `docs/public-destinations.json`; regenerate with `node tools/build-public-redirects.cjs` and verify with `node tools/build-public-redirects.cjs --check`.

- RPO home, examples, verification and engine architecture retain their documentary purpose and language.
- The founder pages go directly to the reference biography; that biography links to the preserved method and research material.
- Contexts/overview lead to the RPO specification; how-it-works leads to the guided example; retired simulator/cockpit pages lead to the public example.
- An explicit French or English query selects the matching destination. Campaign, intended use and selected-offer identifiers survive. Ambiguous offers are marked for confirmation. Personal fields and arbitrary tokens are not copied into the destination URL.
- Only anchors present on the successor page are kept. Obsolete anchors open the relevant page at its beginning.
- Canonical links and `noindex,follow` remove a competing historical page from the intended indexing model. The historical sitemap points to the canonical site's sitemap.

These are client-side relocation notices because this repository serves static GitHub Pages. JavaScript-disabled visitors retain a direct link and a refresh to the canonical default-language page; query context cannot be preserved by that static fallback. This is not an HTTP 301 implementation and does not change DNS or Pages settings.

The corresponding OpenProof destinations are delivered by openproof-workspace PR #263. Merge this update only after those public destinations are published. Rollback is a revert to the preceding RPO commit; schema v0.1, sealed examples, hashes, reference tools and repository identity are unchanged.
