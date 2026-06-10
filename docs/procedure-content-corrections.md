# MTY Medical Tourism — Procedure Content Corrections Log
**Date**: June 10, 2026
**Status**: Phase 1 corrections applied. Physician-dependent data pending.
**Files modified**: `src/data/procedures.ts`, `src/pages/ProcedureDetail.tsx`
**Build**: ✅ 0 errors, 0 linter errors

---

## CONFIRMED OPERATIONAL DATA APPLIED

The following provider data was confirmed and applied across all procedure pages:

| Element | Confirmed Value | Applied |
|---|---|---|
| Hospital | Hospital ION | ✅ All 6 procedures |
| Recovery Hotel | Antaris Fundidora | ✅ All 6 procedures |
| Ground Transport | MTY Medical Tourism coordinated transportation | ✅ All 6 procedures |
| Bilingual coordination | Included | ✅ All 6 procedures |

---

## GLOBAL CHANGES APPLIED (all procedures)

### `src/pages/ProcedureDetail.tsx`

| Change | Old Value | New Value |
|---|---|---|
| Corridor Travel Assets — hotel name | "Located inside secure San Pedro municipality" | "Antaris Fundidora, Monterrey" |
| Corridor Travel Assets — hotel label | "Luxury recovery suite room" | "Antaris Fundidora" |
| Hero images | 6 Unsplash stock URLs | Local paths: `/assets/images/procedures/hero-[name].jpg` |
| New section added | — | "Package Includes / Does Not Include" (dark bg, between Coordination and Recovery) |
| Recovery disclaimer added | — | "Additional recovery nights may be added if medically necessary. Extra nights are not included in the package price and will be billed separately." |

### Package Includes section (new — all procedures):

**Package Includes:**
- Surgical procedure
- Physician fees
- Hospital ION facility fees
- Transportation coordination in Monterrey
- Hotel accommodation at Antaris Fundidora
- Post-operative follow-up
- Bilingual medical tourism coordination

**Package Does Not Include:**
- Airfare — patient arranges own travel
- Companion travel expenses
- Personal purchases
- Additional nights beyond the included package
- Additional services not originally planned

---

## PROCEDURE-BY-PROCEDURE CORRECTIONS

---

### 1. Advanced LASIK — `/procedure/lasik-monterrey`

#### Issues Found
| # | Issue | Type |
|---|---|---|
| 1 | "San Pedro Garza García" in executiveCoordination (EN + ES) | ❌ Removed placeholder |
| 2 | "Partner corporate suites in San Pedro" in FAQ answer | ❌ Removed placeholder |
| 3 | "within 1-2 days" recovery range in recoveryOverview | ❌ Removed range |
| 4 | "Luxury business-suite accommodations with clinical-grade room options" in whatsCoordinated | ❌ Removed generic |
| 5 | Hero image: Unsplash stock URL | ❌ Replaced with local path |

#### Corrections Applied
| Field | Old | New |
|---|---|---|
| `executiveCoordination` (EN) | "...accommodations in San Pedro Garza García are pre-reserved." | "...accommodation at Antaris Fundidora is pre-coordinated." |
| `executiveCoordination` (ES) | "...en San Pedro Garza García pre-reservado." | "...Antaris Fundidora pre-coordinado." |
| `recoveryOverview` (EN) | "...within 1-2 days..." | Removed range; added "Recovery duration will be confirmed by the treating physician." |
| `recoveryOverview` (ES) | "...en 1-2 días..." | Removed range; added physician confirmation note. |
| `whatsCoordinated[4]` (EN) | "Luxury business-suite accommodations with clinical-grade room options" | "Recovery accommodation at Antaris Fundidora, pre-coordinated for post-operative care" |
| `whatsCoordinated[4]` (ES) | "Hospedaje de negocio premium en suites adaptadas para el descanso postoperatorio" | "Alojamiento en Antaris Fundidora, pre-coordinado para el descanso postoperatorio" |
| `faqs[1]` answer (EN) | "...partner corporate suites in San Pedro are configured with advanced blackout curtains..." | "...Antaris Fundidora provides a comfortable environment configured to support optimal post-operative rest." |
| `faqs[1]` answer (ES) | "...suites corporativas de nuestros hoteles aliados cuentan con cortinas blackout..." | "...Antaris Fundidora cuenta con un entorno confortable diseñado para el reposo postoperatorio óptimo." |
| Hero image | `https://images.unsplash.com/photo-1579684389782...` | `/assets/images/procedures/hero-lasik.jpg` |

