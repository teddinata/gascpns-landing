---
name: GASCPNS
description: Lembar ujian CAT yang ramah. Soft neobrutalism on a cool paper base, built from the CAT SKD answer sheet.
colors:
  paper: "#f5f8fa"
  white: "#ffffff"
  ink: "#0b0707"
  ink-2: "#3d4452"
  hairline: "#d5dbe3"
  cyan: "#0ba7e3"
  cyan-tint: "#dcf2fb"
  blue: "#0066cc"
  blue-deep: "#00509f"
  blue-soft: "#4a90e2"
  sky: "#e8f4ff"
  gold: "#ffd700"
  gold-hover: "#ffe347"
  gold-tint: "#fff4b8"
  navy: "#293149"
  slate: "#1f2937"
  on-navy-2: "#c9d1e4"
  ok: "#1b6e20"
  ok-tint: "#e4f4e5"
  bad: "#b42318"
  bad-tint: "#fdeceb"
typography:
  display:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(2.5rem, 1.35rem + 4vw, 4.4rem)"
    fontWeight: 850
    lineHeight: 0.98
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 112"
  headline:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(1.9rem, 1.2rem + 2.6vw, 3.1rem)"
    fontWeight: 850
    lineHeight: 1.02
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 110"
  title:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 800
    lineHeight: 1.25
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 106"
  body:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 700
    lineHeight: 1.4
  numeric:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, monospace"
    fontSize: "clamp(3.4rem, 2.6rem + 3vw, 5rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.02em"
    fontFeature: "'tnum' 1"
rounded:
  chip: "6px"
  r-sm: "8px"
  control: "10px"
  row: "12px"
  r: "14px"
  r-lg: "22px"
spacing:
  gutter: "16px"
  gutter-wide: "28px"
  header-h: "68px"
  band: "clamp(64px, 9vw, 120px)"
components:
  button-gold:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "10px 22px"
    height: "48px"
  button-gold-hover:
    backgroundColor: "{colors.gold-hover}"
  button-blue:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.white}"
    rounded: "{rounded.control}"
    padding: "10px 22px"
    height: "48px"
  button-blue-hover:
    backgroundColor: "{colors.blue-deep}"
  button-white:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "10px 22px"
    height: "48px"
  button-white-hover:
    backgroundColor: "{colors.sky}"
  numbox:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.r-sm}"
    size: "44px"
  numbox-done:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.white}"
  numbox-current:
    backgroundColor: "{colors.sky}"
    textColor: "{colors.ink}"
  tag-twk:
    backgroundColor: "{colors.sky}"
    textColor: "{colors.ink}"
    rounded: "{rounded.chip}"
    padding: "3px 10px"
    typography: "{typography.label}"
  tag-tiu:
    backgroundColor: "{colors.cyan-tint}"
    textColor: "{colors.ink}"
    rounded: "{rounded.chip}"
    padding: "3px 10px"
  tag-tkp:
    backgroundColor: "{colors.gold-tint}"
    textColor: "{colors.ink}"
    rounded: "{rounded.chip}"
    padding: "3px 10px"
  option:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.row}"
    padding: "10px 14px 10px 10px"
    height: "52px"
  option-hover:
    backgroundColor: "{colors.sky}"
  input-field:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "10px 14px"
    height: "50px"
  card-work:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.r-lg}"
  card-static:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.r}"
    padding: "22px"
  nav-bar:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    height: "{spacing.header-h}"
---

# Design System: GASCPNS

## Overview

**Creative North Star: "Lembar Ujian CAT yang Ramah"**

The whole system is the CAT SKD answer sheet made friendly. Surfaces are cool paper (`paper`) and white sheets, outlined with a 2px ink line, and the recurring motif is the numbered question box: a small bordered square that fills blue when answered. The page behaves like an exam you can actually sit: a timer, numbered boxes, option rows that press in, a score stamp that drops. Neobrutalism is the owner-pinned language, but softened: corners are rounded (8 to 22px), shadows are short (3 to 8px), and the cool paper base replaces stark white so long sessions on a phone do not tire the eye.

Density is moderate and mobile-first. Bands stack vertically with generous padding, each separated by an ink rule, and every section is a working object (quiz card, calculator, answer-sheet specimen, form) rather than decoration. The visual rejection confirmed by the owner is the old look: stiff, and with colors that tired the eye. The palette stays the brand's own (cyan, blue, gold, navy, ink) and is never extended with new hues.

