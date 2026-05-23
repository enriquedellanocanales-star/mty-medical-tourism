# SYSTEM ARCHITECTURE & CODEBASE REPORT: MTY MEDICAL TOURISM (TX-MX CORRIDOR)
> **Target Audience:** LLM / Code Generation Agent / Frontend Architect AI
> **Purpose:** Detailed description of the current React SPAs architecture to facilitate future Next.js SSR migration, SEO audits, or downstream backend development.

---

## 🛠️ UPDATE HISTORY & AUDIT LOG (FRONTEND LEAD & COMPLIANCE REVIEW)

### **Update: 2026-05-22 23:40:00 UTC**
*   **Editor:** Private Medical Concierge, UX/UI Lead & Senior CRO Consultant
*   **Final Aesthetic, UX & Structural Alignments Applied:**
    1.  **Refined "Why Monterrey" 4-Point Core Grid**:
        *   Surgically rewrote the value propositions of Monterrey to focus strictly on human-led concierge principles: **Proximity** (convenient bicultural transit), **Certified Physicians** (national board certified surgeons), **Private Accredited Hospitals** (international safety standards), and **Human-Led Coordination** (trusted bilingual individuals instead of generic automated chatbots).
        *   Updated container styling to enforce premium executive layout bounds (`max-w-[1200px]`).
    2.  **Transformed 3-Step Process Flow**:
        *   Refactored the step-by-step corridor to reflect our bicultural administrative logistics: **Confidential Request** (initial private intake logs) &rarr; **Human Coordination** (direct warm physician matches) &rarr; **Executive Care** (chauffeured transport and premium lodging suites in secure municipality sectors).
        *   Removed all remains of technical "triage lists", "medical suitability triage assets", or automated routing tools.
    3.  **Global Elimination of the word "Matrix"**:
        *   Removed the robotic word "Matrix" from the "Inclusions vs Exceptions" section header, updating it to a sophisticated **Transparent Cooperative Agreement** / **Alcance Definitivo de la Asistencia**.
    4.  **Verified Elimination of Forbidden Terms & Fake Hotline Identifiers**:
        *   Audited the codebase using automated checks to ensure zero instances of forbidden technocratic words ("HIPAA", "Bicultural Matrix", "AI Bot", "Dashboard", "System Automation", "Architecture") remain.
        *   All system assets compile cleanly with zero errors.

### **Update: 2026-05-22 23:08:00 UTC**
*   **Editor:** Senior Frontend Architect, UX/UI Lead & SEO Specialist
*   **Medical Concierge & UI Restructuring Actions Applied:**
    1.  **Surgical Portfolio Mapped Portfolios Restructuring**:
        *   Migrated the static categorical procedure columns in `/src/pages/Home.tsx`'s `#services` section to render a highly polished, responsive 3-column portfolio grid mapped directly from `/src/data/procedures.ts`.
        *   Ensures single source of truth for surgical metrics, pricing baselines, and textual specs across both primary routes and subpages.
    2.  **Robust Interactive State Engagement**:
        *   Precoded each mapped grid option to invoke `scrollToLeadCaptureWithProcedure(proc.procedureKey)` on primary quote action clicks. This securely pre-fills and focalizes the 3-step intake coordination wizard dynamically.
        *   Integrated clean CTA structures ("Request Coordination Quote" / "Solicitar Cotización") aligning perfectly with luxury concierge brand guidelines.
    3.  **Refined Visual Density & White Space**:
        *   Amplified vertical gaps and section margins (`py-24 sm:py-32 lg:py-40`) to highlight layout breathing room and editorial luxury tones.

