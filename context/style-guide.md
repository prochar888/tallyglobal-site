# Tally Global Style Guide

This guide defines writing conventions, formatting standards, and editorial guidelines for all TallyGlobal.ai content.

---

## Typography

### Fonts
- **Headlines (H1, H2)**: DM Serif Display (serif) -- elegant, authoritative, distinctive
- **Body text, H3, UI elements**: DM Sans (sans-serif) -- clean, modern, highly readable
- **Code/technical elements**: System monospace

### Font Sizes (Reference)
- H1: clamp(2rem, 5vw, 3rem)
- H2: clamp(1.5rem, 3.5vw, 2rem)
- H3: 1.125rem
- Body: 1rem (16px base)
- Small/meta text: 0.875rem
- Category tags: 0.75rem uppercase

---

## Grammar & Mechanics

### Capitalization

**Headlines & Subheadings**: Title Case for H1 and H2. Sentence case for H3.
- H1: "The Complete Guide to Selling on Amazon Mexico in 2026"
- H2: "How Much Does It Cost to Sell on Amazon Mexico?"
- H3: "Mexican bank account (MXN + USD)"

**Product/Brand Names**:
- Tally Global (always two words, both capitalized)
- COFEPRIS (always all caps)
- SAT (always all caps)
- IMPI (always all caps)
- S de RL de CV (capitalized S, lowercase de)
- Amazon Mexico (both capitalized)
- Mercado Libre (both capitalized)

**Industry Terms**:
- ecommerce (lowercase, no hyphen)
- marketplace (lowercase)
- FBA, RFC, IVA, ISR, CFDI, NOM (always all caps -- these are acronyms)

### Numbers
- Spell out: one through nine
- Use numerals: 10 and above
- Always use numerals for: percentages (16%), money ($588), measurements, statistics
- Large numbers: 4,500+ (comma separator), $54.4 billion (spell out billion)
- Ranges: use en dash with no spaces: $588-$1,200/month, 4-6 weeks, 8-12 weeks

### Punctuation
- **Oxford comma**: Yes. "Entity, banking, and compliance."
- **Em dashes**: Use `—` (HTML: `&mdash;`) with no spaces. "Mexico's tax authority — SAT — requires..."
- **Periods in lists**: Period if the item is a complete sentence. No period if a fragment.
- **Quotation marks**: Straight quotes in code, curly quotes in content

### Abbreviations & Acronyms
- Spell out on first use with acronym in parentheses: "COFEPRIS (Comision Federal para la Proteccion contra Riesgos Sanitarios)"
- Exception: universally known acronyms need no expansion: SEO, URL, CTA, US, EU
- Mexican regulatory acronyms always get a brief English explanation on first use: "RFC (Mexico's tax ID, equivalent to a US EIN)"

---

## Content Structure

### Maximum 3 Paragraphs Without a Heading
This is a hard rule. If three paragraphs pass without an H2 or H3, add one. Readers scan before they read.

### Paragraph Length
- 2-4 sentences per paragraph
- One idea per paragraph
- No walls of text

### Required Section Elements
Every major section (under an H2) must include at least one of:
- Bullet points or numbered list
- Data table
- Callout box (stat, warning, or pro tip)
- Specific data point (cost, timeline, percentage)

### Bullet Points
- Use for non-sequential items, features, benefits, requirements
- Capitalize first word
- Period if complete sentence, no period if fragment
- Parallel structure (all sentences or all fragments, not mixed)
- Maximum 8 items per list (break into sub-groups if more)

### Tables
Use tables for:
- Cost breakdowns (service, amount, notes)
- Comparisons (Amazon vs Mercado Libre, entity types, competitor comparison)
- Timelines (step, weeks, description)
- Requirements lists (item, required?, details)

Table styling:
- Dark header row (var(--dark) background, white text)
- Alternating hover state on rows
- Rounded corners on first/last cells
- Left-aligned text, right-aligned numbers

### Callout Boxes
Three types:
- **Default (violet border)**: Key information, important context
- **Orange callout**: Warnings, requirements, "do not miss this" notices
- **Green callout**: Positive stats, advantages, good news

Format: Bold label line ("Key stat:", "Important:", "Pro tip:") followed by the content.

### Step Boxes
For multi-step processes, use step boxes with:
- Step label: "STEP 1 -- WEEK 1" (uppercase, violet color, small text)
- Step title: H3 level heading
- Step description: 2-3 sentences max
- Sequential layout (stacked vertically)

---

## CTAs (Calls to Action)

