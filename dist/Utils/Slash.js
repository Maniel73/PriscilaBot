"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSubcommands = exports.createSubCommands = exports.createSubCommandsWithCategories = void 0;
const discord_js_1 = require("discord.js");
function createSubCommandsWithCategories(subCommandsList) {
    const categories = new Set();
    const subCommandsCategories = [];
    subCommandsList.each(cmd => {
        if (cmd.category !== undefined)
            categories.add(cmd.category);
    });
    for (const category of categories) {
        const subCommandsCategory = {
            name: category,
            description: "This is a category",
            type: discord_js_1.ApplicationCommandOptionType.SubcommandGroup
        };
        const options = [];
        subCommandsList.each(cmd => {
            const data = cmd.data();
            if (cmd.category === category && data && data.type === discord_js_1.ApplicationCommandOptionType.Subcommand)
                options[options.length] = data;
        });
        subCommandsCategory.options = options;
        subCommandsCategories[subCommandsCategories.length] = subCommandsCategory;
    }
    return subCommandsCategories;
}
exports.createSubCommandsWithCategories = createSubCommandsWithCategories;
function createSubCommands(subCommandsList) {
    const hasCategory = subCommandsList.some(cmd => cmd.category !== undefined);
    var result = [];
    if (!hasCategory) {
        const subCommandsData = [];
        subCommandsList.each(cmd => {
            const data = cmd.data();
            if (data && data.type === discord_js_1.ApplicationCommandOptionType.Subcommand)
                subCommandsData[subCommandsData.length] = cmd.data();
        });
        result = subCommandsData;
    }
    else
        result = [];
    return result;
}
exports.createSubCommands = createSubCommands;
function getSubcommands(Commands) {
    const subCommandsList = new discord_js_1.Collection();
    for (const cmd in Commands) {
        if (cmd !== '__esModule') {
            subCommandsList.set(cmd, Commands[cmd]);
        }
    }
    return subCommandsList;
}
exports.getSubcommands = getSubcommands;
