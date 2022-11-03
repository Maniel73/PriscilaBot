import { Collection, ApplicationCommandSubGroupData, ApplicationCommandSubCommandData } from 'discord.js';
import { SubCommand } from '../Interfaces';
export declare function createSubCommandsWithCategories(subCommandsList: Collection<string, SubCommand>): Array<ApplicationCommandSubGroupData>;
export declare function createSubCommands(subCommandsList: Collection<string, SubCommand>): Array<ApplicationCommandSubCommandData>;
export declare function getSubcommands(Commands: Array<SubCommand>): Collection<string, SubCommand>;
//# sourceMappingURL=Slash.d.ts.map