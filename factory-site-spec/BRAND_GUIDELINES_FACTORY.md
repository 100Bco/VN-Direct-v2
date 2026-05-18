# Brand Guidelines — Website Nhà Máy VN Direct 2026

> Quy chuẩn visual cho **website nhà máy** (trang con của VN Direct 2026, hướng tới nhà máy VN ngành VLXD & nội thất).
>
> **Kế thừa 100%** từ [`BRAND_GUIDELINES.md`](../BRAND_GUIDELINES.md) (site mẹ VN Direct 2026). File này chỉ ghi rõ những điểm:
> 1. **Bắt buộc giữ nguyên** từ site mẹ (token, font, component CSS).
> 2. **Customization cho audience nhà máy** (typography Việt, tone CTA, content layout).
>
> **Nguyên tắc vàng**: Bất kỳ ai xem 2 site cạnh nhau phải nhận ra ngay đây là cùng một thương hiệu 100B.

---

## 1. PHẦN BẮT BUỘC GIỮ NGUYÊN

### 1.1 Color tokens

Copy nguyên khối `@theme` từ site mẹ. **Không thêm màu mới**. Không đổi giá trị gold.

```css
@theme {
  --color-brand-gold:       #C3A374;
  --color-brand-gold-hover: #D7B788;
  --color-brand-gold-dim:   #937C54;

  --color-bg-dark:          #000000;
  --color-bg-alt:           #161513;
  --color-bg-card:          #201E1B;
  --color-bg-card-hover:    #2B2824;

  --color-text-heading:     #FFFFFF;
  --color-text-body:        #C4BEB2;
  --color-text-muted:       #8F8B82;
  --color-border-subtle:    rgba(255, 255, 255, 0.06);
}
```

### 1.2 Font stack

```css
@theme {
  --font-sans:    'Inter', ui-sans-serif, system-ui, sans-serif;
  --font-serif:   'Cormorant Garamond', ui-serif, Georgia, serif;
  --font-display: 'UTM ClassizismAntiqua', 'Cormorant Garamond', ui-serif, Georgia, serif;
}
```

**Lưu ý cho tiếng Việt**: Cormorant Garamond hỗ trợ đầy đủ dấu tiếng Việt. UTM ClassizismAntiqua đã có sẵn glyph dấu — kiểm trên trang nhà máy trước khi deploy. Nếu UTM render dấu lỗi (rare), fallback sang `Cormorant Garamond` cho `font-display` riêng heading hero tiếng Việt.

### 1.3 Component CSS

Copy nguyên khối `@layer base` và `@layer components` từ site mẹ. Bao gồm:
- `.text-gradient-gold`
- `.btn-silver-gradient` (+ hover)
- `.icon-silver-gradient`

**Không tạo button variant mới** trừ khi có nhu cầu rõ ràng. Nếu cần CTA phụ, dùng pattern "white → gold" đã có trong site mẹ.

### 1.4 Layout patterns

| Token | Giá trị |
| --- | --- |
| Container chuẩn | `max-w-7xl mx-auto px-6` |
| Section padding | `py-20 lg:py-28` |
| Card padding | `p-6 lg:p-8` (standard) hoặc `p-8 lg:p-10` (feature) |
| Card radius | `rounded-2xl` (small) hoặc `rounded-3xl` (main) |
| Border default | `border-border-subtle` hoặc `border-white/10` |
| Border hover | `hover:border-brand-gold/50` |

### 1.5 Section template

Mọi section dùng đúng rhythm 5 bước của site mẹ:
**Eyebrow → H2 (italic gold accent) → Lead → Content grid → CTA (optional)**.

Xem chi tiết trong `BRAND_GUIDELINES.md` mục 11.

---

## 2. CUSTOMIZATION CHO AUDIENCE NHÀ MÁY

### 2.1 Typography — điều chỉnh cho tiếng Việt

#### Heading scale (giữ scale, điều chỉnh leading)

Tiếng Việt có dấu phía trên → cần thêm space dọc. Tăng `leading-*` lên 1 bậc so với site mẹ:

| Role | Site mẹ (EN) | Site nhà máy (VN) |
| --- | --- | --- |
| H1 hero | `leading-[0.85]` | `leading-[0.95]` |
| H2 section | `leading-tight` | `leading-snug` |
| H3 card | (default) | `leading-snug` |
| Body lead | `leading-relaxed` | `leading-relaxed` (giữ) |

