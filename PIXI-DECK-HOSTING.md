# Hosting the Pixi Cycling pitch deck

The pitch-deck buttons use `VITE_PIXI_DECK_URL` when it is configured. This allows
the 27 MB deck to live outside the normal source repository.

## Recommended: GitHub Release asset

1. In the repository, open **Releases**.
2. Choose **Draft a new release**.
3. Create a tag such as `pixi-deck`.
4. Attach `Pixi-Pitch-Deck-2018.pptx` as a release asset.
5. Publish the release and copy the asset's direct download URL.
6. In Vercel, open **Project Settings → Environment Variables**.
7. Add `VITE_PIXI_DECK_URL` with that download URL for Production and Preview.
8. Redeploy the project.

## Alternative: push it with Git or GitHub Desktop

A 27 MB file is too large for GitHub's browser uploader but is below GitHub's
100 MiB command-line limit. Place the file at:

`public/ventures/pixi-cycling/Pixi-Pitch-Deck-2018.pptx`

Then commit and push through GitHub Desktop or the command line. This works, but
it permanently adds the large binary to repository history, so the Release
asset approach is cleaner.
