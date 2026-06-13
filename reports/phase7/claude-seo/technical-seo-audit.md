# Technical SEO Audit

**Date:** 2026-06-13
**Specialist Agent:** `seo-technical`

---

## 1. Crawlability & Indexability Audit

- **Robots.txt Rule Check:** `robots.ts` correctly permits crawler access to all indexable paths (`allow: "/"`) and maps the sitemap to `https://www.nm18transport.com/sitemap.xml`. Disallows `/api/`.
- **Dynamic Route Crawling:** Dynamic paths (`/location/[district]`) are pre-rendered at build time via `generateStaticParams()` to allow instant crawling without client-side rendering requirements.

---

## 2. Meta and Canonical Configurations

- **No Indexing Leakage:** For non-active status pages (`pending_verification` or `alias`), the metadata dynamically outputs `robots: { index: false, follow: true }`. This prevents Google from indexing draft/thin doorway pages or duplicate aliases.
- **Unique Metadata:** Title tags and meta descriptions are uniquely generated per location page using their specific administrative attributes, preventing metadata duplication errors.
- **Canonical URLs:** Statically and dynamically pre-rendered pages define self-referencing canonicals. Alias pages define alternates canonical pointing to their canonical destination (e.g., `/location/mahachai` alternates canonical is `/location/mueang-samut-sakhon`).

---

## 3. SEO Health Metrics

- **Broken Redirect Chains:** None. The dynamic route performs direct Server Redirects for aliases, causing a direct 307/308 redirect rather than multiple redirect hops.
- **H1 Header Count:** Every location page template serves exactly **one** distinct structural H1 tag: `<h1>รถรับจ้างขนของ ${location.thaiName} บริการตลอด 24 ชั่วโมง</h1>`.
- **Image Accessibility:** Visual elements define fallback descriptive `alt` tags.
