"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const event = {
    name: 'error',
    once: false,
    run: async (client, error) => {
        console.log("Error !");
        console.log(error);
    }
};
exports.default = event;
