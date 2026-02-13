"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.semanticColors = exports.typography = exports.colors = exports.borderRadius = exports.borderWidth = exports.spacing = exports.sizes = exports.scale = exports.tailwindPreset = void 0;

const tailwind_preset_1 = require("./config/tailwind-preset");
Object.defineProperty(exports, "tailwindPreset", { enumerable: true, get: function () { return tailwind_preset_1.default; } });

const tokens_1 = require("./config/tokens");
Object.defineProperty(exports, "scale", { enumerable: true, get: function () { return tokens_1.scale; } });
Object.defineProperty(exports, "sizes", { enumerable: true, get: function () { return tokens_1.sizes; } });
Object.defineProperty(exports, "spacing", { enumerable: true, get: function () { return tokens_1.spacing; } });
Object.defineProperty(exports, "borderWidth", { enumerable: true, get: function () { return tokens_1.borderWidth; } });
Object.defineProperty(exports, "borderRadius", { enumerable: true, get: function () { return tokens_1.borderRadius; } });
Object.defineProperty(exports, "colors", { enumerable: true, get: function () { return tokens_1.colors; } });
Object.defineProperty(exports, "typography", { enumerable: true, get: function () { return tokens_1.typography; } });

const theme_1 = require("./config/theme");
Object.defineProperty(exports, "semanticColors", { enumerable: true, get: function () { return theme_1.semanticColors; } });