### **Update: 2026-05-22 22:31:43 UTC**
*   **Editor:** Frontend Lead & Medical Tourism Legal Compliance Consultant
*   **Security, UX & Legal Protection Actions Applied:**
    1.  **Strict Neutralization of Test Assets (Hotline Elimination):**
        *   Completely eliminated all raw placeholder phone numbers (e.g., `+1 (512) 555-0199` and `+52 (81) 8555-0199`) from universal headers, footers, bicultural support lines, and WhatsApp redirection links.
        *   Introduced high-class institutional terminology: `"Patient Coordination Team"` / `"Equipo de Coordinación de Pacientes"`.
        *   Redirected immediate-action CTAs to the secure `#lead-capture` digital portal to protect identity integrity until a commercially dedicated, encrypted line is active.
    2.  **Mitigation of Liability & Hospitalization Expectations (Hotel Accommodations Wording):**
        *   Surgically replaced explicit hotel ratings guarantees (such as `"5-star hotel recovery assignments"` and `"hotel de 5 estrellas"`) with flexible, corporate-complaisant formulations: `"Premium recovery accommodations"` and `"Alojamiento ejecutivo de negocios de nivel Premium"` across `/src/data/procedures.ts` and `/src/pages/Home.tsx`.
        *   Shields the organization from structural tour-operator responsibilities while maintaining bicultural luxury alignment in San Pedro Garza García municipal sectors.
    3.  **Strict Privacy & Boundary Shielding (De-identification of US HIPAA terminology):**
        *   Removed direct, high-risk references to `"HIPAA confirmation"`, `"HIPAA terms"`, or `"HIPAA compliance"` within client-side React code. Because the agency acts as an international administrative coordinative corridor matching patients with independent foreign clinics, unnecessary technical claims were removed to protect legal jurisdiction.
        *   Integrated clean, highly professional alternatives focusing on raw privacy: `"Secure, privacy-conscious coordination"` / `"Confidential intake terms"` and `"SISTEMA SEGURO Y ALTAMENTE CONFIDENCIAL"`.
    4.  **Security Defense in Intake Wizard (Eradication of Medical File Upload Inputs):**
        *   Completely removed direct client-side file upload states (`<input type="file" />` / Drag & Drop zones) to protect prospective patients from transmitting sensitive biometric imagery or active labs over unencrypted public endpoints.
        *   Replaced the upload interface with intuitive, compliant medical readiness checklist checkboxes (`"Do you currently have: Clinical Diagnosis, Medical Imaging, Clinical Labs?"`).
        *   Added a clean compliance footnote explaining that safe documentation transmission is managed via secure direct communications channels after the assigned coordinator establishes personalized contact.
    5.  **Aislando de Consola / AI Concierge Decoupling:**
        *   Verified that any prospective AI Chatbot components lived decoupled from core state mechanisms, avoiding react-router-dom overhead and rendering delays.

---

## 1. TECH STACK & RUNTIME SPECS
*   **Framework/Engine:** React 18+ bootstrapped with Vite.
*   **Language Syntax:** TypeScript (Strict type checks, explicit interface mapping).
*   **Styling Engine:** Tailwind CSS utilizing standard class structures. Inline styling is strictly prohibited. Colors matched to professional clinic tones: Slate (`#0F172A`), Deep Teal (`#164E63`), Cyan (`#22B8CF`), and Amber highlights.
*   **Animation System:** Framer Motion (v11+) imported from the new `"motion/react"` module to leverage layout transitions, micro-interactions, and accordion expansions.
*   **Iconography:** `lucide-react` for high-fidelity typographic vectors.
*   **Routing System:** `react-router-dom` utilizing direct root-level URL mapping for search optimization.

---

## 2. SITE ARCHITECTURE & ROUTING MAP (SEO ACCELERATED)
The routing ignores complex sub-directory routes (e.g., no `/services/` prefix) to generate pristine direct slugs matching exact keywords targeted by Google Ads and organic SEO teams in Texas.
All routes render the persistent global Header and footer layout. Component `<ScrollToTop />` triggers on every route modification to reset viewport coords.

| Route Slug | Target Clinic Procedure | Key Metric / Preselect ID |
| :--- | :--- | :--- |
| `/` | Multi-Specialty Landing & Client Onboarding | `Home` (Dynamic Context Handler) |
| `/lasik-monterrey` | Advanced LASIK Laser Eye Surgery | `Advanced_LASIK` |
| `/gallbladder-surgery-mexico` | Laparoscopic Gallbladder Removal (Cholecystectomy) | `Laparoscopic_Gallbladder` |
| `/reflux-surgery-monterrey` | Laparoscopic Nissen Anti-Reflux Surgery (GERD/Hernia) | `Advanced_Reflux` |
| `/laparoscopic-hysterectomy` | Laparoscopic Gynécological Hysterectomy | `Laparoscopic_Hysterectomy` |
| `/rhinoplasty-monterrey` | Bespoke Aesthetic Rhinoplasty | `Rhinoplasty` |
| `/smile-makeover-mexico` | Premium Dental Smile Makeover (Zirconia Crowns) | `Smile_Makeover` |

---

## 3. DATA SCHEMA & SSR DECOUPLING (`/src/data/procedures.ts`)
To prepare for Next.js SSR / Static Site Generation (`getStaticPaths` or dynamic route fetching), procedures' content, starting prices, and specs are completely segregated into an independent data module.

