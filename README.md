# Design System

Production-ready design system tokens extracted from Figma. Built for AI coding tools and human developers.

## Installation

```bash
npm install @somayiasamy/mnh-ds
```

Or install directly from GitHub:

```bash
npm install github:somayiasamy/Mnh_DS
```

## Usage

### With Tailwind CSS (Recommended)

```js
// tailwind.config.js
module.exports = {
  presets: [
    require('@somayiasamy/mnh-ds').tailwindPreset
  ],
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
}
```

**Important: Tailwind Strategy**

This preset uses `theme.extend`, which means:
- ✅ Your design tokens are **added** to Tailwind's defaults
- ✅ You can still use standard Tailwind classes (`p-4`, `text-lg`, etc.)
- ✅ Your custom tokens **augment** rather than replace the defaults

**Why this approach?**
- Provides flexibility to use both your design system AND Tailwind utilities
- Allows gradual adoption without breaking existing Tailwind code
- Gives you escape hatches for edge cases not covered by your design system

**If you want ONLY your design tokens** (no Tailwind defaults), modify the preset to use `theme: {}` instead of `theme.extend: {}` in `src/config/tailwind-preset.ts`.

### Available Tailwind Classes

#### Spacing
- Scale: `scale-0`, `scale-1`, `scale-2`, etc.
- Sizes: `size-3xs`, `size-xs`, `size-md`, `size-xl`, etc.
- Container: `container-none`, `container-sm`, `container-lg`, etc.
- Sections: `section-h-md`, `section-v-xs`, etc.

#### Colors
- Neutrals: `neutral-50`, `neutral-100`, `neutral-900`, etc.
- Brand: `brand-50`, `brand-500`, `brand-900`, etc.
- System: `system-blue-500`, `system-green-600`, etc.
- Accents: `accent-purple-500`, `accent-melon-600`, etc.

#### Semantic Colors
- Background: `bg-neutral-subtle`, `bg-brand-default`, `bg-positive-default`, etc.
- Text: `text-neutral-default`, `text-brand-default`, `text-danger-bold`, etc.
- Border: `border-neutral-default`, `border-brand-default`, `border-info-default`, etc.

#### Typography
- Display: `text-display-lg`, `text-display-md`, `text-display-sm`
- Heading: `text-heading-lg`, `text-heading-md`, `text-heading-sm`
- Body: `text-body-lg`, `text-body-md`, `text-body-sm`
- Label: `text-label-lg`, `text-label-md`, `text-label-sm`, `text-label-xs`
- Font family: `font-ar`
- Font weight: `font-regular`, `font-medium`, `font-semibold`

#### Border
- Width: `border-sm`, `border-md`, `border-xl`
- Radius: `rounded-none`, `rounded-xs`, `rounded-md`, `rounded-pill`, etc.

### Direct Token Usage

```typescript
import { colors, spacing, typography } from '@somayiasamy/mnh-ds';

// Use tokens directly
const primaryColor = colors.brand[500];
const containerPadding = spacing.container.md;
const headingFont = typography.fontSize.heading.lg;
```

### Semantic Theme

```typescript
import { semanticColors } from '@somayiasamy/mnh-ds';

// Use semantic mappings
const backgroundColor = semanticColors.background.neutral.default;
const textColor = semanticColors.text.neutral.default;
const borderColor = semanticColors.border.neutral.default;
```

## Design Token Structure

### Scale System
Base 8px scale from 0px to 104px (plus 999px for pill radius)

### Colors
- 7 complete palettes (neutrals, brand, 5 system colors)
- 6 accent palettes
- 195 semantic color mappings

### Spacing
- Container spacing (9 values)
- Section spacing (horizontal: 1, vertical: 6)

### Typography
- Font: Expo Arabic
- 3 weights: regular (400), medium (500), semibold (600)
- 4 size categories: display, heading, body, label
- Complete size/line-height pairs for all variants

### Borders
- 3 widths
- 9 radius values

## AI Tool Integration

This package is optimized for AI coding tools like Cursor, Lovable, etc.

The design tokens are:
- ✅ Strongly typed
- ✅ Semantically named
- ✅ Fully documented
- ✅ Zero assumptions
- ✅ Tailwind-ready

## Publishing

### To GitHub
```bash
git init
git add .
git commit -m "Initial design system"
git remote add origin <your-repo-url>
git push -u origin main
```

### To NPM
```bash
npm publish --access public
```

## Development

```bash
# Install dependencies
npm install

# Build
npm run build
```

## License

MIT
