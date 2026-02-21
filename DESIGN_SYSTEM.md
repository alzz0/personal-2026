# ByteCap Design System

A comprehensive reference for building consistent, high-quality UIs inspired by **Stripe's** aesthetic — clean geometry, subtle depth, and meticulous attention to micro-interactions.

All utility classes live in `app/globals.css` under the `bc-` prefix.

---

## Core Principles

| Principle                 | Description                                                                                                |
| :------------------------ | :--------------------------------------------------------------------------------------------------------- |
| **Content First**         | Minimal chrome; let data and actions breathe with generous whitespace.                                     |
| **Consistent Geometry**   | `rounded-lg` (8px) for all interactive elements and cards — never mix radii arbitrarily.                   |
| **Subtle Depth**          | `shadow-sm` for elevated surfaces, `shadow-md` on hover/focus to imply lift. No heavy drop-shadows.        |
| **150ms Transitions**     | All hover/focus/active transitions use `duration-150` for a crisp, responsive feel.                        |
| **Dark Mode First**       | Design in dark (`#0A0A0B`), validate in light (`#FFFFFF`). Both are first-class.                           |
| **Focus = Ring + Border** | Stripe-style: border shifts to indigo + soft `ring-2 ring-indigo-500/10` glow. Never just a border change. |
| **Micro-interactions**    | `active:scale-[0.98]` on buttons, `hover:border-gray-300` on cards — small cues that feel alive.           |

---

## 1. Color System

### Backgrounds

| Token            | Light                         | Dark              | Usage                  |
| :--------------- | :---------------------------- | :---------------- | :--------------------- |
| Page             | `bg-white`                    | `bg-[#0A0A0B]`    | Main app background    |
| Page alt         | `bg-[#F9FAFB]` / `bg-gray-50` | `bg-[#000000]`    | Workspace, app shell   |
| Surface          | `bg-white`                    | `bg-[#0A0A0B]`    | Cards, panels          |
| Surface elevated | `bg-white`                    | `bg-[#050505]`    | Elevated cards, modals |
| Surface recessed | `bg-gray-50/50`               | `bg-white/[0.02]` | Input fields, insets   |

### Borders

| Token             | Light             | Dark                  |
| :---------------- | :---------------- | :-------------------- |
| Default           | `border-gray-200` | `border-white/[0.06]` |
| Hover             | `border-gray-300` | `border-white/[0.12]` |
| Elevated          | `border-gray-200` | `border-white/[0.08]` |
| Subtle (dividers) | `border-gray-100` | `border-white/[0.04]` |

### Brand Colors

| Name             | Value                    | Usage                                       |
| :--------------- | :----------------------- | :------------------------------------------ |
| Indigo (Primary) | `#6366f1` (`indigo-500`) | Buttons, focus rings, badges, active states |
| Indigo hover     | `indigo-600`             | Primary button hover                        |
| Neon (Accent)    | `#c4ff00`                | High-visibility CTA, marketing              |
| Emerald          | `emerald-500`            | Success states, save indicators             |
| Amber            | `amber-500`              | Warnings                                    |
| Red              | `red-500`                | Errors, destructive actions                 |

### Text Colors

| Token     | Light      | Dark                   | Class                         |
| :-------- | :--------- | :--------------------- | :---------------------------- |
| Primary   | `gray-900` | `white`                | `bc-text-h*`, `bc-text-value` |
| Secondary | `gray-700` | `gray-300`             | `bc-text-body`                |
| Muted     | `gray-500` | `gray-400` / `#a1a1aa` | `bc-text-muted`, `bc-label`   |
| Subtle    | `gray-400` | `gray-500`             | Placeholders, tertiary info   |

---

## 2. Typography

Font: **Inter** (system fallback: `-apple-system, BlinkMacSystemFont, sans-serif`)

### Headings

| Class        | Size               | Weight   | Tracking         |
| :----------- | :----------------- | :------- | :--------------- |
| `bc-text-h1` | `text-4xl` (36px)  | Bold     | `tracking-tight` |
| `bc-text-h2` | `text-3xl` (30px)  | Semibold | `tracking-tight` |
| `bc-text-h3` | `text-2xl` (24px)  | Semibold | `tracking-tight` |
| `bc-text-h4` | `text-xl` (20px)   | Medium   | `tracking-tight` |
| `bc-text-h5` | `text-lg` (18px)   | Medium   | `tracking-tight` |
| `bc-text-h6` | `text-base` (16px) | Medium   | `tracking-tight` |