### Primary CTA
- **Button text**: "Get Your Mexico Roadmap"
- **Button color**: Orange (var(--orange, #ff8248))
- **Button shape**: Rounded pill (border-radius: 100px)
- **Link target**: /#cta-final
- **Placement**: Dark background section at end of every article

### CTA Section Format
- Dark background (var(--dark, #212121))
- Centered layout, max-width 640px
- H2 in DM Serif Display, white: "Ready to Launch in Mexico?"
- Supporting paragraph in muted gray: brief value prop + proof point
- Orange button: "Get Your Mexico Roadmap"

### In-Article CTAs
- Contextual links to service pages within body text (not buttons)
- Natural anchor text: "Tally's entity formation service" not "click here for entity formation"
- Pricing mentions with link: "$588/month" linked to /pricing.html

### CTA Rules
- Every article must end with the dark CTA section
- Never use "Contact us" or "Click here" or "Submit"
- Always be specific: "Get Your Mexico Roadmap" or "Talk to Our Team"
- Include a proof point near the CTA: "4,500+ companies formed" or "8-12 weeks to first sale"

---

## Links

### Internal Link Anchor Text
- Descriptive and keyword-rich
- 3-7 words typically
- Never: "click here," "read more," "learn more," "this article"
- Good: "form a Mexican company," "COFEPRIS registration process," "$588/month Starter plan"

### External Links
- Open in new tab
- Link to authoritative sources (government sites, recognized data providers)
- Cite source name in text: "According to IMARC Group..."

---

## Images & Media

### Image Alt Text
- Describe what the image shows
- Include keyword naturally if relevant
- 125 characters or less
- No "image of" or "picture of" prefix

### Image File Names
- Descriptive and keyword-rich
- Lowercase, hyphenated
- Good: `mexico-entity-formation-timeline.webp`
- Bad: `IMG_12345.jpg`

---

## Color Reference (Brand Palette)

| Color | Variable | Hex | Usage |
|-------|----------|-----|-------|
| Dark | --dark | #212121 | Headers, table headers, CTA backgrounds |
| Violet | --violet | #6047ff | Accents, category tags, step labels |
| Orange | --orange | #ff8248 | CTA buttons, orange callout borders |
| Green | --green | #49d475 | Green callout borders, positive stats |
| Off-white | --bg-off-white | #fefcf8 | Page backgrounds, hero sections |
| Text primary | --text-primary | #212121 | Body text, headings |
| Text secondary | --text-secondary | #6B7280 | Subtitles, meta text, descriptions |
| Border light | --border-light | #e8e8e8 | Table borders, dividers, FAQ borders |

---

## Dates & Time

- **Date format**: Month DD, YYYY (March 27, 2026)
- **In articles**: Spell out month, use numerals for day and year
- **In meta/schema**: ISO format (2026-03-27)
- **Time references**: Relative when recent ("this month"), specific when older ("January 2025")

---

## Statistics & Data

### Citing Sources
- Always cite statistics: "Mexico's ecommerce market reached $54.4 billion in 2025 (IMARC Group)"
- Link to original source when possible
- Include year: "As of January 2025, SAT requires..."

### Presenting Numbers
- Use `<strong>` for key numbers in body text: **$54.4 billion**, **34% YoY**, **4,500+ companies**
- Use % symbol (not "percent"): 34%
- Use $ for money: $588 (not "dollars")
- Include commas: 4,500 not 4500
- Use "+" for open-ended counts: 4,500+, 20+, 130M+

---

## SEO-Specific Style

### Meta Titles
- 50-60 characters
- Primary keyword front-loaded
- Include "| Tally Global" if space allows
- No ending punctuation

### Meta Descriptions
- 140-155 characters
- Primary keyword + benefit + proof point
- End with complete thought

### URL Slugs
- Lowercase, hyphenated
- 3-5 words
- Primary keyword included
- Format: /blog/primary-keyword-phrase.html

---

## Editing Checklist

Before publishing any content:

**Structure**:
- [ ] Max 3 paragraphs between headings
- [ ] Every section has a list, table, callout, or data point
- [ ] Proper heading hierarchy (H1 > H2 > H3)
- [ ] DM Serif Display for H1/H2, DM Sans for body

**Style**:
- [ ] Specific numbers, not vague claims
- [ ] Active voice predominantly
- [ ] Mexican terms explained on first use
- [ ] No filler words (very, really, actually, basically)
- [ ] Descriptive link anchor text (never "click here")

**Formatting**:
- [ ] Tables used for comparisons and data
- [ ] Callout boxes for key stats and warnings
- [ ] Bold (`<strong>`) for key terms and numbers
- [ ] Step boxes for multi-step processes
- [ ] Orange CTA button in closing section

**Brand**:
- [ ] DM Serif Display + DM Sans fonts loaded
- [ ] Color palette adhered to
- [ ] CTA says "Get Your Mexico Roadmap"
- [ ] Proof point near every CTA
- [ ] Ownership narrative reinforced

---

**Style Guide Version**: 1.0
**Last Updated**: March 2026

*This style guide is a living document. Update as the Tally Global brand evolves.*
