import Client from '../Classes/Client';
import { ChatInputApplicationCommandData, ChatInputCommandInteraction, ApplicationCommandSubCommandData, ApplicationCommandOptionData } from 'discord.js';
declare type SCData = ApplicationCommandSubCommandData | Array<ApplicationCommandOptionData>;
interface CommandData {
    (): ChatInputApplicationCommandData;
}
interface SubCommandData {
    (): SCData;
}
interface Run {
    (client: Client, inter: ChatInputCommandInteraction): Promise<void>;
}
export interface Command {
    name: string;
    description: string;
    permissions?: bigint;
    admin?: boolean;
    data: CommandData;
    run: Run;
}
export interface SubCommand {
    name: string;
    description: string;
    permissions?: bigint;
    category?: string;
    admin?: boolean;
    data: SubCommandData;
    run: Run;
}
export {};
//# sourceMappingURL=Command.d.ts.map