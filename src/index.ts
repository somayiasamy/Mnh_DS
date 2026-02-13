/**
 * Design System - Public API
 * Official exports for consumers and AI tools
 */

// Export Tailwind preset (primary use case)
export { default as tailwindPreset } from './config/tailwind-preset';

// Export raw tokens for advanced use cases
export { 
  scale,
  sizes,
  spacing,
  borderWidth,
  borderRadius,
  colors,
  typography,
} from './config/tokens';

// Export semantic theme
export { semanticColors } from './config/theme';

// Type exports
export type { Config as TailwindConfig } from 'tailwindcss';
