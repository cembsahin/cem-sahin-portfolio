# Cem Sahin Portfolio

Personal portfolio of Cem B. Sahin, built with Next.js, React, TypeScript and Tailwind CSS.

## Publish to GitHub and Vercel

1. Extract the deploy-ready ZIP. Open the `cem-sahin-portfolio` folder.
2. Sign in at https://github.com/new and create a repository named `cem-sahin-portfolio`. Choose public if you want others to see the source, or private otherwise. Leave the README, .gitignore and license initialization options unchecked.
3. On the empty repository page, choose **uploading an existing file**. Drag the extracted folder's CONTENTS into the upload area, then commit. Upload the actual files and the `app` and `public` folders, not the ZIP or its enclosing folder. `package.json` must appear at the repository's top level.
   - On macOS, press Command–Shift–Period in Finder to show `.gitignore` and `.nvmrc`, and include them too.
   - If using the working folder rather than the ZIP, do not upload `node_modules`, `.next`, or `tsconfig.tsbuildinfo`.
4. Open https://vercel.com/new, sign in with GitHub, and import the repository. If asked, allow Vercel access to this repository.
5. Use these settings:

   | Setting | Value |
   | --- | --- |
   | Framework Preset | Next.js |
   | Root Directory | `./` |
   | Node.js | 22.x |
   | Build Command | `npm run build` (default is fine) |
   | Output Directory | Keep the Next.js default; do not enter `dist` |
   | Install Command | `npm ci` or the detected npm default |
   | Environment Variables | None required |

6. Click **Deploy**. When successful, open the production URL Vercel provides. Check the home page, section navigation and résumé download. The site is only live after this step succeeds.
7. Subsequent commits to the connected production branch (normally `main`) automatically update the live site. A custom domain can be added later in the Vercel project's domain settings.

If Vercel does not detect Next.js, check that `package.json` is at the repository root. If you uploaded the enclosing folder, select that folder as the Vercel Root Directory.

## Run locally

Install Node.js 22, then open a terminal in this folder:

```sh
npm ci
npm run dev
```

Open http://localhost:3000. To check and run a production build:

```sh
npm run build
npm run typecheck
npm start
```

`npm start` requires a completed build. No environment variables, database, authentication service or Cloudflare account are required.

## Entry points and editing

| File | Purpose |
| --- | --- |
| `app/page.tsx` | Home page, work history, project links, skills and contact information |
| `app/layout.tsx` | Root HTML layout, page title, description and social sharing metadata |
| `app/globals.css` | Styling, responsive layouts, motion and print styles |
| `public/Cem_Sahin_Resume_2026.pdf` | Downloadable résumé |
| `public/favicon.png` | Browser icon |
| `public/og.png` | Social sharing image |
| `next.config.ts` | Next.js configuration |
| `package.json` | Dependencies and run/build commands |

The home page is `/`. Its metadata uses the request hostname, so Next.js renders it on the server. Vercel supports this without additional setup. This version is not a static GitHub Pages export. GitHub Pages would require removing request-dependent metadata, configuring static export, and handling repository subpaths for asset URLs. Netlify can also host Next.js, but Vercel is the recommended path for this package.

## Official instructions

- GitHub: https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository
- Vercel Git deployment: https://vercel.com/docs/git
- Next.js on Vercel: https://vercel.com/docs/frameworks/full-stack/nextjs
- Next.js local setup: https://nextjs.org/docs/app/getting-started/installation
