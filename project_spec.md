# MASTER PROMPT — PREMIUM CORPORATE WEBSITE FOR VIGNAHARTA INFRAFORGE PVT. LTD.

Act as a senior UI/UX designer, senior frontend developer, brand strategist and technical SEO specialist. Build a complete, production-ready, premium corporate website for **Vignaharta Infraforge Pvt. Ltd.**, with dedicated pages for its two associated business enterprises: **D N Enterprise** and **JEEL Enterprise**.

Do not merely create a mockup, wireframe or landing-page concept. Implement the actual working website, including every page, responsive layout, navigation, animations, contact interactions, quote forms, validation, SEO files and deployment documentation.

First inspect the existing workspace, assets, uploaded company profiles and logo. Reuse the existing project structure where appropriate. Do not delete useful existing work without reason.

---

## 1. BUSINESS STRUCTURE AND BRAND POSITIONING

### Main corporate brand

**Vignaharta Infraforge Pvt. Ltd.**

Website domain:  
[https://www.vignahartainfraforgepvtltd.com](https://www.vignahartainfraforgepvtltd.com/)

This is the main corporate website and primary brand. It must feel like an established, trustworthy, premium industrial and infrastructure company.

The homepage should introduce the corporate brand and highlight two distinct associated business enterprises.

### Business 1: D N Enterprise

Positioning: Labour Supply & Manpower Contracting.

The supplied D N Enterprise company profile identifies the following activities and experience:

- Labour contracting and manpower supply.
- Industrial and site-based workforce support.
- Housekeeping.
- Loading, unloading and shifting of materials.
- Industrial cleaning and tank-cleaning-related work.
- Sump and underground tank cleaning.
- Sludge removal and disposal work.
- Site-related industrial support activities.

The profile lists experience involving Jindal Saw Ltd. sites at Pragpar and Samaghogha and mentions clients including SAL Steel, Jindal Saw Ltd., Ashapura Minechem Ltd., Adani Wilmar, Gallant TMT, Essar and Varrsana Ispat Ltd.

The user has clarified that D N Enterprise should be presented on the website primarily for labour supply and manpower services. Do not position every activity listed in the original profile as a current service offering.

Contact information from the supplied profile:

- Email: [d.n.enterprise2710@gmail.com](mailto:d.n.enterprise2710@gmail.com)
- Phone: +91 95379 61079
- Phone: +91 99251 50164
- Location: Mandvi, Kutch, Gujarat, India.

Use these details on the D N Enterprise page and in relevant contact actions.

The supplied profile names Dhanraj Naran Gadhvi as proprietor. Use this name only where appropriate and verified.

### Business 2: JEEL Enterprise

JEEL Enterprise is another distinct associated business that must have its own dedicated service page, accessible from the main homepage.

The supplied GST registration certificate identifies:

- Trade name: JEEL Enterprise.
- Legal name: Gadhvi Virbai Naran.
- Business constitution: Proprietorship.
- Registered location: Mandvi, Kachchh, Gujarat.

IMPORTANT: The supplied JEEL document establishes registration details but does not establish the enterprise's service categories. Do not invent services, projects, customers, experience, awards, certifications or testimonials.

Create an editable JEEL Enterprise page with:

- A premium hero section.
- An introductory company description using only verified information.
- An editable services section with clearly marked placeholders.
- An editable projects or capabilities section.
- A contact and quote enquiry section.
- A prominent call to action.

Keep all JEEL-specific service content in one configuration file so it can be updated easily when the actual business information becomes available.

Do not publicly expose GST registration numbers, personal documents or unnecessary proprietor information by default.

### Legal and corporate presentation

Treat Vignaharta Infraforge Pvt. Ltd. as the parent corporate brand for website navigation and visual hierarchy, as requested by the user.

However, do not claim that D N Enterprise or JEEL Enterprise is a legally incorporated subsidiary owned by Vignaharta unless this relationship has been verified. Use neutral language such as “Associated Enterprises” or “Our Business Network” until the legal relationship is confirmed.

Do not imply that the two proprietorships are legally owned subsidiaries of the private limited company.

---

## 2. TECHNOLOGY REQUIREMENTS

Build the project using:

- HTML5.
- CSS3.
- Vanilla JavaScript.
- Semantic HTML.
- CSS Grid and Flexbox.
- CSS custom properties for design tokens.
- Intersection Observer for scroll-triggered animations.
- SVG or CSS for lightweight decorative effects.

Do not use React, Next.js, Vue, Angular or Shopify.

Avoid unnecessary frameworks and heavy dependencies.

The site must be deployable as a static website using GitHub and Cloudflare Pages.

Use relative paths for internal assets where practical, and ensure the project works from the deployment root.

Do not use a build process unless genuinely required.

Use a lightweight animation approach. Respect `prefers-reduced-motion` and avoid animations that harm performance, readability or accessibility.

---

## 3. PREMIUM VISUAL DESIGN SYSTEM

Create a distinctive industrial-luxury visual identity that complements the supplied Vignaharta logo.

### Colour palette

Use these CSS variables consistently:

```
:root {
  --color-graphite: #17191C;
  --color-graphite-light: #26292D;
  --color-gold: #C6922E;
  --color-gold-light: #E0B65B;
  --color-background: #F5F5F2;
  --color-white: #FFFFFF;
  --color-steel: #68727C;
  --color-text: #202328;
  --color-muted: #777F87;
  --color-border: #E1E3E5;
  --color-success: #287D54;

  --font-heading: "Manrope", sans-serif;
  --font-body: "Inter", sans-serif;

  --container-width: 1240px;
  --section-spacing: clamp(72px, 9vw, 128px);
  --radius-card: 18px;
  --radius-button: 8px;
}
```

### Colour distribution

- Warm white: primary content backgrounds.
- Graphite: header, footer, headings and dark feature sections.
- Gold: buttons, active states, decorative lines and important highlights.
- Steel grey: supporting text, subtle borders and secondary information.

Avoid using gold everywhere. Keep it as a refined accent.

Use the original supplied logo as the brand reference. Do not recreate, distort, recolour or replace the actual logo unless an explicitly approved alternate version is available.

If the supplied logo has a black background or unsuitable dimensions, investigate whether a transparent version is available. Never assume that the black background can be removed without affecting the logo.

### Typography

Use Manrope for headings and Inter for body text, with appropriate system fallbacks.

Use large, well-spaced headings, short paragraphs, readable body text and strong visual hierarchy.

Avoid excessive uppercase text, generic gradients, oversized rounded cards and decorative effects that make the website look like a SaaS template.

---

## 4. COMPLETE WEBSITE PAGES

Build all of the following pages. Each must have its own meaningful content, SEO metadata and working navigation.

### Page 1: Home — `index.html`

Create a premium corporate homepage containing these sections in order.

#### A. Announcement / top contact bar

Display verified corporate contact information if available.

Do not invent the main company's phone number, email or office address. Use editable placeholders in the configuration until supplied.

#### B. Main navigation

Create a responsive navigation bar containing:

- Logo.
- Home.
- About Us.
- Our Businesses.
- Projects & Experience.
- Contact.
- Get a Quote.

The Our Businesses menu should contain:

- D N Enterprise — Manpower & Labour Supply.
- JEEL Enterprise — business description configured from verified information.

Each business item must open its own dedicated HTML page.

Make the navigation sticky after scrolling, with a subtle background or border transition.

On mobile, provide a functional accessible navigation drawer or menu button with correct keyboard and focus behavior.

#### C. Hero section

Use an editorial, premium industrial design.

Suggested headline:

“Building Capability. Powering Industrial Progress.”

Supporting copy:

“Vignaharta Infraforge brings together business capabilities designed to support industrial operations, workforce requirements and project needs.”

Use this only as introductory corporate positioning. Do not invent technical expertise or claim that the company directly provides every service.

Primary CTA: “Discuss Your Project”

Secondary CTA: “Explore Our Businesses”

The primary CTA should open the quote page or scroll to the quote section. The secondary CTA should scroll to the business showcase.

Use a genuine industrial or infrastructure photograph if an appropriate licensed asset is available.

Use a subtle dark overlay, refined typography, a small gold accent line and restrained entrance animation.

Do not create a carousel with unnecessary automatic transitions.

#### D. Corporate introduction

Section heading:

“A Corporate Network Built Around Business Needs”

Describe the main brand and introduce the two associated enterprises without making unsupported ownership claims.

Use three short value statements, such as:

- Business-focused execution.
- Practical industrial support.
- Responsive client coordination.

Treat these as brand messaging, not certified performance claims.

#### E. Our Businesses — the most important section

Create two visually striking, premium business cards.

Card 1:

D N ENTERPRISE

Category: Labour Supply & Manpower Contracting.

Description:  
“Workforce and labour-contracting support for industrial and site-based requirements.”

CTA: “Explore D N Enterprise”

Link: `dn-enterprise.html`

Card 2:

JEEL ENTERPRISE

Category: Business services — details to be confirmed.

Description:  
“Discover the capabilities and services of JEEL Enterprise.”

CTA: “Explore JEEL Enterprise”

Link: `jeel-enterprise.html`

The two cards must be visually distinct but consistent with the parent brand.

Each card should include:

- Large photographic area.
- Dark image overlay.
- Enterprise name.
- Clear category label.
- Short description.
- Animated arrow or line.
- Full-card or button navigation that works with keyboard and touch.

On hover, use a subtle image zoom, border transition and arrow movement. Keep effects restrained.

Each card must open its own full page, not a modal or an unfinished placeholder.

#### F. Capabilities / business strengths

Use three or four evidence-based content blocks.

For D N Enterprise, include manpower supply, labour contracting and relevant industrial support only.

For JEEL Enterprise, do not populate specific service claims until confirmed.

For Vignaharta itself, use neutral corporate capability statements until its own service list is provided.

#### G. Clients and industry experience

Create a premium section titled:

“Experience Across Industrial Environments”

The supplied D N Enterprise profile lists these client names:

- SAL Steel.
- Jindal Saw Ltd.
- Ashapura Minechem Ltd.
- Adani Wilmar.
- Gallant TMT.
- Essar.
- Varrsana Ispat Ltd.
- Nilkanth Company.

The profile also lists Ashapura Minechem locations Baraya and Hamla.

Show the client names in a refined responsive logo grid or monochrome wordmark treatment.

IMPORTANT:

- These names come from the D N Enterprise profile.
- Do not automatically represent them as direct clients of Vignaharta or JEEL.
- Label the section “D N Enterprise — Listed Client Experience” unless the relationship is independently verified.
- Use authentic logos only when legally and technically available.
- Do not invent logos, generate fake brand marks, use unrelated images or distort official logos.
- If authentic assets are unavailable, display clean text wordmarks using the correct company names.
- Make logo assets configurable so authentic approved files can replace text wordmarks later.
- Do not imply endorsement or partnership beyond the evidence provided.

#### H. Projects and experience

Create a responsive project grid with reusable project cards.

Each card can support:

- Project image.
- Project title.
- Business responsible.
- Location.
- Short description.
- Service category.

Populate only verified details from supplied company material. Do not fabricate project dates, contract amounts, project outcomes or performance statistics.

If no verified images or project details are available, create clearly marked editable sample entries for development and keep them unpublished or hidden in production until replaced.

#### I. Why work with us?

Use a clean editorial layout with points such as:

- Clear communication.
- Requirement-focused coordination.
- Practical business support.
- Dedicated enquiry handling.

Do not invent numerical claims, awards, safety records or certifications.

#### J. Testimonials

Create the design and data structure for a testimonials section, but publish only genuine, approved customer feedback.

Do not invent quotations, names, job titles, ratings or review counts.

If verified testimonials have not been provided, hide the testimonial carousel in production and show the client experience section instead.

#### K. Get a Quote CTA

Headline:

“Have a Project or Workforce Requirement?”

Supporting text:

“Share your requirements with us, and we will direct your enquiry to the appropriate business.”

Buttons:

- Request a Quote.
- Contact Us.

Both buttons must work.

#### L. Footer

Include:

- Logo.
- Brief corporate introduction.
- Main navigation.
- Links to D N Enterprise and JEEL Enterprise.
- Contact details.
- Privacy Policy.
- Terms, where appropriate.
- Copyright year generated dynamically with JavaScript.

Do not invent social media URLs or contact details.

---

### Page 2: About — `about.html`

Build a premium About Us page with:

1. Introductory hero.
2. Company overview.
3. Corporate approach and values.
4. Business network introduction.
5. Separate cards for D N Enterprise and JEEL Enterprise.
6. Verified company details, where appropriate.
7. Contact CTA.

Use verified information only.

Do not create fake company history, employee counts, turnover, years of experience or corporate milestones.

If the founding year or parent company's history is unknown, use editable content placeholders and clearly indicate what information is needed.

---

### Page 3: D N Enterprise — `dn-enterprise.html`

This page must focus on manpower supply and labour contracting.

Hero headline:

“Reliable Workforce Support for Industrial Operations.”

Supporting copy:

“D N Enterprise provides labour-supply and manpower-contracting support for industrial and site-based requirements.”

CTA:

- Request Manpower.
- Contact D N Enterprise.

Create the following sections:

1. Hero.
2. About D N Enterprise.
3. Labour supply and contract manpower.
4. Industrial and site-based workforce support.
5. Loading, unloading and shifting support, if applicable to the current service offering.
6. Industrial cleaning and housekeeping capabilities, subject to confirmation of current availability.
7. Listed client experience.
8. Verified project and work examples.
9. Manpower quote form.
10. Contact information and footer.

Use these contact details from the supplied profile:

Email: `d.n.enterprise2710@gmail.com`

Phone: `+91 95379 61079`

Phone: `+91 99251 50164`

Location: `Mandvi, Kutch, Gujarat, India`

Make phone links use the `tel:` scheme and email links use the `mailto:` scheme.

Do not display all contact details only as decorative text. They must be clickable.

If showing the proprietor's name, use “Dhanraj Naran Gadhvi” exactly as supported by the profile.

---

### Page 4: JEEL Enterprise — `jeel-enterprise.html`

Build a dedicated premium business page that follows the same design system.

Include:

1. Hero.
2. Company introduction.
3. Configurable service cards.
4. Capabilities or projects section.
5. Quote form.
6. Contact information.
7. Footer.

The JEEL GST certificate identifies the business as JEEL Enterprise, with legal name Gadhvi Virbai Naran and constitution Proprietorship.

Do not invent the services that JEEL provides.

Create a central configuration object for JEEL, allowing the following fields to be updated easily:

- Business display name.
- Short description.
- Service categories.
- Service descriptions.
- Project entries.
- Business phone.
- Business email.
- Business address.
- Logo and image paths.

Hide empty service cards, empty contact details and unverified claims in production.

Do not display the GSTIN or the full registration certificate on the public website unless specifically approved.

---

### Page 5: Services — `services.html`

Create a service directory that directs customers to the appropriate business.

Organize services by business, not as if every business offers everything.

D N Enterprise:

- Labour Supply.
- Manpower Contracting.
- Industrial Workforce Support.
- Other verified workforce-related services.

JEEL Enterprise:

- Render only configured, confirmed services.

Vignaharta Infraforge:

- Show only parent-company services confirmed by the user.

Each service card must link to the correct business page or quote form with the relevant service preselected.

Do not invent services to fill visual space.

---

### Page 6: Projects & Experience — `projects.html`

Create a responsive portfolio page with:

- Page introduction.
- Business-specific project cards.
- Category filters where sufficient verified project data exists.
- Project images.
- Project details.
- Enquiry CTA.

Project categories should be data-driven.

Do not claim a project was executed by Vignaharta when the source attributes it to D N Enterprise.

Use empty-state handling when no verified projects are available.

---

### Page 7: Get a Quote — `get-a-quote.html`

This is a core business functionality and must be fully implemented.

Create a premium, accessible multi-section form.

Fields:

- Full name.
- Company name.
- Work email.
- Phone number.
- Business or service required.
- Preferred enterprise.
- Project location.
- Expected start date, if applicable.
- Estimated budget, optional.
- Project details.
- Consent to the applicable privacy notice.

The enterprise selector must offer:

- Vignaharta Infraforge Pvt. Ltd.
- D N Enterprise.
- JEEL Enterprise.

When the user selects D N Enterprise or a manpower-related service, reveal additional fields:

- Number of workers required.
- Type of workforce or labour requirement.
- Expected duration.
- Shift or schedule details, if applicable.

For other services, show relevant project-description fields instead.

Use progressive disclosure so the form stays concise.

Implement:

- Required-field validation.
- Email validation.
- Phone input validation appropriate for Indian numbers, without incorrectly rejecting valid international formats.
- Accessible field labels.
- Helpful inline error messages.
- Submission loading state.
- Success and failure states.
- Spam protection.
- Privacy consent.
- Mobile-friendly form layout.

Carry the selected enterprise and service into the form using query parameters or another safe, accessible method.

For example:  
`get-a-quote.html?business=dn-enterprise&service=manpower`

The form must submit to a real configured backend or form service.

Do not pretend a submission succeeded if no service is configured.

Because the site is static, implement a clean provider adapter or configurable endpoint. Use a supported form provider such as FormSubmit or another suitable service after configuration.

Never put secret API keys in frontend JavaScript.

Never store sensitive customer submissions in localStorage.

Do not hardcode an unverified recipient email for the parent company or JEEL Enterprise. Use the verified D N Enterprise email only for D N enquiries until the other recipients are supplied.

Show a setup message or disable submission gracefully if the form backend is not configured.

---

### Page 8: Contact — `contact.html`

Build a dedicated Contact Us page containing:

- Corporate enquiry details.
- Business selector.
- Email links.
- Telephone links.
- Location information where verified.
- Contact enquiry form.
- Google Maps embed or map link only when the correct location is confirmed.
- Clear business-specific contact routing.

Allow users to select which enterprise they want to contact.

The contact form should have:

- Name.
- Email.
- Phone.
- Business selection.
- Subject.
- Message.
- Privacy consent.

Send submissions through the configured backend or form provider.

Do not invent contact information for Vignaharta or JEEL Enterprise.

---

### Page 9: Privacy Policy — `privacy-policy.html`

Create a clear, editable privacy policy explaining what enquiry information is collected, why it is collected, how it is processed and how users can contact the company regarding their information.

Do not invent a privacy officer, legal address or specific compliance certification.

Mark company-specific policy details requiring confirmation.

---

## 5. FILE AND FOLDER STRUCTURE

Create a clean, maintainable project structure similar to:

```
vignaharta-website/
│
├── index.html
├── about.html
├── services.html
├── projects.html
├── dn-enterprise.html
├── jeel-enterprise.html
├── get-a-quote.html
├── contact.html
├── privacy-policy.html
│
├── css/
│   ├── variables.css
│   ├── reset.css
│   ├── typography.css
│   ├── layout.css
│   ├── components.css
│   ├── animations.css
│   ├── responsive.css
│   └── pages/
│       ├── home.css
│       ├── about.css
│       ├── services.css
│       ├── projects.css
│       ├── enterprise.css
│       ├── quote.css
│       └── contact.css
│
├── js/
│   ├── main.js
│   ├── navigation.js
│   ├── animations.js
│   ├── forms.js
│   ├── validation.js
│   ├── quote-routing.js
│   ├── project-filters.js
│   ├── configuration.js
│   └── utilities.js
│
├── data/
│   ├── businesses.js
│   ├── services.js
│   ├── projects.js
│   ├── clients.js
│   └── testimonials.js
│
├── assets/
│   ├── images/
│   │   ├── logo/
│   │   ├── hero/
│   │   ├── infrastructure/
│   │   ├── manpower/
│   │   ├── jeel/
│   │   └── projects/
│   ├── clients/
│   ├── icons/
│   └── fonts/
│
├── robots.txt
├── sitemap.xml
├── 404.html
├── favicon.svg
├── site.webmanifest
├── .gitignore
├── README.md
└── DEPLOYMENT.md
```

Adjust the structure if a simpler approach is better for plain static HTML, but keep the code modular and maintainable.

Do not create empty files just to match the directory structure.

Avoid duplicating large blocks of CSS and JavaScript across pages.

Because this is a static HTML website, use reusable snippets, shared CSS, small rendering helpers where useful and consistent page templates. Do not introduce a complex build system solely to simulate server-side HTML partials.

Keep company-specific data and contact details in a central configuration file.

---

## 6. ANIMATIONS AND INTERACTIONS

The design should feel premium, deliberate and smooth.

Implement the following:

### Navigation

- Sticky header transition.
- Mobile navigation open and close.
- Active navigation state.
- Accessible dropdown or expandable business menu.

### Hero

- Staggered heading and subtitle reveal.
- Subtle image reveal or scale transition.
- Gold accent-line animation.
- CTA entrance animation.

### Scroll animations

- Fade and translate sections into view.
- Stagger cards when appropriate.
- Animate counters only if genuine numerical data is supplied.
- Reveal client wordmarks with restrained transitions.

### Cards

- Subtle image zoom.
- Border and background transitions.
- Arrow or icon movement.
- Clear hover, focus and active states.

### Forms

- Conditional field visibility.
- Inline validation.
- Loading, success and failure states.
- Disable duplicate submission while a request is pending.

### General

- Smooth scrolling with reduced-motion support.
- No excessive parallax.
- No constant animation loops that distract users.
- No fake loading screens.
- No broken interactions or dead buttons.

All animations must be performant on mobile devices and respect accessibility preferences.

---

## 7. CLIENT LOGOS AND TESTIMONIALS

Create a configurable client-logo system.

Each entry should support:

- Company name.
- Logo image path, optional.
- Associated enterprise.
- Alt text.
- Display order.
- Approval status.

Use the names from the D N Enterprise company profile as listed client experience, subject to verification and permission to display their logos.

Where approved authentic logos are unavailable, use typographic wordmarks.

Do not download random logos, create fake logos or imply endorsements.

Create a separate testimonials data structure with:

- Approved quote.
- Customer name.
- Designation.
- Company.
- Associated enterprise.
- Publication permission status.

Render testimonials only when genuine, approved quotes exist.

If the testimonials list is empty, hide the testimonial section and give the client-experience section more visual prominence.

---

## 8. SEO AND GOOGLE INDEXING

Implement technical SEO throughout the site.

Each page must include:

- Unique `<title>`.
- Unique meta description.
- Canonical URL using the verified production domain.
- Responsive viewport.
- Semantic heading hierarchy.
- Image alt attributes.
- Descriptive internal links.
- Open Graph metadata.
- Appropriate social sharing image metadata.
- Descriptive URLs and meaningful page content.

Create:

### `robots.txt`

Allow crawling of public pages and reference the sitemap at the verified production URL.

### `sitemap.xml`

Include only the real, canonical production URLs for the pages intended to be indexed.

Do not include placeholder pages or staging URLs.

### Structured data

Use JSON-LD only when the business information supports it.

Use appropriate Organization or LocalBusiness structured data only for the correct legal entity and verified details.

Do not invent ratings, reviews, coordinates, business hours, founding dates, service areas or social profiles.

Do not combine all enterprises into one legal organization schema if they are separate legal businesses.

Do not publish fake testimonials or aggregate ratings.

Add a README section explaining how to:

1. Verify the domain in Google Search Console.
2. Submit the sitemap.
3. Request indexing.
4. Check indexing and SEO performance.

Never guarantee Google rankings or immediate indexing.

---

## 9. PERFORMANCE, ACCESSIBILITY AND SECURITY

Target excellent real-world performance and a strong Lighthouse result.

Implement:

- Responsive layouts for mobile, tablet, laptop and desktop.
- Optimized, compressed images.
- WebP or AVIF where suitable.
- Lazy loading for below-the-fold images.
- Explicit image dimensions or aspect ratios.
- Minimal JavaScript.
- Deferred non-critical scripts.
- System font fallbacks.
- Accessible colour contrast.
- Keyboard navigation.
- Visible focus states.
- Semantic landmarks.
- Accessible form error messages.
- Correct button and link semantics.
- Reduced-motion support.
- No unnecessary external libraries.
- No exposed credentials or secret API keys.
- Safe handling of query parameters.
- Spam protection for public forms.

Do not lazy-load the main above-the-fold hero image if doing so would delay the primary content.

Do not use fake statistics or add animations that damage Core Web Vitals.

---

## 10. DEPLOYMENT AND MAINTENANCE

Prepare the website for GitHub and Cloudflare Pages.

Include a complete `DEPLOYMENT.md` explaining:

1. How to test the site locally.
2. How to create and connect the GitHub repository.
3. How to deploy to Cloudflare Pages.
4. How to set the correct output directory for a plain HTML site.
5. How to attach the custom domain.
6. How to configure DNS and HTTPS.
7. How to preserve existing email DNS records.
8. How to configure the quote and contact form providers.
9. How to test form delivery.
10. How to connect Google Search Console.
11. How to submit the sitemap.
12. How to update client logos, business content and project images.
13. How to publish updates safely.
14. How to test all pages before launch.

Do not assume that a domain is available or that its DNS settings can be changed without affecting existing services.

Do not claim the website is live unless it has actually been deployed.

---

## 11. CONTENT AND CONFIGURATION RULES

Create a central configuration system for:

- Main company name and logo.
- Production domain.
- Corporate contact details.
- Business descriptions.
- Business contact details.
- Services.
- Client logos.
- Projects.
- Testimonials.
- Form provider configuration.
- SEO defaults.

The site must remain usable when optional data is missing.

If a field is not verified:

- Do not invent a value.
- Use an editable placeholder during development.
- Hide the field in production until completed.
- Explain what information is required in the README.

Do not publish fake customer reviews, invented corporate history, unverified company ownership claims, fake project statistics or unverified certifications.

Use genuine assets supplied by the user wherever possible.

If additional stock imagery is necessary, use properly licensed imagery relevant to industrial infrastructure, construction, workforce operations and manufacturing.

Do not embed entire uploaded GST certificates or private business documents in the public website.

---

## 12. IMPLEMENTATION WORKFLOW

Work through these phases in order.

### Phase 1 — Audit

Inspect:

- Existing source code.
- Uploaded Vignaharta logo.
- D N Enterprise company profile.
- JEEL Enterprise GST registration certificate.
- Existing image assets.
- Available contact information.

Identify missing business information without inventing it.

### Phase 2 — Design system

Build:

- CSS variables.
- Typography.
- Responsive containers.
- Buttons.
- Navigation.
- Cards.
- Forms.
- Footer.
- Animation utilities.

### Phase 3 — Build pages

Implement every required HTML page with complete content, shared visual styles and working internal navigation.

Prioritize the homepage, D N Enterprise page, JEEL Enterprise page, Get a Quote and Contact Us.

### Phase 4 — Functionality

Test:

- All navigation links.
- Business cards.
- Quote routing.
- Conditional fields.
- Form validation.
- Email and phone links.
- Form submission states.
- Mobile menu.
- Project filters.
- Back-to-top control if included.
- Keyboard accessibility.

### Phase 5 — SEO and deployment

Implement:

- Meta tags.
- Canonical URLs.
- Sitemap.
- Robots file.
- Structured data.
- 404 page.
- Deployment instructions.

### Phase 6 — Quality assurance

Test all pages at mobile, tablet and desktop widths.

Check for:

- Broken links.
- Missing images.
- Console errors.
- Incorrect asset paths.
- Layout overflow.
- Poor contrast.
- Missing labels.
- Unverified public content.
- Fake or non-functional form submissions.
- Unintended animations.
- Incorrect business attribution.

Fix issues before declaring the implementation complete.

---

## 13. FINAL ACCEPTANCE CRITERIA

The project is complete only when:

1. Every specified page exists and contains real content.
2. The homepage clearly highlights both D N Enterprise and JEEL Enterprise.
3. Each business card opens the correct independent page.
4. The main corporate brand remains visually dominant.
5. D N Enterprise is primarily positioned as a labour-supply and manpower business.
6. JEEL Enterprise's services remain configurable and unclaimed until verified.
7. Client experience is attributed to the correct enterprise.
8. Testimonials are genuine and approved, or the section is hidden.
9. Quote and contact forms are implemented with a real configurable submission provider.
10. All internal navigation and CTA buttons work.
11. The website is responsive and accessible.
12. SEO metadata, robots.txt and sitemap.xml are correctly prepared.
13. The website is deployable on Cloudflare Pages.
14. A clear deployment and maintenance guide is included.
15. No fake claims, fake testimonials, fake statistics or fabricated contact details are published.

At the end, provide a concise implementation report containing:

- Pages created.
- File structure.
- Main functionality implemented.
- Missing business information requiring confirmation.
- Form provider configuration still required, if any.
- Deployment steps.
- Any issues that remain unresolved.

Begin by inspecting the current workspace and uploaded assets, then implement the complete website. Do not stop after producing a plan or a homepage mockup.