### `ProcedureData` Interface Mapping:
```typescript
export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProcedureData {
  slug: string;
  procedureKey: string;     // Matches state preselection IDs on home form
  startingPrice: string;   // Centralized price property; never hardcoded in component prose text strings
  en: {
    title: string;
    subtitle: string;
    overview: string;
    executiveCoordination: string;  // Detailed travel, SUV bicultural transit logistics
    recoveryOverview: string;       // Distinct health check & medical recovery timeline
    whatsCoordinated: string[];     // Package coordinates (legal safety wording)
    faqs: FAQItem[];                // 3 Highly contextual Q&A structures
  };
  es: {
    title: string;
    subtitle: string;
    overview: string;
    executiveCoordination: string;
    recoveryOverview: string;
    whatsCoordinated: string[];
    faqs: FAQItem[];
  };
}
```

---

## 4. MODULAR PAGES & COMPONENT FLOW

### 4.1. Core App Shell (`/src/App.tsx`)
*   **Features:**
    1.  **Top Alert Ribbon:** Outlines Texas-to-Monterrey medical corridor lines, active support states, and direct click-to-call hotlines (`+1 (512) 555-0199`).
    2.  **Global Header:** Features responsive layout navigation, desktop anchors mapping smoothly to homepage IDs across routes, and the **Language Selector** (`select#lang-toggle`).
    3.  **Language Switching Strategy:** Driven by a centralized state hook (`lang: "en" | "es"`). All nested subcomponents receive `lang` as a reactive prop. Swapping active translation occurs instantly without layout flashing.
    4.  **Clinical Disclaimer Inclusions:** Bottom layout enforces strict CSG/AMCPER legal disclaimers, HIPAA guidelines, and financial disclosure guidelines confirming quote bounds and medical scope.

### 4.2. Procedure Details Detailer (`/src/pages/ProcedureDetail.tsx`)
Render controller parsing page slugs to lookup data from `/src/data/procedures.ts`. Generates high-converting sectioning flow in a strict semantic pattern:
1.  **Strategic Hero Section:** Includes high-contrast bicultural indicator tag, high-impact heading, sub-heading, and dedicated **Starting Price** badge rendering the dynamic `procedure.startingPrice`. Direct high-converting Call-to-Actions redirect immediately.
2.  **Surgical Overview Section:** Straightforward clinical description, including sterile safety compliance details in highlights.
3.  **Executive Coordination Segment:** Clearly details travel arrangements, SUV chauffeured airport pickups, and 5-star hotel recovery assignments in San Pedro Garza García municipal zones, separate from medical recovery steps.
4.  **Recovery Overview Segment:** Highlights times, physical benchmarks, and necessary follow-up check-ups independent of airport logistics.
5.  **Coordinated Elements Inclusions ("What's Coordinated"):** Explicit list describing package limits. Includes protective language stating allocations "*may include*" third-party surgical, hospital checkout, and clinic administrative fees. Avoids risky absolute declarations (such as "Hospital fees included").
6.  **Contextual FAQ Block:** Renders 3 custom interactive accordion panels powered by Framer Motion. Triggers smooth max-height expansions based on index state tracking.
7.  **Final Conversion CTA:** Vibrant cyan-toned action box leading back to home page `#lead-capture`, pre-loading active `procedureKey` parameters into form contexts.
8.  **Mandatory Clinical Safeguard Disclaimer:** Rendered at the end of the page to fulfill surgical risk defense protocols: 
    *   *“Final candidacy and surgical recommendations are determined exclusively by the treating physician after direct medical evaluation.”*

### 4.3. High-Converting Onboarding Homepage (`/src/pages/Home.tsx`)
*   **Routing State Integration:** Integrates location state listeners (`location.state?.preselect` or `location.state?.scrollTarget`) to seamlessly auto-focus clinical elements, pre-selecting desired surgical options on the intake wizard form.
*   **Three-Step Digital intake wizard:** Includes interactive diagnostics, Texas location choices, procedure specifications, medical records uploads, and HIPAA confirmation terms.
*   **Image Assets Defensive Strategy:** Features a custom wrapper component (`SafeImage`) loading local assets, automatically switching to curated Unsplash backups to avoid broken layouts in development or offline environments.

---

## 5. SEAMLESS DOWNSTREAM NEXT.JS MIGRATION PATHWAY
The database is fully configured to handle direct next-generation React transitions:
1.  **File System Decoupling:** Subcomponents and schemas are isolated globally from runtime loops, making them ideal drag-and-drop targets for Next.js App Router (`/app/` folders).
2.  **Pre-Rendering Alignment:** Decoupling dynamic price, SEO subtitles, and metadata items enables immediate integration with `generateStaticParams` / `getStaticPaths` parameters.
3.  **Client Component Boundaries:** Dynamic state controllers (e.g., Accordion lists, Onboarding Multi-Step Wizard, responsive menu toggles) are isolated, indicating they will only need a `"use client";` prefix at target entry points.
