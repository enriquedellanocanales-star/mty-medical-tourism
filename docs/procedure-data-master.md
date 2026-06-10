# MTY Medical Tourism — Procedure Data Master
**Created**: June 10, 2026
**Purpose**: Single source of truth for all procedure page content.
**Status**: AUDIT COMPLETE — Data entry pending from providers.
**Maintained by**: AI coordination team + operations.

---

# PART 1 — CONTENT AUDIT FINDINGS

## Data Architecture (Current)

All procedure data lives in a single file:
- **Source**: `src/data/procedures.ts`
- **Template**: `src/pages/ProcedureDetail.tsx`
- **Route**: `/procedure/:slug`

### Fields that currently exist per procedure:
| Field | Type | Notes |
|---|---|---|
| `slug` | string | URL path identifier |
| `procedureKey` | string | Used to pre-select in form |
| `startingPrice` | string | Displayed as "Starting at X" |
| `en.title` | string | Page H1 |
| `en.subtitle` | string | Page subheadline |
| `en.overview` | string | Clinical description paragraph |
| `en.executiveCoordination` | string | Logistics paragraph |
| `en.recoveryOverview` | string | Recovery description paragraph |
| `en.whatsCoordinated[]` | string[5] | Bulleted coordination list |
| `en.faqs[]` | FAQItem[3] | 3 Q&A pairs |
| *(all above repeated for `es`)* | | |

### Fields that DO NOT exist (data gaps):
| Missing Field | Impact |
|---|---|
| Doctor name | Not disclosed on any page |
| Hospital name | Not disclosed on any page |
| Hotel name / property | Generic "San Pedro Garza García" only |
| Medical specialty | Not structured |
| Category | Not structured |
| Pre-op requirements (specific) | Not structured |
| Procedure duration (minutes) | Mentioned in FAQs only for LASIK |
| Hospital stay nights | Mentioned in FAQs/recovery text — unverified |
| Recovery nights (hotel) | Estimated in copy |
| Total recommended stay (nights) | Estimated |
| Post-op follow-up count | Generic "included" only |
| Flying restriction (days post-op) | MISSING for all except Hysterectomy (FAQ only) |
| Patient eligibility criteria | Not structured |
| Contraindications | Not structured |
| Before/After media | Not available |
| Local facility photography | Not available |

---

## PART 2 — UNVERIFIED CONTENT INVENTORY

The following statements appear in current procedure pages and are **NOT verified against operational or clinical data**. They must be reviewed and confirmed before the site is used for medical decision-making.

---

### ALL PROCEDURES — UNVERIFIED GLOBAL STATEMENTS

| Statement | Location | Status |
|---|---|---|
| "Board-certified" specialists | All pages, overview sections | ⚠️ DATA REQUIRED — No doctor named |
| "San Pedro Garza García" hotels | All executiveCoordination sections | ⚠️ DATA REQUIRED — No specific hotel named |
| "Partner corporate suites" | LASIK FAQ answer | ⚠️ DATA REQUIRED — No property named |
| "private bilingual chauffeur in an executive SUV" | All coordination sections | ⚠️ PARTIALLY VERIFIED — Service described, vendor not named |
| "Includes Coordination, Concierge & Hotel" | Hero pricing block (hardcoded in ProcedureDetail.tsx) | ⚠️ DATA REQUIRED — Hotel inclusion not confirmed per procedure |
| Hero images | All procedure pages | ❌ PLACEHOLDER — All 6 are generic Unsplash stock photos |

---

### LASIK — UNVERIFIED STATEMENTS

