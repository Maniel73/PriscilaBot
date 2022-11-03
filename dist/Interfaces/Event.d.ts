import { ClientEvents } from 'discord.js';
interface Run {
    (...args: any[]): Promise<void>;
}
export interface Event {
    name: keyof ClientEvents;
    once: boolean;
    run: Run;
}
export {};
//# sourceMappingURL=Event.d.ts.map