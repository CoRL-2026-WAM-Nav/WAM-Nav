# Project page update — 2026-10-13

Updated the local project page against camera_ready/WAM_Nav.tex and WAM_Nav.pdf. The original page is preserved in analysis/before_website_update_20261013 outside the web directory.

## Content
- Revealed the final 12-author list, seven affiliations, and both corresponding authors.
- Added the current camera-ready PDF and full-author BibTeX.
- Updated the abstract, method descriptions, training/evaluation protocol, quantitative results, same-dataset adapted baseline controls, computational comparison, and real-world protocol.
- No-Goal averages now read 171.1 m² / 75.6 s.
- All 16 original videos remain unchanged.

## Figure discrepancy
The manuscript's introductory chart shows ViPlanner Point-Goal SPL as 61.9, while Table 1 reports 62.4. The table's four SPL values (80.1, 64.5, 43.2, 61.9) average to 62.425, rounded to 62.4. The website's SVG chart uses 62.4. The manuscript itself was not changed in this website task.

## Design and behavior
Responsive light layout with green accents, a video-led introduction, a dark demonstration gallery, keyboard-accessible task tabs, native figure dialogs, mobile navigation, and citation copy/download. No external JavaScript or font services are needed.

## Publication
This is a local update. The directory has no Git metadata; no live deployment was performed.

## Validation
Verified desktop (1280 × 900) and mobile (390 × 844) layouts, with no page overflow or broken visible images. Checked task tabs and keyboard navigation, mobile navigation, horizontal result-table scrolling, figure dialogs and original-asset links, citation copying, expansion of all simulation videos, playback, and automatic pausing when changing galleries. No browser errors were reported. All 160 main benchmark values were checked against Table 1; every local asset and internal anchor resolves, and the bundled PDF matches the final manuscript byte for byte.