| Statement | Source | Status |
|---|---|---|
| "Vision improvements typically noticeable within 24 hours" | recoveryOverview | ⚠️ DATA REQUIRED — Needs surgeon confirmation |
| "Most patients return to light activities within 1-2 days" | recoveryOverview | ⚠️ DATA REQUIRED — Needs surgeon confirmation |
| "Laser time is less than 60 seconds per eye" | FAQ answer | ⚠️ Plausible, needs doctor confirmation |
| "Clinical room session ~15–20 minutes" | FAQ answer | ⚠️ DATA REQUIRED |
| "24-hour post-op corneal assessment" | FAQ answer | ⚠️ DATA REQUIRED — Is this included? Who performs it? |
| "Luxury business-suite accommodations in San Pedro" | overview text | ⚠️ DATA REQUIRED — Which hotel? |
| "Advanced blackout curtains and sanitation setups" | FAQ answer | ⚠️ DATA REQUIRED — Which hotel has these? |

---

### LAPAROSCOPIC GALLBLADDER — UNVERIFIED STATEMENTS

| Statement | Source | Status |
|---|---|---|
| "One evening in the clinical facility" (hospital stay) | recoveryOverview | ⚠️ DATA REQUIRED — Needs surgeon confirmation |
| "2-3 additional days before returning to Texas" | recoveryOverview | ⚠️ DATA REQUIRED — Needs surgeon confirmation |
| "Up to 60% less than private out-of-pocket clinics in Texas" | FAQ answer | ⚠️ DATA REQUIRED — No sourced comparison |
| "We provide complete itemized receipts" (HSA) | FAQ answer | ⚠️ OPERATIONAL — Needs confirmation of invoicing process |
| "Dietary coordination requested by the physician" | whatsCoordinated | ⚠️ DATA REQUIRED — What diet? Who coordinates? |

---

### ANTI-REFLUX (NISSEN) — UNVERIFIED STATEMENTS

| Statement | Source | Status |
|---|---|---|
| "4 to 5 day trip" (total stay) | FAQ answer | ⚠️ DATA REQUIRED — Needs surgeon confirmation |
| "1 night in the private hospital room" | FAQ answer | ⚠️ DATA REQUIRED — Needs surgeon confirmation |
| "3 nights of quiet hotel recovery" | FAQ answer | ⚠️ DATA REQUIRED — Needs surgeon confirmation |
| "Liquid-to-soft diet plan during 2 to 3 weeks" | recoveryOverview | ⚠️ DATA REQUIRED — Needs nutritional/surgeon guidance |
| "Instant reflux relief" | FAQ answer | ⚠️ DATA REQUIRED — Clinical outcome claim, needs surgeon sign-off |
| "Phasing out PPI and antacid medications" | FAQ answer | ⚠️ DATA REQUIRED — Medical instruction, needs surgeon sign-off |
| "Esophageal manometry coordination" | whatsCoordinated | ⚠️ DATA REQUIRED — Is this included in the package? |
| "Cardiac clearances" | whatsCoordinated | ⚠️ DATA REQUIRED — Who provides? Included? |

---

### LAPAROSCOPIC HYSTERECTOMY — UNVERIFIED STATEMENTS

| Statement | Source | Status |
|---|---|---|
| "Up walking safely the next day" | recoveryOverview | ⚠️ DATA REQUIRED — Needs gynecologist confirmation |
| "Rest period of 7–14 days" | recoveryOverview | ⚠️ DATA REQUIRED — Wide range, needs surgeon confirmation |
| "4 to 5 days ensuring perfect baseline check-ups" | FAQ answer | ⚠️ DATA REQUIRED — Needs surgeon confirmation |
| "National CSG certifications equivalent to Joint Commission" | FAQ answer | ⚠️ DATA REQUIRED — Which hospital? Which certification? |
| "Customizes approach based on your evaluation" (total vs. partial) | FAQ answer | ✓ Acceptable as general statement |
| "Virtual diagnostic simulations" | whatsCoordinated | ⚠️ DATA REQUIRED — Is this offered? |

---

### RHINOPLASTY — UNVERIFIED STATEMENTS

