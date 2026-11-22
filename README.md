# Maneesha Yapa – Portfolio

React + Vite + Tailwind CSS v4 + Lucide icons.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build -> dist/
npm run preview    # serve the production build
```

## Where to edit

| What | File |
| --- | --- |
| Name, links, CV file paths, about text, experience, achievements | `src/data/profile.js` |
| Skills | `src/data/skills.js` |
| Projects (text, tags, GitHub, screenshots, live demo) | `src/data/projects.js` |
| Colours / theme tokens | `src/index.css` (`:root` blocks) |

## CV files

Two real CVs are already in `public/cv/`:

- `Maneesha-Yapa-CV-Web-Development.pdf`
- `Maneesha-Yapa-CV-AI-ML.pdf`

To update one, replace the file keeping the same name. To add a CV, add the PDF to `public/cv/` and a line to `cvFiles` in `src/data/profile.js`.

## Project screenshots

Put images in `public/projects/` and set `screenshot: '/projects/ledgerly.png'` for that project in `src/data/projects.js`. Until then a labelled placeholder is shown. Set `live: 'https://...'` only when a real demo exists.

## Contact form

There is no backend. The form builds a `mailto:` link, so the visitor's email app sends the message. To receive messages directly, create a form on Formspree / Web3Forms and replace `onSubmit` in `src/components/Contact.jsx` with a `fetch` POST to its endpoint.

## Deploy

`npm run build` and upload `dist/` to Netlify, Vercel or GitHub Pages (for a sub-path on GitHub Pages set `base` in `vite.config.js`).
