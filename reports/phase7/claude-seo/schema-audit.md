# Schema Markup Audit

**Date:** 2026-06-13
**Specialist Agent:** `seo-schema`

---

## 1. Schema Blocks & Formats

The application uses JSON-LD (LD+JSON) exclusively, meeting Google's preferred format recommendation.

1. **Homepage & Global Entity Graph:**
   - Format: JSON-LD, served globally in `layout.tsx`.
   - Primary Entity Types: `MovingCompany` and `WebSite`.
   - Identifiers:
     - Organization: `https://www.nm18transport.com/#organization`
     - Website: `https://www.nm18transport.com/#website`
   - Attributes: Name, telephone, image, priceRange, opening hours, and service areas.

2. **Programmatic Location Pages:**
   - Format: JSON-LD, served dynamically in `/location/[district]/page.tsx`.
   - Entity Type: `Service`.
   - Identifier: `https://www.nm18transport.com/location/${location.slug}#service`.
   - Attributes: Provider (`#organization`), `areaServed` (matched to district Thai name), and `offers` (priceCurrency, price matching dynamic price).

---

## 2. Integrity & Quality Gate Compliance

- **No Workaround Schemas:** The site does not use misleading Product or Review structures to bypass review snippet guidelines.
- **Rating Audit:** Conducted a comprehensive audit of rating parameters. Unverified ratings are blocked. MovingCompany schema remains ratings-free and fully compliant.
- **Entity Linkages:** Service schemas on dynamic pages link back correctly to the global organization graph via `#organization`, creating a clean local entity matrix.
