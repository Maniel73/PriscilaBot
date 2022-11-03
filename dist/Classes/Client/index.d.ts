import { Client, Collection } from 'discord.js';
import { Command } from '../../Interfaces';
declare class ExtendedClient extends Client {
    private _version;
    private _commands;
    private discordToken;
    private _db;
    get version(): string;
    get commands(): Collection<string, Command>;
    init(): Promise<void>;
    getCommand(name: string): Command | null;
    loadCommands(): void;
    private loadEvents;
    getDB(key: string): Promise<any>;
    setDB(key: string, value: any): Promise<boolean>;
}
export default ExtendedClient;
//# sourceMappingURL=index.d.ts.map