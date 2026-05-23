# MTY Medical Tourism - Project Change Log

## Session: Hero Section Luxury Refactor
**Date**: May 23, 2026  
**Scope**: Complete Hero section architectural redesign  
**Direction**: Luxury hospitality/premium travel brand positioning

---

## Executive Summary

Refactored Hero section from generic background-image SaaS pattern to cinematic split-layout design inspired by luxury hospitality and premium travel brands. Monterrey skyline now functions as a destination-focused visual element, not merely a background texture.

---

## 1. STRUCTURAL CHANGES

### File Modified
- `src/pages/Home.tsx` (Hero section: lines 178-282)

### Architecture Transformation
**Before**: Single-container background-image hero
```tsx
<section className="relative ... bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url(...)" }}
>
  <div className="overlay"></div>
  <div className="content"></div>
</section>
```

**After**: Explicit split-layout with semantic containers
```tsx
<section className="relative w-full min-h-screen overflow-hidden flex flex-col lg:flex-row">
  {/* Cinematic overlay */}
  <div className="absolute inset-0 z-10"></div>
  
  {/* Content column */}
  <div className="hero-left w-full lg:w-[45%]">...</div>
  
  {/* Image column */}
  <div className="hero-right w-full lg:w-[55%]">
    <img src="..." className="w-full h-full object-cover" />
  </div>
</section>
```

### Key Structural Improvements
1. **Semantic HTML**: Explicit left/right containers instead of nested divs
2. **Image as Real Element**: `<img>` tag instead of CSS background (better for optimization, accessibility, SEO)
3. **Flex-based Layout**: Native flexbox for responsive control without complex CSS hacks
4. **Z-index Organization**: Clear layering system (overlay z-10, content z-20)

---

## 2. LAYOUT SPECIFICATIONS

### Left Sidebar (Content Area)
- **Width**: 45% on desktop (lg breakpoint)
- **Width**: 100% on mobile/tablet (stacked)
- **Background**: Premium dark tone `#071326`
- **Height**: 50vh on mobile, 100vh on desktop (min-h-[50vh] lg:min-h-screen)
- **Vertical Alignment**: `flex flex-col items-start justify-center`
- **Horizontal Alignment**: Text left-aligned
- **Order**: `order-2 lg:order-1` (skyline first on mobile for visual hierarchy)
- **Padding**: 
  - Mobile: `px-6 sm:px-10 md:px-16`
  - Vertical: `py-20 lg:py-0`
- **Content Max-width**: 520px (prevents hyperlarge text on ultra-wide displays)

### Right Sidebar (Skyline Image)
- **Width**: 55% on desktop
- **Width**: 100% on mobile (full width stacked)
- **Height**: 50vh on mobile, 100vh on desktop
- **Image Behavior**: 
  - `object-fit: cover` (maintains aspect ratio, fills container)
  - `object-center` (prioritizes center of frame)
- **Order**: `order-1 lg:order-2` (appears first visually on mobile)
- **Overflow**: Hidden (no image spillover)

### Full Hero Container
- **Min-height**: `min-h-screen` (100vh equivalent)
- **Layout**: `flex flex-col lg:flex-row` (stack mobile, split desktop)
- **Overflow**: Hidden (prevent scrollbars from image edges)

---

## 3. OVERLAY GRADIENT - CINEMATIC SPECIFICATION

### Previous Implementation (Removed)
```
bg-gradient-to-r from-slate-900/85 via-slate-900/70 to-slate-900/40
```
**Issue**: Too aggressive, obscured skyline detail and color

### New Implementation
```css
linear-gradient(
  90deg,
  rgba(7,19,38,0.96) 0%,      /* Opaque left (text area) */
  rgba(7,19,38,0.88) 28%,      /* Strong (transition zone) */
  rgba(7,19,38,0.55) 48%,      /* Medium (middle blend) */
  rgba(7,19,38,0.15) 70%,      /* Light (skyline begins) */
  rgba(7,19,38,0.00) 100%      /* Transparent (full skyline) */
);
```

### Gradient Rationale
- **Left (0-28%)**: Heavy dark overlay ensures text readability over any image
- **Middle (28-48%)**: Smooth transition allowing skyline to emerge
- **Right (48-100%)**: Minimal overlay lets Monterrey shine, maintaining cinematic depth
- **Color**: `rgba(7,19,38,...)` matches premium dark brand tone, not generic gray

