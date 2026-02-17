# NYC Government Contracts with Google — Research Report
**Date:** February 17, 2026  
**Purpose:** Foundation for campaign to terminate NYC-Google contracts

---

## Executive Summary

New York City government has multiple significant relationships with Google across education, cybersecurity, cloud infrastructure, and general productivity. The largest touchpoints are:

1. **NYC DOE / Google Workspace for Education** — the backbone of the nation's largest school district's digital infrastructure
2. **NYC Cyber Command / Google Cloud Platform** — core cybersecurity data pipeline
3. **OTI (formerly DOITT) / Google Cloud services** — citywide cloud infrastructure
4. **NYC DOE / Chromebook program** — 350,000 devices running ChromeOS/Google ecosystem

Exact dollar values for most contracts are **not publicly disclosed in easily accessible databases**, which is itself a transparency concern worth highlighting in any campaign.

---

## 1. NYC Department of Education — Google Workspace for Education

### Scope
- **Google Workspace for Education** is the standard productivity and collaboration suite for NYC's ~1.1 million public school students and ~150,000+ staff
- Domain: `schools.nyc.gov` (Google Workspace)
- Staff also use `nycboe.net` domain (DOE workspace)
- Core services: Gmail (or DOE email), Google Classroom, Google Drive, Google Docs/Sheets/Slides, Google Meet
- **Google Management Console** is used to configure and manage all student devices
- All DOE Chromebooks are enrolled via Google Management Console with enterprise settings

### Chromebook Program (2025)
- **350,000 new Chromebooks** announced September 2025 by Mayor Adams
- LTE/5G-enabled (via T-Mobile partnership), manufactured by Dell
- ChromeOS devices = locked into Google ecosystem (Google Workspace, Google Management Console, Chrome browser)
- Chromebooks support "Google Workspace, NYC Public Schools-approved apps, and state assessment platforms"
- Target: K-12 students, prioritizing schools with greatest need
- **This creates massive vendor lock-in**: ChromeOS devices cannot run without Google services

### Contract Value
- **Google Workspace for Education** core services are nominally "free" for K-12 districts — Google does not charge per-user licensing fees for the base tier
- However, NYC DOE likely pays for:
  - **Google Workspace for Education Plus** or **Education Standard** (paid tiers with advanced security, analytics, enhanced video) — estimated $3-5/student/year = potentially **$3.3M-$5.5M/year** for 1.1M students if on paid tiers
  - **Chrome Education Upgrade** licenses for managed Chromebooks — ~$30/device lifetime license × 350,000 new devices = **~$10.5M** for the 2025 cohort alone
  - **Google Vault** and compliance add-ons
  - Google Cloud Identity management
- **Total estimated DOE Google spending: $5-20M+ annually** (including device management licenses, paid tier upgrades, and support)

### Procurement Method
- **Not competitively bid in the traditional sense.** Google Workspace for Education is typically procured as a sole-source/proprietary platform because:
  - It's the only platform that manages ChromeOS devices
  - Switching costs are enormous given institutional adoption
  - Likely procured through state-level education technology contracts or direct agreements
- The 350,000 Chromebooks were procured via the T-Mobile wireless carrier agreement (negotiated by OTI/CTO Fraser), bundled with Dell hardware

### Privacy Concerns (Critical for Campaign)
- **Google refuses to sign NYS Ed-Law 2-d data privacy agreements** for "Additional Google Services" (YouTube, Google Search when logged in, etc.)
- As of December 2024, NY school districts were scrambling to disable Additional Google Services for students because Google won't sign DPAs
- This means NYC is entrusting 1.1 million children's educational data to a company that **explicitly refuses to comply with state data privacy law** for portions of its platform
- Google Workspace core services do have a DPA, but the ecosystem bleeds into non-covered services
- Teachers reported being forced to migrate data from local school domains to DOE Google Drive (loss of autonomy)

### Renewal
- Exact renewal dates not publicly available; likely multi-year agreements renewed through DOE procurement office
- ChromeOS device management licenses are perpetual per-device

---

## 2. NYC Cyber Command — Google Cloud Platform

