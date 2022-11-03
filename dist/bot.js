"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const path_1 = require("path");
const Client_1 = __importDefault(require("./Classes/Client"));
require('dotenv').config({ path: (0, path_1.join)(__dirname, "..", ".env") });
const intents = [
    discord_js_1.GatewayIntentBits.Guilds,
];
new Client_1.default({
    intents: intents
}).init();