| Statement | Source | Status |
|---|---|---|
| "Nasal splints maintained for 7 days" | recoveryOverview | ⚠️ DATA REQUIRED — Needs surgeon confirmation |
| "External splints removed around 7 days post-op" | FAQ answer | ⚠️ DATA REQUIRED — Needs surgeon confirmation |
| "~50% of Houston or Dallas fees" | FAQ answer | ⚠️ DATA REQUIRED — No sourced comparison |
| "Internationally certified specialists" | FAQ answer | ⚠️ DATA REQUIRED — Which certification body? |
| "AMCPER certified" (Spanish FAQ) | FAQ answer (ES) | ⚠️ DATA REQUIRED — Confirm specific surgeon's certification |
| "Preoperative facial imaging, virtual diagnostic simulations" | whatsCoordinated | ⚠️ DATA REQUIRED — Is this included in coordination fee? |
| "Safe airway breathing returns steadily" | recoveryOverview | ⚠️ DATA REQUIRED — Too vague, needs clinical guidance |

---

### SMILE MAKEOVER — UNVERIFIED STATEMENTS

| Statement | Source | Status |
|---|---|---|
| "8 high-density premium German zirconia crowns" | overview | ⚠️ DATA REQUIRED — Is the number always 8? |
| "Typically just 2 key visits" | FAQ answer | ⚠️ DATA REQUIRED — Needs dentist confirmation |
| "5–6 total days" | FAQ answer | ⚠️ DATA REQUIRED — Needs dentist confirmation |
| "Structural warranties against damage" | FAQ answer | ⚠️ DATA REQUIRED — Who provides? Duration? Terms? |
| "OSHA-equivalent sanitation protocols" | FAQ answer | ⚠️ DATA REQUIRED — Which clinic? Which standard? |
| "CAD/CAM laboratories" | overview | ⚠️ DATA REQUIRED — In-house or outsourced? |
| "Soreness is highly mild" | recoveryOverview | ⚠️ DATA REQUIRED — Needs dentist clinical description |
| "3–5 days soft meal guidelines" | recoveryOverview | ⚠️ DATA REQUIRED — Needs dentist confirmation |

---

# PART 3 — MASTER TEMPLATE

*Use this template for each procedure. Fill all fields with verified data from providers before publishing.*

---

# [PROCEDURE NAME]

## BASIC INFORMATION

```
Procedure Name:          [DATA REQUIRED]
Category:                [Surgery / Ophthalmology / Dental / Gynecology / Cosmetic]
Medical Specialty:       [DATA REQUIRED]
Slug (URL):              [DATA REQUIRED]
```

## PROVIDER

```
Doctor:                  [DATA REQUIRED]
Doctor Certification:    [DATA REQUIRED — e.g. AMCPER, Board Cert #]
Hospital / Clinic:       [DATA REQUIRED — Full name]
Hospital Address:        [DATA REQUIRED]
Hospital Certification:  [DATA REQUIRED — e.g. CSG, Joint Commission equivalent]
City:                    Monterrey, Nuevo León, Mexico
```

## PRICING

```
Procedure Cost:          [DATA REQUIRED — Base fee]
Hospital/Facility Fees:  [DATA REQUIRED or INCLUDED]
Anesthesia Fees:         [DATA REQUIRED or INCLUDED]
Coordination Fee:        [DATA REQUIRED]
Hotel Included:          [YES / NO / OPTIONAL]
Hotel Nights Included:   [DATA REQUIRED]
Transportation Included: [YES — ground Monterrey only]
Flights Included:        NO — Patient arranges own travel
Starting Price (Display): [DATA REQUIRED — used in site]
```

## PRE-OPERATIVE REQUIREMENTS

```
Medical Records Required:       [YES / NO] — [Specify which]
Imaging Required:               [YES / NO] — [Specify type]
Labs Required:                  [YES / NO] — [Specify panel]
Virtual Consultation Required:  [YES / NO / OPTIONAL]
In-Person Consultation Required:[YES / NO / OPTIONAL]
Minimum Advance Notice:         [DATA REQUIRED — e.g. "2 weeks before procedure"]
Pre-op completed in Monterrey:  [YES / NO — specify if done day-of or day-before]
```

