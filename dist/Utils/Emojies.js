"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emojies = void 0;
const discord_js_1 = require("discord.js");
function convert(perms, txt, emojies, distance) {
    var result;
    if (!distance) {
        if (!perms)
            result = `${emojies.external} ${txt}`;
        else
            result = `${emojies.normal} ${txt}`;
    }
    else {
        const txt1 = txt.substring(0, distance);
        const txt2 = txt.slice(distance);
        if (!perms)
            result = `${txt1} ${emojies.external} ${txt2}`;
        else
            result = `${txt1} ${emojies.normal} ${txt2}`;
    }
    return result;
}
function emojies(inter, txt, emojies, distance = 0) {
    var result;
    if (inter.channel === null)
        result = convert(false, txt, emojies, distance);
    else if (inter.channel.type === discord_js_1.ChannelType.DM)
        result = convert(true, txt, emojies, distance);
    else {
        const perms = (inter.guild !== null && inter.guild.members.me !== null) ? inter.channel.permissionsFor(inter.guild.members.me).has(discord_js_1.PermissionFlagsBits.UseExternalEmojis) === false || (inter.channel.permissionsFor(inter.guild.members.me).has(discord_js_1.PermissionFlagsBits.UseExternalEmojis) !== true && !inter.guild.members.me.permissions.has(discord_js_1.PermissionFlagsBits.UseExternalEmojis)) : true;
        result = convert(perms, txt, emojies, distance);
    }
    return result;
}
exports.emojies = emojies;
