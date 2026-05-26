# Full-Width Breakout Trick

## Problem
An element is inside a constrained container (e.g. `max-w-3xl mx-auto`).
You want ONE element to stretch to full viewport width without changing the container or layout structure.

---

## The Pattern

```tsx
<div className="relative left-1/2 -ml-[50vw] w-screen">
  {/* your full-width element */}
</div>
```

---

## How Each Class Works

| Class | What it does |
|---|---|
| `relative` | Required so `left` is calculated relative to normal flow position |
| `left-1/2` | Shifts left edge RIGHT by 50% of the **parent container** width |
| `-ml-[50vw]` | Pulls left edge LEFT by 50% of the **viewport** width |
| `w-screen` | Sets width to 100% of the **viewport** width |

---

## The Math (Concrete Example)

```
Screen width        = 1200px
Container width     = 768px  (max-w-3xl, centered)
Container offset    = (1200 - 768) / 2 = 216px from screen left
```

**Step 1 — Element starts at container's left edge:**
```
position from screen left = 216px
```

**Step 2 — `left-1/2` shifts right by half the container:**
```
216px + (768 / 2) = 216 + 384 = 600px from screen left  ← this is the center
```

**Step 3 — `-ml-[50vw]` pulls left by half the viewport:**
```
600px - (1200 / 2) = 600 - 600 = 0px from screen left  ← screen's left edge ✓
```

**Step 4 — `w-screen` sets width to full viewport:**
```
width = 1200px  ← covers screen left to right ✓
```

---

## Key Insight

`left-1/2` uses **parent %**, `-ml-[50vw]` uses **viewport %`.  
The difference between these two is exactly the offset needed to escape the container.

---

## Why Not `position: absolute`?

`absolute` would also escape the container visually, but it removes the element from the document flow — content below it would not be pushed down. This trick keeps the element **in flow**, so it acts as a normal block divider.

---

## Real Usage (Next.js page.tsx)

```tsx
import { HorizontalScaleSeparator } from '@/components/ui/separator';

export default function HomePage() {
  return (
    <>
      <section className="h-100">
        {/* Hero content */}
      </section>

      {/* Breakout divider — spans full viewport */}
      <div className="relative left-1/2 -ml-[50vw] w-screen">
        <HorizontalScaleSeparator />
      </div>

      {/* Content continues below in normal flow */}
    </>
  );
}
```

---

## When to Use This

- Full-width dividers / separators inside a constrained layout
- Full-bleed background sections (add `bg-*` inside the breakout div)
- Edge-to-edge images or banners within article/content columns
- Any element that needs to "break out" without restructuring the layout

---

## Variations

**With right margin fix (avoids horizontal scroll on some browsers):**
```tsx
<div className="relative left-1/2 -ml-[50vw] -mr-[50vw] w-screen">
```

**Full-bleed background section:**
```tsx
<div className="relative left-1/2 -ml-[50vw] w-screen bg-neutral-900 py-16">
  <div className="max-w-3xl mx-auto px-4">
    {/* re-constrain inner content */}
  </div>
</div>
```