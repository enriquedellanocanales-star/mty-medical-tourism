# MTY Medical Tourism — Operational CRM Audit
**Date**: June 10, 2026
**Scope**: Supabase tables `patient_inquiries` and `partners`
**Type**: Read-only audit. No schema modifications included.
**Purpose**: Identify current schema coverage and gaps before building the internal operations CRM.

---

## PART 1 — CURRENT TABLE STRUCTURE

### Table: `patient_inquiries`

*Columns currently written by the application (`src/pages/Home.tsx` Supabase insert):*

| Column | Data Type | Nullable | Default | Workflow Purpose |
|---|---|---|---|---|
| `id` | uuid / bigint | NO | auto-generated | Primary key |
| `created_at` | timestamptz | NO | `now()` | Inquiry timestamp |
| `full_name` | text | NO | — | Patient identity |
| `phone` | text | NO | — | Primary contact |
| `email` | text | NO | — | Secondary contact |
| `texas_location` | text | NO | — | Patient's Texas city/area |
| `procedure` | text | NO | — | Requested procedure (human-readable string) |
| `medical_files` | text | YES | null | Comma-separated list of available records |
| `previous_medical_evaluation` | text | YES | null | "Yes"/"No" — prior physician eval |
| `clinical_notes` | text | YES | null | Free-text symptom or condition notes |
| `passport_status` | text | YES | null | "Yes" / "Currently Renewing" / "No" |
| `timeframe` | text | YES | null | Urgency: "immediate" / "30days" / etc. |
| `decision_stage` | text | YES | null | "Ready to Move Forward" / "Comparing Options" / "Gathering Information Only" |
| `travel_willingness` | text | YES | null | "Yes" / "Maybe" / "Not Sure Yet" |
| `payment_planning` | text | YES | null | "Personal Funds" / "HSA / FSA" / etc. |
| `contact_method` | text | NO | — | Preferred contact: "WhatsApp" / "Email" / "Call" |
| `referral_id` | text | NO | `"direct"` | Partner code (MTY-XXXX) or `"direct"` if none |
| `lead_score` | integer | NO | `0` | Qualification score (max 11 pts, calculated client-side) |

**Lead Score Logic (client-side):**
| Condition | Points |
|---|---|
| `decision_stage` = "Ready to Move Forward" | +3 |
| `passport_status` = "Yes" | +2 |
| `travel_willingness` = "Yes" | +2 |
| `previous_medical_evaluation` = "Yes" | +1 |
| Has clinical records (diagnosis/imaging/labs) | +1 |
| `timeframe` = "immediate" or "30days" | +2 |
| **Maximum possible** | **11** |

---

### Table: `partners`

*Columns currently written by the application (`src/pages/Partners.tsx` Supabase insert):*

| Column | Data Type | Nullable | Default | Workflow Purpose |
|---|---|---|---|---|
| `id` | uuid / bigint | NO | auto-generated | Primary key |
| `created_at` | timestamptz | NO | `now()` | Registration timestamp |
| `partner_code` | text | NO | — | MTY-XXXX unique identifier |
| `full_name` | text | NO | — | Partner identity |
| `email` | text | NO | — | Primary contact |
| `phone` | text | NO | — | Secondary contact |
| `profession` | text | NO | — | Role/industry |
| `city_state` | text | NO | — | Geographic location |
| `network_description` | text | YES | null | Free-text network description |
| `terms_accepted_at` | timestamptz | NO | — | Legal acceptance timestamp |

---

## PART 2 — WORKFLOW ANALYSIS

Evaluation of whether the current schema supports each operational workflow step:

| # | Workflow Step | Supported? | How / Why Not |
|---|---|---|---|
| 1 | Lead intake | ✅ YES | All patient contact and qualification fields present |
| 2 | Lead qualification | ✅ YES | `lead_score` (0–11) + `decision_stage` + `passport_status` + `travel_willingness` |
| 3 | Referral tracking | ⚠️ PARTIAL | `referral_id` string stored — linkable to `partners.partner_code` by string match only; no FK, no join index |
| 4 | Quote generation | ❌ NO | No `quoted_price`, no `package_price`, no quote date |
| 5 | Deposit tracking | ❌ NO | No `deposit_amount`, no `deposit_received_at`, no `deposit_status` |
| 6 | Scheduling | ❌ NO | No `procedure_date`, no `scheduled_at` |
| 7 | Arrival management | ❌ NO | No `arrival_date`, no `airport_pickup_confirmed` |
| 8 | Hotel coordination | ❌ NO | No `hotel_checkin`, no `hotel_checkout` |
| 9 | Procedure coordination | ❌ NO | No `physician_assigned`, no `coordinator_assigned`, no procedure date |
| 10 | Recovery tracking | ❌ NO | No `recovery_start`, no `recovery_end`, no extended stay flag |
| 11 | Return-home confirmation | ❌ NO | No `departure_date`, no `returned_home_at` |
| 12 | Partner commission tracking | ❌ NO | No commission fields in either table |
| 13 | Cancellation handling | ❌ NO | No `status`, no `cancellation_date`, no `cancellation_reason` |
| 14 | Refund handling | ❌ NO | No `refund_amount`, no `refund_date`, no `refund_reason` |
| 15 | Patient lifecycle reporting | ❌ NO | No `status` field — impossible to filter by pipeline stage |

