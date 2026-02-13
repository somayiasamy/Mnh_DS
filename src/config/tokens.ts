/**
 * Design System Tokens
 * Single source of truth for all raw design values
 * Extracted directly from Figma Design System PDFs
 * 
 * NO ASSUMPTIONS. NO INVENTED VALUES.
 */

// Base scaling system (px values)
export const scale = {
  0: '0px',
  0.125: '1px',
  0.25: '2px',
  0.5: '4px',
  0.75: '6px',
  1: '8px',
  1.5: '12px',
  2: '16px',
  2.5: '20px',
  3: '24px',
  4: '32px',
  5: '40px',
  6: '48px',
  7: '56px',
  8: '64px',
  9: '72px',
  10: '80px',
  11: '88px',
  12: '96px',
  13: '104px',
  999: '999px',
} as const;

// Size tokens (reference scale)
export const sizes = {
  '3xs': scale[1],      // 8px
  '2xs': scale[1.5],    // 12px
  xs: scale[2],         // 16px
  sm: scale[2.5],       // 20px
  md: scale[3],         // 24px
  lg: scale[4],         // 32px
  xl: scale[5],         // 40px
  '2xl': scale[6],      // 48px
  '3xl': scale[7],      // 56px
  '4xl': scale[8],      // 64px
  '5xl': scale[9],      // 72px
  '6xl': scale[10],     // 80px
} as const;

// Spacing tokens
export const spacing = {
  container: {
    none: scale[0],     // 0px
    xsm: scale[0.25],   // 2px
    sm: scale[0.5],     // 4px
    md: scale[1],       // 8px
    lg: scale[1.5],     // 12px
    xl: scale[2],       // 16px
    '2xl': scale[2.5],  // 20px
    '3xl': scale[3],    // 24px
    '4xl': scale[4],    // 32px
  },
  sections: {
    horizontal: {
      md: scale[2],     // 16px
    },
    vertical: {
      xs: scale[1],     // 8px
      sm: scale[1.5],   // 12px
      md: scale[2],     // 16px
      lg: scale[2.5],   // 20px
      xl: scale[3],     // 24px
      '2xl': scale[4],  // 32px
    },
  },
} as const;

// Border widths
export const borderWidth = {
  sm: scale[0],         // 0px
  md: scale[0.125],     // 1px
  xl: scale[0.5],       // 4px
} as const;

// Border radius
export const borderRadius = {
  none: scale[0],       // 0px
  '2xs': scale[0.25],   // 2px
  xs: scale[0.5],       // 4px
  sm: scale[0.75],      // 6px
  md: scale[1],         // 8px
  lg: scale[1.5],       // 12px
  xl: scale[2],         // 16px
  '2xl': scale[3],      // 24px
  pill: scale[999],     // 999px
} as const;

