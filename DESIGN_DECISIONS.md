# Design Decisions

## 1. Tailwind Configuration: `theme.extend` vs `theme`

### Decision: Use `theme.extend`

**Rationale:**
This design system uses `theme.extend` in the Tailwind preset, which means your design tokens are **added to** Tailwind's default configuration rather than replacing it.

### Implications:

**✅ What This Enables:**
- Use design system tokens: `bg-brand-500`, `p-container-md`, `text-heading-lg`
- Use Tailwind defaults: `p-4`, `text-lg`, `bg-blue-500`
- Both work simultaneously in the same project

**Example:**
```jsx
// Your design tokens
<div className="bg-brand-500 p-container-lg rounded-md">

// Tailwind defaults
<div className="bg-blue-500 p-4 rounded-lg">

// Mixed approach
<div className="bg-brand-500 p-4 rounded-md">
```

### Why This Approach?

1. **Gradual Migration**: Teams can adopt design system tokens incrementally
2. **Escape Hatches**: Standard Tailwind utilities available for edge cases
3. **Third-party Compatibility**: Libraries using Tailwind defaults will work
4. **Developer Experience**: Familiar Tailwind utilities remain available

### Alternative: Strict Mode

If you want **ONLY your design tokens** with no Tailwind defaults:

**Edit:** `src/config/tailwind-preset.ts`

```typescript
// CHANGE FROM:
const preset: Partial<Config> = {
  theme: {
    extend: {
      spacing: { ... },
      colors: { ... },
      // ...
    },
  },
};

// TO:
const preset: Partial<Config> = {
  theme: {
    spacing: { ... },
    colors: { ... },
    // ...
  },
};
```

**Result:** Only your design tokens will be available. Standard Tailwind classes won't work.

**Use this if:**
- You want strict design system enforcement
- You don't want developers using arbitrary Tailwind values
- You're starting fresh with no existing Tailwind code

## 2. Token Organization

### Three-Layer Architecture

```
tokens.ts (Raw values from PDF)
    ↓
theme.ts (Semantic mappings)
    ↓
tailwind-preset.ts (Tailwind injection)
```

**Why?**
- Clear separation of concerns
- Single source of truth (tokens.ts)
- Easy to update from new Figma exports
- Semantic layer provides meaning to raw values

## 3. No Component Library

This package provides **tokens only**, not components.

**Why?**
- Tokens are universal; components are framework-specific
- Keeps package minimal and focused
- Usable with any framework (React, Vue, Svelte, etc.)
- AI tools can generate components using these tokens

**Recommended Pattern:**
Build your component library separately, consuming these tokens:
```typescript
import { colors, spacing } from '@somayiasamy/mnh-ds';

// Then build your Button, Input, etc. components
```

## 4. TypeScript Compilation Target

**Target:** ES2020, CommonJS modules

**Why?**
- Maximum compatibility with Node.js and bundlers
- Works with both `require()` and `import`
- Supported by all major build tools (Webpack, Vite, etc.)

## 5. Font Handling

**Font:** Expo Arabic specified in tokens, but **not bundled** in package.

**Why?**
- Fonts are large binary files
- Licensing considerations
- Projects may load fonts differently (CDN, self-hosted, etc.)

**Your Responsibility:**
Ensure Expo Arabic is available in your project via:
- Google Fonts
- Adobe Fonts
- Self-hosted font files
- Font service provider

### Font Weight Conversion

**PDF Values vs CSS Values:**

The PDF specifies named font weights specific to Expo Arabic:
- `Book` (labeled as "regular")
- `Medium`
- `SemiBold`

**Conversion Applied:**
```typescript
// PDF → CSS
Book      → 400 (font-weight: normal)
Medium    → 500 (font-weight: 500)
SemiBold  → 600 (font-weight: 600)
```

**Why Convert?**
- CSS `font-weight` property requires numeric values (100-900) or keywords
- Named weights like "Book" are font-specific and not valid CSS
- Expo Arabic implements standard OpenType weight values (400, 500, 600)
- This mapping follows the font's actual weight specification

**Verification:**
When using Expo Arabic font in CSS:
```css
font-family: 'Expo Arabic';
font-weight: 400; /* Loads "Book" weight */
font-weight: 500; /* Loads "Medium" weight */
font-weight: 600; /* Loads "SemiBold" weight */
```

This is **not an assumption** - it's a necessary conversion from font-specific naming to CSS-compatible values based on the font's OpenType specification.

---

**These decisions can be changed.** The source code is yours to modify. These represent the defaults based on the requirements provided.