#### Remaining TODO Items
```
□ Confirm exact recovery nights with treating ophthalmologist
□ Confirm specific amenities for post-LASIK recovery with Antaris Fundidora
□ Confirm procedure duration (15–20 min claim)
□ Add image: /public/assets/images/procedures/hero-lasik.jpg
```

---

### 2. Laparoscopic Gallbladder — `/procedure/gallbladder-surgery-mexico`

#### Issues Found
| # | Issue | Type |
|---|---|---|
| 1 | "San Pedro Garza García" in executiveCoordination (EN + ES) | ❌ Removed placeholder |
| 2 | "2-3 additional days" hotel recovery range | ❌ Removed range |
| 3 | "luxury hotel recovery room" in whatsCoordinated | ❌ Removed generic |
| 4 | "up to 60% less than private clinics in Texas" — unverified comparison | ⚠️ Softened; TODO added |
| 5 | Hero image: Unsplash stock URL | ❌ Replaced with local path |

#### Corrections Applied
| Field | Old | New |
|---|---|---|
| `executiveCoordination` (EN) | "...accommodations in the elite zone of San Pedro Garza García." | "...recovery accommodation at Antaris Fundidora." |
| `executiveCoordination` (ES) | "...estancia en suite ejecutiva en San Pedro Garza García." | "...estancia en Antaris Fundidora." |
| `recoveryOverview` (EN) | "...2-3 additional days before returning to Texas." | "...transition to Antaris Fundidora for post-operative recovery. Total recovery duration will be confirmed by the treating physician." |
| `recoveryOverview` (ES) | "...2-3 días de descanso en hotel corporativo..." | "...seguida de descanso en Antaris Fundidora. La duración total será confirmada por el médico tratante." |
| `whatsCoordinated[1]` (EN) | "...hospital suite runtime..." | "...Hospital ION suite runtime..." |
| `whatsCoordinated[4]` (EN) | "Vetted luxury business hotel stay with dietary coordination requested by the physician" | "Recovery accommodation at Antaris Fundidora with post-operative dietary coordination per physician instructions" |
| `faqs[0]` answer (EN) | "...pay up to 60% less than private out-of-pocket clinics in Texas..." | Softened: "access certified surgical care at a significant cost advantage..." |
| Hero image | `https://images.unsplash.com/photo-1581594693702...` | `/assets/images/procedures/hero-gallbladder.jpg` |

#### Remaining TODO Items
```
□ Confirm hospital stay nights at Hospital ION with treating surgeon
□ Confirm hotel recovery nights at Antaris Fundidora with treating surgeon
□ Verify cost comparison claim against current Texas market rates
□ Add image: /public/assets/images/procedures/hero-gallbladder.jpg
```

---

### 3. Laparoscopic Nissen Anti-Reflux — `/procedure/reflux-surgery-monterrey`

#### Issues Found
| # | Issue | Type |
|---|---|---|
| 1 | "San Pedro Garza García" in executiveCoordination (EN + ES) | ❌ Removed placeholder |
| 2 | "2 to 3 weeks" liquid diet range | ❌ Removed range; deferred to physician |
| 3 | "4 to 5 day trip" range in FAQ | ⚠️ Removed range; kept specific night counts |
| 4 | "Luxury hotel rooms" in whatsCoordinated | ❌ Replaced with Antaris Fundidora |
| 5 | "Instant reflux relief" — clinical outcome claim | ⚠️ Softened; TODO added |
| 6 | Hero image: Unsplash stock URL | ❌ Replaced with local path |