**Summary**: 2 of 15 workflow steps fully supported. 1 partially supported. 12 not supported.

---

## PART 3 — STATUS WORKFLOW REVIEW

### Proposed Operational Status Workflow

```
NEW → CONTACTED → QUALIFIED → QUOTE_SENT → DEPOSIT_PENDING → DEPOSIT_PAID →
SCHEDULED → ARRIVED_MONTERREY → PROCEDURE_COMPLETED → RECOVERY →
RETURNED_HOME → COMMISSION_DUE → COMMISSION_PAID → CLOSED → CANCELLED
```

### Field-by-Field Coverage

| Status | Can Current Schema Support It? | Required Field | Present? |
|---|---|---|---|
| `NEW` | ✅ YES | `created_at` — first record insert | ✅ |
| `CONTACTED` | ❌ NO | `status` field + `contacted_at` | ❌ |
| `QUALIFIED` | ⚠️ PROXY ONLY | `lead_score` can proxy qualification — but no explicit status | ❌ |
| `QUOTE_SENT` | ❌ NO | `status` + `quoted_price` + `quote_sent_at` | ❌ |
| `DEPOSIT_PENDING` | ❌ NO | `status` + `deposit_amount` | ❌ |
| `DEPOSIT_PAID` | ❌ NO | `status` + `deposit_received_at` | ❌ |
| `SCHEDULED` | ❌ NO | `status` + `procedure_date` | ❌ |
| `ARRIVED_MONTERREY` | ❌ NO | `status` + `arrival_date` | ❌ |
| `PROCEDURE_COMPLETED` | ❌ NO | `status` + `procedure_completed_at` | ❌ |
| `RECOVERY` | ❌ NO | `status` + hotel dates | ❌ |
| `RETURNED_HOME` | ❌ NO | `status` + `departure_date` | ❌ |
| `COMMISSION_DUE` | ❌ NO | No commission fields anywhere | ❌ |
| `COMMISSION_PAID` | ❌ NO | No commission fields anywhere | ❌ |
| `CLOSED` | ❌ NO | `status` field | ❌ |
| `CANCELLED` | ❌ NO | `status` + `cancellation_date` + `cancellation_reason` | ❌ |

**Conclusion**: The proposed 15-stage workflow cannot be implemented with the current schema. Only `NEW` is functionally supported. All other transitions require at minimum a `status` column in `patient_inquiries`.

---

## PART 4 — GAP ANALYSIS

### A) Patient Operations — Missing Fields (`patient_inquiries`)

| Missing Field | Type | Required For |
|---|---|---|
| `status` | text | Every pipeline stage — single most critical missing field |
| `procedure_date` | date | Scheduling, calendar view, commission eligibility trigger |
| `arrival_date` | date | Airport pickup, hotel check-in coordination |
| `departure_date` | date | Airport dropoff, return confirmation |
| `hotel_checkin` | date | Antaris Fundidora coordination |
| `hotel_checkout` | date | Antaris Fundidora coordination, extended stay detection |
| `airport_pickup_confirmed` | boolean | Arrival management |
| `airport_dropoff_confirmed` | boolean | Departure management |
| `physician_assigned` | text | Procedure coordination |
| `coordinator_assigned` | text | Patient ownership — who is responsible |
| `internal_notes` | text | Coordinator-to-coordinator handoff notes |

### B) Financial Operations — Missing Fields (`patient_inquiries`)

| Missing Field | Type | Required For |
|---|---|---|
| `package_price` | numeric | Quote confirmation, financial reconciliation |
| `deposit_amount` | numeric | Cancellation policy enforcement, 30% tracking |
| `deposit_received_at` | timestamptz | Grace period calculation (24h), payment timeline |
| `balance_amount` | numeric | 70% balance tracking, 7-day deadline enforcement |
| `balance_received_at` | timestamptz | Commission eligibility trigger, payment confirmation |
| `refund_amount` | numeric | Refund processing, financial reconciliation |
| `refund_date` | date | Refund tracking |
| `refund_reason` | text | Cancellation audit trail |
| `cancellation_date` | date | Policy enforcement, reporting |
| `cancellation_reason` | text | Audit trail, patient re-engagement |

