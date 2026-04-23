# 100B Visual Brand Guidelines

Bộ quy chuẩn visual chuẩn hóa cho các website 100B (Beyond Borders). Dùng làm starter cho dự án mới — copy token, font, component styles nguyên khối sang Tailwind v4 `@theme` block.

**Triết lý thiết kế:** premium restraint — nền tối monochrome + gold là accent duy nhất. Serif tạo uy tín, display font cho impact, sans cho clarity. Glassmorphism cho depth thay vì màu bão hòa. Animation tối thiểu, có chủ đích.

---

## 1. Color Tokens

Tailwind v4 syntax (đặt trong `@theme` block của `index.css`):

```css
@theme {
  /* Brand accent — gold là màu nhấn DUY NHẤT */
  --color-brand-gold:       #C3A374;  /* primary gold */
  --color-brand-gold-hover: #D7B788;  /* lighter on hover */
  --color-brand-gold-dim:   #937C54;  /* darker, gradient end */

  /* Surfaces */
  --color-bg-dark:        #000000;    /* page background */
  --color-bg-alt:         #161513;    /* alternate section */
  --color-bg-card:        #201E1B;    /* card/panel fill */
  --color-bg-card-hover:  #2B2824;    /* card hover state */

  /* Text */
  --color-text-heading:   #FFFFFF;
  --color-text-body:      #C4BEB2;
  --color-text-muted:     #8F8B82;

  /* Borders */
  --color-border-subtle:  rgba(255, 255, 255, 0.06);
}
```

**Usage rules**
- Gold chỉ dùng cho: eyebrow labels, accent words trong title (italic), số/stat, vertical accent line trên card, icon pairing.
- Không dùng gold cho body text dài — gây mệt mắt.
- Border thường dùng `border-white/10`, `border-white/20`, hoặc `border-border-subtle`. Hover thành `border-brand-gold/50`.

---

## 2. Typography

### Fonts

```css
@theme {
  --font-sans:    'Inter', ui-sans-serif, system-ui, sans-serif;
  --font-serif:   'Cormorant Garamond', ui-serif, Georgia, serif;
  --font-display: 'UTM ClassizismAntiqua', 'Cormorant Garamond', ui-serif, Georgia, serif;
}
```

Import trong `index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Inter:wght@300;400;500;600&display=swap');

@font-face {
  font-family: 'UTM ClassizismAntiqua';
  src: url('/fonts/UTM-Classizism-Antiqua.ttf') format('truetype');
  font-display: swap;
}
```

### Scale

| Role              | Classes                                                                 |
| ----------------- | ----------------------------------------------------------------------- |
| H1 hero           | `text-[44px] md:text-8xl lg:text-[120px] font-display leading-[0.85] tracking-tight` |
| H2 section        | `text-3xl md:text-4xl lg:text-5xl font-serif font-light leading-tight`  |
| H3 card title     | `text-lg lg:text-xl font-bold font-sans`                                |
| Body lead         | `text-lg lg:text-xl font-light leading-relaxed`                         |
| Body base         | `text-sm lg:text-base font-light`                                       |
| Eyebrow label     | `text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-gold`  |
| Micro eyebrow     | `text-[10px] md:text-[11px] uppercase tracking-[0.15em] md:tracking-[0.2em]` |
| Caption           | `text-xs` / `text-[10px]`                                               |

**Nguyên tắc**
- H2 thường có **titleAccent**: một từ ở giữa câu được bọc `<em className="font-serif italic text-gradient-gold">`.
- H1 hero có 3 dòng: một từ chính, một từ gradient gold, và year/subtitle ở độ mờ 15% (`opacity-[0.15]`).
- Body luôn `font-light` để balance với serif heading dày hơn.

---

## 3. Global Base Styles

```css
@layer base {
  body {
    @apply bg-bg-dark text-text-body font-sans antialiased
           selection:bg-brand-gold/30 selection:text-text-heading;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply text-text-heading font-serif;
  }
}
```

---

## 4. Layout & Spacing

### Container

- Standard: `max-w-7xl mx-auto px-6` (1280px max, 24px gutters)
- Wide: `max-w-[1440px]` cho hero + gallery
- Narrow text: `max-w-4xl` cho lead paragraph

### Section rhythm

- Padding dọc: `py-20 lg:py-28` (80px → 112px)
- Spacing giữa block trong section: `mb-10 lg:mb-14`, `mb-12`, `mb-16`
- Hero: `min-h-[100svh] md:min-h-screen pt-20 pb-4 md:pt-32 md:pb-20`

### Grid breakpoints

```html
<!-- Mobile-first, responsive grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
```