#### H1 hero — cấu trúc

Site mẹ hero: 3 dòng `VIETNAM / DIRECT / 2026`.

Site nhà máy giữ nguyên 3 dòng này nhưng có thể thêm **eyebrow tiếng Việt** phía trên:
> Eyebrow pill #1: `Build Better Series — Thư mời nhà máy`
> Eyebrow pill #2: `30/05 – 06/06/2026`

#### Body & paragraph

- Tiếng Việt dài hơn tiếng Anh ~15–25% → tăng `max-w-*` lead paragraph từ `max-w-2xl` lên `max-w-3xl` để tránh xuống dòng vụn.
- `font-light` vẫn là default cho body. Tránh `font-thin` (dấu khó đọc trên nền tối).
- Không justify text. Dùng `text-left` toàn bộ (hoặc `text-center` cho hero và CTA section).

### 2.2 Tone of voice CTA — Vietnamese formal

| Site mẹ (EN) | Site nhà máy (VN) — Recommended |
| --- | --- |
| `Request Invitation` | `Đăng Ký Tham Gia` |
| `Apply Now` | `Gửi Đăng Ký Nhà Máy` |
| `Learn More` | `Tìm Hiểu Thêm` |
| `View Details` | `Xem Chi Tiết` |
| `Next Step` | `Bước Tiếp Theo` |
| `Get in Touch` | `Liên Hệ 100B` |

**Capitalization rule**: Title Case kiểu Việt — viết hoa từ chính, không viết hoa từ nối (`và`, `của`, `cho`). Ví dụ: `Đăng Ký Tham Gia` ✅ không phải `Đăng Ký Tham Gia`.

**Tracking**: Giữ `uppercase tracking-widest` cho CTA. Tiếng Việt uppercase đẹp khi tracking 0.15–0.2em.

### 2.3 Eyebrow labels

Site mẹ: `Build Better Series`, `By Invitation Only` — tiếng Anh.

Site nhà máy: Eyebrow tiếng Việt, **uppercase + tracking-[0.2em]**:
- `THƯ MỜI NHÀ MÁY`
- `BUILD BETTER SERIES` *(giữ tiếng Anh — đây là tên chương trình 100B)*
- `CHƯƠNG TRÌNH 2026`
- `VỀ 100B`

**Quy tắc**: Tên chương trình / brand / product giữ tiếng Anh (Build Better Series, VN Direct 2026, Made in Vietnam). Section label dịch sang tiếng Việt.

### 2.4 Section heading — italic gold accent word

Pattern site mẹ:
> *Source materials* **straight from the factory.**

Pattern site nhà máy (đảo accent vào động từ chính hoặc danh từ trung tâm):
> Sản phẩm chất lượng — nhưng đang ***bán dưới giá trị*** *(gradient gold italic)*.
> 7 ngày. 10–13 nhà máy được tuyển chọn. ***Hợp tác thực chất.***
> Texas — Cánh cổng vào thị trường Mỹ ***2,6 nghìn tỷ USD***.
> Chúng tôi không chọn theo quy mô. ***Chúng tôi chọn theo chất lượng.***

**Rule**: Accent word luôn là từ mang giá trị thông tin cao nhất trong câu. Italic + gradient gold + giữ font serif.

### 2.5 Card content — buyer profile cards (mới)

Site nhà máy có section "Đoàn buyers" (**5 cards**) — đây là **pattern mới** chưa có ở site mẹ.

**Grid layout đề xuất:**

```html
<!-- 5 cards: 1 col mobile, 2 col tablet, 3 col desktop với card cuối stretch 2 col -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
  <div class="lg:col-span-2"><!-- Card 1 --></div>
  <div class="lg:col-span-2"><!-- Card 2 --></div>
  <div class="lg:col-span-2"><!-- Card 3 --></div>
  <div class="lg:col-span-3"><!-- Card 4 — stretch --></div>
  <div class="lg:col-span-3"><!-- Card 5 — stretch --></div>
</div>
```

→ Desktop: 3 cards row 1 + 2 cards row 2 (wider). Tablet (md): 2x2 + 1 centered. Mobile: stack đơn.

**Alternative đơn giản hơn**: 5 cards đồng dạng `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6` → 3 + 2 layout tự nhiên, card cuối stack center bằng `lg:col-start-2` trên row cuối.

**Card structure:**