### Body & Labels

| Class              | Size | Weight           | Color                |
| :----------------- | :--- | :--------------- | :------------------- |
| `bc-text-body`     | 14px | Regular          | gray-700 / gray-300  |
| `bc-text-body-sm`  | 12px | Regular          | gray-600 / gray-400  |
| `bc-text-label`    | 12px | Medium uppercase | gray-500 / gray-400  |
| `bc-text-caption`  | 11px | Regular          | gray-500             |
| `bc-text-muted`    | 14px | Regular          | gray-500 / `#a1a1aa` |
| `bc-text-muted-sm` | 12px | Regular          | gray-500 / `#a1a1aa` |

### Values & Data

| Class              | Size | Weight   | Notes                              |
| :----------------- | :--- | :------- | :--------------------------------- |
| `bc-text-value`    | 14px | Semibold | gray-900 / white                   |
| `bc-text-value-lg` | 16px | Semibold | —                                  |
| `bc-text-value-xl` | 20px | Bold     | `tabular-nums` for aligned numbers |

### Semantic Text

| Class             | Color                          |
| :---------------- | :----------------------------- |
| `bc-text-accent`  | indigo-500                     |
| `bc-text-success` | emerald-600 / emerald-400      |
| `bc-text-warning` | amber-600 / amber-400          |
| `bc-text-error`   | red-600 / red-400              |
| `bc-text-link`    | indigo-500, hover fades to 80% |

**Inline typography (non-class):** Use `text-sm font-medium text-gray-900 dark:text-white` for section titles, `text-xs text-gray-500 dark:text-gray-400` for descriptions.

---

## 3. Layout & Containers

### Cards

| Class              | Padding     | Border radius | Border (dark)  | Shadow      | Use case                         |
| :----------------- | :---------- | :------------ | :------------- | :---------- | :------------------------------- |
| `bc-card`          | `p-5`       | `rounded-lg`  | `white/[0.06]` | none        | Standard sections                |
| `bc-card-compact`  | `px-4 py-3` | `rounded-lg`  | `white/[0.06]` | none        | Inline settings, toggles         |
| `bc-card-elevated` | `p-6`       | `rounded-lg`  | `white/[0.08]` | `shadow-sm` | Featured sections, scene editors |

### Navigation

| Class              | Description                                                                  |
| :----------------- | :--------------------------------------------------------------------------- |
| `bc-sticky-header` | Sticky `top-0` header with `bg-white/90 backdrop-blur-xl` and bottom border. |
| `bc-page-header`   | `max-w-7xl` container inside sticky header — `h-14`, `px-6`, flex row.       |

### Stats & Dividers

| Class              | Description                                                        |
| :----------------- | :----------------------------------------------------------------- |
| `bc-stats-row`     | Flex row for metadata/stats, `text-[10px] text-gray-400`.          |
| `bc-stats-divider` | 1px vertical divider (`w-px`), `bg-gray-200 dark:bg-white/[0.06]`. |

---

## 4. Buttons & Actions

All buttons: `rounded-lg`, `text-xs font-medium`, `duration-150` transitions.

### Primary Hierarchy

| Class              | Height | Style                                | Hover                     | Active         |
| :----------------- | :----- | :----------------------------------- | :------------------------ | :------------- |
| `bc-btn-primary`   | `h-10` | `bg-indigo-500 text-white shadow-sm` | `bg-indigo-600 shadow-md` | `scale-[0.98]` |
| `bc-btn-secondary` | `h-10` | `bg-white border-gray-200 shadow-sm` | `bg-gray-50`              | `scale-[0.98]` |
| `bc-btn-accent`    | `h-10` | `bg-[#c4ff00] text-gray-900`         | `bg-[#d4ff33] shadow-lg`  | —              |
| `bc-btn-ghost`     | `h-8`  | transparent                          | `bg-gray-100`             | —              |

### Utility Buttons

| Class            | Size      | Description                             |
| :--------------- | :-------- | :-------------------------------------- |
| `bc-icon-btn`    | `h-9 w-9` | Bordered icon button, `shadow-sm`.      |
| `bc-icon-btn-sm` | `h-7 w-7` | Subtle icon button, no border.          |
| `bc-btn-compact` | `h-8`     | Small inline action button with border. |

