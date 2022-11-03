import { EmbedBuilder } from "discord.js";
export declare class Fun {
    name: string;
    description: string;
    images: Array<string>;
    image: string;
    color: string | null;
    constructor(name: string, description: string, images: Array<string>, color?: string);
    generateEmbed(): EmbedBuilder;
}
//# sourceMappingURL=Fun.d.ts.map