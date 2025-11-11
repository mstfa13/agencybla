# 🎨 Mobile-First Design System & UX Guidelines
## Visual Identity & User Experience Standards

---

## 🎯 Design Philosophy

### Core Principles:

1. **Mobile-First:** Design for small screens first, scale up to desktop
2. **Performance:** Every design decision prioritizes speed and efficiency
3. **Accessibility:** WCAG 2.1 AA compliance minimum
4. **Consistency:** Unified visual language across all touchpoints
5. **User-Centric:** Intuitive navigation, clear CTAs, minimal friction
6. **Egyptian Context:** Colors, imagery, and patterns that resonate locally

---

## 🎨 Color Palette

### Primary Colors

**Brand Color (Choose One Direction):**

**Option 1: Professional Blue (Tech-Focused)**
- **Primary:** #0066FF (Vibrant Blue)
- **Primary Dark:** #0052CC
- **Primary Light:** #4D94FF
- **Usage:** CTAs, links, primary buttons, headers

**Option 2: Modern Teal (Innovation-Focused)**
- **Primary:** #00BFA5 (Teal/Cyan)
- **Primary Dark:** #00897B
- **Primary Light:** #4DD6C2
- **Usage:** CTAs, links, primary buttons, headers

**Option 3: Egyptian Gold (Luxury/Heritage)**
- **Primary:** #D4AF37 (Egyptian Gold)
- **Primary Dark:** #B8941F
- **Primary Light:** #E5C85B
- **Usage:** CTAs, accent elements, premium features

**Recommendation:** **Option 1 (Blue)** - Most trusted color for tech/business, universal appeal, high contrast

---

### Secondary Colors

**Accent Color:**
- **Orange:** #FF6B35 (Energy, action, urgency)
- **Usage:** Secondary CTAs, highlights, special offers, badges

**Success/Positive:**
- **Green:** #28A745 (WhatsApp green compatible)
- **Usage:** Success messages, checkmarks, positive stats

**Warning/Caution:**
- **Yellow:** #FFC107
- **Usage:** Alerts, warnings, "Coming Soon" badges

**Error/Negative:**
- **Red:** #DC3545
- **Usage:** Error messages, validation errors, alerts

---

### Neutral Colors (Grayscale)

**Dark (Text & Headings):**
- **Black:** #1A1A1A (Pure black avoided for softer look)
- **Dark Gray:** #333333
- **Medium Gray:** #666666
- **Light Gray:** #999999
- **Border Gray:** #D0D0D0
- **Background Gray:** #F5F5F5
- **White:** #FFFFFF

**Usage:**
- **Headings:** #1A1A1A or #333333
- **Body Text:** #333333 or #666666
- **Secondary Text:** #999999
- **Borders:** #D0D0D0 or #E5E5E5
- **Backgrounds:** #F5F5F5 or #FAFAFA
- **Cards/Sections:** #FFFFFF

---

### Color Contrast Guidelines (WCAG AA)

**Minimum Contrast Ratios:**
- Normal text (< 18px): 4.5:1
- Large text (≥ 18px): 3:1
- UI components: 3:1

**Testing:**
- Use WebAIM Contrast Checker: https://webaim.org/resources/contrastchecker/

**Examples (All Pass WCAG AA):**
- #0066FF on #FFFFFF = 7.5:1 ✅
- #333333 on #FFFFFF = 12.6:1 ✅
- #666666 on #FFFFFF = 5.7:1 ✅
- #0066FF on #000000 = 2.8:1 ❌ (Fails, don't use)

---

## 📱 Typography

### Font Family

**Recommended System Font Stack (Maximum Performance):**

```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 
             'Helvetica Neue', Arial, sans-serif;
```

**Why System Fonts:**
- **Zero Load Time:** No web font download required
- **Native Feel:** Matches user's operating system
- **Optimal Rendering:** Perfect hinting on all devices
- **File Size:** 0 KB (instant)

**Alternative (Web Fonts):**

If brand identity requires custom fonts, use Google Fonts with strict optimization:

**Sans-Serif (Modern, Clean):**
- **Inter** (2 weights: 400 Regular, 700 Bold) - 25KB total
- **Poppins** (2 weights: 400 Regular, 600 Semi-Bold) - 28KB total
- **Cairo** (Arabic support, 2 weights) - 30KB total

