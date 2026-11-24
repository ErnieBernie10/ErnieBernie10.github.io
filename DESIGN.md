---
name: Arne Boedt
description: Dark-graphite and burgundy full-stack developer workbench anchored by an interactive KISS architecture canvas.
colors:
  burgundy: "#8B1E3A"
  burgundy-hover: "#A52647"
  burgundy-tint: "#28131B"
  burgundy-border: "#6E2338"
  burgundy-text: "#F0A3B6"
  ground: "#0F1115"
  panel: "#16191F"
  elevated: "#1D212A"
  input: "#111318"
  border: "#282D38"
  border-strong: "#394050"
  ink-bright: "#FFFFFF"
  ink-primary: "#ECEEF2"
  ink-secondary: "#B4BAC6"
  ink-muted: "#939AA8"
  error: "#F598A8"
  success: "#8AD6B0"
typography:
  display:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(2.4rem, 4.2vw, 3.6rem)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.028em"
  headline:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, sans-serif"
    fontSize: "0.96875rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0em"
  body:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "0em"
  body-lead:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0em"
  label:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.04em"
rounded:
  sm: "8px"
  control: "10px"
  node: "12px"
  stage: "14px"
  panel: "16px"
  pill: "999px"
spacing:
  xs: "6px"
  sm: "12px"
  md: "16px"
  lg: "22px"
  xl: "24px"
  panel-x: "30px"
  panel-y: "28px"
components:
  button-primary:
    backgroundColor: "{colors.burgundy}"
    textColor: "{colors.ink-bright}"
    rounded: "{rounded.control}"
    padding: "13px 18px"
  button-primary-hover:
    backgroundColor: "{colors.burgundy-hover}"
    textColor: "{colors.ink-bright}"
  button-secondary:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink-primary}"
    rounded: "{rounded.sm}"
    padding: "6px 10px"
  button-secondary-hover:
    backgroundColor: "{colors.burgundy}"
    textColor: "{colors.ink-bright}"
  pill-active:
    backgroundColor: "{colors.burgundy}"
    textColor: "{colors.ink-bright}"
    rounded: "{rounded.pill}"
    padding: "7px 14px"
  pill-idle:
    backgroundColor: "transparent"
    textColor: "{colors.ink-secondary}"
    rounded: "{rounded.pill}"
    padding: "7px 14px"
  input-default:
    backgroundColor: "{colors.input}"
    textColor: "{colors.ink-primary}"
    rounded: "{rounded.control}"
    padding: "11px 13px"
  panel-default:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink-primary}"
    rounded: "{rounded.panel}"
    padding: "28px 30px"
  chip-stripped:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink-muted}"
    rounded: "{rounded.pill}"
    padding: "3px 10px"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink-secondary}"
    rounded: "{rounded.control}"
    padding: "7px 12px"
  nav-link-hover:
    backgroundColor: "{colors.elevated}"
    textColor: "{colors.ink-bright}"
---

# Design System: Arne Boedt

## Overview

**Creative North Star: "The Graphite & Burgundy Workbench"**

This visual system translates a pragmatic, KISS ("Keep It Simple, Stupid") full-stack engineering mindset into a calm, dark-first workbench. Rather than mimicking a glossy SaaS landing page or a stiff resume, surfaces sit in deep matte graphite with crisp cool-steel seams and generous rounded geometry, letting plain-spoken typography and interactive engineering proof carry the page.

Rich burgundy is the system's sole chromatic voice. It stays disciplined—marking active toggle states, the primary contact action, core architecture nodes, inline links, and keyboard focus rings—so every colored element signals either direct action or load-bearing meaning. Zero white ground, zero parchment, and zero gold appear anywhere in the system.

