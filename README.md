# Bridgepoint Property Solutions Website

Static GitHub Pages website for Bridgepoint Property Solutions at `www.arreguinre.com`.

## Files

- `index.html` - home page
- `sell-your-property.html` - seller lead form
- `how-it-works.html` - process overview
- `about.html` - company overview
- `faq.html` - frequently asked questions
- `contact.html` - contact information
- `privacy.html` - privacy policy template
- `terms.html` - terms of use template
- `404.html` - GitHub Pages custom not found page
- `assets/css/styles.css` - site styles
- `assets/js/main.js` - mobile menu and form helper messaging
- `assets/img/bridgepoint-logo-social.png` - logo used for the site header and browser icon
- `assets/img/favicon.svg` - original favicon placeholder
- `CNAME` - GitHub Pages custom domain
- `robots.txt` and `sitemap.xml` - search engine files

## Preview Locally

From this folder, run:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

The seller form page is:

```text
http://localhost:8000/sell-your-property.html
```

## Required Edits Before Launch

1. Replace the Formspree endpoint in `sell-your-property.html`:

```text
https://formspree.io/f/YOUR_FORM_ID
```

with your real Formspree endpoint.

2. Replace the phone placeholder:

```text
(XXX) XXX-XXXX
tel:+10000000000
```

with your business phone number and matching telephone link.

3. Review the privacy policy, terms, disclosures, and consent language with qualified counsel for your specific markets and business requirements.

## Publish With GitHub Pages

1. Put these files in the root of your GitHub repository.
2. Push to the `main` branch.
3. In GitHub, open **Settings > Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select `main` and `/ (root)`.
6. Save.
7. In **Custom domain**, enter `www.arreguinre.com`.
8. Wait for DNS verification and enable **Enforce HTTPS** when available.

## Namecheap DNS

In Namecheap, open **Domain List > arreguinre.com > Manage > Advanced DNS**. Remove conflicting parking, forwarding, or existing `@` and `www` records. Add:

| Type | Host | Value | TTL |
| --- | --- | --- | --- |
| A Record | `@` | `185.199.108.153` | Automatic |
| A Record | `@` | `185.199.109.153` | Automatic |
| A Record | `@` | `185.199.110.153` | Automatic |
| A Record | `@` | `185.199.111.153` | Automatic |
| CNAME Record | `www` | `YOUR-GITHUB-USERNAME.github.io` | Automatic |

Replace `YOUR-GITHUB-USERNAME` with the GitHub account or organization that owns the repository.