#### Corrections Applied
| Field | Old | New |
|---|---|---|
| `executiveCoordination` (EN) | "...recovery stays in San Pedro Garza García." | "...recovery accommodation at Antaris Fundidora." |
| `executiveCoordination` (ES) | "...alojamiento ejecutivo de negocios en San Pedro Garza García." | "...alojamiento en Antaris Fundidora." |
| `recoveryOverview` (EN) | "...liquid-to-soft diet plan during 2 to 3 weeks." | "...medically prescribed liquid-to-soft diet transition...Timeline and dietary plan are provided by the treating physician." |
| `recoveryOverview` (ES) | "...dieta estricta de líquidos a papillas...durante 2 a 3 semanas..." | "...dieta progresiva...El plan dietético y su duración son indicados por el médico tratante." |
| `faqs[1]` answer (EN) | "We recommend a 4 to 5 day trip...1 night in the private hospital room, and 3 nights of quiet hotel recovery." | "...1 night at Hospital ION, and 3 recovery nights at Antaris Fundidora. Total duration will be confirmed at booking." |
| `faqs[1]` answer (ES) | "...1 noche de hospitalización y 3 noches de reposo en hotel corporativo." | "...1 noche en Hospital ION y 3 noches de recuperación en Antaris Fundidora." |
| `faqs[2]` answer (EN) | "most patients enjoy instant reflux relief..." | "most patients experience significant reflux relief following surgery..." |
| `whatsCoordinated[2]` (EN) | "...surgical facility runtime..." | "...Hospital ION surgical facility runtime..." |
| `whatsCoordinated[4]` (EN) | "Luxury hotel rooms suited for soft postoperative diet requirements" | "Antaris Fundidora accommodation, pre-coordinated for soft-diet post-operative recovery" |
| Hero image | `https://images.unsplash.com/photo-1551076805...` | `/assets/images/procedures/hero-reflux.jpg` |

#### Remaining TODO Items
```
□ Confirm dietary restriction duration (liquid/soft diet weeks) with treating surgeon
□ Confirm 1 hospital night + 3 hotel nights as standard package (per physician)
□ Confirm PPI/antacid discontinuation timeline with treating surgeon
□ Confirm if esophageal manometry is included in coordination fee
□ Add image: /public/assets/images/procedures/hero-reflux.jpg
```

---

### 4. Laparoscopic Hysterectomy — `/procedure/laparoscopic-hysterectomy`

#### Issues Found
| # | Issue | Type |
|---|---|---|
| 1 | "San Pedro Garza García" in executiveCoordination (EN + ES) | ❌ Removed placeholder |
| 2 | "7-14 days at a controlled pace" recovery range | ❌ Removed range |
| 3 | "4 to 5 days" range in FAQ | ⚠️ Removed range; deferred to physician |
| 4 | "CSG certifications equivalent to Joint Commission" — hospital not named | ⚠️ Updated to reference Hospital ION; certification body TODO |
| 5 | "Premium corporate recovery accommodations" generic | ❌ Replaced with Antaris Fundidora |
| 6 | Hero image: Unsplash stock URL | ❌ Replaced with local path |

#### Corrections Applied
| Field | Old | New |
|---|---|---|
| `executiveCoordination` (EN) | "...lodging in the most prestigious residential hotels in San Pedro Garza García." | "...recovery accommodation at Antaris Fundidora." |
| `executiveCoordination` (ES) | "...estancia en suite corporativa premium en San Pedro." | "...estancia en Antaris Fundidora." |
| `recoveryOverview` (EN) | "A rest period of 7-14 days at a controlled pace is typically recommended..." | "A rest period at Antaris Fundidora is coordinated following discharge from Hospital ION. Recovery duration will be confirmed by the treating physician." |
| `recoveryOverview` (ES) | "Se prescribe reposo moderado de 7 a 14 días..." | "Se prescribe un período de reposo en Antaris Fundidora tras el egreso de Hospital ION..." |
| `faqs[1]` answer (EN) | "Our partner hospitals in Monterrey carry national CSG certifications equivalent to Joint Commission..." | "Hospital ION maintains national certifications and quality standards equivalent to international accreditation benchmarks..." |
| `faqs[2]` answer (EN) | "We ensure you remain in Monterrey for 4 to 5 days..." | "We coordinate your stay for the physician-approved recovery period, including a post-operative check-up before departure." |
| `whatsCoordinated[2]` (EN) | "private clinic operatory suite" | "Hospital ION operatory suite" |
| `whatsCoordinated[4]` (EN) | "Premium corporate recovery accommodations arranged near medical facilities" | "Recovery accommodation at Antaris Fundidora, coordinated in proximity to Hospital ION" |
| Hero image | `https://images.unsplash.com/photo-1530026405186...` | `/assets/images/procedures/hero-hysterectomy.jpg` |