**Key Characteristics:**
- Dark-first matte graphite surfaces stepped through tonal elevation rather than drop shadows.
- Single disciplined burgundy accent family across fills, tints, borders, and light rose ink.
- Self-hosted Hanken Grotesk paired with JetBrains Mono for technical metadata, addresses, and tabular counts.
- Flat architectural precision softened by generous rounded radii (16px panels, 10px controls, 999px pills).
- Fast, restrained motion using an exponential ease-out curve (150ms–260ms) that collapses cleanly under reduced-motion preferences.

## Colors

A matte cool-graphite neutral ladder anchored by a single burgundy accent family and two high-legibility semantic feedback inks.

### Primary
- **Deep Burgundy** (`#8B1E3A`): Primary interactive fill for the submit button, active language and mode pills, text selection highlight, skip link, and mobile direct-email CTA.
- **Burgundy Hover** (`#A52647`): Raised burgundy fill for primary button hover states and the Complexity Stripper range thumb.
- **Burgundy Tint** (`#28131B`): Low-luminance burgundy wash used to highlight load-bearing core architecture nodes, the parts-count badge, and the direct email row without overpowering the dark ground.
- **Burgundy Seam** (`#6E2338`): 1px structural border framing burgundy-tinted containers and the copy-email button.
- **Rose Ink** (`#F0A3B6`): High-contrast light burgundy ink for inline links, core node role labels, active slider endpoint labels, input carets, strikethrough rules on stripped chips, and 2px focus-visible rings.

### Neutral
- **Matte Graphite Ground** (`#0F1115`): Page canvas, scrollbar track, and recessed trough inside pill switches and the slider bar.
- **Graphite Panel** (`#16191F`): Primary elevated container surface for the top bar, Complexity Stripper, work ledger, docked contact panel, and footer.
- **Elevated Slate** (`#1D212A`): Subtle hover surface for top-bar navigation links and secondary mobile actions.
- **Recessed Input** (`#111318`): Sunken field background for text inputs, textareas, and the dot-grid diagram stage (deepening to `#0D0F13` on input focus).
- **Cool Steel Seam** (`#282D38`): Default 1px hairline border for panels, horizontal ledger dividers, diagram stage, and stripped chips.
- **Strong Steel Seam** (`#394050`): Emphasized 1px border for form inputs, mode toggle housing, dashed bloat nodes, and scrollbar thumbs (lifting to `#525B6E` on input hover).
- **Pure White Ink** (`#FFFFFF`): Display headings, section headings, brand wordmark, core node titles, direct email link, and text on burgundy fills.
- **Primary Ink** (`#ECEEF2`): Default body copy, form labels, input text, and ledger titles.
- **Secondary Ink** (`#B4BAC6`): Lead copy, panel descriptions, ledger details, idle navigation and pill labels, and bloat node titles.
- **Muted Steel Ink** (`#939AA8`): Monospace metadata, placeholders, stripped chip labels, bloat node notes, and the 1px architectural dot-grid pattern (`rgba(147, 154, 168, 0.22)`).
- **Error Rose** (`#F598A8`): Semantic validation border and inline error message ink for invalid form fields and failed submissions.
- **Success Mint** (`#8AD6B0`): Semantic confirmation ink for successful form or mailto submission status.

### Named Rules
**The Single-Accent Discipline Rule.** Burgundy is the only chromatic accent in the system; reserve solid Deep Burgundy (`#8B1E3A`) strictly for active toggle states and primary actions, and use Burgundy Tint (`#28131B`) plus Rose Ink (`#F0A3B6`) for secondary emphasis so the accent never saturates the dark canvas.
**The Dark-Ground Invariant.** Never introduce white, off-white, parchment, or gold surfaces; all elevation steps stay within the `#0F1115`–`#1D212A` cool-graphite ladder.

## Typography

**Display Font:** Hanken Grotesk (with `system-ui, -apple-system, sans-serif` fallback), self-hosted variable WOFF2 (400–800)
**Body Font:** Hanken Grotesk (with `system-ui, -apple-system, sans-serif` fallback)
**Label/Mono Font:** JetBrains Mono (with `ui-monospace, SFMono-Regular, monospace` fallback), self-hosted variable WOFF2 (400–700)

