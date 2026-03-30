# SEO Guidelines for Tally Global Content

This document outlines SEO best practices and requirements for all TallyGlobal.ai blog content to maximize organic search visibility and conversions.

## Content Length Requirements

### Target Word Counts
- **Standard Blog Post**: 2,000-3,000 words (target: 2,500)
- **Pillar Content / Comprehensive Guides**: 3,000-5,000 words maximum
- **How-To Guides**: 1,500-2,500 words
- **Comparison Articles**: 1,500-2,000 words
- **Regulatory Deep-Dives**: 2,000-3,500 words

### Quality Over Quantity
- Every paragraph must contain specific value: a data point, regulatory reference, cost figure, timeline, or actionable step
- No filler paragraphs. No "In this article we will discuss..." introductions
- Maximum 3 paragraphs without a heading break
- If a section exceeds 500 words, break it into subsections with H3s

## Primary Keywords by Content Pillar

### Pillar 1: Amazon Mexico Market Entry
- **Head keywords**: "sell on amazon mexico", "amazon mexico", "amazon fba mexico"
- **Secondary**: "how to sell on amazon mexico", "amazon mexico requirements", "amazon seller central mexico", "amazon mexico seller"
- **Long-tail**: "how to sell on amazon mexico as a foreigner", "amazon mexico seller requirements 2026", "start selling on amazon mexico step by step"

### Pillar 2: Mexico Entity Formation
- **Head keywords**: "open company in mexico", "mexico entity formation", "S de RL de CV"
- **Secondary**: "mexican LLC foreigners", "form company mexico foreigner", "mexico subsidiary setup"
- **Long-tail**: "how to open a company in mexico as a foreigner", "S de RL vs SA vs SAPI mexico", "best entity type for foreign business in mexico"

### Pillar 3: COFEPRIS & Product Compliance
- **Head keywords**: "cofepris", "cofepris registration", "cofepris requirements"
- **Secondary**: "import supplements mexico", "NOM labeling mexico", "mexico fda equivalent"
- **Long-tail**: "cofepris registration process for supplements", "how long does cofepris approval take", "cofepris cosmetics notification timeline"

### Pillar 4: Mexico Ecommerce Opportunity
- **Head keywords**: "mexico ecommerce market", "sell online mexico", "ecommerce mexico"
- **Secondary**: "mexico ecommerce market 2026", "mercado libre seller", "sell on mercado libre"
- **Long-tail**: "mexico ecommerce market size and growth 2026", "amazon mexico vs mercado libre which is better", "best marketplace to sell in mexico"

### Pillar 5: Cross-Border Imports & Customs
- **Head keywords**: "import to mexico", "mexico customs", "mexico import duties"
- **Secondary**: "padron de importadores", "mexico tariff rates", "customs broker mexico"
- **Long-tail**: "how to import products to mexico legally", "mexico import duty rates by product", "USMCA duty benefits for mexico imports"

### Pillar 6: China to Mexico Corridor
- **Head keywords**: "chinese sellers mexico", "china to mexico imports", "china desk mexico"
- **Secondary**: "19% courier tariff mexico", "avoid courier surcharge mexico", "chinese brands amazon mexico"
- **Long-tail**: "how chinese sellers can sell on amazon mexico", "eliminate 19% courier import surcharge mexico", "chinese sellers mexico entity formation"

## On-Page SEO Rules

### Keyword Placement (Mandatory)
Primary keyword MUST appear in:
- [ ] H1 headline (preferably near the beginning)
- [ ] First 100 words of the article body
- [ ] At least 2 H2 subheadings (exact match or close variation)
- [ ] Last paragraph / conclusion
- [ ] Meta title (within first 60 characters)
- [ ] Meta description
- [ ] URL slug

### Heading Hierarchy

**H1 (Title)**:
- Only one H1 per article
- Include primary keyword naturally
- 50-60 characters for SERP display
- Compelling, benefit-focused, or question-format
- Front-load the keyword: "Sell on Amazon Mexico: The Complete Guide" not "The Complete Guide to Selling on Amazon Mexico"

**H2 (Main Sections)**:
- 5-8 H2 sections for standard articles
- At least 2-3 must include keyword variations
- Use question format for featured snippet targeting: "How Much Does It Cost to Sell on Amazon Mexico?"
- Can be standalone: readers should understand the article flow from H2s alone