## TIMELINE

```
Minimum Advance Notice (booking):  [DATA REQUIRED]
Arrival Before Procedure:          [DATA REQUIRED — e.g. "Day before" or "Morning of"]
Procedure Duration:                [DATA REQUIRED — minutes/hours]
Anesthesia Type:                   [LOCAL / GENERAL / SEDATION]
Hospital Stay (nights):            [DATA REQUIRED]
Hotel Recovery (nights):           [DATA REQUIRED]
Recommended Total Stay (nights):   [DATA REQUIRED]
Return Travel Day (after surgery):  [DATA REQUIRED]
```

## POST-OPERATIVE RECOVERY

```
When Patient Can Walk:             [DATA REQUIRED]
When Patient Can Return to Work:   [DATA REQUIRED]
When Patient Can Drive:            [DATA REQUIRED]
When Patient Can Fly:              [DATA REQUIRED — days post-op]
Dietary Restrictions:              [DATA REQUIRED — if applicable]
Physical Restrictions:             [DATA REQUIRED]
Medications Post-Op:               [DATA REQUIRED — if applicable]
Follow-Up Visit (Monterrey):       [INCLUDED / NOT INCLUDED — count + timing]
Follow-Up (Remote/Virtual):        [DATA REQUIRED — who provides, how]
Companion Recommendation:          [YES RECOMMENDED / OPTIONAL / NOT REQUIRED]
```

## PATIENT ELIGIBILITY

```
Ideal Candidates:        [DATA REQUIRED — from physician]
Age Range:               [DATA REQUIRED]
BMI Restrictions:        [DATA REQUIRED or N/A]
Contraindications:       [DATA REQUIRED — list medical contraindications]
Pregnancy Restriction:   [YES / NO / N/A]
Prior Surgery Restriction: [DATA REQUIRED or N/A]
```

## FAQ DATA

```
Q1:
Q:  [DATA REQUIRED]
A:  [DATA REQUIRED]

Q2:
Q:  [DATA REQUIRED]
A:  [DATA REQUIRED]

Q3:
Q:  [DATA REQUIRED]
A:  [DATA REQUIRED]

[Add additional Q&A pairs as needed]
```

## MEDIA

```
Hero Image:              [DATA REQUIRED — local file path or photographer credit]
Hero Image Alt Text:     [DATA REQUIRED]
Gallery Images:          [DATA REQUIRED — list paths]
Before/After Available:  [YES / NO — if yes, specify consent status]
Doctor Portrait:         [DATA REQUIRED]
Facility Photography:    [DATA REQUIRED]
```

## NOTES

```
[Operational notes, special instructions, or important caveats from the provider]
```

---

# PART 4 — PROCEDURE INVENTORY

## Current Procedures in Website

### 1. Advanced LASIK Laser Eye Surgery
- **Slug**: `/procedure/lasik-monterrey`
- **Starting Price**: $3,900 USD
- **STATUS**: `[ ] Fully Verified` `[ ] Partially Verified` `[x] Placeholder Content`

| Data Point | Current State |
|---|---|
| Doctor | ❌ Not named |
| Hospital/Clinic | ❌ Not named |
| Hotel | ❌ "San Pedro" only — no property |
| Procedure duration | ⚠️ "~15–20 min" (in FAQ, unverified) |
| Hospital stay | ❌ Not stated |
| Recovery nights | ❌ Not stated (implied 1–2 days) |
| Total stay (nights) | ❌ Not stated |
| Flying restriction | ❌ Not stated |
| Pre-op requirements | ⚠️ "corneal thickness evaluation" (unverified) |
| Hero image | ❌ Generic Unsplash |
| FAQs | ⚠️ 3 generic FAQs |
| **Readiness Score** | **2 / 10** |

