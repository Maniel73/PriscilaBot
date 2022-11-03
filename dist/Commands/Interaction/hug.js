"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hug = void 0;
const discord_js_1 = require("discord.js");
const Commands_1 = require("../../Classes/Commands");
exports.hug = {
    name: "hug",
    description: "Abraza a otro usuario del servidor",
    data: function () {
        return [
            {
                name: "usuario",
                type: discord_js_1.ApplicationCommandOptionType.User,
                description: "El usuario al que abrazar\u00E1s",
                required: true
            }
        ];
    },
    run: async function (client, inter) {
        const username = inter.options.getUser("usuario", true).username;
        const description = `**${inter.user.username} ha abrazado a ${username}**`;
        let images = await client.getDB(`url_${this.name}`);
        const fun = new Commands_1.Fun(this.name, description, images);
        const embed = fun.generateEmbed();
        inter.editReply({ embeds: [embed] });
    }
};
