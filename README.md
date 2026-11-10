# Tungaahui Data Studio — Portfolio Website

A responsive, faithful web presentation of the supplied 35-page portfolio PDF. Every original PDF page is rendered as an optimized WebP image; hyperlinks from the PDF are positioned as clickable overlays.

## Deploy on Vercel

1. Extract the ZIP and upload this folder to a **new GitHub repository** (keep `index.html`, `main.js`, `links.json`, `package.json`, `vercel.json` and `public/` in the repository root).
2. In Vercel, select **Add New → Project → Import Git Repository** and select the repository.
3. Vercel detects Vite. Build command: `npm run build`; output directory: `dist`. Click **Deploy**.
4. Optionally add a domain such as `portfolio.tungaahui.mn` in **Project Settings → Domains**, and configure DNS as Vercel instructs.

## Local development

`npm install` then `npm run dev`.

## Notes

- The current design preserves the PDF exactly, including typography, imagery, and layout. Page text is displayed as images, not selectable HTML text.
- Project links embedded in the PDF remain clickable via overlays.
- The full PDF is available for download.
- To replace pages, rerender the updated PDF and regenerate the `links.json` overlays.