---

### 2. Laparoscopic Gallbladder Removal
- **Slug**: `/procedure/gallbladder-surgery-mexico`
- **Starting Price**: $5,900 USD
- **STATUS**: `[ ] Fully Verified` `[ ] Partially Verified` `[x] Placeholder Content`

| Data Point | Current State |
|---|---|
| Doctor | ❌ Not named |
| Hospital | ❌ Not named |
| Hotel | ❌ "San Pedro" only |
| Procedure duration | ❌ Not stated |
| Hospital stay | ⚠️ "one evening" (unverified) |
| Recovery nights (hotel) | ⚠️ "2–3 days" (unverified) |
| Total stay | ⚠️ ~3–4 nights (estimated) |
| Flying restriction | ❌ Not stated |
| Pre-op requirements | ⚠️ "labs + ultrasound" (unverified) |
| Hero image | ❌ Generic Unsplash |
| FAQs | ⚠️ 3 generic FAQs |
| **Readiness Score** | **2.5 / 10** |

---

### 3. Laparoscopic Nissen Anti-Reflux Surgery
- **Slug**: `/procedure/reflux-surgery-monterrey`
- **Starting Price**: $6,900 USD
- **STATUS**: `[ ] Fully Verified` `[ ] Partially Verified` `[x] Placeholder Content`

| Data Point | Current State |
|---|---|
| Doctor | ❌ Not named |
| Hospital | ❌ Not named |
| Hotel | ❌ "San Pedro" only |
| Procedure duration | ❌ Not stated |
| Hospital stay | ⚠️ "1 night" (FAQ, unverified) |
| Recovery nights (hotel) | ⚠️ "3 nights" (FAQ, unverified) |
| Total stay | ⚠️ "4–5 days" (FAQ, unverified) |
| Flying restriction | ❌ Not stated |
| Dietary restriction post-op | ⚠️ "2–3 weeks liquid/soft" (unverified) |
| Esophageal manometry required | ⚠️ Listed in coordination — unverified if included |
| Hero image | ❌ Generic Unsplash |
| FAQs | ⚠️ 3 generic FAQs |
| **Readiness Score** | **2.5 / 10** |

---

### 4. Laparoscopic Hysterectomy
- **Slug**: `/procedure/laparoscopic-hysterectomy`
- **Starting Price**: $6,900 USD
- **STATUS**: `[ ] Fully Verified` `[ ] Partially Verified` `[x] Placeholder Content`

| Data Point | Current State |
|---|---|
| Doctor | ❌ Not named |
| Hospital | ❌ Not named |
| Hotel | ❌ "San Pedro" only |
| Procedure duration | ❌ Not stated |
| Hospital stay | ❌ Not explicitly stated |
| Recovery period | ⚠️ "7–14 days" (wide range, unverified) |
| Total stay | ⚠️ "4–5 days in Monterrey" (FAQ, unverified) |
| Flying restriction | ⚠️ "4–5 days before flying" (FAQ, implied) |
| Total/partial option | ✓ Stated as patient-dependent |
| Hospital certification | ⚠️ "CSG / Joint Commission equivalent" — hospital not named |
| Hero image | ❌ Generic Unsplash |
| FAQs | ⚠️ 3 generic FAQs |
| **Readiness Score** | **2 / 10** |

---

### 5. Bespoke Aesthetic Rhinoplasty
- **Slug**: `/procedure/rhinoplasty-monterrey`
- **Starting Price**: $5,900 USD
- **STATUS**: `[ ] Fully Verified` `[ ] Partially Verified` `[x] Placeholder Content`