| Breakpoint | Tailwind prefix | Usage                       |
| ---------- | --------------- | --------------------------- |
| < 640px    | (default)       | mobile, single column       |
| ≥ 768px    | `md:`           | tablet, 2 cột               |
| ≥ 1024px   | `lg:`           | desktop, 3–5 cột            |

---

## 5. Component Styles (CSS)

```css
@layer components {
  /* Gold gradient text — dùng cho accent word trong title, số stat */
  .text-gradient-gold {
    background: linear-gradient(135deg, #C3A374 0%, #937C54 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
  }

  /* Primary CTA — silver metallic */
  .btn-silver-gradient {
    @apply relative overflow-hidden font-bold transition-all duration-300;
    color: #050505;
    background: linear-gradient(105deg,
      #e0e0e0 0%, #fdfdfd 22%, #ffffff 30%, #e3e3e3 45%,
      #bfbfbf 65%, #8f8f8f 85%, #5c5c5c 100%);
    box-shadow:
      inset 0 1px 2px rgba(255, 255, 255, 0.9),
      inset 0 -1px 2px rgba(0, 0, 0, 0.2),
      0 4px 15px rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
  .btn-silver-gradient:hover {
    background: linear-gradient(105deg,
      #ececec 0%, #ffffff 20%, #ffffff 32%, #ebebeb 48%,
      #c9c9c9 68%, #9c9c9c 88%, #6b6b6b 100%);
    box-shadow:
      inset 0 1px 2px rgba(255, 255, 255, 1),
      inset 0 -1px 2px rgba(0, 0, 0, 0.15),
      0 6px 20px rgba(0, 0, 0, 0.6);
    transform: translateY(-1px);
  }

  /* Silver icon badge — dùng cho check mark, accent icons */
  .icon-silver-gradient {
    @apply relative flex items-center justify-center rounded-full text-[#111] shadow-sm;
    background: linear-gradient(135deg,
      #e6e6e6 0%, #ffffff 25%, #cccccc 50%, #999999 75%, #666666 100%);
    box-shadow: inset 0 1px 2px rgba(255,255,255,0.9), 0 2px 5px rgba(0,0,0,0.2);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
}
```

---

## 6. Button Variants

```html
<!-- Primary CTA (silver) -->
<a class="px-6 py-3 btn-silver-gradient rounded-full text-xs uppercase tracking-widest font-semibold">
  Request Invitation
</a>

<!-- Large CTA -->
<a class="px-12 py-6 btn-silver-gradient rounded-2xl text-base lg:text-lg">
  Apply Now
</a>

<!-- Secondary (white → gold on hover) -->
<a class="bg-white hover:bg-brand-gold text-bg-dark hover:text-white
          rounded-full uppercase tracking-widest px-6 py-3">
  Learn More
</a>

<!-- Link with sliding arrow -->
<a class="group inline-flex items-center gap-2 text-text-heading hover:text-brand-gold
          uppercase tracking-[0.15em] font-bold transition-colors">
  View Details
  <ArrowRight class="group-hover:translate-x-1 transition-transform" />
</a>

<!-- Icon toggle (accordion) -->
<button class="w-8 h-8 rounded-full border border-border-subtle flex items-center justify-center transition-all">
  <!-- Active: border-brand-gold rotate-180 bg-brand-gold/10 -->
</button>
```

---

## 7. Card / Panel Patterns

```html
<!-- Standard card -->
<div class="bg-bg-card rounded-3xl p-6 lg:p-8 flex flex-col shadow-lg
            border border-border-subtle hover:bg-bg-card-hover transition-colors">
</div>

<!-- Glassmorphic card (over video/image) -->
<div class="bg-bg-card/80 backdrop-blur-md rounded-2xl
            border border-white/10 hover:border-brand-gold/50 transition-colors">
</div>

<!-- Active/highlighted card -->
<div class="bg-bg-card border border-brand-gold/30 rounded-3xl p-8">
</div>

<!-- Sidebar / feature panel with gold accent line -->
<div class="relative p-8 lg:p-10 rounded-3xl bg-bg-card border border-border-subtle">
  <span class="absolute top-0 left-0 w-1.5 h-full bg-brand-gold rounded-l-3xl"></span>
  <!-- content -->
</div>
```

Rounded scale: `rounded-2xl` (16px) cho small/mobile card, `rounded-3xl` (24px) cho main card — tạo softer premium feel.

---

## 8. Decorative Elements

### Eyebrow pill (hero badges)

```html
<span class="text-[10px] md:text-[11px] uppercase tracking-[0.15em] md:tracking-[0.2em]
             px-2.5 md:px-3 py-1 border border-white/20 text-white
             font-medium rounded-full whitespace-nowrap">
  Build Better Series
</span>

<!-- Gold variant -->
<span class="... border-brand-gold text-brand-gold">By Invitation Only</span>
```

### Section header (eyebrow + line)

