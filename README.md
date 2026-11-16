# GuideConnect 2026 website

Event website for GuideConnect 2026, Society of Tourist Guides (Singapore).
Wednesday 25 November 2026, Hall A, Chui Huay Lim Club.

## Files
- `index.html`: the page
- `styles.css`: all styling (brand colours, Plus Jakarta Sans, light and dark mode)
- `assets/`: speaker photos and partner logos

## Publish on GitHub Pages
1. Upload everything in this folder to the root of a repository, keeping the `assets` folder.
2. In the repository, go to Settings, then Pages.
3. Under "Build and deployment", choose "Deploy from a branch", select `main` and `/ (root)`, and save.
4. The site appears at `https://<your-username>.github.io/<repository-name>/` after a minute or two.

## Custom domain (optional)
To use an address such as `guideconnect.societyoftouristguides.org.sg`, add it under Settings, then Pages, then Custom domain,
and create a CNAME record at Vodien pointing `guideconnect` to `<your-username>.github.io`.

## Editing
Open the folder in Visual Studio Code. Text lives in `index.html`; colours and layout in `styles.css`.
To replace a photo, overwrite the file in `assets/` with a square image of the same name.