| Data Point | Current State |
|---|---|
| Doctor | ❌ Not named |
| Hospital/Clinic | ❌ Not named |
| Hotel | ❌ "San Pedro boutique hotel" — no property |
| Procedure duration | ❌ Not stated |
| Hospital stay | ❌ Not stated |
| Splint removal | ⚠️ "7 days" (FAQ, unverified) |
| Return to work | ⚠️ "within a week" (unverified) |
| Flying restriction | ❌ Not stated |
| Certifications | ⚠️ "AMCPER" cited in Spanish FAQ — no surgeon named |
| Cost comparison claim | ⚠️ "~50% of Houston/Dallas" — no sourced data |
| Hero image | ❌ Generic Unsplash |
| FAQs | ⚠️ 3 generic FAQs |
| **Readiness Score** | **2 / 10** |

---

### 6. Premium Dental Smile Makeover
- **Slug**: `/procedure/smile-makeover-mexico`
- **Starting Price**: $6,900 USD
- **STATUS**: `[ ] Fully Verified` `[ ] Partially Verified` `[x] Placeholder Content`

| Data Point | Current State |
|---|---|
| Doctor/Dentist | ❌ Not named |
| Clinic | ❌ Not named |
| Hotel | ❌ "San Pedro" only |
| Number of crowns | ⚠️ "8 crowns/veneers" stated — is this always 8? |
| Visit count | ⚠️ "2 visits" (FAQ, unverified) |
| Total stay | ⚠️ "5–6 days" (FAQ, unverified) |
| Flying restriction | ❌ Not stated |
| Warranty terms | ⚠️ "Structural warranty" cited — no specific terms |
| CAD/CAM lab | ⚠️ Referenced — in-house or outsourced not clarified |
| Diet restriction post-op | ⚠️ "3–5 days soft foods" (unverified) |
| Hero image | ❌ Generic Unsplash |
| FAQs | ⚠️ 3 generic FAQs |
| **Readiness Score** | **2.5 / 10** |

---

# PART 5 — INFORMATION REQUIRED FROM PROVIDERS

## Checklist: Data Required Before Each Procedure Page Is Production-Ready

This checklist must be completed per procedure, ideally by interviewing the treating physician and the hospital coordinator.

---

### A. CLINICAL & MEDICAL DATA (from treating physician)

```
□ Full name of treating physician
□ Medical specialty and sub-specialty
□ Board certification body and number
□ Hospital / clinic affiliation (full legal name)
□ Hospital certification / accreditation (full name and body)

□ Ideal patient profile (who is a good candidate)
□ Age restrictions (minimum / maximum)
□ BMI restrictions (if applicable)
□ Medical contraindications (list)
□ Prior surgery restrictions (if applicable)
□ Pregnancy restrictions

□ Pre-operative requirements:
   □ Blood panel — which tests specifically
   □ Imaging — which type (ultrasound / CT / MRI / X-ray)
   □ Electrocardiogram — required? Age threshold?
   □ Specialist clearances — which specialists (cardiologist, etc.)
   □ Consultation required before scheduling — yes/no
   □ Can pre-op be done in Texas before travel? Yes/No

□ Procedure details:
   □ Anesthesia type (local / general / sedation)
   □ Average procedure duration (minutes)
   □ Whether outpatient or requires hospital admission

□ Hospital stay:
   □ Standard number of nights in facility
   □ ICU required? (yes / no)
   □ Nursing monitoring post-op — duration

□ Recovery details:
   □ When can patient walk unassisted
   □ When can patient return to light work
   □ When can patient drive
   □ When can patient fly (days post-op)
   □ Dietary restrictions — specifics and duration
   □ Physical activity restrictions — specifics and duration
   □ Medications prescribed post-op

□ Follow-up visits:
   □ How many follow-up visits in Monterrey
   □ Timing of follow-up visits (day 1, day 7, etc.)
   □ Can follow-up be done remotely / virtually
   □ Who provides remote follow-up (same doctor or coordinator)

□ Companion requirements:
   □ Is a travel companion required or strongly recommended
   □ Any clinical reasons a companion must be present
```

---

### B. OPERATIONAL & LOGISTICS DATA (from MTY Medical operations)