### C) Partner Operations — Missing Fields (`partners`)

| Missing Field | Type | Required For |
|---|---|---|
| `status` | text | Active/Inactive/Suspended partner management |
| `approved_at` | timestamptz | Activation audit trail |
| `total_referrals` | integer | Partner dashboard, commission eligibility check |
| `total_commissions_earned` | numeric | Financial reporting, partner reconciliation |
| `total_commissions_paid` | numeric | Outstanding balance tracking |
| `last_referral_at` | timestamptz | Partner engagement tracking |

---

## PART 5 — RISK ANALYSIS

### Risk 1: LOST COMMISSIONS — CRITICAL
**Problem**: No `status` field and no commission tracking. When a patient completes their procedure and pays in full, there is no automated trigger or field in the database to indicate that a commission is due. The only connection between a patient and a partner is `referral_id` = `partner_code` (string match). Without a `commission_status` or commission record, commissions will be forgotten as volume grows.

**Impact**: Partner payments missed → legal disputes → reputational damage.

**Minimum fix**: Add `commission_status` to `patient_inquiries` (NULL / DUE / PAID) + `commission_paid_at`.

---

### Risk 2: MISSED PATIENT FOLLOW-UPS — HIGH
**Problem**: No `status` column means all patient records look identical in the database. A coordinator cannot query "which patients are at QUOTE_SENT stage with no deposit after 48 hours." There is no way to build a follow-up queue.

**Impact**: Leads go cold. Revenue lost.

**Minimum fix**: Add `status` text column with DEFAULT 'NEW'.

---

### Risk 3: INABILITY TO TRACK CANCELLATIONS — HIGH
**Problem**: No `status` = 'CANCELLED', no `cancellation_date`, no `cancellation_reason`. Under the current schema, a cancelled patient looks identical to an active patient. The 30% deposit is non-refundable after 24 hours — but there is no field to enforce or track this.

**Impact**: Deposit refunded in error. Revenue lost. Policy cannot be audited.

**Minimum fix**: Add `status` (includes CANCELLED) + `cancellation_date`.

---

### Risk 4: INABILITY TO TRACK ARRIVALS — MEDIUM
**Problem**: No `arrival_date`, no `airport_pickup_confirmed`. When a patient arrives in Monterrey, there is no way to mark that event in the database. Coordination depends entirely on WhatsApp messages, which cannot be queried or reported on.

**Impact**: Coordinator no-show at airport. Patient arrives with no ground transport.

**Minimum fix**: Add `arrival_date` + `airport_pickup_confirmed` boolean.

---

### Risk 5: PAYMENT RECONCILIATION IMPOSSIBLE — HIGH
**Problem**: No financial fields. There is no database record of who paid, when, how much, or whether the balance was received 7 days before the procedure. The 7-day balance deadline from the Cancellation Policy cannot be enforced from data alone.

**Impact**: Procedure date released without operator knowing payment was pending. Revenue lost.

**Minimum fix**: Add `deposit_received_at` + `balance_received_at`.

---

### Risk 6: REFERRAL LINKAGE FRAGILE — MEDIUM
**Problem**: `patient_inquiries.referral_id` is stored as a plain string ("MTY-1048" or "direct"). There is no foreign key to `partners.partner_code`. If a partner code is updated or corrected, orphaned referrals cannot be found. Also, there is no index on this field, so at 1,000+ rows, querying "all patients referred by partner X" will require a full table scan.

**Impact**: Commission attribution errors. Slow queries at scale.

**Minimum fix**: Ensure an index on `referral_id`. Consider FK constraint in Phase 2.

---

## PART 6 — FINAL OUTPUT

### 1. CURRENT SCHEMA SCORE

| Table | Score | Reasoning |
|---|---|---|
| `patient_inquiries` | **3 / 10** | Excellent intake and lead qualification. Zero operational tracking (no status, no dates, no financials). Good foundation — needs operational layer. |
| `partners` | **2 / 10** | Registration-only. No activity tracking, no commission fields, no status. |
| **Combined** | **2.5 / 10** | Not production-ready for operations. Ready for intake only. |

---

### 2. MISSING FIELDS LIST

