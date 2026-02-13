/**
 * Semantic Theme
 * Maps raw tokens to semantic meanings
 * NO NEW VALUES - only references to tokens
 */

import { colors } from './tokens';

export const semanticColors = {
  background: {
    neutral: {
      subtle: colors.neutrals[50],
      default: colors.neutrals.white,
      bold: colors.neutrals[100],
      bolder: colors.neutrals[900],
      disabled: colors.neutrals[300],
      inverse: colors.neutrals.black,
    },
    brand: {
      subtle: colors.brand[50],
      default: colors.brand[500],
      bold: colors.brand[800],
    },
    system: {
      positive: {
        subtle: colors.system.green[50],
        default: colors.system.green[500],
      },
      warning: {
        subtler: colors.system.yellow[50],
        subtle: colors.system.yellow[100],
        default: colors.system.yellow[500],
      },
      pending: {
        subtle: colors.system.orange[50],
        default: colors.system.orange[500],
      },
      danger: {
        subtle: colors.system.red[50],
        default: colors.system.red[500],
      },
      info: {
        subtle: colors.system.blue[50],
        default: colors.system.blue[500],
      },
    },
    accent: {
      purple: {
        subtle: colors.accents.purple[50],
        default: colors.accents.purple[500],
      },
      richElectricBlue: {
        subtle: colors.accents.richElectricBlue[50],
        default: colors.accents.richElectricBlue[500],
      },
      middleBlue: {
        subtle: colors.accents.middleBlue[50],
        default: colors.accents.middleBlue[600],
      },
      melon: {
        subtle: colors.accents.melon[50],
        default: colors.accents.melon[500],
      },
      limeGreen: {
        subtle: colors.accents.limeGreen[100],
        default: colors.accents.limeGreen[500],
      },
    },
  },
  text: {
    neutral: {
      subtler: colors.neutrals[500],
      subtle: colors.neutrals[600],
      default: colors.neutrals[900],
      placeholder: colors.neutrals[400],
      disabled: colors.neutrals[300],
      inverse: colors.neutrals.white,
    },
    brand: {
      default: colors.brand[500],
    },
    system: {
      positive: {
        default: colors.system.green[600],
        bold: colors.system.green[700],
        bolder: colors.system.green[900],
      },
      warning: {
        default: colors.system.yellow[800],
        bold: colors.system.yellow[900],
      },
      pending: {
        default: colors.system.orange[600],
        bold: colors.system.orange[800],
      },
      danger: {
        default: colors.system.red[500],
        bold: colors.system.red[600],
        bolder: colors.system.red[900],
      },
      info: {
        default: colors.system.blue[500],
        bold: colors.system.blue[600],
        bolder: colors.system.blue[800],
      },
    },
    accent: {
      purple: {
        default: colors.accents.purple[500],
      },
      richElectricBlue: {
        default: colors.accents.richElectricBlue[600],
        bold: colors.accents.richElectricBlue[700],
      },
      middleBlue: {
        default: colors.accents.middleBlue[600],
        bold: colors.accents.middleBlue[700],
      },
      melon: {
        default: colors.accents.melon[500],
        bold: colors.accents.melon[600],
      },
      limeGreen: {
        default: colors.accents.limeGreen[700],
        bold: colors.accents.limeGreen[800],
        bolder: colors.accents.limeGreen[900],
      },
    },
  },
  icon: {
    neutral: {
      subtler: colors.neutrals[500],
      subtle: colors.neutrals[600],
      default: colors.neutrals[900],
      placeholder: colors.neutrals[400],
      disabled: colors.neutrals[300],
      inverse: colors.neutrals.white,
    },
    brand: {
      default: colors.brand[500],
    },
    system: {
      positive: {
        default: colors.system.green[500],
        bold: colors.system.green[600],
      },
      warning: {
        default: colors.system.yellow[700],
        bold: colors.system.yellow[900],
      },
      pending: {
        default: colors.system.orange[500],
        bold: colors.system.orange[600],
      },
      danger: {
        default: colors.system.red[500],
        bold: colors.system.red[600],
      },
      info: {
        default: colors.system.blue[500],
        bold: colors.system.blue[600],
      },
    },
    accent: {
      purple: {
        default: colors.accents.purple[500],
      },
      richElectricBlue: {
        default: colors.accents.richElectricBlue[500],
        bold: colors.accents.richElectricBlue[600],
        bolder: colors.accents.richElectricBlue[700],
      },
      middleBlue: {
        default: colors.accents.middleBlue[600],
        bold: colors.accents.middleBlue[700],
      },
      melon: {
        default: colors.accents.melon[500],
        bold: colors.accents.melon[600],
      },
      limeGreen: {
        default: colors.accents.limeGreen[700],
        bold: colors.accents.limeGreen[800],
        bolder: colors.accents.limeGreen[900],
      },
    },
  },
  border: {
    neutral: {
      default: colors.neutrals[100],
      bold: colors.neutrals[200],
      bolder: colors.neutrals[400],
      disabled: colors.neutrals[50],
      inverse: colors.neutrals[900],
      active: colors.brand[800],
    },
    brand: {
      default: colors.brand[500],
    },
    system: {
      positive: {
        default: colors.system.green[500],
      },
      warning: {
        default: colors.system.yellow[500],
      },
      pending: {
        default: colors.system.orange[500],
      },
      danger: {
        default: colors.system.red[500],
      },
      info: {
        default: colors.system.blue[500],
      },
    },
    accent: {
      purple: {
        default: colors.accents.purple[500],
      },
      richElectricBlue: {
        default: colors.accents.richElectricBlue[500],
      },
      middleBlue: {
        default: colors.accents.middleBlue[500],
      },
      melon: {
        default: colors.accents.melon[500],
      },
      limeGreen: {
        default: colors.accents.limeGreen[500],
      },
    },
  },
  stateLayer: {
    pressed: colors.opacity.black[10],
    disabled: colors.opacity.black[50],
  },
} as const;