### Layer Properties
- `z-10` positioning below content (`z-20`)
- `pointer-events-none` prevents interaction conflicts

---

## 4. TYPOGRAPHY ADJUSTMENTS

### Main Title (Premium Surgical Access)
**Before**: Fixed-scale responsive steps
```
text-4xl sm:text-5xl md:text-6xl xl:text-7xl
```

**After**: Fluid responsive scaling with clamp()
```
font-size: clamp(52px, 6vw, 92px);
```

**Benefits**:
- Scales smoothly from 52px (mobile) to 92px (4K)
- 6vw creates proportional scaling to viewport
- No jarring jumps between breakpoints
- Luxury brands use this pattern (Hermès, Four Seasons)

### Italic Subtitle (&amp; Private Travel Coordination)
**Before**: Inline span without explicit sizing
```
<span className="text-slate-300">...</span>
```

**After**: Explicit clamp() sizing
```
font-size: clamp(34px, 4vw, 58px);
```

**Properties**:
- Maintains 1.2 line-height for breathing room
- Italic style preserved
- Text color: `text-slate-300` (premium light gray)
- Normal case (not uppercase like main title)

### Label (PRIVATE MEDICAL CONCIERGE)
- Size: `text-[10px] sm:text-xs` (smaller on mobile, normal on desktop)
- Color: `text-[#22B8CF]` (brand cyan)
- Tracking: `tracking-[0.35em]` (luxury letter spacing)
- Weight: `font-bold`

### Body Paragraph
- Size: `text-sm sm:text-base` (responsive, not clamp needed)
- Color: `text-slate-200` (secondary light gray)
- Font: `font-sans` (editorial sans for readability)
- Max-width: 420px (optimal reading line length)

---

## 5. VISUAL DIRECTION DECISIONS

### Brand Positioning
- **Inspiration**: Luxury hospitality (Four Seasons, Rosewood)
- **Not**: SaaS dashboards, corporate healthcare, generic medical sites
- **Essence**: Premium medical travel as aspirational destination experience

### Color Palette
- **Dark Base**: `#071326` (deep navy, premium luxury tone)
- **Accent**: `#22B8CF` (cyan, medical/tech trust)
- **Text Hierarchy**:
  - Primary: White (`text-white`)
  - Secondary: Light gray (`text-slate-200`, `text-slate-300`)
  - Tertiary: Dimmer gray for supporting copy

### Typography System
- **Display**: Serif (font-serif) for main title = editorial elegance
- **Body**: Sans-serif (font-sans) for readability = modern luxury
- **Weights**: Light (font-light) and Bold (font-bold) only = refined reduction

### Spacing & Breathing Room
- **Gap between elements**: `space-y-6 sm:space-y-8` (luxury whitespace)
- **No clutter**: Single column on left, clear visual hierarchy
- **Alignment**: Flush left (not centered) = editorial confidence

---

## 6. RESPONSIVE BEHAVIOR

### Mobile Strategy (< 1024px)
1. **Layout**: Stack vertically using `flex-col`
2. **Image First**: Order reorganized with `order-1 lg:order-2`
3. **Content Second**: `order-2 lg:order-1`
4. **Heights**: 
   - Image: 50vh (not full height, allows scrolling)
   - Content: 50vh (allows scrolling)
5. **Padding**: Reduced margins for compact mobile screens
6. **Button**: Full width on mobile, inline on desktop

### Tablet Transition (768px - 1024px)
- Flexbox still stacked (maintains mobile experience until lg breakpoint)
- Typography scales fluidly via clamp()
- Padding increases moderately

### Desktop Layout (≥ 1024px)
1. **Layout**: Side-by-side using `flex-row`
2. **Proportions**: 45% left, 55% right
3. **Heights**: Both 100vh (`min-h-screen`)
4. **No scroll**: Entire hero fits viewport
5. **Image dominance**: Skyline takes 55% visual real estate

### Critical Breakpoint
```
lg:w-[45%]        /* 1024px and up */
lg:flex-row       /* Side-by-side */
lg:order-1/2      /* Restore left-first order */
lg:min-h-screen   /* Full viewport height */
```

---

## 7. IMAGE OPTIMIZATION