Depth means "this can be pressed or lifted". Static content lies flat on the line; anything containing controls floats on a hard ink offset. Color carries meaning, not decoration: the three SKD subtests own three colors everywhere they appear, gold is rationed, and navy is reserved for two fields.

**Key Characteristics:**
- Cool paper base, white sheets, 2px ink outlines on everything structural.
- Numbered CAT boxes as the signature motif (hero strip, quiz progress, answer-sheet specimen, roadmap phases, social kit pagination).
- Hard offset shadows only on pressables and work surfaces; static cards flat.
- Fixed subtest color coding: TWK blue, TIU cyan, TKP gold.
- Archivo set wide and heavy for headings, Archivo regular for reading, JetBrains Mono only for timers and scores.

## Colors

The brand palette at full strength, used as signals on a cool, quiet paper ground.

### Primary
- **Ujian Blue** (`blue`): the system's state color. Answered number boxes, the selected calculator target, the blue action button, progress and meter fills, the focus ring (`--focus`), and the TWK subtest. Hover deepens to **Deep Blue** (`blue-deep`); on navy, TWK values use **Soft Blue** (`blue-soft`) for contrast.
- **Sky Tint** (`sky`): the hover and "current" fill for anything blue-owned (option rows, nav links, white buttons, current number box), the explanation panel, and TWK chip background.

### Secondary
- **Lembar Cyan** (`cyan`): the hero exam card's tilted backing plane, the featured testimonial, the TIU subtest, and the shadow and focus color on navy surfaces. **Cyan Tint** (`cyan-tint`) backs TIU chips and empty tryout covers.

### Tertiary
- **Stabilo Gold** (`gold`): exactly three jobs. The primary action button, the highlighter stroke under the key number in a headline (and the solid gold chip on dark), and the TKP subtest. Also the text selection color. Hover lifts to `gold-hover`; TKP chips use `gold-tint`.

### Neutral
- **Ink** (`ink`): text, every outline, and every hard shadow. Also the dark timer chip.
- **Ink Muted** (`ink-2`): leads, supporting copy, captions, field hints.
- **Cool Paper** (`paper`): page and band background; the default ground.
- **White** (`white`): sheets, cards, header, inputs, white buttons.
- **Hairline** (`hairline`): 1px internal dividers inside sheets and lists (nav links, pass/fail rows, feature grid, price rule). A literal value today, not yet a custom property.
- **Navy** (`navy`): the calculator band and the footer, nothing else. **Slate** (`slate`) fills unselected calculator target buttons on navy; **On-Navy Muted** (`on-navy-2`) is secondary text on navy.
- **Pass / Fail** (`ok`, `ok-tint`, `bad`, `bad-tint`): answer verdicts, passing-grade status, field errors, and the overtime timer. Never decorative.

### Named Rules
**The Subtest Tone Rule.** TWK is always `blue`, TIU always `cyan`, TKP always `gold`, through the custom properties `--twk`, `--tiu`, `--tkp`. Chips use the matching tint (`sky`, `cyan-tint`, `gold-tint`). The hero strip, quiz chips, calculator sliders, share card, and social kit all obey this.

**The Three-Job Gold Rule.** Gold marks the primary action, highlights one key number, or means TKP. Selected and active states use blue, never gold.

**The Two Navy Fields Rule.** Navy is reserved for the calculator band (numbers on dark) and the closing footer. No other band goes dark.

## Typography

**Display Font:** Archivo (variable, width 62 to 125, weight 400 to 900), with system-ui fallback
**Body Font:** Archivo at normal width
**Label/Mono Font:** JetBrains Mono (500, 700), with ui-monospace fallback

**Character:** One family doing two voices. Headings use Archivo pushed wide (`font-stretch` 104 to 115%) and very heavy (800 to 850) with tight tracking, like a printed exam header; reading text drops back to normal width so long Indonesian sentences stay easy. Mono appears only where a number is the point.

### Hierarchy
- **Display** (850, `clamp(2.5rem, 1.35rem + 4vw, 4.4rem)`, 0.98, width 112%, max 13ch): the hero headline only.
- **Headline** (850, `clamp(1.9rem, 1.2rem + 2.6vw, 3.1rem)`, 1.02, width 110%): section titles and the footer closing line. Quiz cover headline sits between (`clamp(1.8rem, ..., 2.6rem)`).
- **Title** (800, 1.1 to 1.45rem, 1.15 to 1.25, width 104 to 108%): card titles, phase titles, tryout names, lead form title.
- **Body** (400, 1.0625rem, 1.6): running text. Leads run 1.1 to 1.2rem in `ink-2`, capped at 46 to 60ch.
- **Label** (700, 0.85 to 0.92rem): subtest chips, field labels, meta lines. Sentence case; no uppercase labels.
- **Numeric** (JetBrains Mono 700, tabular figures, -0.02em): timer, score stamp, calculator total (`clamp(3.4rem, 2.6rem + 3vw, 5rem)`), slider values, the `+N poin` chip.