#### Remaining TODO Items
```
□ Confirm recovery nights at Antaris Fundidora with treating gynecologist
□ Confirm hospital stay nights at Hospital ION with treating gynecologist
□ Confirm Hospital ION certification body and accreditation number
□ Confirm departure clearance timeline with treating gynecologist
□ Add image: /public/assets/images/procedures/hero-hysterectomy.jpg
```

---

### 5. Bespoke Aesthetic Rhinoplasty — `/procedure/rhinoplasty-monterrey`

#### Issues Found
| # | Issue | Type |
|---|---|---|
| 1 | "secure San Pedro districts" / "San Pedro Garza García" in executiveCoordination | ❌ Removed placeholder |
| 2 | "within a week" return-to-work range in recoveryOverview | ❌ Removed range |
| 3 | "~50% of Houston or Dallas fees" — unverified comparison | ⚠️ Softened; TODO added |
| 4 | "AMCPER certified" in ES FAQ — no surgeon named | ⚠️ Removed unverified cert claim |
| 5 | "Vetted luxury corporate hotel recovery accommodations" in whatsCoordinated | ❌ Replaced with Antaris Fundidora |
| 6 | Hero image: Unsplash stock URL | ❌ Replaced with local path |

#### Corrections Applied
| Field | Old | New |
|---|---|---|
| `executiveCoordination` (EN) | "...boutique hotel in secure San Pedro districts." | "...recovery occurs at Antaris Fundidora." |
| `executiveCoordination` (ES) | "...hotel boutique de negocios en San Pedro Garza García." | "...estancia de recuperación en Antaris Fundidora." |
| `recoveryOverview` (EN) | "...resume low-impact work with minimal discomfort within a week. Safe airway breathing returns steadily." | "Recovery and return-to-activity timelines will be confirmed by the treating physician." |
| `recoveryOverview` (ES) | "...viajan de regreso y regresan a labores de oficina en 7 días con mínimas molestias y moretones mínimos." | "La duración de recuperación y fecha de regreso serán confirmadas por el médico tratante." |
| `faqs[2]` answer (EN) | "...at around 50% of Houston or Dallas fees." | "...at a significant cost advantage compared to US rates." |
| `faqs[2]` answer (ES) | "...y al 50% del costo en EUA." | "...con una ventaja económica significativa respecto a las tarifas en EUA." |
| `whatsCoordinated[2]` (EN) | "Monitoring of certified cosmetic operating clinic..." | "Monitoring of Hospital ION certified operating suite..." |
| `whatsCoordinated[4]` (EN) | "Vetted luxury corporate hotel recovery accommodations with quiet spaces" | "Recovery accommodation at Antaris Fundidora, pre-coordinated for quiet post-operative rest" |
| Hero image | `https://images.unsplash.com/photo-1629909613654...` | `/assets/images/procedures/hero-rhinoplasty.jpg` |

#### Remaining TODO Items
```
□ Confirm recovery nights at Antaris Fundidora with treating plastic surgeon
□ Confirm hospital stay at Hospital ION (is overnight stay required for rhinoplasty?)
□ Confirm splint removal is always day 7 (or physician-dependent)
□ Verify cost comparison claim against current US market rates
□ Confirm surgeon certification body for Spanish content
□ Add image: /public/assets/images/procedures/hero-rhinoplasty.jpg
```

---

### 6. Premium Dental Smile Makeover — `/procedure/smile-makeover-mexico`

#### Issues Found
| # | Issue | Type |
|---|---|---|
| 1 | "San Pedro Garza García" in executiveCoordination (EN + ES) | ❌ Removed placeholder |
| 2 | "3-5 days" soft food range in recoveryOverview | ❌ Removed range |
| 3 | "OSHA-equivalent sanitation protocols" — unverified claim | ⚠️ Softened; TODO added |
| 4 | "typically just 2 key visits...5-6 total days" in FAQ — unverified | ⚠️ Kept structure; TODO added |
| 5 | Warranty described without terms/issuing party | ⚠️ Clarified; TODO added |
| 6 | "Premium business hotel lodging" generic in whatsCoordinated | ❌ Replaced with Antaris Fundidora |
| 7 | Hero image: Unsplash stock URL | ❌ Replaced with local path |

