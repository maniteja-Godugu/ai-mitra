# AI Mitra Website

This is the static HTML/CSS/JavaScript website for AI Mitra. The existing page layouts and content have been retained while the navigation, school invitation form integration point, and resource previews have been updated.

## Pages

- `index.html` – default website entry point (same homepage as `home.html`)
- `home.html` – homepage source
- `learn_ai.html` – Learn AI pathways
- `ai_fundamental.html` – AI Fundamentals lessons
- `gen_ai.html` – Generative AI lessons
- `ai_in_real_life.html` – AI in Real Life
- `resource.html` – learning resources and PDF previews
- `about.html` – About AI Mitra

## Project folders

- `images/` – supplied site images
- `resources/` – resource PDFs (stable filenames below)
- `css/site-navigation.css` – shared navigation, Google Form modal and PDF preview styling
- `js/site-config.js` – settings such as the Google Form URL
- `js/site-navigation.js` – shared desktop/mobile navigation and school form modal behaviour
- `js/resource-preview.js` – resource PDF preview behaviour

## Connect the school invitation Google Form

The school invitation CTA opens a modal that can embed a Google Form. To activate it:

1. Create a Google Form with fields such as School name, School location, Contact person, Contact number, Email address, preferred workshop date, class/grade, approximate number of students, and additional message.
2. In Google Forms, use **Send → Link** and copy the published form URL (the `.../viewform` link).
3. Open `js/site-config.js` and set `schoolInviteFormUrl` to that URL:

   `schoolInviteFormUrl: "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform"`

4. Save and redeploy. The page will create the embedded URL automatically and also provide an option to open the form in a new tab.

The form URL is intentionally blank in this package because no published Google Form URL was included in the upload. The modal displays a setup note until the real URL is added.

## Resource PDFs

The Resources page uses these files:

- `resources/ai-dictionary.pdf`
- `resources/ai-tools-explorer.pdf`
- `resources/prompt-school.pdf`

Each resource's **Explore** button opens an inline PDF preview. A separate **Download PDF** button appears below the preview. Keep these filenames and paths unchanged unless you also update `resource.html`.

## Update content and photos

- Replace a founder or workshop image in `images/` while keeping its filename, or update the corresponding image `src` in the relevant HTML page.
- To replace a resource PDF, overwrite the corresponding PDF in `resources/` and keep its filename.
- Shared navigation styles are in `css/site-navigation.css`.
- Shared navigation and school form behaviour are in `js/site-navigation.js`.

## Run locally

From this folder, run:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

For deployment to Netlify or GitHub Pages, publish the complete folder. Do not upload only the HTML files; the CSS, JavaScript, images and PDFs are required.