### Disabled State

Apply `bc-btn-disabled` alongside any button class to override to gray/muted styling with `cursor-not-allowed`.

---

## 5. Inputs & Forms

All inputs: `rounded-lg`, `shadow-sm`, `duration-150` transitions, Stripe-style **focus ring** (`focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/10`).

| Class              | Height | Description                                       |
| :----------------- | :----- | :------------------------------------------------ |
| `bc-input`         | `h-10` | Standard text input, full-width.                  |
| `bc-input-compact` | `h-9`  | Slightly shorter variant with `bg-gray-50/50`.    |
| `bc-textarea`      | auto   | Multi-line input, `resize-none`.                  |
| `bc-search-input`  | `h-9`  | Left-padded (`pl-9`) for search icon.             |
| `bc-search-icon`   | —      | Absolutely positioned icon inside search wrapper. |

### Selects & Dropdowns

| Class                       | Description                                          |
| :-------------------------- | :--------------------------------------------------- |
| `bc-select-trigger`         | Full-width button styled as a select input (`h-10`). |
| `bc-select-chevron`         | Chevron icon, rotates when open.                     |
| `bc-dropdown-content`       | Floating dropdown panel with `shadow-lg`.            |
| `bc-dropdown-item`          | Individual option row with hover state.              |
| `bc-dropdown-item-selected` | Selected option with indigo tint.                    |

### Form Labels

| Class           | Description                                                           |
| :-------------- | :-------------------------------------------------------------------- |
| `bc-label`      | `text-[11px] font-medium text-gray-500`, flex row with optional icon. |
| `bc-label-icon` | `h-3 w-3` icon inside label.                                          |

### Selection Cards (radio/option groups)

| Class                        | Description                                      |
| :--------------------------- | :----------------------------------------------- |
| `bc-selection-card`          | Option card, default border.                     |
| `bc-selection-card-selected` | Active option: indigo border + ring + tinted bg. |
| `bc-selection-card-title`    | Option name text.                                |
| `bc-selection-card-subtitle` | `text-[10px]` description.                       |

---

## 6. Badges & Indicators

| Class                   | Style                                                 | Use case                        |
| :---------------------- | :---------------------------------------------------- | :------------------------------ |
| `bc-badge`              | `bg-indigo-500/10 text-indigo-500`                    | Active counts, feature labels   |
| `bc-badge-muted`        | `bg-gray-100 text-gray-500`                           | Secondary indicators            |
| `bc-badge-count`        | `bg-gray-100 text-gray-500`                           | Numeric counters                |
| `bc-step-badge`         | `h-7 w-7 rounded-lg bg-indigo-500/10 text-indigo-500` | Numbered step indicators ("01") |
| `bc-step-badge-emerald` | Same but emerald                                      | Success / completed steps       |
| `bc-step-badge-orange`  | Same but orange                                       | Warning steps                   |
| `bc-step-badge-muted`   | Gray with border                                      | Inactive / upcoming steps       |

---

## 7. Modals & Dialogs

| Class               | Description                                                    |
| :------------------ | :------------------------------------------------------------- |
| `bc-modal-backdrop` | Full-screen fixed overlay container (`z-[99999]`).             |
| `bc-modal-overlay`  | `bg-black/80 backdrop-blur-sm` background.                     |
| `bc-modal-content`  | `max-w-2xl rounded-xl shadow-2xl` content panel.               |
| `bc-modal-header`   | `h-14` header with bottom border, flexed title + close button. |
| `bc-modal-footer`   | Footer with top border, flexed actions.                        |
| `bc-modal-close`    | `h-8 w-8` close icon button.                                   |

---

## 8. Scene & Item Cards

| Class              | Description                                                        |
| :----------------- | :----------------------------------------------------------------- |
| `bc-scene-card`    | `rounded-lg` card for ordered scene items with hover border shift. |
| `bc-scene-header`  | Scene card header with bottom border, flex row.                    |
| `bc-scene-number`  | `h-6 w-6` indigo-tinted number badge.                              |
| `bc-scene-content` | Scene card body, `space-y-4 p-4`.                                  |

---

## 9. Specialized Components

### Filter Tabs

