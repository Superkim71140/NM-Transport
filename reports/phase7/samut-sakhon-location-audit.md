# Samut Sakhon Location Audit

**Date:** 2026-06-13
**Dataset Path:** [bangkok-locations.json](file:///c:/Users/PC/Desktop/NM-Transport-main/src/data/bangkok-locations.json)

---

## 1. Executive Summary

This report documents the design decisions, administrative naming, and duplicate-intent cannibalization gates for the newly added Samut Sakhon logistics nodes and aliases.

---

## 2. Geopolitical and Administrative Modeling

To prevent duplicate-intent cannibalization, we mapped localities to their parent administrative districts while maintaining user search intent:

| Search Locality | Administrative District (Amphoe) | Strategy | Destination Route / Target | Status |
|---|---|---|---|---|
| **มหาชัย (Mahachai)** | เมืองสมุทรสาคร (Mueang Samut Sakhon) | Alias Redirection | `/location/mueang-samut-sakhon` | Redirect |
| **เมืองสมุทรสาคร** | เมืองสมุทรสาคร (Mueang Samut Sakhon) | Canonical Target | `/location/mueang-samut-sakhon` | Active |
| **กระทุ่มแบน** | กระทุ่มแบน (Krathum Baen) | Canonical Target | `/location/krathum-baen` | Active |
| **อ้อมน้อย (Om Noi)** | กระทุ่มแบน (Krathum Baen) | Alias Redirection | `/location/krathum-baen` | Redirect |
| **บ้านแพ้ว (Ban Phaeo)** | บ้านแพ้ว (Ban Phaeo) | Canonical Target | `/location/ban-phaeo` | Active |

---

## 3. Alias and Cannibalization Gate Rationale

- **Mahachai vs. Mueang Samut Sakhon:** Mahachai is the historic downtown area of Samut Sakhon and carries very high search volume for logistics and moving services. However, it lies entirely within the Mueang Samut Sakhon district. Creating two distinct programmatic pages would lead to near-identical keyword and geographical overlap, causing search engine index cannibalization. Thus, we route both queries to the parent district canonical target, with the Mahachai URL dynamically redirecting to the canonical page.
- **Om Noi vs. Krathum Baen:** Om Noi is a major industrial/residential town located inside Krathum Baen district. Like Mahachai, separate indexable doorway pages would look like spam thin-content. Therefore, `/location/om-noi` redirects to `/location/krathum-baen`, ensuring a single high-quality canonical page.
- **Ban Phaeo:** Modeled as a separate active district route, as it covers the rural/agricultural logistics zone of Samut Sakhon and has a distinct search geographic intent.

---

## 4. Administrative Attribute Schema

All new nodes follow the unified dataset schema shape perfectly:
- `zone`: `"ปริมณฑล (สมุทรสาคร)"`
- `startingPrice`: `1000`
- `status`: `"active"` (for canonical targets) or `"alias"` (for redirected paths)
- Keywords are carefully limited to high-intent natural Thai phrases to avoid keyword-stuffing patterns.
