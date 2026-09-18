# Prodo week-one website

A single-page research website based on `../prodoscan-site/docs/WEEK1-SIMPLE-PLAN.md`. Static HTML, CSS, and a small contact-configuration script. No framework, dependencies, backend, analytics, cookies, Amazon connection, or product demo.

## Before publishing

Edit `site-config.js`:

- `email`: **required**, your real public professional email. This is displayed publicly and used for the email links.
- `founderBio`: optional, replace the factual research introduction with your approved background.
- `founderProfileUrl`: optional HTTPS founder profile, such as LinkedIn.

Run `node check-launch.mjs`. Vercel runs this automatically and intentionally blocks deployment if a usable contact email is missing. It checks syntax, not mailbox deliverability. No contact details or credentials have been invented.

## Local preview

Open `index.html` directly in a browser, or serve this directory with a static server:

```sh
python3 -m http.server 3000 --bind 127.0.0.1
```

Visit `http://localhost:3000`. All display assets are local; the package illustrations use CSS. The email action opens the visitor’s email application, not a form or server endpoint.

## Git and Vercel

If pushing the enclosing `prodoscan` folder, set the Vercel **Root Directory** to `website`. If pushing only this folder's contents, leave Root Directory at the repository root.

- Framework preset: **Other**.
- Build command: `node check-launch.mjs` (configured in `vercel.json`).
- Output directory: `.` (configured in `vercel.json`).
- No package installation or environment variables required.

Deploy only this website directory. The sibling `prodoscan-site/docs` folder contains internal material and is deliberately excluded from the public site. Review repository contents separately before pushing to a public GitHub repository; Vercel’s Root Directory setting does not make other GitHub files private.

## Copy and scope

The site invites workflow conversations rather than purchases. Northline, its packaging, and the comparison are explicitly fictional. No automatic error detection, customer traction, savings, compliance, or authenticity claims are made. The comparison uses orange for intended v2 and charcoal for observed v1, matching the sample packet. No real ASIN or retailer image is republished.

## Files

- `index.html`: public page and sample comparison.
- `styles.css`: responsive layout and package illustrations.
- `site-config.js`: public founder contact configuration.
- `site.js`: safely renders configured contact information.
- `check-launch.mjs`: required-contact deployment check.
- `vercel.json`: static deployment and response headers.

No deployment or Git push has been performed.
