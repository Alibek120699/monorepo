"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWindowsPhone = exports.isIOS = exports.isAndroid = exports.formatPhone = void 0;
const formatPhone_1 = require("./formatPhone");
Object.defineProperty(exports, "formatPhone", { enumerable: true, get: function () { return formatPhone_1.formatPhone; } });
const platform_1 = require("./platform");
Object.defineProperty(exports, "isAndroid", { enumerable: true, get: function () { return platform_1.isAndroid; } });
Object.defineProperty(exports, "isIOS", { enumerable: true, get: function () { return platform_1.isIOS; } });
Object.defineProperty(exports, "isWindowsPhone", { enumerable: true, get: function () { return platform_1.isWindowsPhone; } });
