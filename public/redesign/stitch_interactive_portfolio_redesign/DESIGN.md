---
name: Cyber-Industrial Minimalist
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c9ac'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e9379'
  outline-variant: '#444933'
  surface-tint: '#abd600'
  primary: '#ffffff'
  on-primary: '#283500'
  primary-container: '#c3f400'
  on-primary-container: '#556d00'
  inverse-primary: '#506600'
  secondary: '#adc6ff'
  on-secondary: '#002e69'
  secondary-container: '#4b8eff'
  on-secondary-container: '#00285c'
  tertiary: '#ffffff'
  on-tertiary: '#21323e'
  tertiary-container: '#d2e5f5'
  on-tertiary-container: '#556774'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#c3f400'
  primary-fixed-dim: '#abd600'
  on-primary-fixed: '#161e00'
  on-primary-fixed-variant: '#3c4d00'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a41'
  on-secondary-fixed-variant: '#004493'
  tertiary-fixed: '#d2e5f5'
  tertiary-fixed-dim: '#b6c9d8'
  on-tertiary-fixed: '#0b1d29'
  on-tertiary-fixed-variant: '#374956'
  background: '#0A0A0A'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
  surface-raised: '#161616'
  border-subtle: '#262626'
  text-muted: '#A3A3A3'
  surface-glass: rgba(255, 255, 255, 0.03)
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-base:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: '1.4'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.1em
spacing:
  base: 8px
  gutter: 24px
  margin-mobile: 16px
  container-max: 1200px
  section-gap: 128px
---

## Brand & Style
The brand identity is rooted in high-performance engineering, technical precision, and a "shipped over perfect" developer ethos. It targets a technical audience—recruiters, engineers, and collaborators—who value reliability and transparency.

The visual style is a hybrid of **Cyber-Brutalism** and **Modern Minimalism**. It utilizes raw, high-contrast accents against deep, monochromatic surfaces. The aesthetic evokes a "system terminal" or "command center" feel through the use of monospaced typography, status indicators (e.g., "SYSTEM OPERATIONAL"), and a restricted color palette. Visual interest is driven by high-intensity "Cyber Lime" highlights and glassmorphic header treatments that provide a layer of contemporary sophistication to an otherwise rigid, industrial framework.

## Colors
The palette is dominated by a deep obsidian black (`#0A0A0A`), providing a high-contrast foundation for technical data. 

- **Cyber Lime (#CCFF00):** The primary action and status color. Used for primary buttons, active navigation states, and operational indicators.
- **Electric Blue (#007AFF):** The secondary accent, used for subtle hover transitions, link states, and specific data categories to differentiate from the primary lime.
- **Surface Tiers:** Depth is achieved through a monochromatic scale of grays. The background is pure black, while cards and sections use a slightly elevated "Surface Raised" tone.
- **Muted Text:** Neutral content and descriptions use a medium gray (`#A3A3A3`) to ensure the hierarchy remains focused on the primary headlines and code-based labels.

## Typography
The typography system relies on a dual-font strategy that reinforces the "Engineer" persona.

- **Geist (Sans Serif):** Used for all primary content and large displays. It features a clean, technical structure with tight kerning for a modern, high-density feel. Headlines use heavy weights and negative letter-spacing for impact.
- **JetBrains Mono (Monospaced):** Used for metadata, status indicators, labels, and small UI details. This provides a clear visual signal for "data" or "system-level" information.
- **Casing:** Navigation and technical labels utilize uppercase transformations with increased letter spacing to improve legibility at small sizes and contribute to the industrial aesthetic.

## Layout & Spacing
The layout uses a **Fixed Grid** approach for desktop, constraining the main content to a 1200px container with generous vertical breathing room between logical sections.

- **Grid:** A 12-column grid is standard for content layouts, allowing for 7/5 or 6/6 splits in hero and project sections.
- **Vertical Rhythm:** Sections are separated by large gaps (`128px`) to ensure distinct visual phases while browsing.
- **Mobile Adaptivity:** On mobile, margins shrink to `16px`, and multi-column grids collapse into a single-column vertical stack.
- **The "Gutter" Unit:** A base unit of `24px` is used for horizontal spacing between cards and elements within containers.

## Elevation & Depth
Elevation is communicated through **Flat Layers** and **Light-Emitting Borders** rather than traditional drop shadows.

1.  **Glassmorphism:** The top navigation bar utilizes a semi-transparent surface (`rgba(255, 255, 255, 0.03)`) with a `12px` backdrop blur to maintain context as the user scrolls.
2.  **Border Glows:** Interactive elements (like project cards) use a "Border Glow" technique. On hover, the border transitions from a subtle dark gray to the Cyber Lime primary color, accompanied by a soft `15px` outer glow (`rgba(204, 255, 0, 0.1)`).
3.  **Tonal Stacking:** The primary background is `#0A0A0A`. Elevated content areas (like the "About" section or cards) use `#161616`. Secondary containers or tags use `#262626`.

## Shapes
The shape language is primarily **Sharp and Geometric**. 
- **Standard Corners:** Most containers, cards, and buttons have a default `0px` or extremely minimal `2px` (Soft) radius to maintain a rigid, technical feel.
- **Contextual Rounding:** Rounding is reserved exclusively for "Human" elements, such as the user's headshot or logo icons, to create a subtle contrast between the "System" (sharp) and the "Individual" (rounded).
- **Interactive States:** Buttons remain sharp but use scale-down transforms (`95%`) on active click states to provide tactile feedback.

## Components
- **Buttons (Primary):** Solid Cyber Lime background with black monospaced text. Sharp corners, no border.
- **Buttons (Outline):** 1px `border-subtle` with white/on-surface text. Transitions to Electric Blue on hover.
- **Project Cards:** `#161616` background with a 1px border. Features a high-contrast image (grayscale by default, color on hover) and a footer with monospaced metadata tags.
- **Tags/Chips:** Small, rectangular blocks using the `#262626` background and `code-sm` typography. Used for tech stack lists.
- **Status Ticker:** A full-width horizontal marquee with a border-y stroke, featuring scrolling monospaced text for real-time data or status messaging.
- **Input Fields (Contact):** Large, rectangular blocks with center-aligned icons and labels, prioritizing tap target size and clarity over complexity.