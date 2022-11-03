"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const error_1 = __importDefault(require("./error"));
const interactionCreate_1 = __importDefault(require("./interactionCreate"));
const ready_1 = __importDefault(require("./ready"));
const warn_1 = __importDefault(require("./warn"));
exports.default = [
    error_1.default,
    interactionCreate_1.default,
    ready_1.default,
    warn_1.default
];