// Global color palette
export const colors = {
  neutrals: {
    white: '#ffffff',
    50: '#F0F3F5',
    100: '#E0E5EB',
    200: '#ccd3d9',
    300: '#b3bdc7',
    400: '#9aa7b4',
    500: '#758695',
    600: '#556674',
    700: '#3e4e61',
    800: '#24394d',
    900: '#0c2339',
    black: '#000000',
  },
  brand: {
    50: '#ebf5ff',
    100: '#cce6ff',
    200: '#99cdff',
    300: '#66b4ff',
    400: '#1b89f2',
    500: '#005eb8',
    600: '#004e99',
    700: '#004180',
    800: '#003466',
    900: '#00274d',
  },
  system: {
    blue: {
      50: '#e6f0ff',
      100: '#c8ddfd',
      200: '#9cc1fb',
      300: '#7aadfa',
      400: '#458cf8',
      500: '#0064fc',
      600: '#0047b2',
      700: '#00378a',
      800: '#002b6b',
      900: '#001f4d',
    },
    green: {
      50: '#e1fbe8',
      100: '#b5e7c3',
      200: '#90dba6',
      300: '#5fcb7e',
      400: '#27b950',
      500: '#0ca342',
      600: '#0a8f3a',
      700: '#097730',
      800: '#075f26',
      900: '#05471d',
    },
    yellow: {
      50: '#fefae1',
      100: '#fdf4c0',
      200: '#fced9a',
      300: '#fae56f',
      400: '#f9dc3a',
      500: '#f7d202',
      600: '#bb9f02',
      700: '#8e7801',
      800: '#655601',
      900: '#332900',
    },
    orange: {
      50: '#fef1e4',
      100: '#fee1c3',
      200: '#fed3a6',
      300: '#fec081',
      400: '#fda852',
      500: '#ff8010',
      600: '#cc5f00',
      700: '#994700',
      800: '#753700',
      900: '#572800',
    },
    red: {
      50: '#fdeded',
      100: '#f7c0c1',
      200: '#f29a9d',
      300: '#eb686b',
      400: '#e53a3f',
      500: '#de0309',
      600: '#b00207',
      700: '#880206',
      800: '#6a0104',
      900: '#4b0103',
    },
  },
  accents: {
    richElectricBlue: {
      50: '#d9f4fe',
      100: '#baebfd',
      200: '#99e2fc',
      300: '#6ed5fa',
      400: '#38c6f9',
      500: '#00b6f7',
      600: '#008bbd',
      700: '#006d94',
      800: '#004b66',
      900: '#00384d',
    },
    middleBlue: {
      50: '#d9fbfc',
      100: '#baf7fa',
      200: '#99f3f7',
      300: '#6eeef4',
      400: '#40e9f0',
      500: '#00e1eb',
      600: '#00b0b8',
      700: '#008d94',
      800: '#006266',
      900: '#00494d',
    },
    purple: {
      50: '#f2e8fd',
      100: '#e2ccfb',
      200: '#d3b3f9',
      300: '#c193f6',
      400: '#ad71f4',
      500: '#8a3ae7',
      600: '#5b15ad',
      700: '#481188',
      800: '#300b5b',
      900: '#1d0737',
    },
    limeGreen: {
      50: '#f7fcde',
      100: '#eff8ba',
      200: '#e7f599',
      300: '#ddf16e',
      400: '#d1ec38',
      500: '#c4e600',
      600: '#a0bd00',
      700: '#829900',
      800: '#576600',
      900: '#343d00',
    },
    melon: {
      50: '#fee7e5',
      100: '#fdd4d0',
      200: '#fcc0b9',
      300: '#faa59c',
      400: '#f9887d',
      500: '#f76151',
      600: '#c31b09',
      700: '#8e1406',
      800: '#620e04',
      900: '#3b0802',
    },
    black: {
      50: '#7f7e7e',
      100: '#5c5b5b',
      200: '#3b3939',
      300: '#2e2e2e',
      400: '#202020',
      500: '#121212',
      600: '#0b0b0b',
      700: '#080808',
      800: '#050505',
      900: '#000000',
    },
  },
  opacity: {
    black: {
      10: 'rgba(9, 9, 9, 0.1)',
      50: 'rgba(9, 9, 9, 0.5)',
    },
    white: {
      50: 'rgba(255, 255, 255, 0.5)',
    },
  },
} as const;

// Typography tokens
export const typography = {
  fontFamily: {
    ar: '"Expo Arabic", system-ui, -apple-system, sans-serif',
  },
  // Font weights: PDF specifies named weights (Book, Medium, SemiBold)
  // Converted to CSS numeric values for browser compatibility
  // Mapping based on standard Expo Arabic font weight specification:
  // - Book (PDF: "regular") → 400 (CSS normal weight)
  // - Medium (PDF: "medium") → 500 (CSS medium weight)
  // - SemiBold (PDF: "semibold") → 600 (CSS semibold weight)
  fontWeight: {
    regular: '400',  // PDF: Book
    medium: '500',   // PDF: Medium
    semibold: '600', // PDF: SemiBold
  },
  fontSize: {
    display: {
      lg: '40px',
      md: '32px',
      sm: '24px',
    },
    heading: {
      lg: '20px',
      md: '18px',
      sm: '16px',
    },
    body: {
      lg: '16px',
      md: '14px',
      sm: '12px',
    },
    label: {
      lg: '16px',
      md: '14px',
      sm: '12px',
      xs: '10px',
    },
  },
  lineHeight: {
    display: {
      lg: '56px',
      md: '44px',
      sm: '32px',
    },
    heading: {
      lg: '28px',
      md: '28px',
      sm: '24px',
    },
    body: {
      lg: '20px',
      md: '20px',
      sm: '24px',
    },
    label: {
      lg: '24px',
      md: '20px',
      sm: '16px',
      xs: '16px',
    },
  },
  letterSpacing: {
    default: '0',
  },
} as const;
