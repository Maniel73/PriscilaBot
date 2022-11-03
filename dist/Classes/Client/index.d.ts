import { Client, Collection } from 'discord.js';
import { Db } from 'mongodb';
import { Command } from '../../Interfaces';
declare class ExtendedClient extends Client {
    private _version;
    private _commands;
    private discordToken;
    private mongoClient;
    private _db?;
    get version(): string;
    get commands(): Collection<string, Command>;
    get db(): Db;
    init(): Promise<void>;
    getCommand(name: string): Command | null;
    loadCommands(): void;
    private loadEvents;
    private startDB;
}
export default ExtendedClient;
//# sourceMappingURL=index.d.ts.map