### Named Rules
**The Mono-for-Numbers Rule.** JetBrains Mono is used only for timers and scores (the `.num` utility). Never for headings, labels, or body copy.

**The Highlighter Rule.** One phrase per heading at most gets the gold stabilo stroke (a gradient band from 58% to 92% of the line), and it must be the number or fact that matters ("54 detik").

## Layout

A single centered column (`max-width: 1200px`) with a responsive gutter (`gutter` 16px, `gutter-wide` 28px from 720px). The page is a stack of full-bleed bands, each with `band` vertical padding and a 2px ink top rule, alternating white, paper, and the one navy calculator band. The sticky white header is 68px (`header-h`), and anchor scrolling offsets by it.

Breakpoints are 560px (two-column share buttons, wider answer sheet), 720px (gutter widens, two-column grids), and 1024px (desktop splits, inline nav). Desktop sections use asymmetric 12-column splits: hero about 5/6.4, calculator and roadmap 7/5, features 4/8 with a sticky heading. On mobile everything collapses to one column in reading order, hero buttons go full width, and the calculator gains a sticky mini-total bar at the bottom.

Spacing inside components follows a small rhythm of 8, 10, 12, 14, 18, 22px gaps and 14 to 32px card padding (often `clamp`ed).

## Elevation & Depth

Depth is structural and hard-edged: solid ink offsets with zero blur, never soft ambient shadows. A shadow means the object is something you work on or press. Static content (quotes, the answer-sheet specimen, early-bird and Telegram cards) is flat, outlined only.

### Shadow Vocabulary
- **Lift Small** (`--lift-sm`, `3px 3px 0 var(--ink)`): buttons and the skip link at rest; option rows on hover.
- **Lift** (`--lift`, `4px 4px 0 var(--ink)`): tryout package cards.
- **Lift Large** (`--lift-lg`, `8px 8px 0 var(--ink)`): primary work surfaces (the quiz exam card, the lead form card).
- **Press states** (`5px 5px 0 var(--ink)` hover with a -1px translate; `1px 1px 0 var(--ink)` active with a 2px translate): buttons physically rise and sink.
- **Cyan Lift** (`4px 4px 0 var(--cyan)`, `8px 8px 0 var(--cyan)`): the same offsets on navy surfaces (selected target, mini-total bar, calculator result, footer buttons).

### Named Rules
**The Press-Only Lift Rule.** Hard shadows go on pressables and on work surfaces that contain controls. Static cards stay flat on their 2px line.

**The Cyan-on-Navy Rule.** On navy, ink shadows disappear, so lifts and focus rings switch to cyan.

## Shapes

Every structural edge is a 2px ink line (`--bw`, `--line`); the early-bird card alone goes 3px for emphasis. Corners are softly rounded on a ladder: 6px (`chip`) for chips, option keys, and badges; 8px (`r-sm`) for number boxes and small chips; 10px (`control`) for buttons, inputs, and toggles; 12px (`row`) for option rows and inline panels; 14px (`r`) for standard cards; 22px (`r-lg`) for major sheets. Tiny swatches and answer-sheet cells use 3 to 4px with a 1.5px line.

Two playful silhouettes recur: the score stamp (a 150px blue double-ringed circle rotated -8deg), and small sticker badges rotated -2 to -3deg (testimonial achievements). The hero exam card sits on a cyan plane rotated 1.6deg behind it.

## Components

### Buttons
Chunky, tactile, and physical: they rise on hover and sink when pressed.
- **Shape:** gently rounded (10px), 2px ink line, weight 750 at 104% width.
- **Primary (gold):** `gold` with ink text, 48px min height (56px large, 44px small), `10px 22px` padding, Lift Small. Used for the main sign-up action only.
- **Blue:** `blue` with white text; in-flow actions inside work surfaces (start quiz, next question, submit).
- **White:** white with ink text; the secondary choice beside a gold button.
- **Hover / Focus:** translate -1px with a 5px shadow, background shifts (`gold-hover`, `blue-deep`, `sky`), 160ms `--ease-out`. Active sinks 2px to a 1px shadow. Focus is a 3px `blue` outline at 3px offset (cyan on navy).
- **Text link button:** underlined 2px, 650 weight, turns blue on hover.

