# Sitemap Audit

**Date:** 2026-06-13
**Specialist Agent:** `seo-sitemap`
**Sitemap File Audited:** [sitemap.ts](file:///c:/Users/PC/Desktop/NM-Transport-main/src/app/sitemap.ts)

---

## 1. Sitemap Structure Verification

- **Total Sitemap URLs:** 59
  - Core/Static pages: 3 (Home, Works, Contact)
  - Service pages: 3 (Moving, Pets, Moto)
  - Area pages: 5 (Thonburi, Bangkok-Inner, Perimeter, Chiangmai, Chiangrai)
  - Blog pages: 2 (Ultimate Moving Guide, Packing Fragile Items)
  - Dynamic location pages: 46 active locations
- **Sitemap Location:** Dynamically served at `/sitemap.xml` in production.
- **Protocol:** Enforces HTTPS absolute paths (e.g., `https://www.nm18transport.com/location/ladprao`).

---

## 2. Dynamic Location Filter Gate

- **Indexability Integrity Check:** The sitemap imports the locations dataset and explicitly filters for `status === "active"`.
- **Exclusion of Drafts:** 8 draft locations under `pending_verification` (such as `mueang-pathum-thani`, `khlong-luang`) are excluded.
- **Exclusion of Aliases:** 2 alias locations (`mahachai`, `om-noi`) are excluded.
- **ChangeFrequency:** Programmatic location pages use `weekly` with `priority` of `0.6`, indicating low churn and stable local search indexing.

---

## 3. SEO Compliance Score (100/100)

- **Zero Broken Links:** All URLs are verified active.
- **Self-Referencing Canonicals:** Every URL listed in the sitemap has a self-referencing canonical URL in its metadata.
- **XML Validation:** Dynamic output complies fully with the standard XML Sitemap protocol.
