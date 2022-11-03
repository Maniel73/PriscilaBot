"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fun = void 0;
const discord_js_1 = require("discord.js");
class Fun {
    name;
    description;
    images;
    image;
    color;
    constructor(name, description, images, color) {
        this.name = name;
        this.description = description;
        this.images = images;
        this.image = this.images[Math.random() * this.images.length];
        this.color = color ?? null;
    }
    generateEmbed() {
        return new discord_js_1.EmbedBuilder({
            description: this.description,
            image: { url: this.image }
        }).setColor(this.color);
    }
}
exports.Fun = Fun;
