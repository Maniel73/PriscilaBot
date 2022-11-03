"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDays = exports.getDate = exports.getTime = void 0;
function getTime(x) {
    const time = (x) ? new Date(x) : new Date();
    const minute = (time.getMinutes() < 10) ? "0" + time.getMinutes().toString() : time.getMinutes().toString();
    const hour = time.getHours().toString();
    const day = (time.getDate() < 10) ? "0" + time.getDate().toString() : time.getDate().toString();
    const month = (time.getMonth() + 1 < 10) ? "0" + (time.getMonth() + 1).toString() : (time.getMonth() + 1).toString();
    const year = time.getFullYear().toString();
    return `${day}/${month}/${year} -- ${hour}:${minute}`;
}
exports.getTime = getTime;
function getDate(x) {
    const time = (x) ? new Date(x) : new Date();
    const day = (time.getDate() < 10) ? "0" + time.getDate().toString() : time.getDate().toString();
    const month = (time.getMonth() + 1 < 10) ? "0" + (time.getMonth() + 1).toString() : (time.getMonth() + 1).toString();
    const year = time.getFullYear().toString();
    return `${day}/${month}/${year}`;
}
exports.getDate = getDate;
function getDays(day) {
    const now = Date.now();
    const result = Math.floor(Math.abs(day - now) / (1000 * 60 * 60 * 24));
    return result.toString();
}
exports.getDays = getDays;
