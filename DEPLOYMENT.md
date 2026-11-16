# Deployment

The site is plain HTML, CSS and JavaScript. There is no build step. Cloudflare Pages should use the repository root as the output directory.

## 1. Test locally

From the project folder:

```
python -m http.server 5500
```

Open `http://localhost:5500` and check Home, About, both business pages, Projects, Services, Get a Quote, Contact and Privacy. Resize to a phone width and open the menu.

On the quote form, submit it empty and confirm the inline errors. Select JEEL Enterprise or Vignaharta and confirm the form explains that no recipient is configured. Do not send a test to the live D N Enterprise mailbox unless the business expects it.

## 2. GitHub

Create a repository and push this folder. Do not commit `_pdf_preview` or identity documents. `.gitignore` already excludes that folder.

## 3. Cloudflare Pages

1. Create a project and connect the GitHub repository.
2. Framework preset: None.
3. Build command: leave empty.
4. Output directory: `/` (the repository root).
5. Deploy.

## 4. Domain and DNS

1. In Cloudflare Pages, add `www.vignahartainfraforgepvtltd.com` as a custom domain.
2. Add the DNS records Cloudflare shows. If the domain already uses email, do not delete MX, SPF or other mail records.
3. Turn on HTTPS. Wait until the certificate is active before calling the site live.

The domain being listed in this project does not mean the site is already deployed.

## 5. Forms

D N Enterprise uses FormSubmit at the public mailbox `d.n.enterprise2710@gmail.com`. The first real submission sends a confirmation email to that inbox. Delivery starts after that confirmation.

To enable Vignaharta or JEEL Enterprise, put a verified recipient in `js/configuration.js`:

```
endpoints: {
  "dn-enterprise": "https://formsubmit.co/ajax/d.n.enterprise2710@gmail.com",
  vignaharta: "",
  "jeel-enterprise": ""
}
```

No API secret belongs in this file.

## 6. Search Console

Verify the domain, submit `sitemap.xml`, and request indexing for the main pages. Recheck coverage later. This does not guarantee rankings.

## 7. Updating the site

Replace images in `assets/images`, keep the logo file as supplied, and edit page copy where a fact has been confirmed. Push to the connected branch and let Cloudflare Pages rebuild. Review the changed pages on a preview URL before sharing them.