**Character:** Hanken Grotesk brings open, approachable geometric clarity without feeling sterile, while JetBrains Mono anchors technical metadata, email addresses, legal IDs, and tabular counts with workbench precision.

### Hierarchy
- **Display** (800, `clamp(2.4rem, 4.2vw, 3.6rem)` dropping to `2rem` below `640px`, 1.04 line-height, `-0.028em` tracking): Open hero headline set directly on the graphite ground with `text-wrap: balance`.
- **Headline** (700, `1.375rem`, 1.25 line-height, `-0.015em` tracking): Panel section headings (`Strip away the buzzwords`, `Work & background`, `Say hello`) with `text-wrap: balance`.
- **Title** (700, `0.96875rem`, 1.4 line-height): Ledger row titles, architecture node names, and primary submit button label; brand wordmark steps slightly up to `1.0625rem` (`-0.015em`).
- **Body Lead** (400, `1.125rem` dropping to `0.96875rem` below `640px`, 1.6 line-height): Hero introduction constrained to `60ch` max line length.
- **Body** (400, `1rem` root / `0.9375rem` inside panels and inputs, 1.55 line-height): Panel descriptions (`52ch` max width on stripper subtitle), ledger entries, contact intro, and form fields.
- **Label** (500–600, `0.72rem`–`0.78125rem`, JetBrains Mono): Architecture node roles (`0.72rem`, uppercase, `0.04em` tracking), language pills, slider endpoints, stripped chips, ledger metadata, and footer business IDs; numeric counters and IDs enforce `font-variant-numeric: tabular-nums`.

### Named Rules
**The Mono-For-Metadata Rule.** Use JetBrains Mono only for technical identifiers, tabular counts, email/profile handles, and compact interactive controls—never for multi-sentence body prose.
**The Open-Hero Rule.** Set the primary display headline and lead directly on the Matte Graphite Ground (`#0F1115`) without wrapping them in a card or adding an eyebrow kicker above the headline.

## Layout

The page sits inside a centered single-shell container (`max-width: 1240px`, `20px 24px 36px` padding, `22px` vertical stack gap) containing three vertical bands: a compact full-width top bar, an asymmetric two-column workbench, and a calm full-width legal footer.

- **Asymmetric Workbench:** CSS Grid with `grid-template-columns: minmax(0, 1.38fr) minmax(330px, 0.78fr)` and `24px` gap (`align-items: start`). The left column stacks the open hero, interactive Complexity Stripper panel, and Work & Background ledger (`24px` gap). The right column docks the Contact panel with `position: sticky; top: 20px` so direct email and the contact form remain reachable from the first viewport.
- **Internal Panel Rhythm:** Primary panels use `28px 30px` desktop padding (`28px 26px 26px` on the narrower contact panel), `20px` internal stack gaps, and `12px`–`16px` grid gaps inside the diagram stage and ledger rows.
- **Tablet Breakpoint (`<= 980px`):** The workbench collapses to a single `1fr` column, the contact column unsticks (`position: static`), and inline quick-contact actions (`arne@boedt.me` and `Say hello`) appear directly under the hero lead so contact stays above the fold.
- **Mobile Breakpoint (`<= 640px`):** Shell padding tightens to `12px 12px 24px` (`14px` gap), panels tighten to `20px 16px`, the top bar stacks its navigation below a `1px` seam, and the diagram grid, slider bar, and ledger definition rows collapse to single-column layouts.

## Elevation & Depth

This system is strictly flat—it uses **zero box-shadows** anywhere. Depth and hierarchy are communicated exclusively through four tonal steps of cool graphite (`#0F1115` ground -> `#111318` recessed stage/inputs -> `#16191F` panels -> `#1D212A` hover elevation) paired with 1px hairline borders (`#282D38` default, `#394050` emphasized, `#6E2338` burgundy-active). Interactive affordance comes from crisp border/background shifts and a `2px solid #F0A3B6` focus-visible outline offset by `2px`.

