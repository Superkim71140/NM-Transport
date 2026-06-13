# SERP Review-Snippet Compliance Audit

**Date:** 2026-06-13
**Domain:** https://www.nm18transport.com
**Entity Type:** `MovingCompany` (LocalBusiness)
**Status:** BLOCKED / DEFERRED

---

## 1. Executive Summary

A request was made to inject review-snippet structured-data into the homepage global entity graph (`MovingCompany` node inside [layout.tsx](file:///c:/Users/PC/Desktop/NM-Transport-main/src/app/layout.tsx)), specifically:
- `ratingValue`: "4.9"
- `reviewCount`: "158"

This compliance audit evaluates this request against Google Search Essentials, Schema.org specifications, and Google's Merchant & Rich Result Policies.

**Final Decision:** The injection of `aggregateRating` has been **BLOCKED** and **DEFERRED** to protect the site from potential manual actions and search engine penalties.

---

## 2. Policy Violations & Risks

### A. Lack of Verified Data Source (Google Quality Guidelines)
An exhaustive search across the repository was conducted for references to review data:
- No JSON databases, exports, or databases of reviews were found.
- No third-party API keys or widgets (e.g., Google Business Profile, Facebook, Trustpilot) were found.
- The values "4.9" and "158" do not exist in the source code.

> [!CAUTION]
> Injecting hardcoded, unverified rating values in Schema.org JSON-LD constitutes misleading structured data under Google Quality Guidelines, which can lead to a complete loss of structured data rich results.

### B. Self-Serving Reviews Policy (Google Rich Result Policies)
Under Google’s official guidelines updated in September 2019, Google **will not show review snippets for LocalBusiness or Organization types** if the reviews are self-serving. 
- A review is self-serving if it is about the business itself and is hosted on the business’s own website (either directly or via an embedded widget).
- Google's algorithms will ignore `aggregateRating` markup on these schemas entirely, meaning the requested "orange stars" would not render.
- Chasing orange stars using non-compliant methods (e.g., nesting LocalBusiness inside a Product or Service schema as a workaround) violates Google's guidelines and triggers validation errors or manual action warnings in Search Console.

---

## 3. Recommended Actions & Compliant Alternatives

If the business wishes to display customer satisfaction and reviews in search results:

1. **Leverage Third-Party Platforms:** Focus on collecting reviews on Google Business Profile, Facebook, or other directories. Google automatically compiles and displays reviews from these sources in the Local Knowledge Panel.
2. **Implement Local Services Ads (LSA):** If the company utilizes Google Ads, review stars are pulled directly from Google Business Profile reviews.
3. **Verified First-Party Review Widget:** If reviews are collected on-page, they must be displayed visibly to the user, with a clear list of individual reviews containing author names, ratings, and date stamps. This must be backed by a database and structured with individual `Review` elements, rather than a single hardcoded aggregate block.
