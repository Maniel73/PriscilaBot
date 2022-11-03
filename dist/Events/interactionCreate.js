"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const event = {
    name: 'interactionCreate',
    once: false,
    run: async function (client, inter) {
        if (inter.isChatInputCommand()) {
            inter.deferReply();
            const cmd = client.getCommand(inter.commandName);
            if (cmd !== null) {
                cmd.run(client, inter);
            }
            else
                inter.editReply("Error, no se ha podido encontrar ese comando");
        }
    }
};
exports.default = event;
