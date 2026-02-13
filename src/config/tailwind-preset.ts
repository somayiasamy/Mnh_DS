/**
 * Tailwind CSS Preset
 * Injects design tokens into Tailwind theme
 * NO NEW VALUES - only mapping existing tokens
 */

import type { Config } from 'tailwindcss';
import { 
  scale, 
  sizes, 
  spacing, 
  borderWidth, 
  borderRadius, 
  colors,
  typography 
} from './tokens';
import { semanticColors } from './theme';

const preset: Partial<Config> = {
  theme: {
    extend: {
      // Base scale system
      spacing: {
        ...Object.fromEntries(
          Object.entries(scale).map(([key, value]) => [`scale-${key}`, value])
        ),
        // Size tokens
        ...Object.fromEntries(
          Object.entries(sizes).map(([key, value]) => [`size-${key}`, value])
        ),
        // Container spacing
        'container-none': spacing.container.none,
        'container-xsm': spacing.container.xsm,
        'container-sm': spacing.container.sm,
        'container-md': spacing.container.md,
        'container-lg': spacing.container.lg,
        'container-xl': spacing.container.xl,
        'container-2xl': spacing.container['2xl'],
        'container-3xl': spacing.container['3xl'],
        'container-4xl': spacing.container['4xl'],
        // Section spacing
        'section-h-md': spacing.sections.horizontal.md,
        'section-v-xs': spacing.sections.vertical.xs,
        'section-v-sm': spacing.sections.vertical.sm,
        'section-v-md': spacing.sections.vertical.md,
        'section-v-lg': spacing.sections.vertical.lg,
        'section-v-xl': spacing.sections.vertical.xl,
        'section-v-2xl': spacing.sections.vertical['2xl'],
      },
      
      // Border widths
      borderWidth: {
        sm: borderWidth.sm,
        DEFAULT: borderWidth.md,
        md: borderWidth.md,
        xl: borderWidth.xl,
      },
      
      // Border radius
      borderRadius: {
        none: borderRadius.none,
        '2xs': borderRadius['2xs'],
        xs: borderRadius.xs,
        sm: borderRadius.sm,
        DEFAULT: borderRadius.md,
        md: borderRadius.md,
        lg: borderRadius.lg,
        xl: borderRadius.xl,
        '2xl': borderRadius['2xl'],
        pill: borderRadius.pill,
      },
      
      // Colors - Global palette
      colors: {
        // Neutrals
        neutral: colors.neutrals,
        
        // Brand
        brand: colors.brand,
        
        // System colors
        'system-blue': colors.system.blue,
        'system-green': colors.system.green,
        'system-yellow': colors.system.yellow,
        'system-orange': colors.system.orange,
        'system-red': colors.system.red,
        
        // Accent colors
        'accent-rich-electric-blue': colors.accents.richElectricBlue,
        'accent-middle-blue': colors.accents.middleBlue,
        'accent-purple': colors.accents.purple,
        'accent-lime-green': colors.accents.limeGreen,
        'accent-melon': colors.accents.melon,
        'accent-black': colors.accents.black,
        
        // Semantic colors - Background
        'bg-neutral-subtle': semanticColors.background.neutral.subtle,
        'bg-neutral-default': semanticColors.background.neutral.default,
        'bg-neutral-bold': semanticColors.background.neutral.bold,
        'bg-neutral-bolder': semanticColors.background.neutral.bolder,
        'bg-neutral-disabled': semanticColors.background.neutral.disabled,
        'bg-neutral-inverse': semanticColors.background.neutral.inverse,
        
        'bg-brand-subtle': semanticColors.background.brand.subtle,
        'bg-brand-default': semanticColors.background.brand.default,
        'bg-brand-bold': semanticColors.background.brand.bold,
        
        'bg-positive-subtle': semanticColors.background.system.positive.subtle,
        'bg-positive-default': semanticColors.background.system.positive.default,
        
        'bg-warning-subtler': semanticColors.background.system.warning.subtler,
        'bg-warning-subtle': semanticColors.background.system.warning.subtle,
        'bg-warning-default': semanticColors.background.system.warning.default,
        
        'bg-pending-subtle': semanticColors.background.system.pending.subtle,
        'bg-pending-default': semanticColors.background.system.pending.default,
        
        'bg-danger-subtle': semanticColors.background.system.danger.subtle,
        'bg-danger-default': semanticColors.background.system.danger.default,
        
        'bg-info-subtle': semanticColors.background.system.info.subtle,
        'bg-info-default': semanticColors.background.system.info.default,
        
        // Semantic colors - Text
        'text-neutral-subtler': semanticColors.text.neutral.subtler,
        'text-neutral-subtle': semanticColors.text.neutral.subtle,
        'text-neutral-default': semanticColors.text.neutral.default,
        'text-neutral-placeholder': semanticColors.text.neutral.placeholder,
        'text-neutral-disabled': semanticColors.text.neutral.disabled,
        'text-neutral-inverse': semanticColors.text.neutral.inverse,
        
        'text-brand-default': semanticColors.text.brand.default,
        
        'text-positive-default': semanticColors.text.system.positive.default,
        'text-positive-bold': semanticColors.text.system.positive.bold,
        'text-positive-bolder': semanticColors.text.system.positive.bolder,
        
        'text-warning-default': semanticColors.text.system.warning.default,
        'text-warning-bold': semanticColors.text.system.warning.bold,
        
        'text-pending-default': semanticColors.text.system.pending.default,
        'text-pending-bold': semanticColors.text.system.pending.bold,
        
        'text-danger-default': semanticColors.text.system.danger.default,
        'text-danger-bold': semanticColors.text.system.danger.bold,
        'text-danger-bolder': semanticColors.text.system.danger.bolder,
        
        'text-info-default': semanticColors.text.system.info.default,
        'text-info-bold': semanticColors.text.system.info.bold,
        'text-info-bolder': semanticColors.text.system.info.bolder,
        
        // Semantic colors - Border
        'border-neutral-default': semanticColors.border.neutral.default,
        'border-neutral-bold': semanticColors.border.neutral.bold,
        'border-neutral-bolder': semanticColors.border.neutral.bolder,
        'border-neutral-disabled': semanticColors.border.neutral.disabled,
        'border-neutral-inverse': semanticColors.border.neutral.inverse,
        'border-neutral-active': semanticColors.border.neutral.active,
        
        'border-brand-default': semanticColors.border.brand.default,
        
        'border-positive-default': semanticColors.border.system.positive.default,
        'border-warning-default': semanticColors.border.system.warning.default,
        'border-pending-default': semanticColors.border.system.pending.default,
        'border-danger-default': semanticColors.border.system.danger.default,
        'border-info-default': semanticColors.border.system.info.default,
      },
      
      // Typography
      fontFamily: {
        ar: typography.fontFamily.ar.split(',').map(f => f.trim()),
      },
      fontWeight: {
        regular: typography.fontWeight.regular,
        medium: typography.fontWeight.medium,
        semibold: typography.fontWeight.semibold,
      },
      fontSize: {
        // Display
        'display-lg': [typography.fontSize.display.lg, typography.lineHeight.display.lg],
        'display-md': [typography.fontSize.display.md, typography.lineHeight.display.md],
        'display-sm': [typography.fontSize.display.sm, typography.lineHeight.display.sm],
        
        // Heading
        'heading-lg': [typography.fontSize.heading.lg, typography.lineHeight.heading.lg],
        'heading-md': [typography.fontSize.heading.md, typography.lineHeight.heading.md],
        'heading-sm': [typography.fontSize.heading.sm, typography.lineHeight.heading.sm],
        
        // Body
        'body-lg': [typography.fontSize.body.lg, typography.lineHeight.body.lg],
        'body-md': [typography.fontSize.body.md, typography.lineHeight.body.md],
        'body-sm': [typography.fontSize.body.sm, typography.lineHeight.body.sm],
        
        // Label
        'label-lg': [typography.fontSize.label.lg, typography.lineHeight.label.lg],
        'label-md': [typography.fontSize.label.md, typography.lineHeight.label.md],
        'label-sm': [typography.fontSize.label.sm, typography.lineHeight.label.sm],
        'label-xs': [typography.fontSize.label.xs, typography.lineHeight.label.xs],
      },
    },
  },
};

export default preset;
