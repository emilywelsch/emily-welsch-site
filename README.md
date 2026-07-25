# Emily Welsch Website

Vite + React website prepared for deployment on Vercel.

## Current revision

- Approved Advisory page with eleven clients, sector filters, and five testimonials
- Centered Simi Valley Birth Center testimonial logo
- Navigation uses “Emily Welsch” as the home link; no separate Home item
- Contact email updated to `emily@emilywelsch.co`; contact image removed
- Media page includes the existing podcast/video and press archive from emilywelsch.co
- Ventures page includes Guava Health and Rogo investments plus Emily’s investment thesis

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Vercel should detect Vite automatically. The included `vercel.json` supports client-side routes.


## Revision 4
- Updated Electric Runway podcast link to Spotify
- Added supplied Rogo logo and changed its label to Seed round
- Added a square-fitted Guava investment logo asset


## Revision 6
- Added horizontal breathing room around the Rogo investment logo
- Reworked Media into one tagged, filterable archive
- Added invitation copy and a Contact CTA for speaking and media inquiries


## Revision 7
- Replaced public-facing “Founder Projects” language with “Companies Built”
- Added SweatVida to the built-company directory
- Added a full SweatVida case study at `/ventures/sweatvida`


## Revision 8
- Added a full Pixi Cycling case study at `/ventures/pixi-cycling`
- Added the original 2018 PowerPoint pitch deck as a downloadable site asset
- Added selected pitch-deck slides as initial case-study visuals
- Linked the Pixi-related podcast and press archive from the case study


## Revision 9
- Updated the SweatVida case study visuals to show a filtered 20-minute workout results view
- Added a dedicated YumYummy case study at `/ventures/yumyummy`
- Added YumYummy product, packaging, child-use, testing, and founder reflection visuals


## Revision 10
- Added the real YumYummy logo and a dedicated packaging-system showcase
- Added DOTS Technology Corp to Advisory with Healthcare, Technology, and Life Sciences tags


## Revision 12
- Corrected DOTS placement: advisory client, not angel investment
- Ventures investments now remain Guava Health and Rogo only


## Revision 13
- Removed the second SweatVida Content depth visual
- Expanded the Discovery architecture screenshot to the full page content width


## Revision 14
- Added a full Uncluttered Soul case study at `/ventures/uncluttered-soul`
- Added the Uncluttered Soul membership, content architecture, AI voice-production workflow, and free meditation CTA


## Revision 15
- Added a dedicated Clinbook case study at `/ventures/clinbook`
- Added the product overview and Medicare patient heat-map visuals
- Added sponsor, site, investigator, data architecture, product, claims, and company-thesis sections


## Revision 16
- Replaced the typed Clinbook wordmark with the supplied SVG logo
- Added a dedicated Coding Projects section to `/ventures`
- Added SurfGuru and ShopList profiles at `/ventures/surfguru` and `/ventures/shoplist`


## Revision 17
- Added a Product Experiments category and filter to `/ventures`
- Added a dedicated Pitchit case study at `/ventures/pitchit`
- Added the card-game premise, rules, prototype system, play test, and commercialization reflection


## Revision 18
- Redesigned `/ventures` into one Built grid and one Backed grid
- Reused the Advisory client-card visual system with tags and sand hover
- Removed the separate Coding Projects and Product Experiments presentation
- Added Clinbook LinkedIn, Uncluttered Soul Instagram, and Pixi Cycling Instagram links
- Added the supplied SweatVida banner


## Revision 19
- Replaced temporary Pitchit, Pixi Cycling, SurfGuru, and ShopList wordmarks with supplied logos
- Added the logos to their case-study heroes
- Moved the SweatVida banner beside the founder outcome and reflection instead of beneath the hero


## Revision 20
- Reduced the Pixi Cycling logo size in the Ventures grid
- Replaced the Built section explanatory paragraph with clickable portfolio-type filters
- Preserved the existing chronology while filtering
- Removed changing follower totals from the Pixi Cycling Instagram button


## Revision 21
- Consolidated SaaS Product and Digital Product into Digital Product
- Expanded the homepage hero image and allowed the headline to overlap the image
- Converted the positioning statement into a continuous marquee
- Reframed How I Work around customer obsession
- Added a working Vercel `/api/contact` function powered by Resend
- Added configurable external hosting for the large Pixi pitch deck
- See `.env.example` and `PIXI-DECK-HOSTING.md` for deployment setup


## Revision 22
- Limited homepage image overlap to the main headline only
- Kept the supporting paragraph and buttons inside the solid text column
- Tightened the space where the positioning marquee repeats
- Removed the 27 MB Pixi deck from this upload-ready package