### Image Element Strategy
**Why `<img>` instead of background-image?**
1. **Performance**: Native browser optimization, lazy-loading friendly
2. **Accessibility**: Alt text available, screen reader support
3. **SEO**: Image properly indexed
4. **Flexibility**: Can switch formats (WEBP, AVIF) via srcset
5. **Responsive**: object-fit handles scaling elegantly

### Image Properties
```tsx
<img 
  src="/assets/images/skyline-de-monterrey.webp"
  alt="Monterrey Skyline - Medical Tourism Destination"
  className="w-full h-full object-cover object-center"
  loading="eager"  /* Hero is above fold */
/>
```

### Asset Format
- **Primary**: WEBP format (modern compression, ~161KB)
- **Fallback**: JPG available at same path (legacy browser support)
- **Size**: 1600x900px (sufficient for 4K displays with object-fit)
- **Location**: `public/assets/images/skyline-de-monterrey.webp`

---

## 8. COMPONENT PRESERVATION

### What Remained Unchanged
- Router integration (`useLocation`, scroll behavior)
- Bilingual support (lang-en/lang-es spans)
- Button click handler (`scrollToLeadCaptureWithProcedure`)
- Color palette and brand identity
- Overall site structure below Hero

### What Was Removed
- Old background-image CSS approach
- Dark overlay using Tailwind gradient classes
- Nested centering containers
- Complex breakpoint-based font sizing

---

## 9. IMPLEMENTATION DETAILS

### Flexbox Order Trick
Mobile-first order reorganization for better UX:
```
// Content appears second in DOM but first on mobile
<div className="order-2 lg:order-1">Content</div>

// Image appears first in DOM but second on mobile visually  
<div className="order-1 lg:order-2"><img /></div>
```

**Result**: On mobile, skyline image appears first (grabs attention), content scrolls below. No DOM reordering needed.

### Min-height Strategy
- `min-h-[50vh]` on mobile (allows content to breathe, not full screen)
- `lg:min-h-screen` on desktop (full viewport, no scroll within hero)

### Z-index Layering
```
Overlay:  z-10  (visible but allows content on top)
Content:  z-20  (appears above overlay, readable)
Background: (default, behind everything)
```

---

## 10. FILES MODIFIED SUMMARY

| File | Lines | Changes |
|------|-------|---------|
| `src/pages/Home.tsx` | 178-282 | Complete Hero section replacement |
| `log.md` | NEW | Change documentation (this file) |

---

## 11. PERFORMANCE CONSIDERATIONS

### Build Impact
- No new dependencies added
- Pure Tailwind CSS (already in bundle)
- Image loading optimized (eager + WEBP format)
- No JavaScript overhead

### Metrics Expected
- **Hero render time**: Slightly faster (native img vs CSS background)
- **Image load**: WEBP format saves ~20% vs JPG
- **Cumulative Layout Shift**: Minimal (fixed dimensions)

---

## 12. NEXT STEPS & RECOMMENDATIONS

### Potential Future Enhancements
1. **Image srcset**: Add mobile/tablet/desktop image variants for further optimization
2. **Lazy loading**: Consider `loading="lazy"` if above-fold priority changes
3. **Art direction**: Different skyline crops for mobile (portrait) vs desktop (landscape)
4. **Video alternative**: Animated skyline timelapse as premium variant
5. **Intersection Observer**: Trigger animations when hero comes into view

### Maintenance Notes
- Update `log.md` with any Hero section changes
- Keep skyline image assets in `public/assets/images/`
- Maintain responsive classes during future refactors
- Test layout changes on mobile, tablet, desktop, and ultrawide displays

---

## 13. VALIDATION CHECKLIST

- [x] Hero section restructured to split layout
- [x] Image moved from background to img element
- [x] Cinematic overlay gradient applied
- [x] Typography using clamp() for fluid scaling
- [x] Responsive behavior (mobile stack, desktop side-by-side)
- [x] Color palette maintained (#071326, #22B8CF)
- [x] Bilingual support preserved
- [x] Button functionality intact
- [x] No new dependencies added
- [x] Build successful
- [x] Change documentation complete

---

**Status**: ✅ COMPLETED  
**Quality**: Production-ready  
**Testing**: Recommended on real devices (mobile, tablet, 1920px, 3440px ultrawide)