```
□ Partner hotel name(s) — full name and star rating
□ Hotel address (San Pedro or Monterrey proper)
□ Hotel room type reserved for patients
□ Hotel breakfast / soft diet coordination — yes/no
□ Hotel blackout curtains / eye care accommodations (LASIK specific)

□ Ground transportation:
   □ Vehicle type and vendor name
   □ From: Monterrey International Airport (MTY) or General Mariano Escobedo (NLU)?
   □ Cross-border vehicle service available? Yes/No

□ Pricing confirmation:
   □ Is hotel included in base package price? For how many nights?
   □ What happens if patient needs extended stay?
   □ Are pre-op labs included in the package or billed separately?
   □ Is post-op follow-up included in the package?
   □ HSA/FSA invoicing — who provides documentation?

□ Booking process:
   □ Minimum advance notice to confirm surgery date
   □ Deposit required — amount and refund policy
   □ Cancellation policy
   □ What happens if surgery is postponed by physician?

□ Communication:
   □ Assigned coordinator contact info
   □ Emergency contact in Monterrey
   □ After-hours availability
```

---

### C. MEDIA & VISUAL ASSETS (from doctor / clinic / photographer)

```
□ Hero image — actual facility or procedure-related photography
□ Doctor portrait photo (professional, high-resolution)
□ Operating room / clinic photography (licensed for commercial use)
□ Hotel room photography (licensed)
□ Before / After patient photos — with signed consent forms
□ All images: rights confirmed for commercial web use
```

---

# PART 6 — READINESS SUMMARY

| Procedure | Readiness Score | Priority for Verification |
|---|---|---|
| Advanced LASIK | 2 / 10 | Medium — Low complexity, fast to verify |
| Gallbladder Removal | 2.5 / 10 | **HIGH** — Most common, highest volume expected |
| Nissen Anti-Reflux | 2.5 / 10 | **HIGH** — Complex post-op, most liability risk if wrong |
| Laparoscopic Hysterectomy | 2 / 10 | **HIGH** — Gynecology, highest sensitivity |
| Rhinoplasty | 2 / 10 | Medium — Cosmetic, lower urgency |
| Smile Makeover | 2.5 / 10 | Medium — Dental, lowest clinical risk |

## Overall Site Content Readiness
- **Procedures with verified clinical data**: 0 / 6
- **Procedures with named provider**: 0 / 6
- **Procedures with named hotel**: 0 / 6
- **Procedures with real photography**: 0 / 6
- **Procedures with confirmed stay duration**: 0 / 6
- **Procedures with confirmed flight restriction**: 0 / 6

---

## Recommended Verification Order

```
1. Gallbladder Removal      — highest expected volume, clearest procedure
2. Nissen Anti-Reflux       — complex timeline, highest liability risk if unverified
3. Laparoscopic Hysterectomy — sensitivity and legal exposure require verified data
4. Advanced LASIK           — fast turnaround, strong demand from Texas patients
5. Rhinoplasty              — cosmetic, moderate urgency
6. Smile Makeover           — dental, lowest clinical liability, verify last
```

---

## Immediate Actions Required (Before Any Traffic Is Driven to Procedure Pages)

```
CRITICAL:
□ Confirm flight restriction timeline with each physician
□ Confirm hospital stay duration with each physician
□ Add disclaimer to all procedure pages: "Recovery timelines are estimates.
  Final post-operative instructions are determined by the treating physician."

HIGH PRIORITY:
□ Name or at minimum describe the partner hotel(s)
□ Replace all Unsplash images with licensed or owned photography
□ Confirm whether pre-op labs are included in the package price

STANDARD:
□ Add doctor credentials (even without full name if anonymity preferred)
□ Confirm procedure duration for all 6 procedures
□ Confirm if virtual consultation is offered and when required
```

---

*End of Document — MTY Medical Tourism Procedure Data Master v1.0*
*Last updated: June 10, 2026*