**H3 (Subsections)**:
- Nested under H2s (never skip from H2 to H4)
- Include secondary keywords where natural
- Use for step-by-step breakdowns, category lists, sub-topics

### Content Structure Requirements
- Maximum 3 paragraphs without a heading
- Every section must include at least one of: bullet points, table, callout box, or specific data point
- Paragraphs: 3-4 sentences max
- Use `<strong>` for key terms, numbers, and differentiators
- Internal link anchor text: descriptive and keyword-rich, NEVER "click here" or "read more"

### NLP & Semantic Optimization
- **TF-IDF**: Include semantic entities related to the topic, not just exact-match keywords
- **LSI terms**: Weave in related concepts naturally (e.g., for "amazon mexico" article include: FBA, seller central, RFC, eFirma, CFDI, marketplace, Mercado Libre, SAT, customs, tariff)
- **E-E-A-T signals**: Cite real Tally experience (4,500+ companies), real client outcomes (GROWVE), real regulatory references (SAT, COFEPRIS, IMPI)
- **Entity optimization**: Reference official entities (SAT, COFEPRIS, IMPI, SENASICA, Amazon SPN, Mercado Libre) to build topical authority

## Schema Markup Requirements

### Article Schema (Required on Every Blog Post)
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "<H1 title>",
  "description": "<meta description>",
  "author": {
    "@type": "Organization",
    "name": "Tally Global",
    "url": "https://tallyglobal.ai"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Tally Global",
    "logo": {
      "@type": "ImageObject",
      "url": "https://cdn.prod.website-files.com/68d0a16872bd6561dfde96a8/69915507dfd1c29c053f54a3_Favicon.png"
    }
  },
  "datePublished": "<ISO date>",
  "dateModified": "<ISO date>",
  "mainEntityOfPage": "https://tallyglobal.ai/blog/<slug>"
}
```

### FAQPage Schema (Required on Every Blog Post)
Every article must include 5-8 FAQ questions with FAQPage schema markup. Questions should:
- Target "People Also Ask" queries for the primary keyword
- Include concise answers under 300 characters for featured snippet eligibility
- Cover commercial intent questions (cost, timeline, requirements)
- Address objections (do I need to be in Mexico, can I do this myself)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "<question>",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<concise answer under 300 chars>"
      }
    }
  ]
}
```

## Technical SEO Requirements

### Meta Elements

**Meta Title**:
- 50-60 characters including spaces
- Primary keyword front-loaded
- Include "| Tally Global" if space allows
- No ending punctuation
- Format: `[Primary Keyword]: [Benefit/Promise] | Tally Global`

**Meta Description**:
- 140-155 characters
- Include primary keyword + benefit + CTA
- End with complete thought
- Include a differentiator (4,500+ companies, specific timeline, specific cost)
- Formula: `[What the article covers]. [Differentiator/proof point]. [CTA verb].`

**URL Slug**:
- Lowercase, hyphenated, no stop words
- Include primary keyword
- 3-5 words ideal
- Format: `/blog/[primary-keyword-phrase].html`

### Canonical URLs
- Every page must have a `<link rel="canonical">` tag
- Format: `https://tallyglobal.ai/blog/<slug>.html`
- Self-referencing canonical on all blog posts

### Open Graph Tags (Required)
```html
<meta property="og:title" content="<variant for LinkedIn/Twitter>">
<meta property="og:description" content="<social-optimized description>">
<meta property="og:image" content="https://tallyglobal.ai/og-image.jpg">
<meta property="og:type" content="article">
<meta property="og:url" content="<canonical URL>">
<meta property="og:site_name" content="Tally Global">
```

### Twitter Card Tags (Required)
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="<title>">
<meta name="twitter:description" content="<description>">
<meta name="twitter:image" content="<image URL>">
```

### Sitemap
- Every new blog post must be added to `sitemap.xml`
- Include `<lastmod>` date
- Priority: 0.8 for blog posts, 1.0 for service pages

### Robots
- All blog posts: `<meta name="robots" content="index, follow">`
- No noindex on content pages

## Internal Linking Strategy

### Requirements
- **Minimum**: 3 internal links per article
- **Optimal**: 4-6 internal links
- **Maximum**: 8 internal links (unless 3,000+ word article)

### Anchor Text Rules
- Descriptive and keyword-rich: "form a Mexican company" not "click here"
- Use exact match or partial match keywords for anchor text
- Vary anchor text for the same destination across articles
- Never use "click here," "read more," "learn more," or "this article"

### Link Priority
1. **Service pages**: Link to relevant service page in every article (legal-formation, cofepris, imports, etc.)
2. **Pricing page**: Mention pricing with link when discussing costs
3. **Related blog posts**: Cross-link between related articles within the same content pillar
4. **Lead form**: Every article must link to `/#cta-final` at least once (usually in the CTA section)

