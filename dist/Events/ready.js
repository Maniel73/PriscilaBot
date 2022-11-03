"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.event = void 0;
const discord_js_1 = require("discord.js");
exports.event = {
    name: 'ready',
    once: true,
    run: async (client) => {
        if (client.user !== null)
            client.user.setStatus('online');
        setTimeout(async () => { if (client.user !== null)
            client.user.setActivity(`/help | ${await client.guilds.cache.size} servers`, { type: discord_js_1.ActivityType.Competing }); }, 120000);
        setInterval(async () => { if (client.user !== null)
            client.user.setActivity(`/help | ${await client.guilds.cache.size} servers`, { type: discord_js_1.ActivityType.Competing }); }, 24 * 60 * 60 * 1000);
        console.log("Bot online !");
        if (client.shard !== null)
            client.shard.send({ type: 'getDatabase' });
        client.loadCommands();
    }
};
exports.default = exports.event;
