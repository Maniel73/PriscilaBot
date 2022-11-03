"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const DB = __importStar(require("@replit/database"));
const Commands_1 = __importDefault(require("../../Commands"));
const Events_1 = __importDefault(require("../../Events"));
class ExtendedClient extends discord_js_1.Client {
    _version = '1.0.0';
    _commands = new discord_js_1.Collection();
    discordToken = (process.env.DISCORD_TOKEN !== undefined) ? process.env.DISCORD_TOKEN : "";
    _db = new DB.Client();
    get version() {
        return this._version;
    }
    get commands() {
        return this._commands;
    }
    async init() {
        this.login(this.discordToken);
        this.loadEvents();
    }
    getCommand(name) {
        const possibleCommand = this._commands.get(name);
        return (possibleCommand !== undefined) ? possibleCommand : null;
    }
    loadCommands() {
        const commandData = [];
        for (const cmd in Commands_1.default) {
            if (cmd !== '__esModule') {
                this.commands.set(cmd, Commands_1.default[cmd]);
                commandData[commandData.length] = Commands_1.default[cmd].data();
            }
        }
        const rest = new discord_js_1.REST({ version: '10' }).setToken(this.discordToken);
        if (this.application !== null)
            rest.put(discord_js_1.Routes.applicationCommands(this.application.id), { body: commandData }).then(() => { console.log(`Loaded ${commandData.length} commands successfully.`); });
    }
    loadEvents() {
        for (const event in Events_1.default) {
            if (event !== '__esModule') {
                if (Events_1.default[event].once)
                    this.once(event, (...args) => { Events_1.default[event].run(this, ...args); });
                else
                    this.on(event, (...args) => { Events_1.default[event].run(this, ...args); });
            }
        }
    }
    async getDB(key) {
        const value = await this._db.get(key);
        return typeof value === "string" ? JSON.parse(value) : {};
    }
    async setDB(key, value) {
        let ok = true;
        const json = JSON.stringify(value);
        if (json) {
            this._db.set(key, json);
        }
        else
            ok = false;
        return ok;
    }
}
exports.default = ExtendedClient;