| Class                  | Description                                            |
| :--------------------- | :----------------------------------------------------- |
| `bc-filter-tabs`       | Container: `rounded-lg bg-gray-100 p-1`.               |
| `bc-filter-tab`        | Individual tab, gray → active.                         |
| `bc-filter-tab-active` | Active tab: `bg-white shadow-sm dark:bg-white/[0.08]`. |

### Voice/Provider Cards

| Class                    | Description                                     |
| :----------------------- | :---------------------------------------------- |
| `bc-voice-card`          | Selectable voice card with radio-like behavior. |
| `bc-voice-card-selected` | Active: indigo border + ring.                   |
| `bc-voice-play-btn`      | Play/preview button inside voice card.          |

### Grid Cards (Style Picker)

| Class                   | Description                               |
| :---------------------- | :---------------------------------------- |
| `bc-grid-card`          | Image card with hover animation.          |
| `bc-grid-card-selected` | Active: indigo border + ring + tinted bg. |
| `bc-grid-card-check`    | Positioned checkmark circle.              |

### Accordions

| Class                                              | Description                                 |
| :------------------------------------------------- | :------------------------------------------ |
| `bc-accordion`                                     | Wrapper with rounded border.                |
| `bc-accordion-expanded` / `bc-accordion-collapsed` | State-based border + bg.                    |
| `bc-accordion-trigger`                             | Click target with flex layout.              |
| `bc-accordion-icon`                                | Icon container that shifts color on expand. |

---

## 10. Loading & Empty States

### Loading

| Class                | Description                                         |
| :------------------- | :-------------------------------------------------- |
| `bc-spinner`         | `h-10 w-10` spinning border circle, indigo accent.  |
| `bc-spinner-sm`      | `h-3.5 w-3.5` inline spinner.                       |
| `bc-spinner-white`   | White spinner for use on colored backgrounds.       |
| `bc-loading-overlay` | Full-screen `bg-black/60 backdrop-blur-md` overlay. |

### Empty States

| Class            | Description                         |
| :--------------- | :---------------------------------- |
| `bc-empty-state` | Centered column with dashed border. |
| `bc-empty-icon`  | `h-10 w-10` icon container.         |
| `bc-empty-text`  | `text-xs text-gray-500` message.    |

---

## 11. Summary & Sidebar

| Class              | Description                                     |
| :----------------- | :---------------------------------------------- |
| `bc-summary-row`   | Flex `justify-between` row for key-value pairs. |
| `bc-summary-label` | `text-[11px] text-gray-500`.                    |
| `bc-summary-value` | `text-[11px] font-medium`, truncated at 120px.  |

---

## 12. Editor-Specific Classes

The editor uses a parallel set of `bc-editor-*` classes for the video editing interface:

| Category     | Classes                                                                                                                     |
| :----------- | :-------------------------------------------------------------------------------------------------------------------------- |
| Backgrounds  | `bc-editor-bg`, `bc-editor-stage`, `bc-editor-panel`, `bc-editor-panel-right`                                               |
| Cards        | `bc-editor-card`, `bc-editor-elevated`, `bc-editor-container`, `bc-editor-inset`, `bc-editor-floating`                      |
| Borders      | `bc-editor-border`, `bc-editor-border-subtle`, `bc-editor-border-strong`, `bc-editor-divider`                               |
| Text         | `bc-editor-text`, `bc-editor-text-muted`, `bc-editor-text-subtle`, `bc-editor-label`, `bc-editor-value`                     |
| Buttons      | `bc-editor-btn`, `bc-editor-btn-primary`, `bc-editor-btn-ghost`, `bc-editor-icon-btn`                                       |
| Inputs       | `bc-editor-input`, `bc-editor-select`                                                                                       |
| Timeline     | `bc-editor-timeline`, `bc-editor-track`, `bc-editor-clip`, `bc-editor-scrubber`, `bc-editor-playback`, `bc-editor-play-btn` |
| Scrollbars   | `bc-scrollbar`, `bc-editor-scroll`                                                                                          |
| Active state | `bc-editor-active`                                                                                                          |

---

## 13. Marketing Typography

Separate set of classes for the public-facing marketing pages:

