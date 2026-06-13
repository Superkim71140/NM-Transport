# Programmatic SEO Dataset Audit

**Date:** 2026-06-13
**Specialist Agent:** `seo-programmatic`
**Dataset Audited:** [bangkok-locations.json](file:///c:/Users/PC/Desktop/NM-Transport-main/src/data/bangkok-locations.json)

---

## 1. Dataset Overview

The programmatic location dataset contains a structured list of targeting routes for hyper-local logistics terms.

- **Total Locations:** 56
- **Active Locations:** 46 (statically generated and sitemap-included)
- **Draft Locations:** 8 (statically generated but marked `noindex` and sitemap-excluded)
- **Alias Locations:** 2 (statically generated but redirecting to canonicals and sitemap-excluded)

---

## 2. Validation Findings

- **JSON Validation:** SUCCESS ✅. JSON parses cleanly without syntax errors.
- **Slug Integrity:** SUCCESS ✅. All slugs are lowercase, ASCII-only, and follow kebab-case naming (e.g., `mueang-samut-sakhon`, `sai-noi`).
- **Required Attributes:** SUCCESS ✅. Every object contains mandatory attributes: `slug`, `thaiName`, `englishName`, `zone`, `searchTheme`, `startingPrice`, `status`, and `keywords`.
- **Targeting Collisions:** None detected. No two locations share the same slug.

---

## 3. Keyword and Search Theme Audit

- Keywords are specific and relevant, consisting of high-intent search queries such as `รถรับจ้างย้ายบ้าน ลาดพร้าว`, `ย้ายคอนโด ปากเกร็ด`, and `รถตู้ทึบ บางใหญ่`.
- No keyword stuffing detected; keyword arrays are limited to 3 distinct high-intent phrases per location.
- Search themes (e.g., `รถรับจ้างขนของ มหาชัย`) match the target search intent perfectly.