**Implementation:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
```

**Best Practice:**
- Use `font-display: swap` (prevents invisible text during load)
- Load only 2 weights maximum (Regular + Bold)
- Subset fonts if possible (remove unused characters)

---

### Font Sizes (Mobile-First)

**Mobile (320px - 767px):**

| Element | Size | Line Height | Weight |
|---------|------|-------------|--------|
| H1 (Page Title) | 28px | 1.2 (34px) | 700 Bold |
| H2 (Section Heading) | 24px | 1.3 (31px) | 700 Bold |
| H3 (Subsection) | 20px | 1.4 (28px) | 600 Semi-Bold |
| H4 (Small Heading) | 18px | 1.4 (25px) | 600 Semi-Bold |
| Body Text | 16px | 1.7 (27px) | 400 Regular |
| Small Text (Meta) | 14px | 1.6 (22px) | 400 Regular |
| Button Text | 16px | 1.5 (24px) | 600 Semi-Bold |
| Input Text | 16px | 1.5 (24px) | 400 Regular |
| Caption/Label | 12px | 1.5 (18px) | 400 Regular |

**Tablet (768px - 1023px):**
- Increase by 1.1x (e.g., H1: 31px, Body: 17px)

**Desktop (1024px+):**
- Increase by 1.2x (e.g., H1: 34px, Body: 18px)

---

### Typography Best Practices

**Readability:**
- **Line Length:** 45-75 characters per line (optimal: 60)
- **Line Height:** 1.6-1.8 for body text (mobile: 1.7)
- **Paragraph Spacing:** 1.5-2x line height (e.g., 24px-32px)
- **Letter Spacing:** Default (0) for most text, +0.5px for ALL CAPS

**Hierarchy:**
- Maximum 3 font sizes per page (excluding headings)
- Use weight and color for emphasis (not size alone)
- Maintain consistent spacing between heading levels

**Avoid:**
- Justified text (creates rivers of whitespace on mobile)
- Long lines (> 75 characters) on mobile
- Tiny text (< 14px) on mobile
- More than 2 font weights per page

---

## 📐 Spacing & Layout

### Spacing Scale (8px Base Unit)

Use multiples of 8px for all spacing (margins, padding, gaps):

| Name | Value | Usage |
|------|-------|-------|
| xs | 4px | Tight spacing (icon-to-text) |
| sm | 8px | Small gaps (list items) |
| md | 16px | Default spacing (between elements) |
| lg | 24px | Section spacing (between cards) |
| xl | 32px | Large spacing (between sections) |
| 2xl | 48px | Extra large (major sections) |
| 3xl | 64px | Hero sections, page headers |

**Example Usage:**
```css
/* Card padding */
padding: 16px; /* md */

/* Section margin */
margin-bottom: 32px; /* xl */

/* Hero section padding */
padding: 64px 24px; /* 3xl vertical, lg horizontal */
```

---

### Grid System (Mobile-First)

**Mobile (< 768px):**
- **Container:** Full width (100%) - 24px side padding
- **Columns:** 1 column (full width)
- **Gutters:** 16px between elements

**Tablet (768px - 1023px):**
- **Container:** 720px max-width
- **Columns:** 2 columns (50% each) or 1 column
- **Gutters:** 24px

**Desktop (1024px+):**
- **Container:** 1200px max-width
- **Columns:** 12-column grid (flexible)
- **Gutters:** 32px

**Implementation (Tailwind CSS Example):**
```html
<div class="container mx-auto px-6 md:px-8 lg:px-12">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
    <!-- Grid items -->
  </div>
