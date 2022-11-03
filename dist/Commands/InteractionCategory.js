"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const Utils_1 = require("../Utils");
const Interaction_1 = __importDefault(require("./Interaction"));
const command = {
    name: "interaction",
    description: "interaction",
    data: function () {
        const subCommands = (0, Utils_1.getSubcommands)(Interaction_1.default);
        const data = {
            defaultMemberPermissions: undefined,
            name: this.name,
            description: this.description,
            type: discord_js_1.ApplicationCommandType.ChatInput,
            options: (0, Utils_1.createSubCommands)(subCommands)
        };
        return data;
    },
    run: async function (client, inter) {
        const subCommands = (0, Utils_1.getSubcommands)(Interaction_1.default);
        const subCommand = subCommands.get(inter.options.getSubcommand());
        if (subCommand === undefined) {
            inter.reply("Error, comando no encontrado.");
            console.error(`Error. Cannot find subcommand ${inter.options.getSubcommand()} in ${this.name} category.`);
        }
        else
            subCommand.run(client, inter);
    },
};
exports.default = command;