**`patient_inquiries` — 21 missing fields:**
```
status                      — text, DEFAULT 'NEW'
procedure_date              — date, nullable
arrival_date                — date, nullable
departure_date              — date, nullable
hotel_checkin               — date, nullable
hotel_checkout              — date, nullable
airport_pickup_confirmed    — boolean, DEFAULT false
airport_dropoff_confirmed   — boolean, DEFAULT false
physician_assigned          — text, nullable
coordinator_assigned        — text, nullable
internal_notes              — text, nullable
package_price               — numeric, nullable
deposit_amount              — numeric, nullable
deposit_received_at         — timestamptz, nullable
balance_amount              — numeric, nullable
balance_received_at         — timestamptz, nullable
refund_amount               — numeric, nullable
refund_date                 — date, nullable
refund_reason               — text, nullable
cancellation_date           — date, nullable
cancellation_reason         — text, nullable
commission_status           — text, nullable  (NULL / DUE / PAID)
commission_paid_at          — timestamptz, nullable
```

**`partners` — 6 missing fields:**
```
status                      — text, DEFAULT 'ACTIVE'
approved_at                 — timestamptz, nullable
total_referrals             — integer, DEFAULT 0
total_commissions_earned    — numeric, DEFAULT 0
total_commissions_paid      — numeric, DEFAULT 0
last_referral_at            — timestamptz, nullable
```

---

### 3. RECOMMENDED NEW COLUMNS

#### Priority 1 — Add these before the first patient (Phase 1)

```sql
-- patient_inquiries
ALTER TABLE patient_inquiries
  ADD COLUMN status             text        NOT NULL DEFAULT 'NEW',
  ADD COLUMN procedure_date     date        NULL,
  ADD COLUMN coordinator_assigned text      NULL,
  ADD COLUMN internal_notes     text        NULL,
  ADD COLUMN package_price      numeric     NULL,
  ADD COLUMN deposit_amount     numeric     NULL,
  ADD COLUMN deposit_received_at timestamptz NULL,
  ADD COLUMN balance_received_at timestamptz NULL,
  ADD COLUMN cancellation_date  date        NULL,
  ADD COLUMN cancellation_reason text       NULL,
  ADD COLUMN commission_status  text        NULL;

-- partners
ALTER TABLE partners
  ADD COLUMN status             text        NOT NULL DEFAULT 'ACTIVE',
  ADD COLUMN total_referrals    integer     NOT NULL DEFAULT 0,
  ADD COLUMN total_commissions_paid numeric  NOT NULL DEFAULT 0;
```

#### Priority 2 — Add before 10 patients/month (Phase 2)

```sql
-- patient_inquiries
ALTER TABLE patient_inquiries
  ADD COLUMN arrival_date               date        NULL,
  ADD COLUMN departure_date             date        NULL,
  ADD COLUMN hotel_checkin              date        NULL,
  ADD COLUMN hotel_checkout             date        NULL,
  ADD COLUMN airport_pickup_confirmed   boolean     NOT NULL DEFAULT false,
  ADD COLUMN airport_dropoff_confirmed  boolean     NOT NULL DEFAULT false,
  ADD COLUMN physician_assigned         text        NULL,
  ADD COLUMN balance_amount             numeric     NULL,
  ADD COLUMN refund_amount              numeric     NULL,
  ADD COLUMN refund_date                date        NULL,
  ADD COLUMN refund_reason              text        NULL,
  ADD COLUMN commission_paid_at         timestamptz NULL;

-- partners
ALTER TABLE partners
  ADD COLUMN total_commissions_earned   numeric     NOT NULL DEFAULT 0,
  ADD COLUMN last_referral_at           timestamptz NULL,
  ADD COLUMN approved_at                timestamptz NULL;
```

---

### 4. RECOMMENDED NEW TABLES (only if absolutely necessary)

#### `commissions` table — Recommended at Phase 2

**Why**: A partner can earn multiple commissions over time. Tracking aggregate totals on the `partners` row (running totals) works for Phase 1 but breaks at scale because you cannot audit individual commission events, dispute specific payments, or produce a payment history.

**Minimum viable `commissions` table:**

| Column | Type | Purpose |
|---|---|---|
| `id` | uuid | Primary key |
| `created_at` | timestamptz | Record creation |
| `partner_code` | text | FK → `partners.partner_code` |
| `patient_inquiry_id` | bigint/uuid | FK → `patient_inquiries.id` |
| `amount` | numeric | Commission amount (default $200) |
| `status` | text | PENDING / DUE / PAID |
| `eligible_at` | timestamptz | When eligibility conditions were met (balance paid + procedure completed) |
| `paid_at` | timestamptz | When payment was issued |
| `payment_method` | text | Wise / Other |
| `notes` | text | Internal notes |

**When to create**: Before 10 patients/month or the first commission payment is due — whichever comes first.