### Named Rules
**The Zero-Shadow Rule.** Never add drop shadows, ambient glows, or glass blur to panels, buttons, or inputs; communicate surface separation solely through tonal graphite steps and 1px steel or burgundy seams.

## Shapes

Architectural structure is softened by a consistent nested radius scale so outer frames always curve wider than the controls they contain:

- **Outer Panels (`16px`):** Top bar, Complexity Stripper, Work & Background ledger, Contact panel, and Footer.
- **Diagram Stage (`14px`):** Recessed dot-grid canvas nested inside the 16px Complexity Stripper panel.
- **Nested Nodes & Slider Housing (`12px`):** Architecture nodes and the slider bar inside the stripper.
- **Interactive Controls (`10px`):** Text inputs, textareas, primary submit button, navigation links, direct email row, skip link, and mobile hero actions.
- **Compact Utility Buttons (`8px`):** Copy-email button nested inside the 10px direct email row.
- **Pills & Swatches (`999px` / `50%`):** Language switch, mode toggle, parts-count badge, stripped-layer chips, slider track, and circular `22px` slider thumb.

Border style carries semantic weight inside the diagram: solid `1px` borders mark real, load-bearing components and panels, while dashed `1px` borders (`#394050`) mark disposable buzzword bloat layers.

## Components

Controls feel tactile, direct, and low-ceremony—fast `180ms`–`200ms` transitions on `cubic-bezier(0.16, 1, 0.3, 1)` with no bounce or decorative chrome.

### Buttons
- **Shape:** Rounded rectangle (`10px` radius) for primary actions; compact rounded (`8px`) for nested utility buttons; full pill (`999px`) for segmented toggle options.
- **Primary (Submit):** Full-width Deep Burgundy (`#8B1E3A`) fill, Pure White (`#FFFFFF`) 700-weight label (`0.96875rem`) with `15px` inline arrow SVG, `13px 18px` padding, borderless.
- **Hover / Focus / Disabled:** Primary hover shifts to Burgundy Hover (`#A52647`); disabled drops to `0.65` opacity with `not-allowed` cursor. All buttons share a `2px solid #F0A3B6` focus-visible outline (`2px` offset).
- **Secondary (Copy Action):** Graphite Panel (`#16191F`) fill with `1px solid #6E2338` burgundy seam, `6px 10px` padding, `0.8125rem` label; hover fills solid Deep Burgundy (`#8B1E3A`) with white ink.
- **Segmented Pills (Language & Mode):** Recessed Matte Graphite (`#0F1115`) pill housing with `1px` steel border (`3px`–`4px` inner padding); idle options are transparent with Secondary Ink (`#B4BAC6`), active options fill Deep Burgundy (`#8B1E3A`) with white ink.

### Chips
- **Stripped Layer Chip:** Compact pill (`999px`), Graphite Panel (`#16191F`) background, `1px solid #282D38` border, `3px 10px` padding, `0.72rem` JetBrains Mono in Muted Steel (`#939AA8`) with a Rose Ink (`#F0A3B6`) strikethrough line.
- **Parts Count Badge:** Pill (`999px`), Burgundy Tint (`#28131B`) fill, `1px solid #6E2338` border, `4px 12px` padding, `0.8125rem` 600-weight tabular JetBrains Mono in Rose Ink (`#F0A3B6`).

### Cards / Containers
- **Corner Style:** Generously rounded (`16px` radius).
- **Background:** Graphite Panel (`#16191F`) over Matte Graphite Ground (`#0F1115`).
- **Shadow Strategy:** Flat—zero shadows (see Elevation & Depth).
- **Border:** `1px solid #282D38` hairline seam.
- **Internal Padding:** `28px 30px` on primary panels (`20px 16px` on mobile); horizontal definition-list rows inside the Work & Background ledger separate with `1px solid #282D38` top borders and `16px 0` padding.

