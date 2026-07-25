# Cumulative Release v5

This release is intended to replace the current GitHub project files as one complete set.

## Included

- Approved Advisory page
  - 11 clients
  - Industry filters and tags
  - Five testimonials
  - Italian Countryside color palette
  - Centered Simi Valley Birth Center testimonial logo
- Contact
  - emily@emilywelsch.co
  - No contact-page image
- Navigation
  - No Home menu item
  - Emily Welsch wordmark is the home link
- Media
  - Podcast/video and press content consolidated onto one page
  - Electric Runway entry links to the supplied Spotify episode
- Ventures
  - Guava Health and Rogo backed-investment cards
  - Rogo logo and Seed round label
  - Guava logo fitted to its investment box
  - Investment thesis for post-revenue software and technology companies

## Verify after deployment

Open `/release.json` on the Vercel URL. It should report:

`"release": "v5-cumulative"`


## Revision 6 verification
- Rogo logo has visible left and right padding
- Media eyebrow reads `Speaking · Podcasts · Video · Press`
- Media hero includes the inquiry invitation and Contact button
- Media content appears in one list
- All, Podcast, Video and Press filters work


## Revision 7 verification
- Ventures page says `Companies I’ve Built`
- No public-facing `Founder Projects` language remains
- SweatVida card opens `/ventures/sweatvida`
- SweatVida case study includes logo, product screenshots, SEO strategy, and founder reflection


## Revision 8 verification
- Pixi Cycling opens a dedicated case study
- The pitch-deck buttons download `Pixi-Pitch-Deck-2018.pptx`
- Product, patent, GTM, traction, and media sections render
- The page shows 1,000+ units, two Amazon’s Choice categories, and 80+ ambassadors


## Revision 9 verification
- SweatVida shows the 20-minute filtered workout view in both visual examples
- YumYummy opens a dedicated case study
- YumYummy includes product concept, what I built, validation, and commercial outcome sections
- /release.json reports `v9-yumyummy-case-study`


## Revision 10 verification
- YumYummy hero uses the uploaded wordmark and layered package artwork
- YumYummy has a packaging-system section showing open-flow, spill-proof, and variety designs
- Advisory includes DOTS Technology Corp and a Life Sciences filter
- `/release.json` reports `v11-yumyummy-hero-packaging`


## Revision 12 verification
- DOTS is visible in Selected Clients on `/advisory`
- DOTS is absent from Companies I’ve Backed on `/ventures`
- Advisory All count is 12
- `/release.json` reports `v12-dots-client-fix`


## Revision 13 verification
- SweatVida contains no Content depth visual
- The Discovery architecture figure spans the full section width
- /release.json reports `v13-sweatvida-full-width`


## Revision 14 verification
- Uncluttered Soul opens a dedicated company case study
- The free meditation button links to `/take-a-break/` on Uncluttered Soul
- The page describes all narration as AI-generated and notes that Emily’s synthetic voice is used for most meditations
- `/release.json` reports `v14-uncluttered-soul-case-study`


## Revision 15 verification
- Clinbook opens a dedicated case study
- The platform overview is the primary product image
- The Medicare patient heat map appears in the Patient intelligence section
- Commercial claims are described as planned next
- DOTS appears under Advisory clients and not investments
- `/release.json` reports `v15-clinbook-case-study`


## Revision 16 verification
- Clinbook hero uses `/ventures/clinbook/clinbook-logo-purple.svg`
- Ventures includes a Coding Projects filter and section
- SurfGuru links to its GitHub repository and video walkthrough
- ShopList links to its GitHub repository and video walkthrough
- `/release.json` reports `v16-coding-projects`


## Revision 17 verification
- Ventures includes a Product Experiments filter
- Pitchit opens at `/ventures/pitchit`
- The page explains the white-card + black-card startup pitch mechanic
- The page includes the rotating judge, Thanksgiving play test, and accelerator use case
- `/release.json` reports `v17-pitchit-case-study`


## Revision 18 verification
- `/ventures` contains only Built and Backed portfolio sections
- Coding projects appear at the end of the Built grid rather than in a separate section
- Built and Backed cards use sand hover with no motion-hover jitter
- Clinbook links to LinkedIn
- Uncluttered Soul links to Instagram and displays 677 followers
- Pixi Cycling links to Instagram and displays 1,157 followers and approximately 3,000 at peak
- SweatVida displays the supplied banner
- `/release.json` reports `v18-ventures-grid`


## Revision 19 verification
- The Built grid uses supplied logos for Pitchit, Pixi Cycling, SurfGuru, and ShopList
- Each corresponding case-study hero uses the supplied logo
- The SweatVida banner appears after the founder reflection and not beneath the hero
- `/release.json` reports `v19-project-logos`


## Revision 20 verification
- Pixi Cycling is visually smaller than the other wide logos in the Ventures grid
- Built filter buttons include All, Company, SaaS Product, Physical Product, Digital Product, and Coding Project
- Clicking a filter updates the Built card grid
- Pixi Cycling's Instagram button displays only Instagram
- `/release.json` reports `v20-ventures-filters`


## Revision 21 verification
- Ventures has no SaaS Product filter or tags
- Clinbook, Uncluttered Soul, and SweatVida filter under Digital Product
- Homepage headline overlaps the wider hero image on desktop
- Statement text loops continuously and respects reduced-motion preferences
- How I Work uses customer-obsession language
- Contact form posts to `/api/contact` and displays sending, success, and error states
- Vercel has `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL`
- Optional `VITE_PIXI_DECK_URL` points to the externally hosted deck
- `/release.json` reports `v21-home-contact`


## Revision 22 verification
- Only “I build, back, and advise ambitious businesses.” crosses over the hero image
- The supporting paragraph and both buttons remain left of the image
- The marquee repeats with normal word spacing between “execution.” and “Founder”
- The upload-ready package does not contain the Pixi PPTX
- `/release.json` reports `v22-home-hero-polish`
