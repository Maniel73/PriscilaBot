"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.event = void 0;
exports.event = {
    name: 'warn',
    once: false,
    run: async (client, info) => {
        console.log("Warn !");
        console.log(info);
    }
};
exports.default = exports.event;
