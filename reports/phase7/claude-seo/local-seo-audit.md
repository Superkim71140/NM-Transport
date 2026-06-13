# Local SEO Audit: N&M18 TRANSPORT

**Date:** 2026-06-13
**Specialist Agent:** `seo-local`
**Status:** COMPLETED (Manual execution due to system Python env limitations)

---

## 1. Local SEO Score (82/100)

| Dimension | Weight | Score | Findings |
|---|---|---|---|
| GBP Signals | 25% | 20/25 | Active Facebook and web presence; maps profile exists. |
| Reviews & Reputation | 20% | 15/20 | Positive customer feedback, but blocked hardcoded rating injection. |
| Local On-Page SEO | 20% | 18/20 | Location pages target high-intent search terms. |
| NAP Consistency & Citations | 15% | 12/15 | NAP matches between sitemap, layout, and footer. |
| Local Schema Markup | 10% | 9/10 | Well-formed `MovingCompany` and `Service` schemas. |
| Local Link & Authority Signals | 10% | 8/10 | Good internal linking mesh established in Phase 7. |

---

## 2. Business Type & Industry Vertical

- **Business Type:** SAB (Service Area Business) / Hybrid. No public address is shown in the footer or schema, but a clear service area encompassing Bangkok and 7 perimeter provinces is defined.
- **Industry Vertical:** Home Services / Moving Logistics.
- **NAP Summary:**
  - **Name:** บริษัท เอ็นแอนด์เอ็ม 18 ทรานสปอร์ต จำกัด (N&M18 TRANSPORT)
  - **Phone:** 095-801-0958
  - **Address:** N/A (Service Area Business)

---

## 3. Local Schema Validation

- **Root Schema (`MovingCompany`):** Located globally in `layout.tsx`. Contains telephone, image, priceRange, openingHoursSpecification, and areaServed (Bangkok, Nonthaburi, Pathum Thani, Samut Prakan, Samut Sakhon, Samut Songkhram, Chiang Mai, Chiang Rai).
- **Location Page Schema (`Service`):** Generated dynamically in `page.tsx`. Links correctly to `#organization` publisher and has descriptive `areaServed` and `offers` matching each location.

---

## 4. Top Action Items

1. **Implement GBP Review Sync:** Display real, verified Google Business Profile reviews on the website dynamically using an API rather than static schema values.
2. **Citation Expansion:** Ensure the company is listed with consistent NAP details on local Tier 1 directories (e.g., Thai Find, YellowPages, Facebook).
3. **Hyper-local Content Enhancement:** Add local route tips or distance metrics to the dynamic location route template.
