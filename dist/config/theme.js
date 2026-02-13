"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.semanticColors = void 0;

const tokens_1 = require("./tokens");

exports.semanticColors = {
  background: {
    neutral: {
      subtle: tokens_1.colors.neutrals[50],
      default: tokens_1.colors.neutrals.white,
      bold: tokens_1.colors.neutrals[100],
      bolder: tokens_1.colors.neutrals[900],
      disabled: tokens_1.colors.neutrals[300],
      inverse: tokens_1.colors.neutrals.black,
    },
    brand: {
      subtle: tokens_1.colors.brand[50],
      default: tokens_1.colors.brand[500],
      bold: tokens_1.colors.brand[800],
    },
    system: {
      positive: {
        subtle: tokens_1.colors.system.green[50],
        default: tokens_1.colors.system.green[500],
      },
      warning: {
        subtler: tokens_1.colors.system.yellow[50],
        subtle: tokens_1.colors.system.yellow[100],
        default: tokens_1.colors.system.yellow[500],
      },
      pending: {
        subtle: tokens_1.colors.system.orange[50],
        default: tokens_1.colors.system.orange[500],
      },
      danger: {
        subtle: tokens_1.colors.system.red[50],
        default: tokens_1.colors.system.red[500],
      },
      info: {
        subtle: tokens_1.colors.system.blue[50],
        default: tokens_1.colors.system.blue[500],
      },
    },
    accent: {
      purple: {
        subtle: tokens_1.colors.accents.purple[50],
        default: tokens_1.colors.accents.purple[500],
      },
      richElectricBlue: {
        subtle: tokens_1.colors.accents.richElectricBlue[50],
        default: tokens_1.colors.accents.richElectricBlue[500],
      },
      middleBlue: {
        subtle: tokens_1.colors.accents.middleBlue[50],
        default: tokens_1.colors.accents.middleBlue[600],
      },
      melon: {
        subtle: tokens_1.colors.accents.melon[50],
        default: tokens_1.colors.accents.melon[500],
      },
      limeGreen: {
        subtle: tokens_1.colors.accents.limeGreen[100],
        default: tokens_1.colors.accents.limeGreen[500],
      },
    },
  },
  text: {
    neutral: {
      subtler: tokens_1.colors.neutrals[500],
      subtle: tokens_1.colors.neutrals[600],
      default: tokens_1.colors.neutrals[900],
      placeholder: tokens_1.colors.neutrals[400],
      disabled: tokens_1.colors.neutrals[300],
      inverse: tokens_1.colors.neutrals.white,
    },
    brand: {
      default: tokens_1.colors.brand[500],
    },
    system: {
      positive: {
        default: tokens_1.colors.system.green[600],
        bold: tokens_1.colors.system.green[700],
        bolder: tokens_1.colors.system.green[900],
      },
      warning: {
        default: tokens_1.colors.system.yellow[800],
        bold: tokens_1.colors.system.yellow[900],
      },
      pending: {
        default: tokens_1.colors.system.orange[600],
        bold: tokens_1.colors.system.orange[800],
      },
      danger: {
        default: tokens_1.colors.system.red[500],
        bold: tokens_1.colors.system.red[600],
        bolder: tokens_1.colors.system.red[900],
      },
      info: {
        default: tokens_1.colors.system.blue[500],
        bold: tokens_1.colors.system.blue[600],
        bolder: tokens_1.colors.system.blue[800],
      },
    },
    accent: {
      purple: {
        default: tokens_1.colors.accents.purple[500],
      },
      richElectricBlue: {
        default: tokens_1.colors.accents.richElectricBlue[600],
        bold: tokens_1.colors.accents.richElectricBlue[700],
      },
      middleBlue: {
        default: tokens_1.colors.accents.middleBlue[600],
        bold: tokens_1.colors.accents.middleBlue[700],
      },
      melon: {
        default: tokens_1.colors.accents.melon[500],
        bold: tokens_1.colors.accents.melon[600],
      },
      limeGreen: {
        default: tokens_1.colors.accents.limeGreen[700],
        bold: tokens_1.colors.accents.limeGreen[800],
        bolder: tokens_1.colors.accents.limeGreen[900],
      },
    },
  },
  icon: {
    neutral: {
      subtler: tokens_1.colors.neutrals[500],
      subtle: tokens_1.colors.neutrals[600],
      default: tokens_1.colors.neutrals[900],
      placeholder: tokens_1.colors.neutrals[400],
      disabled: tokens_1.colors.neutrals[300],
      inverse: tokens_1.colors.neutrals.white,
    },
    brand: {
      default: tokens_1.colors.brand[500],
    },
    system: {
      positive: {
        default: tokens_1.colors.system.green[500],
        bold: tokens_1.colors.system.green[600],
      },
      warning: {
        default: tokens_1.colors.system.yellow[700],
        bold: tokens_1.colors.system.yellow[900],
      },
      pending: {
        default: tokens_1.colors.system.orange[500],
        bold: tokens_1.colors.system.orange[600],
      },
      danger: {
        default: tokens_1.colors.system.red[500],
        bold: tokens_1.colors.system.red[600],
      },
      info: {
        default: tokens_1.colors.system.blue[500],
        bold: tokens_1.colors.system.blue[600],
      },
    },
    accent: {
      purple: {
        default: tokens_1.colors.accents.purple[500],
      },
      richElectricBlue: {
        default: tokens_1.colors.accents.richElectricBlue[500],
        bold: tokens_1.colors.accents.richElectricBlue[600],
        bolder: tokens_1.colors.accents.richElectricBlue[700],
      },
      middleBlue: {
        default: tokens_1.colors.accents.middleBlue[600],
        bold: tokens_1.colors.accents.middleBlue[700],
      },
      melon: {
        default: tokens_1.colors.accents.melon[500],
        bold: tokens_1.colors.accents.melon[600],
      },
      limeGreen: {
        default: tokens_1.colors.accents.limeGreen[700],
        bold: tokens_1.colors.accents.limeGreen[800],
        bolder: tokens_1.colors.accents.limeGreen[900],
      },
    },
  },
  border: {
    neutral: {
      default: tokens_1.colors.neutrals[100],
      bold: tokens_1.colors.neutrals[200],
      bolder: tokens_1.colors.neutrals[400],
      disabled: tokens_1.colors.neutrals[50],
      inverse: tokens_1.colors.neutrals[900],
      active: tokens_1.colors.brand[800],
    },
    brand: {
      default: tokens_1.colors.brand[500],
    },
    system: {
      positive: {
        default: tokens_1.colors.system.green[500],
      },
      warning: {
        default: tokens_1.colors.system.yellow[500],
      },
      pending: {
        default: tokens_1.colors.system.orange[500],
      },
      danger: {
        default: tokens_1.colors.system.red[500],
      },
      info: {
        default: tokens_1.colors.system.blue[500],
      },
    },
    accent: {
      purple: {
        default: tokens_1.colors.accents.purple[500],
      },
      richElectricBlue: {
        default: tokens_1.colors.accents.richElectricBlue[500],
      },
      middleBlue: {
        default: tokens_1.colors.accents.middleBlue[500],
      },
      melon: {
        default: tokens_1.colors.accents.melon[500],
      },
      limeGreen: {
        default: tokens_1.colors.accents.limeGreen[500],
      },
    },
  },
  stateLayer: {
    pressed: tokens_1.colors.opacity.black[10],
    disabled: tokens_1.colors.opacity.black[50],
  },
};
