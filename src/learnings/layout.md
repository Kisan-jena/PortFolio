# Layout Concepts Learned — Next.js Portfolio

---

## 1. Full-Width Breakout Trick

When an element is inside a constrained container (`max-w-3xl`) but you want it to span the full viewport:

```tsx
<div className="relative left-1/2 -ml-[50vw] w-screen">
  {/* full width element */}
</div>
```

**Math:** `left-1/2` uses parent %, `-ml-[50vw]` uses viewport %. The difference cancels the container offset.
**Key:** Element stays in normal flow — content below still pushes down naturally.
**Scroll fix:** Add `overflow-x-hidden` to the parent `<main>` to prevent horizontal scrollbar.

---

## 2. Vertical Lines Always Visible on Zoom

Using `max-w-3xl mx-auto` breaks on zoom because it relies on full viewport width.
Fix with `min()` + `left-1/2 -translate-x-1/2`:

```tsx
<div
  className="fixed inset-y-0 left-1/2 -translate-x-1/2 pointer-events-none z-0"
  style={{ width: 'min(48rem, 100vw - 2rem)' }}
>
  <VerticalLine side="left" />
  <VerticalLine side="right" />
</div>
```

**Why:** `min()` picks the smaller of `48rem` or `100vw - 2rem` — so at any zoom level the lines stay `1rem` inside each edge of the viewport.

---

## 3. Sticky Navbar

`sticky top-0` only works when the scroll happens on a **direct ancestor**.
Common breakers:
- `overflow-x-hidden` on a parent (breaks sticky)
- `ThemeProvider` injecting a wrapper div
- `<main>` with overflow set

**Solution:** Let `<body>` be the natural scroll container. Use a plain `<div>` wrapper instead of `<main>` with overflow.

```tsx
<body>
  <ThemeProvider>
    <div className="relative min-h-screen">
      <div className="sticky top-0 z-50">
        {/* navbar */}
      </div>
      {/* page content */}
    </div>
  </ThemeProvider>
</body>
```

---

## 4. Margin vs Padding — Fixed vs Scrollable Space

| Property | Behavior |
|---|---|
| `margin` | Outside the element — scrolls away |
| `padding` | Inside the element — sticks with it |

**Rule:** If you want a gap that stays fixed (like space above a sticky navbar), use `padding` on the sticky element — never `margin`.

```tsx
// ✅ gap stays fixed on scroll
<div className="sticky top-0 pt-2">

// ❌ gap scrolls away
<div className="sticky top-0 mt-2">
```

---

## 5. Z-index and Background Overlap

When a sticky element has a full-width `bg-background`, it paints over fixed elements (like vertical lines) at the edges.

**Fix:** Don't put background on the full-width wrapper. Put it only on the inner container:

```tsx
// ❌ covers vertical lines at edges
<div className="sticky top-0 bg-background">

// ✅ background only within max-w-3xl, lines show through at edges  
<div className="sticky top-0">
  <HorizontalLineSeparator className="bg-background" />
  <Container className="bg-background">
    <Navbar />
  </Container>
  <HorizontalLineSeparator className="bg-background" />
</div>
```

---

## 6. HorizontalBorderSeparator — h as Prop

Instead of using two `absolute` separator lines with different `top` values, use one component with a height prop:

```tsx
export const HorizontalBorderSeparator = ({
  className,
  h = 10,
}: {
  className?: string;
  h?: number;
}) => {
  return (
    <div
      className={cn('w-full border-y border-neutral-200 dark:border-neutral-800', className)}
      style={{ height: `${h * 4}px` }}
    />
  );
};
```

**Math:** Tailwind spacing scale = `1 unit = 4px`. So `h={10}` → `40px` = `h-10`.

---

## 7. Fixed vs Absolute for Vertical Lines

| | `absolute` | `fixed` |
|---|---|---|
| Reference point | nearest positioned ancestor | viewport |
| Scrolls? | yes | no |
| Use when | decorative, in-flow | always-visible chrome |

Vertical lines should be `fixed` so they stay visible on scroll.

---

## Final Layout Structure

```tsx
<body>                                          // natural scroll container
  <ThemeProvider>
    <div className="relative min-h-screen">

      {/* always visible, zoom-safe vertical lines */}
      <div className="fixed inset-y-0 left-1/2 -translate-x-1/2 pointer-events-none z-0"
           style={{ width: 'min(48rem, 100vw - 2rem)' }}>
        <VerticalLine side="left" />
        <VerticalLine side="right" />
      </div>

      {/* sticky nav — bg only on inner elements */}
      <div className="sticky top-0 z-20 pt-2">
        <HorizontalLineSeparator className="bg-background" />
        <Container className="bg-background">
          <Navbar />
        </Container>
        <HorizontalLineSeparator className="bg-background" />
      </div>

      {/* page content — normal flow */}
      <Container>
        {children}
      </Container>

    </div>
  </ThemeProvider>
</body>
```