```html
<div class="bg-bg-card rounded-3xl p-8 lg:p-10 border border-border-subtle
            hover:border-brand-gold/30 transition-colors flex flex-col gap-6">

  <!-- Header: Tên + Role -->
  <div class="flex items-start gap-4">
    <img class="w-16 h-16 rounded-full object-cover border border-border-subtle"
         src="/photos/buyer-name.jpg" alt="" />
    <div>
      <h3 class="text-xl font-serif text-text-heading mb-1">Lezlie Tram Le</h3>
      <p class="text-sm text-brand-gold uppercase tracking-[0.15em]">
        Founder & CEO, LT Commercial Group
      </p>
    </div>
  </div>

  <!-- Bio -->
  <p class="text-base text-text-body font-light leading-relaxed">
    22+ năm kinh nghiệm BĐS thương mại Texas...
  </p>

  <!-- Track record bullets -->
  <ul class="space-y-2">
    <li class="flex items-center gap-3 text-sm text-text-body">
      <div class="w-1.5 h-1.5 bg-brand-gold rounded-full"></div>
      $55M dự án xây dựng mới
    </li>
    <!-- ... -->
  </ul>

  <!-- Footer accent -->
  <div class="pt-4 border-t border-border-subtle">
    <p class="text-xs text-text-muted italic">
      Quan tâm: vật liệu cho luxury custom home...
    </p>
  </div>
</div>
```

Layout grid khuyến nghị: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6` — desktop 3+2, card cuối có thể `lg:col-start-2` để center row 2.

### 2.6 Number/stat emphasis — money & numbers

Khi nhấn mạnh con số (M&A, pipeline, GDP), dùng pattern **`font-display + text-gradient-gold`**:

```html
<div class="text-5xl lg:text-6xl font-display text-gradient-gold leading-none mb-2">
  $500M+
</div>
<p class="text-sm text-text-muted uppercase tracking-[0.15em]">
  Combined active pipeline
</p>
```

Giữ pattern này nhất quán cho: stats Texas ($2.6T, #1), combined pipeline ($500M+), buyer track record ($55M, $250M+, $15M).

---

## 3. CONTENT LAYOUT — SECTION HIERARCHY

Khác site mẹ ở chỗ section "Đoàn buyers" là **trọng tâm** (không phải Factories như site mẹ). Đề xuất visual weight:

| Section | Visual weight | Note |
| --- | --- | --- |
| Hero | XL | Eyebrow + H1 + stat row |
| Vấn đề | M | 3 pain cards, ngắn |
| Cơ hội | M | 4 Texas stat cards |
| **Đoàn buyers** | **XL** | **5 buyer cards full, có ảnh, full bio** ← trọng tâm |
| Chương trình | M | 3 format cards |
| Lợi ích | M | 6 benefit cards |
| Tiêu chí | S | 5-item checklist (compact) |
| Về 100B | M | 5 service cards |

**Section "Đoàn buyers" nên có background subtle khác** để stand out:
- Option A: `bg-bg-alt` (đen ấm hơn)
- Option B: `bg-gradient-to-b from-bg-dark via-bg-alt to-bg-dark`

Cả hai đều đã consistent với palette site mẹ.

---

## 4. DECORATIVE ADJUSTMENTS

### 4.1 Số thứ tự section

Site mẹ dùng `01`, `02`... cho Why-cards. Site nhà máy có thể dùng cùng pattern cho buyer cards:

```html
<div class="absolute top-6 left-8 text-[40px] font-display text-gradient-gold leading-none">
  01
</div>
```

### 4.2 Việt-flag-friendly gold accent

Không dùng cờ Việt Nam hoặc lá cờ Mỹ trực tiếp. Giữ tone trung tính — chỉ gold + black + white. Nếu cần geo cue: dùng text "VN ↔ TX" (lowercase) hoặc icon `MapPin` đặt cạnh tên thành phố.

### 4.3 Quote / testimonial style (nếu có)

Pattern đề xuất cho quote từ Tú Mạc hoặc Lezlie:

```html
<blockquote class="relative pl-8 border-l-2 border-brand-gold py-2">
  <p class="text-xl lg:text-2xl font-serif italic text-text-heading leading-snug">
    Made in Vietnam — Đi khắp năm châu.
  </p>
  <footer class="mt-4 text-sm uppercase tracking-[0.15em] text-text-muted">
    — Tú Mạc, Co-Founder 100B
  </footer>
