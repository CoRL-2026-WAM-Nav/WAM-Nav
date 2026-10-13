# Website synchronized with the latest paper — 2026-10-13

Authoritative source: 2539_WAM-Nav.pdf, 21 pages.
SHA-256: 0935ff1f38b60f49ea43e06b7c090194451e28051567215a61018c3683e89985

The supplied PDF is byte-identical to the current camera_ready/WAM_Nav.pdf. Table values were extracted directly from page 7 of the supplied PDF, and the complete manuscript text was compared with the previous website paper.

## Updated benchmark values

| Task | Method | Metric | Previous | Latest |
| --- | --- | --- | --- | --- |
| Image-Goal | ViNT | SR (%) average | 12.6 | 12.7 |
| Image-Goal | NoMaD | SPL (%) average | 7.6 | 7.7 |
| Point-Goal | iPlanner | SPL (%) average | 65.1 | 65.2 |
| No-Goal | GNM | Area (m²) average | 27.8 | 27.9 |
| No-Goal | ViNT | Area (m²) average | 36.2 | 36.3 |
| No-Goal | ViNT | Time (s) average | 24.4 | 24.5 |
| No-Goal | NoMaD | Area (m²) average | 62.5 | 62.6 |
| No-Goal | NoMaD | Time (s) average | 35.5 | 35.6 |

## Other updates

- Rebuilt all three website result tables and the quantitative SVG overview from the PDF's Table 1.
- Updated NoMaD's plotted Image-Goal SPL and No-Goal area/duration, including the corresponding bar heights.
- Refreshed the conceptual overview, architecture, qualitative results, and real-world evaluation images directly from the latest PDF.
- Replaced the downloadable manuscript with the exact 21-page supplied PDF. Versioned paper and figure URLs avoid showing older cached files.
- Rechecked the author list, affiliations, contacts, full abstract, method description, horizons, training/evaluation protocol, adapted controls, efficiency results, and real-world protocol against the latest paper.
- The previous ViPlanner Point-Goal SPL inconsistency is resolved in the new paper: both its overview chart and Table 1 report 62.4.
- The removed difficulty-level table and analysis have no counterpart on this website, so no obsolete difficulty-level claims remain.
- WAM-Nav's main results remain 50.2% / 48.2% Image-Goal SR/SPL, 80.4% / 78.0% Point-Goal SR/SPL, 171.1 m² / 75.6 s No-Goal area/time, and 85% average real-world success.
- All 16 original videos and the existing responsive design are preserved.
- Changed files are backed up in analysis/before_latest_website_sync_20261013 outside the website directory.

## Publication

Updated locally. The existing public GitHub Pages site was not deployed by this task. The local preview remains available at http://127.0.0.1:4173/.

## Validation
All 160 benchmark values match Table 1 extracted directly from the supplied PDF. All 20 numeric labels in the SVG chart independently match the paper's Figure 1. The downloadable PDF has 21 pages and is byte-identical to the supplied file, including when downloaded from the local HTTP service. All local resources and anchors resolve, and the 16 original video entries remain present. Updated source figure crops were visually inspected. JavaScript syntax passes.

Browser automation was blocked before connecting to the page; the tool reported a URL protocol security restriction. No new browser interaction or responsive-layout check was completed in this synchronization pass. The existing layout/interaction code is retained, and the local service is confirmed healthy and left running.
