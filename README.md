# WAM-Nav Project Page

Project page for **WAM-Nav: Asymmetric Latent World-Action Modeling for Unified Visual Navigation**, CoRL 2026.

- The author order, affiliations, corresponding contacts, abstract, method, and quantitative results follow the camera-ready paper.
- The bundled paper at static/pdfs/WAM-Nav.pdf is the exact 21-page 2539_WAM-Nav.pdf supplied on 2026-10-13. Paper and figure URLs carry a version tag to refresh cached content.
- The overview diagram, architecture, and qualitative/real-world figures are rendered directly from the latest PDF. The native SVG results chart and all result tables use Table 1, including the updated baseline macro averages. The former ViPlanner SPL discrepancy has been corrected in the source paper.
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
