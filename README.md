# Vignaharta Infraforge

Static website for Vignaharta Infraforge Pvt. Ltd., with pages for the associated enterprises D N Enterprise and JEEL Enterprise.

Open `index.html` in a browser, or from this folder run:

```
python -m http.server 5500
```

Then visit `http://localhost:5500`.

## Update content

- JEEL Enterprise services, phone and email: `js/configuration.js` → `jeel`.
- Form recipients: `js/configuration.js` → `forms.endpoints`. D N Enterprise already points at the verified mailbox through FormSubmit. Leave the others empty until a real address is supplied.
- Client names are written on the homepage and the D N Enterprise page. Replace a wordmark with an approved logo file only after permission.

## Not published on purpose

Identity documents, registration numbers and personal tax details from the source PDFs are not on this website. Do not add them.

Vignaharta Infraforge still needs a confirmed phone, email and registered office before those can be shown as the company’s own contacts.

## Search Console

1. Verify the domain in Google Search Console.
2. Submit `https://www.vignahartainfraforgepvtltd.com/sitemap.xml`.
3. Request indexing for the homepage after the site is live.
4. Check coverage over the following weeks. Indexing is not immediate and rankings are not guaranteed.

Deployment steps are in `DEPLOYMENT.md`.