---

### 5. PHASED IMPLEMENTATION PLAN

---

#### PHASE 1 — Required Before First Patient
*Goal: Never lose a patient or a commission.*

| Action | Table | Fields |
|---|---|---|
| Add `status` field | `patient_inquiries` | `status` text DEFAULT 'NEW' |
| Add `procedure_date` | `patient_inquiries` | `procedure_date` date |
| Add `coordinator_assigned` | `patient_inquiries` | `coordinator_assigned` text |
| Add financial basics | `patient_inquiries` | `package_price`, `deposit_amount`, `deposit_received_at`, `balance_received_at` |
| Add cancellation fields | `patient_inquiries` | `cancellation_date`, `cancellation_reason` |
| Add commission flag | `patient_inquiries` | `commission_status` text (NULL / DUE / PAID) |
| Add partner status | `partners` | `status` text DEFAULT 'ACTIVE' |
| Add referral counter | `partners` | `total_referrals` int DEFAULT 0 |

**After Phase 1 you can:**
- Filter patients by pipeline stage
- Know who paid their deposit and when
- Mark when a commission is due
- Prevent booking a date without confirmed payment
- Report cancelled patients separately

---

#### PHASE 2 — Required Before 10 Patients/Month
*Goal: Full logistical coordination from one database view.*

| Action | Table | Fields |
|---|---|---|
| Add arrival/departure | `patient_inquiries` | `arrival_date`, `departure_date` |
| Add hotel dates | `patient_inquiries` | `hotel_checkin`, `hotel_checkout` |
| Add airport confirmations | `patient_inquiries` | `airport_pickup_confirmed`, `airport_dropoff_confirmed` |
| Add refund fields | `patient_inquiries` | `refund_amount`, `refund_date`, `refund_reason` |
| Add balance tracking | `patient_inquiries` | `balance_amount` |
| Add physician field | `patient_inquiries` | `physician_assigned` |
| Add commission paid date | `patient_inquiries` | `commission_paid_at` |
| Add partner totals | `partners` | `total_commissions_earned`, `total_commissions_paid` |
| **Create `commissions` table** | new | Full per-payment audit trail |

**After Phase 2 you can:**
- Coordinate airport pickup/dropoff from a database view
- Track hotel check-in and check-out dates
- Issue refunds with a full audit trail
- Audit individual commission payments per partner
- Build a basic operations dashboard

---

#### PHASE 3 — Required Before 50 Patients/Month
*Goal: Reporting, automation triggers, multi-coordinator management.*

| Action | Rationale |
|---|---|
| Add `procedure_completed_at` to `patient_inquiries` | Precise commission eligibility timestamp |
| Add `returned_home_confirmed_at` to `patient_inquiries` | Lifecycle close trigger |
| Add index on `referral_id` | Query performance at scale |
| Add index on `status` | Dashboard filtering performance |
| Add index on `procedure_date` | Calendar view performance |
| Add `approved_by` to `partners` | Multi-coordinator approval audit trail |
| Consider Supabase Row Level Security (RLS) review | Prevent coordinators from seeing each other's data if needed |
| Consider `coordinator_assignments` table | Multiple coordinators per patient case |

---

## APPENDIX — STATUS VALUE REFERENCE

### Recommended `status` values for `patient_inquiries`

```
NEW               → Inquiry received, not yet contacted
CONTACTED         → First outreach made
QUALIFIED         → Pre-qualified, quote requested or in preparation
QUOTE_SENT        → Package pricing shared with patient
DEPOSIT_PENDING   → Quote accepted, awaiting deposit
DEPOSIT_PAID      → 30% deposit confirmed
SCHEDULED         → Procedure date confirmed
ARRIVED_MONTERREY → Patient arrived in Monterrey
PROCEDURE_COMPLETED → Procedure performed
RECOVERY          → Patient in hotel recovery
RETURNED_HOME     → Patient returned to Texas
CLOSED            → Case fully complete, all payments settled
CANCELLED         → Patient cancelled (see cancellation_reason)
```

### Recommended `status` values for `partners`

```
ACTIVE            → Partner can refer patients
INACTIVE          → No activity, not suspended
SUSPENDED         → Temporarily restricted
TERMINATED        → Permanently removed
```

### Recommended `commission_status` values in `patient_inquiries`

```
NULL              → No referral partner (direct patient)
PENDING           → Partner exists but eligibility not met
DUE               → Balance paid + procedure complete — commission owed
PAID              → Commission issued to partner
```

---

*End of Document — CRM Audit v1.0*
*Date: June 10, 2026*
*No tables modified. No SQL executed. Audit only.*
