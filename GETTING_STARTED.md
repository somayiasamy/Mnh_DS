# 🚀 Getting Started

## Quick Start

### 1. Install Dependencies
```bash
cd my-design-system
npm install
```

### 2. Test the Package
```bash
node -e "const pkg = require('./dist/index.js'); console.log('✅ Works!'); console.log('Brand color:', pkg.colors.brand[500]);"
```

### 3. Use in Your Project

#### Option A: Link Locally (Development)
```bash
# In this package directory
npm link

# In your project directory
npm link @somayiasamy/mnh-ds
```

#### Option B: Publish to NPM
```bash
# Already configured for @somayiasamy/mnh-ds
npm publish --access public
```

#### Option C: Install from GitHub
```bash
npm install github:somayiasamy/Mnh_DS
```

## Example Project Setup

### 1. Create a new React app
```bash
npx create-react-app my-app
cd my-app
```

### 2. Install Tailwind CSS
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 3. Install your design system
```bash
npm install @somayiasamy/mnh-ds
```

### 4. Configure Tailwind
```js
// tailwind.config.js
module.exports = {
  presets: [
    require('@somayiasamy/mnh-ds').tailwindPreset
  ],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
}
```

### 5. Use in your components
```jsx
// src/App.js
function App() {
  return (
    <div className="container-md">
      <h1 className="text-display-lg font-semibold text-brand-500">
        Hello Design System!
      </h1>
      <p className="text-body-md text-neutral-600">
        Using Expo Arabic font with all design tokens.
      </p>
      <button className="bg-brand-500 text-neutral-white rounded-md container-lg">
        Click Me
      </button>
    </div>
  );
}
```

## Available Classes Quick Reference

### Colors
```html
<!-- Neutrals -->
<div className="bg-neutral-50 text-neutral-900"></div>

<!-- Brand -->
<div className="bg-brand-500 text-neutral-white"></div>

<!-- System -->
<div className="bg-system-green-500 text-system-red-600"></div>

<!-- Semantic -->
<div className="bg-positive-default text-danger-bold border-brand-default"></div>
```

### Spacing
```html
<!-- Scale -->
<div className="p-scale-2 m-scale-4"></div>

<!-- Sizes -->
<div className="w-size-md h-size-lg"></div>

<!-- Container -->
<div className="p-container-md m-container-lg"></div>
```

### Typography
```html
<h1 className="text-display-lg font-semibold font-ar">Display Large</h1>
<h2 className="text-heading-md font-medium">Heading Medium</h2>
<p className="text-body-md font-regular">Body text</p>
<span className="text-label-sm">Label Small</span>
```

### Borders
```html
<div className="border-md border-brand-500 rounded-lg"></div>
<div className="border-xl border-danger-default rounded-pill"></div>
```

## Troubleshooting

### Font not loading?
Make sure Expo Arabic is installed or available in your project. Add to your CSS:
```css
@import url('path-to-expo-arabic-font');
```

### Tailwind classes not working?
1. Check your `tailwind.config.js` has the preset
2. Verify your `content` paths are correct
3. Restart your dev server

### TypeScript errors?
The package includes full type definitions. Make sure your `tsconfig.json` includes:
```json
{
  "compilerOptions": {
    "moduleResolution": "node"
  }
}
```

## Next Steps

- 📖 Read the full [README.md](README.md)
- 📊 Review [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)
- 🎨 Check source tokens in `src/config/tokens.ts`
- 🔧 Customize by forking and modifying

---

**Need help?** Check the README or review the source code in `/src/config/`.
