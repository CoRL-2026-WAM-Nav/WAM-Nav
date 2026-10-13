# WAM-Nav Project Page

Project page for **WAM-Nav: Asymmetric Latent World-Action Modeling for Unified Visual Navigation**, CoRL 2026.

- The author order, affiliations, corresponding contacts, abstract, method, and quantitative results follow the camera-ready paper.
- The bundled paper is at static/pdfs/WAM-Nav.pdf. Replace this copy when revising the manuscript.
- The overview diagram is extracted from the final paper. The native SVG results chart follows Table 1, including corrected No-Goal results (171.1 m² / 75.6 s) and ViPlanner Point-Goal SPL (62.4). The architecture and qualitative figures are synchronized with the final assets.
- All 4 real-world and 12 simulation videos are preserved. Local posters and on-demand video loading keep the initial page lightweight.
- The page includes task-specific result tables, separate VLN-N1-adapted controls, efficiency results, figure enlargement, video galleries, and a downloadable/copyable BibTeX citation.
- HTML, CSS, and JavaScript run without a build step, external font services, or JavaScript CDNs. Paths are relative so the page works on GitHub Pages under /WAM-Nav/.

## Local preview

Serve this directory with any static HTTP server, for example:

    python3 -m http.server 4173 --bind 127.0.0.1

Then open http://127.0.0.1:4173/ in your browser.

## Publishing

The project-page URL is https://corl-2026-wam-nav.github.io/WAM-Nav/. Publish the contents of this directory through the existing GitHub Pages workflow. Local editing does not update the live site automatically.

## Credits

Original project-page template: [Academic Project Page Template](https://github.com/eliahuhorwitz/Academic-project-page-template), adapted from [Nerfies](https://nerfies.github.io).
The original CC BY-SA 4.0 attribution is retained in the footer.