### Chips
- **Subtest tag:** 2px ink line, 6px radius, 700 label text, tint background per the Subtest Tone Rule.
- **Sticker badge:** white, 2px line, 800 weight, slight rotation; used for achievements and "Hemat N%".
- **Gap chip:** solid `gold` with ink mono text for the one number that matters on dark-adjacent panels (`+45 poin`).

### Cards / Containers
- **Corner Style:** 14px standard, 22px for major sheets.
- **Background:** white on paper bands; `cyan` for the featured testimonial.
- **Shadow Strategy:** per the Press-Only Lift Rule.
- **Border:** 2px ink, with head sections separated by a 2px ink rule and inner rows by 1px hairline.
- **Internal Padding:** 18 to 36px, usually `clamp`ed.

### Inputs / Fields
- **Style:** white, 2px ink line, 10px radius, 50px min height, `10px 14px` padding; labels 700 above.
- **Choice rows (segments):** full-width 48px radio rows with a native radio in `blue`; selected row gets `sky` fill and a blue line.
- **Focus:** 3px `blue` outline at 1px offset.
- **Error:** `bad` line on a `bad-tint` fill, with a 650 `bad` message below.
- **Range slider (calculator):** 12px track outlined in white on navy, filled with the subtest tone; 28px white square thumb with a 2px ink offset; a white threshold tick marks the passing grade.

### Navigation
White sticky bar, 68px, closed by a 2px ink bottom rule. Desktop: logo left, text links (650, 0.97rem) with a `sky` fill on hover, an underlined "Masuk" link and a small gold button. Mobile: an outlined "Menu" toggle with drawn bars opens a full-width white panel of 48px link rows divided by hairlines.

### CAT Number Box (signature)
The 44px square, 2px line, 8px radius, 800 tabular numerals. Default white; **done** fills `blue` with white numerals; **current** is `sky` with a 3px inset blue ring. It scales down into the 110-cell SKD strip (22 columns, colored by subtest) and the answer-sheet specimen, and scales up in the social kit pagination.

### Exam Card (signature)
The Simulasi Kilat work surface: white 22px sheet with Lift Large, a head row holding title, number boxes, and a dark ink timer chip in mono (turns `bad` when time runs out), a 6px blue progress bar, then question text and option rows. Option rows are 52px, 12px radius, with a 32px lettered key; they lift on hover and resolve to best (`ok`), miss (`bad`), partial (`blue`), or dimmed. The result drops the rotating score stamp (520ms, skipped under reduced motion) and offers share actions.

### Score Share Card and Social Kit
The canvas share card (`src/utils/scoreCard.js`) and the 1080 x 1350 social slides (`marketing/kit/kit.html`) reuse the same palette, Archivo plus JetBrains Mono, highlighter stroke, numbered boxes, subtest tones, and hard ink shadows, with lines and offsets scaled up for the larger canvas (4 to 5px lines, 14px shadows, 36px radius).

## Do's and Don'ts

### Do:
- **Do** outline every structural surface with the 2px ink line (`--line`).
- **Do** reserve hard ink shadows (`--lift-sm`, `--lift`, `--lift-lg`) for buttons and work surfaces that hold controls; switch them to cyan on navy.
- **Do** color TWK, TIU, TKP with `--twk`, `--tiu`, `--tkp` wherever a subtest appears.
- **Do** use blue (`blue` fill or `sky` with a blue line) for selected, answered, and current states.
- **Do** set timers and scores in JetBrains Mono with tabular figures, and headings in Archivo at 800 to 850 weight and 104 to 112% width.
- **Do** keep tap targets at 44px minimum and honor `prefers-reduced-motion`.

### Don't:
- **Don't** add hues outside the brand palette (cyan, blue, gold, navy, ink) and their defined tints.
- **Don't** use gold for selected states, decorative fills, or more than one highlighted phrase per heading.
- **Don't** put a hard shadow on static, control-free cards.
- **Don't** use navy beyond the calculator band and the footer.
- **Don't** use soft blurred shadows or gradients as surfaces; the only gradient is the highlighter stroke.
- **Don't** add uppercase kicker or eyebrow labels above headings.