### Scope
- NYC Cyber Command (established 2017 by Mayor de Blasio) built its **entire cybersecurity data pipeline on Google Cloud**
- This is the city's central cyber defense infrastructure covering **100+ city agencies**
- Google Cloud services in use:
  - **BigQuery** — data warehouse for security event analysis (terabytes daily, scaling to petabytes)
  - **Cloud Pub/Sub** — main data ingestion point
  - **Cloud Dataflow** — log parsing and processing
  - **Cloud Functions** — standalone security apps
  - **Compute Engine** — general compute
  - **Kubernetes Engine (GKE)** — high-availability applications
  - **Cloud Storage** — data storage
  - **Cloud IAM** — identity and access management
  - **Cloud Identity-Aware Proxy (IAP)** — BeyondCorp zero-trust security model
  - **Google Workspace** — productivity and collaboration for Cyber Command staff
  - **BeyondCorp** — zero-trust network architecture
  - **Stackdriver/Operations** — logging and monitoring

### Key Facts
- "Cloud-first, zero-trust environment" — Colin Ahern, Deputy CISO
- Processes and analyzes data **10x faster** than previous systems (per Google's case study)
- All 100+ city agencies were being onboarded to this pipeline
- **This is the deepest lock-in**: NYC's entire cybersecurity monitoring infrastructure depends on Google Cloud

### Contract Value
- **Not publicly disclosed.** Google Cloud government contracts of this scale typically range from **$5-50M+ over multi-year terms**
- Given the scope (100+ agencies, petabytes of data, full GCP suite), this is likely one of the larger GCP government deals
- Annual GCP spending for an operation this size: estimated **$10-30M/year** based on comparable government deployments

### Procurement Method
- Likely procured through NYC's cloud procurement framework under OTI/DOITT
- OTI's Cloud Review process (described in June 2024 City Council hearing) governs cloud procurement
- NYC Cyber Command was established by executive order — procurement may have bypassed standard competitive bidding
- Google Cloud for government is typically available through reseller channels or direct enterprise agreements

---

## 3. OTI (Office of Technology & Innovation, formerly DOITT)

### Scope
- OTI oversees all citywide technology strategy, procurement, and operations
- OTI's Cloud Review process evaluates all agency cloud procurements
- OTI provides "in-house solutions" and negotiates citywide vendor agreements for economies of scale
- OTI is explicitly referenced as facilitating Google Translate use across agencies (December 2025 Mayor's directive on language access)
- OTI partnered with technology providers to migrate ~30 applications to the cloud

### Google Cloud Relationship
- OTI's cloud strategy is multi-vendor (AWS, Azure, Google Cloud)
- Google Cloud is one of the authorized cloud platforms
- NYC Cyber Command operates under OTI's umbrella
- OTI negotiated the T-Mobile deal that led to the Chromebook distribution

### Contract Value
- OTI's overall IT budget is in the **hundreds of millions annually**
- Google's share is not broken out publicly
- Citywide cloud spending is distributed across agencies via OTI requirement contracts and task orders

### Procurement
- OTI uses Multiple Master Agreements (MMAs) with task orders for IT procurement
- The Comptroller's office registers contracts; cloud services often flow through existing umbrella agreements
- June 2024 City Council Committee on Technology hearing examined OTI's cloud procurement process

---

## 4. NYS-Level Agreement (Relevant Context)

- **February 2025**: NYS ITS signed a "first-of-its-kind" Enterprise Cloud Services Agreement with Google Public Sector
- 2-year deal giving state employees access to Google Cloud (computing, analytics, networking, AI, storage)
- NYC agencies may be able to leverage this state-level agreement
- This represents Google's expanding footprint in NY government at both state and city level

---

## 5. Other Agency Contracts

### NYPD
- No direct Google contracts found in public records
- NYPD uses its own technology systems (Domain Awareness System built on Microsoft stack)
- However, NYPD data feeds into NYC Cyber Command's Google Cloud pipeline for cybersecurity monitoring
- NYPD may use Google services indirectly through OTI citywide agreements

### FDNY
- No specific Google contracts found
- FDNY uses OTI-provided technology infrastructure
- Likely connected to Google Cloud through Cyber Command's security monitoring

### Other Agencies
- All 100+ city agencies are connected to NYC Cyber Command's Google Cloud infrastructure for cybersecurity
- Various agencies use Google Workspace or Google services through OTI umbrella agreements
- Mayor's December 2025 directive instructs agencies to use Google Translate for language access

---

## 6. Total Dollar Value Estimates

| Category | Estimated Annual Value | Confidence |
|----------|----------------------|------------|
| DOE Google Workspace (paid tiers) | $3-6M/year | Medium |
| DOE Chrome device management licenses | $10-15M (one-time per refresh cycle) | Medium |
| NYC Cyber Command Google Cloud | $10-30M/year | Low-Medium |
| OTI citywide Google Cloud services | $5-15M/year | Low |
| Other agency Google services | $2-5M/year | Low |
| **Total estimated** | **$30-70M/year** | **Low** |

**Caveat:** These are estimates. Exact values require FOIL requests or Checkbook NYC deep dives. The lack of transparency around these figures is itself a campaign point.

---

## 7. Public Reporting, Audits & Criticism

### Privacy Violations / Data Concerns
- **Google refuses to sign NYS Ed-Law 2-d DPAs** for Additional Services used by students — this is a live, documented compliance failure
- 1.1M children's data in Google's ecosystem without full state-law-compliant privacy protections
- NYC teachers forced to migrate personal/professional data into DOE Google accounts (loss of data autonomy)

### Vendor Lock-In
- ChromeOS devices literally cannot function without Google services — this is maximum vendor lock-in
- NYC Cyber Command built entire cybersecurity pipeline on Google Cloud — switching costs would be enormous
- Google Workspace adoption across DOE makes migration to alternatives (Microsoft 365, open-source) extremely costly

### Procurement Transparency
- Google contract values are not easily found in Checkbook NYC or NYC Open Data
- Cloud services often flow through umbrella agreements and task orders that obscure total spend
- No public audits of NYC-Google contracts found in Comptroller's office reports

### No Competitive Bidding Evidence
- No evidence found that NYC competitively bid its core Google relationships
- Google Workspace for Education was likely adopted as a de facto standard
- Google Cloud for Cyber Command appears to have been a strategic/technical choice, not a competitive procurement

### Google's Corporate Conduct (Campaign Ammunition)
- Google's refusal to sign NYS education data privacy agreements
- Google's AI/military contracts (Project Nimbus with Israeli military)
- Google's antitrust violations (DOJ cases)
- Google's data collection practices and advertising business model
- Google's labor practices (contractor treatment, union-busting)

---

## 8. Recommended Next Steps for Campaign

### Immediate Actions
1. **File FOIL requests** with:
   - NYC DOE for all Google contracts, amendments, and spending records
   - OTI for all Google Cloud/Workspace contracts and citywide spending
   - NYC Comptroller for registered Google contracts
   - NYC Cyber Command for GCP contract details
2. **Search Checkbook NYC** interactively (requires browser — the API blocked automated access) for payments to "Google LLC," "Google Cloud," "Google Inc."
3. **Request City Council hearing** on Google contracts through Committee on Technology

### Research to Deepen
- Compare NYC's Google spending to other large districts/cities that use Microsoft or open-source alternatives
- Document migration costs and alternatives (e.g., Microsoft 365 Education, LibreOffice, Nextcloud)
- Research Google's tax payments to NYC vs. revenue extracted from city contracts
- Identify any Google lobbying of NYC officials or campaign contributions

### Key Campaign Messages
1. **NYC is handing 1.1 million children's data to a company that refuses to comply with state privacy law**
2. **The city's entire cybersecurity infrastructure depends on a single corporation with documented antitrust violations**
3. **Total spending is hidden — New Yorkers can't find out how much their city pays Google**
4. **No evidence of competitive bidding — was this the best deal for taxpayers?**
5. **Maximum vendor lock-in — every Chromebook, every agency, is tethered to Google's ecosystem**

---

## Sources

1. NYC.gov — Mayor Adams Chromebook announcement (Sept 2025)
2. Google Cloud — NYC Cyber Command case study
3. GovTech — "Google Public Sector Wins New Cloud Deal With New York" (Feb 2025)
4. NYS ITS — Google Public Sector partnership announcement (Feb 2025)
5. NYC City Council — Committee on Technology hearing (June 10, 2024)
6. Reddit r/k12sysadmin — NYS Google Workspace Ed-Law 2-d compliance issues (Dec 2024)
7. Reddit r/NYCDOETeachers — DOE domain migration to Google (Sept 2023)
8. NYC City Record — DOE IT procurement solicitations
9. NYC Comptroller — Annual Contracts Summary Reports
10. NYC Open Data — Recent Contract Awards dataset
