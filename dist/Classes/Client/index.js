"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const mongodb_1 = require("mongodb");
const Commands_1 = __importDefault(require("../../Commands"));
const Events_1 = __importDefault(require("../../Events"));
const mongoIP = "localhost";
const mongoPort = "4000";
const mongoURL = `mongodb://${mongoIP}:${mongoPort}`;
const mongoDBName = "Priscila";
class ExtendedClient extends discord_js_1.Client {
    _version = '1.0.0';
    _commands = new discord_js_1.Collection();
    discordToken = (process.env.DISCORD_TOKEN !== undefined) ? process.env.DISCORD_TOKEN : "";
    mongoClient = new mongodb_1.MongoClient(mongoURL);
    _db;
    get version() {
        return this._version;
    }
    get commands() {
        return this._commands;
    }
    get db() {
        return this._db ?? this.mongoClient.db(mongoDBName);
    }
    async init() {
        this.login(this.discordToken);
        this.loadEvents();
        this.startDB();
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
    async startDB() {
        await this.mongoClient.connect();
        this._db = this.mongoClient.db(mongoDBName);
    }
}
exports.default = ExtendedClient;