### Reference
Always check `@context/internal-links-map.md` for the full URL map and anchor text recommendations.

## External Linking Strategy

### Requirements
- **Minimum**: 2 external links per article
- **Optimal**: 3-4 external authority links

### Preferred External Sources
- SAT (sat.gob.mx) for tax and RFC references
- COFEPRIS (gob.mx/cofepris) for regulatory references
- Amazon Seller Central documentation
- IMARC Group for market data
- Statista for internet/population data
- USMCA official text for trade agreement references

### External Link Rules
- Link to authoritative, government, or recognized industry sources
- Always open in new tab: `target="_blank" rel="noopener"`
- Cite the source name in text: "According to IMARC Group..."
- Prefer recent sources (within 1-2 years for data)

## Featured Snippet Optimization

### Question-Based Snippets
- Format target questions as H2 headings
- Answer concisely in 40-60 words immediately after the heading
- Use clear, direct language
- Then expand with detail below

### Table-Based Snippets
- Use HTML tables for comparisons, cost breakdowns, and timelines
- Clear headers with proper `<thead>` and `<th>` elements
- Keep tables to 4-8 rows for optimal snippet extraction

### List-Based Snippets
- Use numbered lists for steps and processes
- Keep items to 1-2 sentences each
- Include 5-8 items per list

## Content Quality Standards

### E-E-A-T Signals (Mandatory)
- **Experience**: Reference Tally's direct experience (4,500+ companies, 20+ countries, specific client outcomes)
- **Expertise**: Use correct Mexican regulatory terminology, cite real processes, demonstrate deep knowledge
- **Authoritativeness**: Reference official entities (SAT, COFEPRIS, IMPI), link to primary sources
- **Trustworthiness**: Be transparent about costs, timelines, and limitations. Acknowledge when processes vary.

### Content Originality
- Every article must provide a unique Tally perspective or proprietary data point
- Include real cost figures, timelines, and process details that competitors do not share
- Address the specific gap that existing top-ranking content misses

## SEO Checklist for Every Article

Before publishing, verify:

### Content
- [ ] 2,000+ words (or appropriate for content type)
- [ ] Primary keyword in first 100 words
- [ ] 3-5 secondary keywords integrated naturally
- [ ] Every paragraph adds specific value (data, cost, timeline, regulatory reference)
- [ ] No fluff, no filler, no generic advice

### Structure
- [ ] One H1 with primary keyword
- [ ] 5-8 H2 sections, 2-3 with keyword variations
- [ ] Proper H1 > H2 > H3 hierarchy (no skipping)
- [ ] Max 3 paragraphs between headings
- [ ] At least one table, list, or callout per major section

### Meta Elements
- [ ] Meta title 50-60 chars with front-loaded keyword
- [ ] Meta description 140-155 chars with keyword + benefit + differentiator
- [ ] URL slug includes primary keyword (short, hyphenated)
- [ ] Canonical URL set
- [ ] OG tags set
- [ ] Twitter Card tags set

### Schema
- [ ] Article JSON-LD markup
- [ ] FAQPage JSON-LD markup with 5-8 questions

### Links
- [ ] 3-6 internal links with descriptive anchor text
- [ ] At least 1 link to relevant service page
- [ ] At least 1 link to /#cta-final or pricing
- [ ] 2-4 external authority links
- [ ] All links functional

### Technical
- [ ] GTM installed (GTM-KXDGDXZN)
- [ ] Added to sitemap.xml
- [ ] robots meta = index, follow
- [ ] Mobile-friendly layout verified
- [ ] Page load under 3 seconds

---

**Remember**: SEO serves the user, not the algorithm. Every optimization must improve the reader's experience. The best SEO for Tally is content that genuinely helps international brands understand and navigate Mexico market entry better than anything else on the internet.