### Inputs / Fields
- **Style:** Recessed Input (`#111318`) fill, `1px solid #394050` border, `10px` radius, `11px 13px` padding, `0.9375rem` Primary Ink (`#ECEEF2`) text, Muted Steel (`#939AA8`) placeholders, and `0.84375rem` 600-weight labels stacked `6px` above each field. Textareas enforce `min-height: 108px` and vertical resize.
- **Hover / Focus:** Hover lifts border to `#525B6E`; focus deepens background to `#0D0F13` and shifts border to Rose Ink (`#F0A3B6`) alongside the `2px` focus-visible ring.
- **Error / Status:** Invalid inputs (`aria-invalid="true"`) shift border to Error Rose (`#F598A8`) with a `0.8125rem` Error Rose message below; form status lines use Success Mint (`#8AD6B0`) or Error Rose (`#F598A8`).

### Navigation
- **Top Bar:** Single `16px`-rounded Graphite Panel (`12px 20px` padding) with the Pure White brand wordmark (`1.0625rem`, 700) and `EN`/`NL` pill switch grouped on the left, and external profile links (`GitHub`, `LinkedIn`, `RDPilot`) on the right.
- **States:** Links pair a `17px` `1.75px`-stroke inline SVG with `0.875rem` 500-weight Secondary Ink (`#B4BAC6`) inside `7px 12px` padding (`10px` radius); hover fills Elevated Slate (`#1D212A`) with white ink. Below `640px`, the nav wraps onto a second row beneath a `1px` cool-steel divider.

### Complexity Stripper
The signature workbench module: a `16px` Graphite Panel containing a header with a two-state segmented mode toggle (`Usual pitch` / `KISS reality`), a recessed range slider bar (`6px` gradient track from Strong Steel to Deep Burgundy, `22px` Burgundy Hover circular thumb with `2px` white ring), a `14px`-rounded architectural dot-grid stage (`#111318` with `20px × 20px` `1px` dots), and a verdict bar. Inside the 2-column stage grid, load-bearing core nodes render in Burgundy Tint (`#28131B`) with solid Burgundy Seams (`#6E2338`), while bloat layers render in translucent graphite (`rgba(22, 25, 31, 0.88)`) with dashed Strong Steel borders (`#394050`). Dragging the slider dims approaching bloat nodes (`opacity: 0.35; scale(0.97)` over `260ms`) before moving them into a strikethrough tray below the grid.

## Do's and Don'ts

### Do:
- **Do** step surfaces strictly through the cool-graphite ladder (`#0F1115`, `#111318`, `#16191F`, `#1D212A`) separated by `1px` cool-steel seams (`#282D38` / `#394050`).
- **Do** keep Burgundy (`#8B1E3A` / `#A52647` / `#28131B` / `#F0A3B6`) as the sole chromatic accent for active states, primary actions, core diagram emphasis, inline links, and focus rings.
- **Do** self-host Hanken Grotesk and JetBrains Mono and apply `font-variant-numeric: tabular-nums` to all numeric counters, durations, and business IDs.
- **Do** keep radii nested proportionally (`16px` panel -> `14px` stage -> `12px` node -> `10px` control -> `8px` nested utility button) and use `999px` for pills and chips.
- **Do** use crisp `1.75px`-stroke inline SVGs (`15px`–`17px`) for icons and honor `prefers-reduced-motion: reduce` by collapsing transitions and smooth scrolling.

### Don't:
- **Don't** introduce white, cream, parchment, or gold backgrounds, accents, or borders anywhere in the system.
- **Don't** add drop shadows, neon glows, or glassmorphism blur to cards, buttons, or inputs; this system is flat by design.
- **Don't** wrap the open hero display headline in a card or add eyebrow kickers above section headings.
- **Don't** use JetBrains Mono for body paragraphs or prose descriptions; reserve it for metadata, handles, IDs, and compact technical labels.
- **Don't** replace solid-vs-dashed border semantics inside architecture diagrams with decorative multi-color badges or rainbow status pills.