</div>
```

---

### Safe Areas & Margins

**Mobile Safe Area:**
- **Minimum Side Padding:** 24px (prevents edge-to-edge content)
- **Top Padding (below sticky header):** 56px (header height)
- **Bottom Padding (above sticky bar):** 56px (sticky bar height)

**Why 24px Side Padding:**
- Prevents text from touching screen edges
- Provides comfortable reading width
- Accommodates thumb reach zones

**Sticky Elements:**
- **Header:** 56px height (standard mobile header)
- **Bottom Bar:** 56px height (thumb-friendly)
- **Z-index:** 999 (always on top)

---

## 🖼️ Visual Elements

### Buttons

**Primary Button (Main CTA):**
```
Background: Primary color (#0066FF)
Text: White (#FFFFFF)
Height: 48px (mobile), 56px (desktop)
Border Radius: 8px (modern, friendly)
Font Size: 16px
Font Weight: 600 Semi-Bold
Padding: 16px 24px
Shadow: 0 2px 8px rgba(0, 102, 255, 0.2)
Hover: Darken by 10% (#0052CC)
Active: Darken by 20%, scale(0.98)
```

**Secondary Button (Less Important CTA):**
```
Background: Transparent
Text: Primary color (#0066FF)
Border: 2px solid primary color
Height: 48px
Border Radius: 8px
Padding: 16px 24px
Hover: Background = primary color 10% opacity
```

**Text Button (Minimal):**
```
Background: None
Text: Primary color
Underline on hover
```

**Button States:**
- **Default:** Standard appearance
- **Hover:** Background darkens 10%, cursor: pointer
- **Active/Pressed:** Scale 98%, background darkens 20%
- **Disabled:** 50% opacity, cursor: not-allowed
- **Loading:** Spinner icon, text changes to "Loading..."

**Button Sizes:**
- **Large:** 56px height (hero CTAs)
- **Medium:** 48px height (standard, mobile-friendly)
- **Small:** 36px height (compact areas)

**Icon + Text Buttons:**
```
[Icon] Button Text
↓
💬 WhatsApp Us Now
📞 Call: 0123-456-7890
```

Icon size: 20px, 8px gap between icon and text

---

### Input Fields

**Text Input:**
```
Height: 48px (thumb-friendly)
Border: 1px solid #D0D0D0
Border Radius: 8px
Padding: 12px 16px
Font Size: 16px (prevents iOS zoom)
Background: #FFFFFF
Placeholder Color: #999999
Focus Border: 2px solid primary color (#0066FF)
Error Border: 2px solid #DC3545
```

**Label Above Input:**
```
Font Size: 14px
Font Weight: 600 Semi-Bold
Color: #333333
Margin Bottom: 8px
Required Asterisk: Red (#DC3545)
```

**Error Message:**
```
Color: #DC3545
Font Size: 14px
Icon: ⚠️ or ❌
Display below input field
```

**Success State:**
```
Border: 2px solid #28A745
Icon: ✅ (right side of input)
```

---

### Cards

**Standard Card:**
```
Background: #FFFFFF
Border: 1px solid #E5E5E5 (optional, can use shadow instead)
Border Radius: 12px (modern, friendly)
Padding: 20px (mobile), 24px (desktop)
Shadow: 0 2px 8px rgba(0, 0, 0, 0.08)
Hover: Shadow increases to 0 4px 16px rgba(0, 0, 0, 0.12)
Transition: box-shadow 0.3s ease
```

**Card with Image:**
```
Image: Full-width at top, border-radius on top corners only
Content: Padding 20px below image
Aspect Ratio: 16:9 or 4:3 for consistency
```

**Card Hierarchy:**
```
[Image - Full width, rounded top corners]
---
[Title - 18px Bold, #333, margin-bottom: 8px]
[Meta Info - 14px, #999, margin-bottom: 12px]
[Description - 16px, #666, line-height: 1.7, margin-bottom: 16px]
[CTA Button or Link]
```

---

### Icons

**Icon System:**
- Use consistent icon set (Heroicons, Feather, or Material Icons)
- SVG format (scalable, lightweight)
- Single color (match brand or text color)

**Icon Sizes:**
- **Small:** 16px (inline with text)
- **Medium:** 24px (UI elements)
- **Large:** 32px (feature highlights)
- **Hero:** 48px+ (homepage features)

**Icon + Text Alignment:**
```
Vertical-align: middle
Gap: 8px
Example: 💬 WhatsApp Us Now
```

---

### Images

**Image Optimization:**
- **Format:** WebP with JPG/PNG fallback
- **Compression:** 70-85% quality (lossy)
- **Max File Size:** 100KB (hero), 50KB (thumbnails), 30KB (icons)
- **Lazy Loading:** All below-fold images
- **Responsive:** srcset for multiple sizes

**Image Aspect Ratios:**
- **Hero Images:** 16:9 or 21:9 (wide)
- **Portfolio Thumbnails:** 16:10 or 4:3
- **Blog Thumbnails:** 16:9
- **Square Images:** 1:1 (team photos, logos)

**Border Radius:**
- **Cards/Thumbnails:** 8-12px (modern)
- **Profile Photos:** 50% (perfect circle)
- **Hero Sections:** 0px or 16px (depending on design)

**Image Captions:**
```
Font Size: 14px
Color: #666666
Italic: Optional
Margin Top: 8px
Text Align: Center or left
```

---

## 🎭 UI Components Library

### Navigation (Mobile)

**Hamburger Menu:**
```
Position: Fixed top-left
Size: 44×44px (tap-friendly)
Icon: ☰ (3 horizontal lines)
Color: Primary or #333
Background: Transparent or white
Z-index: 1000
```

**Mobile Menu Overlay:**
```
Background: #FFFFFF (or dark theme #1A1A1A)
Position: Fixed, full screen
Animation: Slide from left (300ms ease)
Close Button: X (top-right)
Menu Items:
  - Font Size: 20px
  - Padding: 16px 24px
  - Border Bottom: 1px solid #E5E5E5
  - Active: Background = primary color 10%
```

**Sticky Header:**
```
Background: #FFFFFF with shadow (on scroll)
Height: 56px
Position: Fixed top
Z-index: 999
Box Shadow (scrolled): 0 2px 8px rgba(0,0,0,0.1)
```

---

### Sticky Bottom Bar (Mobile)

**Layout:**
```
Position: Fixed bottom
Height: 56px
Background: #FFFFFF
Box Shadow: 0 -2px 8px rgba(0,0,0,0.1)
Z-index: 999
Display: Flex (3 equal buttons)
```

**Button Structure:**
```
Width: 33.33% (3 buttons total)
Height: 56px
Background: Transparent
Border Right: 1px solid #E5E5E5 (except last)
Icon: 20px
Text: 12px (below icon)
Color: Primary color
Hover: Background = primary color 10%
```

**Buttons:**
1. 📞 Call
2. 💬 WhatsApp
3. ✉️ Quote

---

### Accordions (Services Page)

**Accordion Header (Closed):**
```
Height: 56px
Background: #FFFFFF
Border: 1px solid #E5E5E5
Border Radius: 8px
Padding: 16px
Display: Flex (icon left, text center, expand icon right)
Cursor: Pointer
Hover: Background = #F5F5F5
```

**Accordion Content (Expanded):**
```
Border: 1px solid #E5E5E5 (matches header)
Border Top: None (merged with header)
Border Radius: 0 0 8px 8px (bottom corners)
Padding: 16px
Background: #FAFAFA (slightly different from header)
Animation: Slide down (300ms ease)
```

**Expand/Collapse Icon:**
- Closed: [+] or [▼]
- Open: [-] or [▲]
- Rotation: 180deg on toggle

---

### Carousels/Sliders (Portfolio, Testimonials)

**Mobile Carousel:**
```
Width: 100% (container)
Card Width: 90% (allows peek of next card)
Snap Scroll: Enabled (snap-x mandatory)
Gap: 16px
Overflow: Hidden (hide scrollbar)
Swipe: Touch-enabled
Indicators: Dots below (● ○ ○)
```

**Carousel Controls:**
- **Mobile:** Swipe gesture only (no arrows, cleaner)
- **Desktop:** Arrow buttons (left/right) + swipe
- **Autoplay:** Optional (5-7 seconds per slide, pause on hover)

**Carousel Indicators:**
```
Position: Below carousel
Dots: 8px diameter
Active Dot: Primary color
Inactive Dot: #D0D0D0
Gap: 8px
Clickable: Yes (jump to slide)
```

---

### Forms (Contact/Quote)

**Form Container:**
```
Max Width: 600px (desktop), 100% (mobile)
Padding: 24px
Background: #FFFFFF or transparent
Border Radius: 12px (if on colored background)
```

**Field Spacing:**
```
Margin Bottom: 20px (between fields)
Label Margin Bottom: 8px
```

**Required Field Indicator:**
```
Asterisk (*): Red (#DC3545)
Position: After label text
Example: "Your Name *"
```

**Submit Button:**
```
Width: 100% (full-width on mobile)
Height: 56px (large, prominent)
Background: Primary color
Text: "Submit Request →" or "Send Message"
Loading State: Spinner + "Sending..."
```

**Form Validation:**
- **Real-time:** Validate on blur (when user leaves field)
- **Error Display:** Red border + error message below
- **Success Display:** Green border + checkmark icon
- **Focus:** Remove error on focus (allow correction)

---

### Loading States

**Page Loading:**
```
Full screen overlay: rgba(255, 255, 255, 0.9)
Spinner: Primary color, 48px
Center aligned (vertical + horizontal)
```

**Button Loading:**
```
Spinner: 16px, white (for primary button)
Replace button text with "Loading..."
Disable button (cursor: not-allowed)
```

**Skeleton Screens (Content Loading):**
```
Background: #E5E5E5 (light gray)
Animation: Shimmer effect (left to right)
Use for cards, text blocks during load
```

---

### Modals/Popups

**Modal Overlay:**
```
Background: rgba(0, 0, 0, 0.6) (semi-transparent dark)
Position: Fixed, full screen
Z-index: 9999
```

**Modal Content:**
```
Background: #FFFFFF
Max Width: 500px (desktop), 90% (mobile)
Border Radius: 12px
Padding: 24px
Box Shadow: 0 8px 32px rgba(0, 0, 0, 0.2)
Position: Center of screen
Animation: Fade in + scale (300ms ease)
```

**Modal Close Button:**
```
Position: Top-right
Size: 32×32px
Icon: X or ✕
Color: #666666
Hover: Color = #333333
```

---

## ♿ Accessibility Guidelines (WCAG 2.1 AA)

### Color Contrast
- **Text:** Minimum 4.5:1 contrast ratio (normal text)
- **Large Text:** Minimum 3:1 (18px+ or 14px+ bold)
- **UI Components:** Minimum 3:1 (buttons, inputs, icons)

### Keyboard Navigation
- **Tab Order:** Logical flow (top to bottom, left to right)
- **Focus Indicators:** Visible outline (2px solid primary color, 4px offset)
- **Skip Links:** "Skip to main content" link (hidden until focused)

### Screen Reader Support
- **Alt Text:** All images have descriptive alt text
- **ARIA Labels:** Interactive elements have labels
- **Landmark Roles:** <header>, <nav>, <main>, <footer>
- **Form Labels:** All inputs have associated <label> elements

### Touch Targets
- **Minimum Size:** 44×44px (iOS), 48×48px (Material, Android)
- **Spacing:** 8px minimum between tap targets
- **Avoid:** Tiny links or buttons (< 44px)

### Motion & Animation
- **Respect prefers-reduced-motion:** Disable animations if user prefers
- **Timing:** Keep animations under 500ms (avoid slow, distracting effects)
- **No Autoplay:** Videos/audio should not autoplay with sound

---

## 🌐 Responsive Breakpoints

### Mobile-First Breakpoints

```css
/* Mobile (default, no media query needed) */
/* 320px - 767px */

/* Tablet */
@media (min-width: 768px) {
  /* Styles for tablet and up */
}

/* Desktop */
@media (min-width: 1024px) {
  /* Styles for desktop and up */
}

/* Large Desktop */
@media (min-width: 1440px) {
  /* Styles for large screens */
}
```

**Tailwind CSS Equivalent:**
```html
<div class="text-base md:text-lg lg:text-xl">
  <!-- 16px mobile, 18px tablet, 20px desktop -->
</div>
```

---

### Responsive Design Patterns

**Navigation:**
- **Mobile:** Hamburger menu
- **Desktop:** Horizontal menu bar

**Images:**
- **Mobile:** Full-width (100%)
- **Tablet:** 2 columns (50% each)
- **Desktop:** 3-4 columns (25-33% each)

**Text:**
- **Mobile:** 16px body, 28px H1
- **Desktop:** 18px body, 36px H1

**Spacing:**
- **Mobile:** 24px side padding, 32px section spacing
- **Desktop:** 48px side padding, 64px section spacing

---

## 🎨 Brand Guidelines (Summary)

### Logo Usage
- **Minimum Size:** 120px wide (maintain legibility)
- **Clear Space:** 24px around logo (no text/elements)
- **Backgrounds:** Use on white, light gray, or primary color (with white logo version)
- **Don't:** Stretch, rotate, outline, add effects

### Brand Voice (Copy Tone)
- **Professional but Approachable:** Not too formal, not too casual
- **Clear and Concise:** Short sentences, no jargon
- **Action-Oriented:** Use verbs, guide user to next step
- **Localized:** Understand Egyptian market, cultural nuances

### Imagery Style
- **Authentic:** Real photos of Egyptian context (avoid generic stock)
- **Diverse:** Represent diverse Egyptian businesses and people
- **Professional:** High-quality, well-lit, sharp
- **Avoid:** Cheesy corporate stock photos, overly posed

---

## 📊 Design Checklist (Before Launch)

### Visual Design
- [ ] All colors pass WCAG AA contrast ratio
- [ ] Consistent font sizes and hierarchy
- [ ] Proper spacing (multiples of 8px)
- [ ] All images optimized (< 100KB)
- [ ] Consistent border radius (8-12px)
- [ ] Hover states on all interactive elements

### Mobile UX
- [ ] All tap targets ≥ 48×48px
- [ ] Text readable without zoom (16px+)
- [ ] No horizontal scrolling
- [ ] Sticky header and bottom bar functional
- [ ] Forms easy to fill on mobile (large inputs)
- [ ] Hamburger menu works smoothly

### Performance
- [ ] PageSpeed Insights mobile score 90+
- [ ] All images lazy-loaded (below fold)
- [ ] Web fonts limited (2 weights max)
- [ ] CSS minified and purged (remove unused)
- [ ] JavaScript deferred (non-critical)

### Accessibility
- [ ] All images have alt text
- [ ] Form inputs have labels
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Screen reader tested (NVDA, VoiceOver)

### Consistency
- [ ] Same button styles across all pages
- [ ] Consistent heading hierarchy
- [ ] Uniform card designs
- [ ] Matching icons (same set/style)
- [ ] Consistent spacing between sections

---

## 🛠️ Design Tools & Resources

### Design Software
- **Figma:** UI/UX design, prototyping (free tier available)
- **Adobe XD:** Alternative to Figma
- **Sketch:** Mac-only design tool

### Icon Libraries
- **Heroicons:** Free, MIT license, modern
- **Feather Icons:** Minimalist, open source
- **Material Icons:** Google's icon set
- **Font Awesome:** Large library (free tier available)

### Color Tools
- **Coolors.co:** Color palette generator
- **Adobe Color:** Color wheel and harmony rules
- **Contrast Checker:** WebAIM tool (WCAG compliance)

### Image Resources
- **Unsplash:** Free high-quality photos
- **Pexels:** Free stock photos and videos
- **Pixabay:** Free images (verify license)

**Egyptian Context Images:**
- Search: "Cairo skyline", "Egyptian business", "Egyptian office"
- Consider: Hiring local photographer for authentic shots

### Font Resources
- **Google Fonts:** Free web fonts
- **Font Squirrel:** Free commercial fonts
- **Adobe Fonts:** Included with Adobe CC

### Prototyping Tools
- **Figma:** Interactive prototypes
- **InVision:** Clickable mockups
- **Marvel:** Simple prototyping

---

## 📐 Component Examples (Code)

### Primary Button (Tailwind CSS)
```html
<button class="bg-blue-600 hover:bg-blue-700 active:scale-98 
               text-white font-semibold text-base
               px-6 py-3 rounded-lg shadow-md
               transition-all duration-200
               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
  Get Free Quote →
</button>
```

### Card Component
```html
<div class="bg-white rounded-xl shadow-md hover:shadow-lg 
            transition-shadow duration-300 overflow-hidden">
  <img src="image.jpg" alt="Description" class="w-full h-48 object-cover">
  <div class="p-5">
    <h3 class="text-lg font-bold text-gray-900 mb-2">Card Title</h3>
    <p class="text-sm text-gray-600 mb-4 line-clamp-3">
      Card description goes here...
    </p>
    <a href="#" class="text-blue-600 font-semibold hover:underline">
      Learn More →
    </a>
  </div>
</div>
```

### Input Field
```html
<div class="mb-5">
  <label for="name" class="block text-sm font-semibold text-gray-700 mb-2">
    Your Name <span class="text-red-500">*</span>
  </label>
  <input 
    type="text" 
    id="name" 
    name="name"
    placeholder="Ahmed Hassan"
    required
    class="w-full h-12 px-4 text-base
           border border-gray-300 rounded-lg
           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
           transition-all duration-200"
  >
  <p class="text-sm text-red-500 mt-1 hidden" id="name-error">
    ⚠️ Please enter your name
  </p>
</div>
```

---

## 🎯 Final Design Principles Recap

1. **Mobile-First:** Design for 375px width first, scale up
2. **Performance:** Every element optimized for speed
3. **Consistency:** Unified visual language
4. **Accessibility:** WCAG AA compliance minimum
5. **User-Centric:** Clear CTAs, minimal friction
6. **Egyptian Context:** Culturally relevant design

---

**End of Design System & UX Guidelines**
**All deliverables completed!**

---

## 📦 Project Deliverables Summary

✅ **Complete Sitemap** - 30-40 pages mapped with full hierarchy
✅ **Mobile Wireframes** - Homepage, Services, Individual Service, Contact pages
✅ **Content Strategy** - Copy guidelines, blog calendar, messaging framework
✅ **Technology Stack** - Next.js recommended with full justification
✅ **SEO Strategy** - Egyptian market keywords, local SEO, 6-month roadmap
✅ **Design System** - Colors, typography, components, accessibility guidelines

**Your mobile-first Egyptian digital solutions agency website is now fully planned and ready for development! 🚀🇪🇬**