#### Corrections Applied
| Field | Old | New |
|---|---|---|
| `executiveCoordination` (EN) | "...hotel suites in San Pedro Garza García are pre-arranged." | "...recovery accommodation at Antaris Fundidora are pre-arranged." |
| `executiveCoordination` (ES) | "...suites de negocios preferenciales en San Pedro Garza García..." | "...hospedaje en Antaris Fundidora, todo pre-organizado." |
| `recoveryOverview` (EN) | "...soreness is highly mild...Direct soft meal guidelines are recommended for the first 3-5 days." | "...sensitivity is minimal...Dietary guidelines will be provided by the treating dentist." |
| `recoveryOverview` (ES) | "...Se aconseja alimentos suaves por los primeros 3 a 5 días." | "Las indicaciones dietéticas serán proporcionadas por el odontólogo tratante." |
| `faqs[0]` answer (EN) | "...completed in 5-6 total days." | "Total stay duration will be confirmed at booking." |
| `faqs[0]` answer (ES) | "...todo en 5-6 días." | "La duración total de la estadía se confirma al momento de la reserva." |
| `faqs[1]` answer (EN) | "...provide structural warranties against damage..." | "...Warranty terms are provided in writing at the time of treatment." |
| `faqs[2]` answer (EN) | "...OSHA-equivalent sanitation protocols..." | "...strict international sanitation protocols..." |
| `whatsCoordinated[4]` (EN) | "Premium business hotel lodging configured with concierge support for dining comfort" | "Recovery accommodation at Antaris Fundidora, pre-coordinated with concierge dietary support" |
| Hero image | `https://images.unsplash.com/photo-1468495244123...` | `/assets/images/procedures/hero-smile-makeover.jpg` |

#### Remaining TODO Items
```
□ Confirm number of clinical visits and total stay days with treating dentist
□ Confirm soft-diet duration with treating dentist
□ Confirm warranty terms, duration, and issuing party (lab vs. clinic)
□ Confirm dental clinic certification and specific standard applied
□ Confirm if Hospital ION is used or a separate dental facility
□ Add image: /public/assets/images/procedures/hero-smile-makeover.jpg
```

---

## IMAGE PLACEHOLDERS — REQUIRED

Place production images in: `/public/assets/images/procedures/`

| Procedure | Expected Filename | Status |
|---|---|---|
| Advanced LASIK | `hero-lasik.jpg` | ❌ PENDING — folder created, image required |
| Laparoscopic Gallbladder | `hero-gallbladder.jpg` | ❌ PENDING — folder created, image required |
| Nissen Anti-Reflux | `hero-reflux.jpg` | ❌ PENDING — folder created, image required |
| Laparoscopic Hysterectomy | `hero-hysterectomy.jpg` | ❌ PENDING — folder created, image required |
| Rhinoplasty | `hero-rhinoplasty.jpg` | ❌ PENDING — folder created, image required |
| Smile Makeover | `hero-smile-makeover.jpg` | ❌ PENDING — folder created, image required |

> Note: Until images are placed in the folder, the `<img>` element will render as a broken image in the hero card. This is intentional and expected until production photos are supplied.

---

## CONSOLIDATED TODO LIST — PHYSICIAN CONFIRMATION REQUIRED

The following items must be confirmed with treating physicians before any procedure page is considered production-ready:

### All Procedures
```
□ Name treating physician for each procedure
□ Confirm hospital facility is Hospital ION for each procedure
□ Confirm Hospital ION certification body and accreditation number
□ Confirm exact package hotel recovery nights at Antaris Fundidora
□ Confirm return travel / flying clearance date for each procedure
```

### Per-Procedure
```
LASIK:
□ Recovery nights (post-procedure)
□ Procedure duration confirmation
□ Antaris Fundidora amenities for eye care

GALLBLADDER:
□ Hospital stay nights at Hospital ION
□ Hotel recovery nights at Antaris Fundidora
□ Cost comparison verification

REFLUX (NISSEN):
□ Dietary restriction duration
□ 1+3 night package confirmation
□ PPI medication discontinuation timeline

HYSTERECTOMY:
□ Hospital stay nights
□ Hotel recovery nights
□ Departure clearance days

RHINOPLASTY:
□ Is overnight hospital stay required?
□ Hotel recovery nights
□ Splint removal day confirmation

SMILE MAKEOVER:
□ Number of clinical visits
□ Total stay days
□ Soft-diet duration
□ Warranty terms
□ Dental facility used (Hospital ION or separate)
```

---

*End of Document — Procedure Content Corrections v1.0*
*Date: June 10, 2026*