</blockquote>
```

---

## 5. ACCESSIBILITY & VIETNAMESE TEXT

### 5.1 Lang attribute

`<html lang="vi">` ở root document — bắt buộc cho screen reader & spell-check tiếng Việt.

### 5.2 Selection bg cho tiếng Việt

Giữ `selection:bg-brand-gold/30` từ site mẹ. Test với text có dấu — đảm bảo highlight không cắt dấu trên.

### 5.3 CTA link target

Site này không có form. CTA "Liên Hệ 100B" trỏ trực tiếp đến `mailto:global@100b.co?subject=VN%20Direct%202026%20-%20Đăng%20ký%20nhà%20máy`. Subject pre-fill giúp inbox 100B phân loại.

---

## 6. MOTION & INTERACTION — KEEP MINIMAL

Giữ nguyên rule site mẹ:
- Chỉ animate state change (hover, open/close)
- Không scroll-reveal, không parallax
- Duration: `duration-200` (snappy) | `duration-300` (default) | `duration-700` (fade-in lớn)

**Bổ sung cho site nhà máy**:
- Tab/accordion buyer cards (nếu có): chevron rotate-180, dùng đúng pattern accordion site mẹ.

---

## 7. ASSET CHECKLIST

| Asset | Source / Spec | Owner |
| --- | --- | --- |
| Logo `100B Beyond Borders` | `/public/logos/100b.svg` (copy từ site mẹ) | 100B |
| Logo `LT Commercial Group` | (đã có ở site mẹ `/logos/lt-commercial.png`) | LT Commercial |
| Photo Lezlie | (đã có `/logos/Lezlie.jpg`, 400x400 min) | 100B |
| Photo Michael Hough | **CẦN BỔ SUNG** — 400x400 min, headshot pro | Cần thu thập |
| Photo Kameron Schram | **CẦN BỔ SUNG** — 400x400 min, headshot pro | Cần thu thập |
| Photo Ricardo Rubiano | **CẦN BỔ SUNG** — 400x400 min, headshot pro | Cần thu thập |
| Photo Mick Hawton | **CẦN BỔ SUNG** — 400x400 min, headshot pro | Cần thu thập |
| Hero video / fallback | Tái sử dụng từ site mẹ HOẶC quay riêng cảnh factory | TBD |
| Font UTM ClassizismAntiqua | `/public/fonts/UTM-Classizism-Antiqua.ttf` (copy từ site mẹ) | 100B |
| Favicon | Logo 100B 32x32 | 100B |

---

## 8. QUICK-START CHO DEV

1. Tạo repo mới (Vite + React + Tailwind v4 + TypeScript) — cùng stack site mẹ.
2. Copy `/public/fonts/` và `/public/logos/` từ repo VN-Direct-v2.
3. Copy `BRAND_GUIDELINES.md` của site mẹ → đặt cùng cấp `BRAND_GUIDELINES_FACTORY.md` (file này).
4. Copy `index.css` từ site mẹ — KHÔNG sửa `@theme` block.
5. Build 9 section theo `CONTENT_DRAFT.md` order. Mỗi section dùng template "Section template" trong site mẹ mục 11.
6. Section "Đoàn buyers" — implement layout 3+2 cards (xem mục 2.5 file này).
7. CTA "Liên Hệ 100B" — trỏ trực tiếp `mailto:global@100b.co` với pre-fill subject.
8. Set `lang="vi"` ở `<html>`.
9. Test responsive mobile-first (Tailwind breakpoints `md`, `lg`).
10. Pre-launch checklist:
    - [ ] Tất cả heading + body có dấu render đúng
    - [ ] CTA tiếng Việt đúng Title Case
    - [ ] 5 photos buyer đã có
    - [ ] `mailto:` link hoạt động, có pre-fill subject
    - [ ] Link sang site mẹ VN Direct 2026 ở footer
    - [ ] Open Graph / meta tiếng Việt (title, description)

---

## 9. CONTENT REFERENCE

Toàn bộ copy text → xem [`CONTENT_DRAFT.md`](./CONTENT_DRAFT.md) (cùng folder).

Site mẹ design system → xem [`../BRAND_GUIDELINES.md`](../BRAND_GUIDELINES.md).

---

*Đóng gói cho dự án VN Direct 2026 — Website nhà máy. © 2026 Công ty Cổ phần 100B Holding.*
