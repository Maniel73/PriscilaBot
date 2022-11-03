"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.round = void 0;
function round(x) {
    const n = Number((Math.abs(x) * 100).toPrecision(15));
    return Math.round(n) / 100 * Math.sign(x);
}
exports.round = round;
