# Mnh Design System

[![npm version](https://img.shields.io/npm/v/@somayiasamy/mnh-ds.svg)](https://www.npmjs.com/package/@somayiasamy/mnh-ds)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

Production-ready design system tokens extracted from Figma. Built for AI coding tools and developers.

## ✨ Features

- 🎨 **195 Semantic Color Mappings** - Complete palette from Figma design system
- 📏 **Comprehensive Spacing Scale** - 21 scale values + container/section spacing
- 🔤 **Typography System** - Expo Arabic with 13 size/line-height combinations
- 🎯 **Tailwind CSS Ready** - Drop-in preset for instant integration
- 🤖 **AI Tool Optimized** - Works seamlessly with Cursor, Lovable, etc.
- 📦 **Zero Dependencies** - Pure token definitions
- 🔒 **Type Safe** - Full TypeScript definitions included

## 📦 Installation

```bash
npm install @somayiasamy/mnh-ds
```

Or install directly from GitHub:

```bash
npm install github:somayiasamy/Mnh_DS
```

## 🚀 Quick Start

### 1. Configure Tailwind CSS

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

### 2. Use in Your Components

```jsx
function App() {
  return (
    <div className="p-container-lg bg-neutral-50">
      <h1 className="text-display-lg font-semibold text-brand-500">
        Hello Mnh Design System!
      </h1>
      <p className="text-body-md text-neutral-600">
        Using design tokens from Figma
      </p>
      <button className="bg-brand-500 text-neutral-white rounded-md p-container-md">
        Get Started
      </button>
    </div>
  );
}
```

## 📚 Documentation

- [**Getting Started Guide**](GETTING_STARTED.md) - Complete setup instructions
- [**Project Summary**](PROJECT_SUMMARY.md) - Full token coverage and audit
- [**Design Decisions**](DESIGN_DECISIONS.md) - Architecture and rationale
- [**README**](README.md) - Detailed usage documentation

## 🎨 What's Included

### Colors
- **13 Complete Palettes**: Neutrals, Brand, 5 System colors, 6 Accent colors
- **195 Semantic Mappings**: Background, text, icon, and border colors
- **Opacity Tokens**: For overlays and state layers

### Spacing
- **21 Scale Values**: 0px → 104px (plus 999px for pill radius)
- **12 Size Tokens**: 3xs → 6xl
- **Container Spacing**: 9 values
- **Section Spacing**: Horizontal and vertical variants

### Typography
- **Font Family**: Expo Arabic
- **3 Weights**: Book (400), Medium (500), SemiBold (600)
- **4 Categories**: Display, Heading, Body, Label
- **13 Size Pairs**: Complete font-size/line-height combinations

### Borders
- **3 Widths**: sm (0px), md (1px), xl (4px)
- **9 Radius Values**: none → pill (including 2xs, xs, sm, md, lg, xl, 2xl)

## 💡 Usage Examples

### Direct Token Access

```typescript
import { colors, spacing, typography } from '@somayiasamy/mnh-ds';

const primaryColor = colors.brand[500];  // #005eb8
const padding = spacing.container.md;     // 8px
const fontSize = typography.fontSize.heading.lg;  // 20px
```

### Semantic Colors

```typescript
import { semanticColors } from '@somayiasamy/mnh-ds';

const bgColor = semanticColors.background.neutral.default;  // #ffffff
const textColor = semanticColors.text.neutral.default;      // #0c2339
const borderColor = semanticColors.border.brand.default;    // #005eb8
```

### Available Tailwind Classes

```html
<!-- Colors -->
<div class="bg-brand-500 text-neutral-white border-positive-default">

<!-- Spacing -->
<div class="p-container-md m-scale-4 gap-section-v-lg">

<!-- Typography -->
<h1 class="text-display-lg font-semibold font-ar">

<!-- Borders -->
<div class="border-md rounded-pill">
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Build TypeScript
npm run build

# Link locally for development
npm link
```

## 📖 Design Philosophy

This is a **design contract**, not a playground.

Every value is:
1. ✅ Directly extracted from Figma PDF exports
2. ✅ Documented with source
3. ✅ Semantically mapped
4. ✅ Type-safe
5. ✅ Production-ready

**No experiments. No demos. No assumptions** (except documented conversions for web compatibility).

## 🤝 Contributing

This design system is extracted from Figma. To update:

1. Export new design tokens from Figma
2. Update `src/config/tokens.ts` with exact values
3. Update `src/config/theme.ts` for semantic mappings
4. Rebuild and test
5. Submit PR

## 📝 License

MIT

## 🔗 Links

- [NPM Package](https://www.npmjs.com/package/@somayiasamy/mnh-ds)
- [GitHub Repository](https://github.com/somayiasamy/Mnh_DS)
- [Issues](https://github.com/somayiasamy/Mnh_DS/issues)

---

**Made with ❤️ for designers and developers**