| Class                            | Description                                                |
| :------------------------------- | :--------------------------------------------------------- |
| `bc-marketing-hero`              | Hero headline `text-2xl sm:text-6xl font-medium uppercase` |
| `bc-marketing-headline`          | Section headline `text-2xl lg:text-4xl font-bold`          |
| `bc-marketing-headline-gradient` | Gradient text (emerald green)                              |
| `bc-marketing-subtitle`          | Body text `text-base text-gray-600`                        |
| `bc-marketing-card-title`        | Card titles `text-xl font-bold`                            |
| `bc-marketing-card-desc`         | Card descriptions `text-sm leading-relaxed`                |
| `bc-marketing-badge`             | Brand green badge text                                     |
| `bc-marketing-cta`               | CTA button text `text-sm font-semibold text-white`         |
| `bc-marketing-stat-value`        | Large stat number in emerald green                         |

---

## Usage Patterns

### Standard Page Layout

```jsx
<div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-[#0A0A0B] dark:text-white">
  {/* Sticky Header */}
  <header className="bc-sticky-header">
    <div className="bc-page-header">
      <button className="bc-icon-btn">
        <ArrowLeftIcon className="h-4 w-4" />
      </button>
      <div className="bc-stats-divider h-4" />
      <h1 className="text-sm font-medium text-gray-900 dark:text-white">
        Page Title
      </h1>
    </div>
  </header>

  {/* Content */}
  <div className="mx-auto max-w-7xl px-6 py-8">
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
        Section Title
      </h2>
      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
        Description text
      </p>
    </div>
    {/* ... */}
  </div>
</div>
```

### Form Card with Steps

```jsx
<div className="bc-card">
  <div className="mb-5 flex items-center gap-3">
    <div className="bc-step-badge">01</div>
    <h3 className="text-sm font-medium text-gray-900 dark:text-white">Step Title</h3>
  </div>

  <div className="space-y-5">
    <div>
      <label className="bc-label">
        <svg className="bc-label-icon" .../>
        Field Name
      </label>
      <input className="bc-input" placeholder="Enter value..." />
    </div>
  </div>
</div>
```

### Modal Dialog

```jsx
<div className="bc-modal-backdrop">
  <div className="bc-modal-overlay" onClick={onClose} />
  <div className="bc-modal-content">
    <div className="bc-modal-header">
      <h2 className="text-sm font-semibold text-gray-900 dark:text-white">
        Title
      </h2>
      <button className="bc-modal-close" onClick={onClose}>
        <XMarkIcon className="h-4 w-4" />
      </button>
    </div>
    <div className="p-5">{/* body */}</div>
    <div className="bc-modal-footer">
      <button className="bc-btn-secondary">Cancel</button>
      <button className="bc-btn-primary">Confirm</button>
    </div>
  </div>
</div>
```

### Loading Overlay

```jsx
<AnimatePresence>
  {isLoading && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bc-loading-overlay"
    >
      <div className="bc-card-elevated flex flex-col items-center gap-4 px-10 py-8 text-center">
        <div className="bc-spinner" />
        <div className="space-y-1">
          <h3 className="text-sm font-medium text-gray-900 dark:text-white">
            Processing
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            This may take a moment
          </p>
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>
```

---

## Icons

- **Lucide React** — primary icon library (buttons, inline actions)
- **Heroicons** (outline) — navigation, form labels
- Default size: `h-4 w-4` in buttons, `h-3.5 w-3.5` in compact buttons, `h-3 w-3` in labels

---

## Stripe-Aligned Conventions Checklist

When building a new component, verify:

- [ ] All interactive elements use `rounded-lg` (8px)
- [ ] All transitions are `duration-150`
- [ ] Inputs have `shadow-sm` + `focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-400`
- [ ] Buttons have `shadow-sm` and `active:scale-[0.98]`
- [ ] Cards use `border-gray-200 dark:border-white/[0.06]` (never `border-gray-300` at rest)
- [ ] Dark backgrounds are `#0A0A0B` (pages) or `#050505` (elevated)
- [ ] Text hierarchy: `text-sm font-medium` for titles, `text-xs text-gray-500` for descriptions
- [ ] Spacing between sections is `space-y-5` or `space-y-6`
- [ ] Labels use `bc-label` (11px, medium, muted, with optional icon)
- [ ] No bare color changes without a transition
- [ ] Modal overlays use `backdrop-blur-sm`, not just opacity