```html
<div class="flex items-center gap-4 mb-6">
  <div class="w-8 h-px bg-border-subtle"></div>
  <p class="text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-gold">
    Section Label
  </p>
</div>
```

### Number counter (card)

```html
<div class="text-[40px] font-display text-gradient-gold leading-none font-medium">
  01
</div>
```

### Check icon (benefit list)

```html
<div class="w-6 h-6 icon-silver-gradient shrink-0">
  <Check class="text-[#111]" size={14} strokeWidth={3} />
</div>
```

---

## 9. Icons

- **Library:** `lucide-react`
- **Sizes:** `size={18}` (inline), `size={24}` (card header), `size={32} strokeWidth={1.5}` (feature icons)
- **Color:** `text-brand-gold` cho accent, `text-white` cho default
- **Pairing:** icon luôn `shrink-0`, text trong flex container với `gap-3` hoặc `gap-4`
- **Common set:** `ArrowRight`, `Calendar`, `MapPin`, `Users`, `Building`, `Award`, `Check`, `ChevronDown`, `LineChart`

---

## 10. Gradients & Visual Effects

| Class / CSS                                           | Context                                    |
| ----------------------------------------------------- | ------------------------------------------ |
| `text-gradient-gold`                                  | Accent word in title, stat number          |
| `btn-silver-gradient`                                 | Primary CTA button                         |
| `icon-silver-gradient`                                | Check mark badge, metallic icon            |
| `bg-gradient-to-t from-black/60 via-black/10 to-black/20` | Video overlay (readability on hero)    |
| `bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-brand-gold/10 via-transparent to-transparent` | Ambient gold glow (CTA section) |
| `bg-gradient-to-b from-[#4A4A4A] to-[#1A1A1A]`        | Dark metallic sphere (icon container)      |

---

## 11. Section Template

Mọi section đều theo rhythm sau:

```html
<section class="py-20 lg:py-28">
  <div class="max-w-7xl mx-auto px-6">

    <!-- 1. Eyebrow -->
    <div class="flex items-center gap-4 mb-6">
      <div class="w-8 h-px bg-border-subtle"></div>
      <p class="text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-gold">
        Section Name
      </p>
    </div>

    <!-- 2. Heading (with italic gold accent word) -->
    <h2 class="text-3xl md:text-4xl lg:text-5xl font-serif font-light leading-tight mb-6
               max-w-4xl">
      Main statement with
      <em class="font-serif italic text-gradient-gold">accent word</em>
      inline.
    </h2>

    <!-- 3. Lead paragraph (optional) -->
    <p class="text-lg lg:text-xl text-text-body font-light leading-relaxed max-w-4xl mb-12">
      Supporting copy here.
    </p>

    <!-- 4. Content grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
      <!-- cards -->
    </div>

    <!-- 5. CTA (optional) -->
    <div class="mt-14 flex justify-center">
      <a class="btn-silver-gradient rounded-full px-8 py-4 uppercase tracking-widest text-xs">
        Next Step
      </a>
    </div>

  </div>
</section>
```

---

## 12. Motion & Interaction

| Token              | Classes / Usage                                                      |
| ------------------ | -------------------------------------------------------------------- |
| Default duration   | `duration-300`                                                       |
| Snappy             | `duration-200`                                                       |
| Cinematic (video)  | `duration-700`                                                       |
| Hover arrow        | `group-hover:translate-x-1 transition-transform`                     |
| Accordion chevron  | `group-hover:rotate-180 transition-transform`                        |
| Card border glow   | `hover:border-brand-gold/50 transition-colors`                       |
| CTA lift           | `btn-silver-gradient` hover adds `translateY(-1px)` + stronger shadow|
| Fade-in            | `transition-opacity duration-700` với class `opacity-0`/`opacity-100`|

**Nguyên tắc:** chỉ animate state changes (hover, open/close, load). KHÔNG animate scroll-reveal hay parallax trừ khi có nhu cầu cụ thể — giữ cảm giác tĩnh tại, premium.

---

## 13. Quick-Start Checklist cho Dự Án 100B Mới

1. Copy khối `@theme` + `@font-face` từ section 1–2 vào `src/index.css`.
2. Copy khối `@layer base` (section 3) và `@layer components` (section 5).
3. Thêm font `UTM ClassizismAntiqua` vào `/public/fonts/`.
4. Cài `lucide-react` cho icon set.
5. Layout page root: `bg-bg-dark min-h-screen text-text-body`.
6. Mỗi section dùng template section 11 — chỉ thay nội dung, giữ nguyên rhythm.
7. Kiểm: gold chỉ xuất hiện ở eyebrow + accent word + stat number + accent line. Nếu hơn, rà lại.

---

*Reference implementation: `src/App.tsx` + `src/index.css` trong repo này.*
